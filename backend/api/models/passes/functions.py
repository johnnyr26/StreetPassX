from ..passes import Pass
from ....db import get_database

db = get_database()
passes = db['passes']

# Fetches all of the passes created without the _id field
def get_passes():
   return list(passes.find({}, {'_id': 0}))

# creates a new pass
def create_pass(new_pass: Pass):
   try:
      passes.insert_one(new_pass.to_json())
   except Exception as ex:
      print(f"An error occured while attempting to create a new pass: {ex}")
