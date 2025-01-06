from backend.api.models.user import User
from backend.db import get_database

db = get_database()

users = db.users

# Fetches all users
def get_users():
   return list(users.find({}, {'_id': 0}))

# fetches user by phone number
def get_user_by_phone_number(phone_number: str) -> User | None:
   raw_user = users.find_one({"phone_number": phone_number})
   if raw_user:
      return User(**raw_user)

# creates a new user
def create_user(user: User):
   try:
      users.insert_one(user.to_json())
   except Exception as ex:
      print(f"An error occured while attempting to create a new user: {ex}")
