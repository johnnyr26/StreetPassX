from flask import Blueprint, request
from backend.api.models.user import User
from backend.api.models.user.functions import create_user
from backend.utils.exceptions.http import HttpBadRequest

signup = Blueprint('signup', __name__, url_prefix="/signup")

@signup.route('/', methods=['POST'])
def api_sign_up():
    try:
        raw_signup = request.get_json()
        if raw_signup is None:
            raise HttpBadRequest("Request body not found.")
        phone_number = raw_signup['phone_number']

        user = User(
            name="Test User",
            email="abc123@princeton.edu",
            phone_number=phone_number
        )

        # create the user in the database
        create_user(user)

        return user.to_json()
    except HttpBadRequest as ex:
        print(ex)
        return HttpBadRequest(ex)