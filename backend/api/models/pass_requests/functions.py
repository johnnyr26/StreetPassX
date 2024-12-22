from backend.api.models.pass_requests import PassRequest
from backend.api.models.status import Status
from backend.db import get_database
from backend.utils.exceptions import PassRequestNotFoundException

# external imports
from bson import json_util, ObjectId
import json

db = get_database()
pass_requests = db['pass_requests']

def get_pass_requests():
   raw_pass_requests = pass_requests.find({'pass_status': 'pending'})
   return json.loads(json_util.dumps(raw_pass_requests))

def get_pass_request_by_id(_id: str) -> PassRequest:
   curr_pass_request = pass_requests.find_one({'_id': ObjectId(_id)})
   if curr_pass_request is None:
      raise PassRequestNotFoundException(_id)
   
   pass_request = PassRequest(**curr_pass_request) # type: ignore
   pass_request.set_id(ObjectId(_id))

   return pass_request

def create_pass_request(pass_request: PassRequest):
   try:
      response = pass_requests.insert_one(pass_request.to_json())
      pass_request.set_id(response.inserted_id)
   except Exception as ex:
      print(f"An error occured while attempting to create a pass request: {ex}")

def complete_pass_request(pass_request: PassRequest):
   try:
      pass_requests.update_one({"_id": pass_request.get_id()}, {"$set": {
         "pass_status": "completed"
      }})
   except Exception as ex:
      print(f"An error occured while attempting to mark a pass request as completed: {ex}")
