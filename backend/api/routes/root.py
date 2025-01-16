# external imports
from flask import Blueprint, jsonify, request, session

# internal imports
from backend.api.models.member import Member
from backend.api.models.member.functions import create_member, get_member_by_phone_number
from backend.utils.sms import send_sms_verification_message
from backend.utils.exceptions.http import HttpBadRequest

root = Blueprint('api', __name__, url_prefix='/')

@root.route('/', methods=['GET'])
def health_check():
    return jsonify(msg='Server is healthy.')

@root.route('/login', methods=['POST'])
def api_login():
    try:
        # check if the Member is in the session
        if 'member' in session:
            return session['member']
        return {"error": "Member is not authenticated"}, 401
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
        member = get_member_by_phone_number(phone_number)
        if member is None:
            member = Member(
                name=raw_signup['name'],
                phone_number=phone_number
            )

            # create the Member in the database
            create_member(member)

        # sends sms verification message to Member
        # send_sms_verification_message(phone_number)

        # add Member to the session
        session['member'] = member.to_json()

        return member.to_json()
    except HttpBadRequest as ex:
        print(ex)
        return HttpBadRequest(ex)
    
@root.route('/logout', methods=['POST'])
def api_logout():
    session.clear()
    return {"success": "true"}