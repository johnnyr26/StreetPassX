from user import User
from ....db import get_database

db = get_database()

users = db.users

# Fetches all users
def get_users():
   return list(users.find({}, {'_id': 0}))

# fetches user by email
def get_user_by_email(email: str) -> User | None:
   raw_user = users.find_one({"email": email})
   if raw_user:
      return User(**raw_user)

# creates a new user
def create_user(user: User):
   try:
      users.insert_one(user.to_json())
   except Exception as ex:
      print(f"An error occured while attempting to create a new user: {ex}")
