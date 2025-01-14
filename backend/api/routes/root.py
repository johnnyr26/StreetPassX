# external imports
from flask import Blueprint, jsonify, request, session

# internal imports
from backend.api.models.user import User
from backend.api.models.user.functions import create_user, get_user_by_phone_number
from backend.utils.sms import send_sms_verification_message
from backend.utils.exceptions.http import HttpBadRequest

root = Blueprint('api', __name__, url_prefix='/')

@root.route('/', methods=['GET'])
def health_check():
    return jsonify(msg='Server is healthy.')

@root.route('/login', methods=['POST'])
def api_login():
    try:
        # check if the user is in the session
        if 'user' in session:
            return session['user']
        return {"error": "user is not authenticated"}, 401
    except Exception as ex:
        print(ex)
        raise Exception(ex)

@root.route('/signup', methods=['POST'])
def api_signup():
    try:
        raw_signup = request.get_json()
        if raw_signup is None:
            raise HttpBadRequest("Request body not found.")
        phone_number = raw_signup['phone_number']
        user = get_user_by_phone_number(phone_number)
        if user is None:
            user = User(
                name=raw_signup['name'],
                phone_number=phone_number
            )

            # create the user in the database
            create_user(user)

        # sends sms verification message to user
        # send_sms_verification_message(phone_number)

        # add user to the session
        session['user'] = user.to_json()

        return user.to_json()
    except HttpBadRequest as ex:
        print(ex)
        return HttpBadRequest(ex)
    
@root.route('/logout', methods=['POST'])
def api_logout():
    session.clear()
    return {"success": "true"}