# external imports
from flask import Blueprint, request, jsonify, session
from datetime import datetime

# model functions imports
from backend.api.models.passes import Pass
from backend.api.models.pass_requests import PassRequest
from backend.api.models.passes.functions import create_pass
from backend.api.models.pass_requests.functions import create_pass_request, get_pass_requests, get_pass_request_by_id, complete_pass_request
from backend.api.models.member.functions import get_member_by_phone_number

# error imports
from backend.utils.exceptions import MemberNotFoundException
from backend.utils.exceptions.http import HttpBadRequest, HttpInternalServerError
from bson import ObjectId

# auth import
from backend.utils.auth import auth_required

pass_requests = Blueprint('pass_requests', __name__, url_prefix='/pass_requests')

@pass_requests.route('/get_pass_requests', methods=['GET'])
@auth_required
def api_get_pass_requests():
    pass_requests = get_pass_requests()
    return jsonify(pass_requests)

@pass_requests.route('/create_pass_request', methods=['POST'])
@auth_required
def api_create_pass_request():
    try:
        raw_pass_request = request.get_json()
        if raw_pass_request is None:
            raise HttpBadRequest("The request is invalid.")
        
        # gets Member object from phone number
        member = get_member_by_phone_number(session['Member']['phone_number'])
        if member is None:
            raise MemberNotFoundException(phone_number=session['Member']['phone_number'])
        raw_pass_request['Member'] = member

        # use the current creation date
        raw_pass_request['creation_date'] = datetime.now()

        pass_request = PassRequest(**raw_pass_request)
        create_pass_request(pass_request)

        json_pass_request = pass_request.to_json()
        json_pass_request["_id"] = str(pass_request.get_id())

        return json_pass_request
    except HttpBadRequest as ex:
        print(ex)
        return HttpBadRequest('The request body is invalid.')
    except MemberNotFoundException as ex:
        print(ex)
        return HttpInternalServerError(ex)

@pass_requests.route('/accept_pass_request', methods=['POST'])
@auth_required
def api_accept_pass_request():
    try:
        # gets json request
        raw_pass_request = request.get_json()
        if raw_pass_request is None:
            raise HttpBadRequest()
        
        # gets pass request object from id
        pass_request = get_pass_request_by_id(_id=raw_pass_request.get('_id'))

        # gets accepted Member object from phone_number
        accepted_member = get_member_by_phone_number(session['Member']['phone_number'])
        if accepted_member is None:
            raise MemberNotFoundException(session['Member']['phone_number'])
        
        # create a new pass object for the Member who created it.
        created_member_pass = Pass(
            _id=ObjectId(),
            added_by_member=pass_request.member,
            referred_by_member=accepted_member,
            event=pass_request.trade_for,
            date=pass_request.trade_for_date,
            guests=pass_request.guests,
            creation_date=datetime.now()
        )
        create_pass(created_member_pass)

        # create another pass object in place for whoever accepts the pass exchange
        accepted_member_pass = Pass(
            _id=ObjectId(),
            added_by_member=accepted_member,
            referred_by_member=pass_request.member,
            event=pass_request.trade_away,
            date=pass_request.trade_away_date,
            guests=None,
            creation_date=datetime.now()
        )
        create_pass(accepted_member_pass)

        # mark the pass request status as completed
        pass_request = complete_pass_request(pass_request)

        # return json of the new pass
        return [created_member_pass.to_json(), accepted_member_pass.to_json()]
    except HttpBadRequest as ex:
        print(ex)
        return HttpBadRequest('The request body is invalid.')
    except MemberNotFoundException as ex:
        print(ex)
        return HttpInternalServerError(ex)
