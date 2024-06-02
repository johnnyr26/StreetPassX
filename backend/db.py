from pymongo import MongoClient
import os
from dotenv import load_dotenv

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
   passes = db['passes'].find()
   return passes

def insert_pass(guest_pass: dict[str, object]):
   passes = db['passes']
   passes.insert_one(guest_pass)
