from backend.api.models.member import Member
from backend.db import get_database

db = get_database()

members = db.members

# Fetches all members
def get_members():
   return list(members.find({}, {'_id': 0}))

# fetches member by phone number
def get_member_by_phone_number(phone_number: str) -> Member | None:
   raw_member = members.find_one({"phone_number": phone_number})
   if raw_member:
      return Member(**raw_member)

# creates a new member
def create_member(member: Member):
   try:
      members.insert_one(member.to_json())
   except Exception as ex:
      print(f"An error occured while attempting to create a new member: {ex}")
