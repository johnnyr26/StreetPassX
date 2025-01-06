# external imports
from flask import Blueprint, jsonify, request, session

# internal imports
from backend.api.models.user import User
from backend.api.models.user.functions import create_user
from backend.utils.exceptions.http import HttpBadRequest

root = Blueprint('api', __name__, url_prefix='/')

@root.route('/', methods=['GET'])
def health_check():
    return jsonify(msg='Server is healthy.')

@root.route('/signup', methods=['POST'])
def api_signup():
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

        # add user to the session
        session['user'] = user.to_json()

        return user.to_json()
    except HttpBadRequest as ex:
        print(ex)
        return HttpBadRequest(ex)
    
@root.route('/logout', methods=['POST'])
def api_logout():
    print("HELLO")
    session.clear()
    return {"success": "true"}