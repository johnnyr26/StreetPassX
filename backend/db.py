from pymongo import MongoClient
import os
from dotenv import load_dotenv
from backend.api.models.passes import Pass
from backend.api.models.user import User

load_dotenv()

def get_database():
   CONNECTION_STRING = os.environ['MONGODB_CONNECTION_STRING']
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client: MongoClient[dict[str, object]] = MongoClient(CONNECTION_STRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client[os.environ['DATABASE']]


db = get_database()

# Fetches all of the passes created so far
def get_passes():
   passes = list(db['passes'].find({}, {'_id': 0}))
   return passes

def create_pass(new_pass: Pass):
   passes = db['passes']
   passes.insert_one(new_pass.to_bson())

def get_users():
   users = list(db['users'].find({}, {'_id': 0}))
   return users

def create_user(user: User):
   passes = db['users']
   passes.insert_one(user.to_bson())