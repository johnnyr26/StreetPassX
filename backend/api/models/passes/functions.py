from backend.api.models.passes import Pass
from backend.db import get_database
from backend.utils.exceptions import PassNotFoundException

db = get_database()
passes = db['passes']

# Fetches all of the passes created without the _id field
def get_passes():
   return list(passes.find({}, {'_id': 0}))

# Fetches all pending passes
def get_pending_passes():
   return list(passes.find({"pass_status": "pending"}, {"_id": 0}))

# Fetch pass from id
def get_pass_by_id(_id: str) -> Pass:
   curr_pass = passes.find_one({'_id': _id})
   if curr_pass is None:
      raise PassNotFoundException(_id)
   return Pass(**curr_pass) # type: ignore

# creates a new pass
def create_pass(new_pass: Pass):
   try:
      passes.insert_one(new_pass.to_json())
   except Exception as ex:
      print(f"An error occured while attempting to create a new pass: {ex}")

# updates a pass
def update_pass(curr_pass: Pass):
   try:
      passes.update_one({'_id': curr_pass.get_id()}, { '$set': curr_pass.to_json() })
   except Exception as ex:
      print(f"An error occured while attempting to create a new pass: {ex}")
