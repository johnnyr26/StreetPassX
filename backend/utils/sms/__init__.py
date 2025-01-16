import os
from dotenv import load_dotenv

# random number for verification
from random import randint

# importing twilio 
from twilio.rest import Client # type: ignore

load_dotenv()
  
# Twilio credentials
ACCOUNT_SID = os.environ['TWILIO_ACCOUNT_SID']
AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
TWILIO_PHONE_NUMBER = os.environ['TWILIO_PHONE_NUMBER']
  
client = Client(ACCOUNT_SID, AUTH_TOKEN) 

def _send_sms(phone_number: str, message: str):  
    try:
        # Sends an sms message to the member
        client.messages.create( 
            from_=TWILIO_PHONE_NUMBER,
            body=message, 
            to=phone_number
        )
    except Exception as ex:
        print(ex)
        raise Exception(ex)

def send_sms_verification_message(phone_number: str) -> int:
    # random number used for phone number verification.
    random_number = randint(000000, 999999)

    # text message for the phone 
    message = f"Use {random_number} as verification for StreetPassX."
    _send_sms(phone_number, message)

    return random_number
