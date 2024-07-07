import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

def get_database():
   CONNECTION_STRING = os.environ['MONGODB_CONNECTION_STRING']
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client: MongoClient[dict[str, object]] = MongoClient(CONNECTION_STRING)
 
   # Returns the database
   return client[os.environ['DATABASE']]
