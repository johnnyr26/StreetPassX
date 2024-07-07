from flask import Blueprint, jsonify, request
from datetime import datetime
from ...models.passes import Pass
from ...models.passes.functions import get_passes, create_pass
from ...models.user.functions import get_user_by_email
from ....utils.exceptions import UserNotFoundException
from ....utils.exceptions.http import HttpBadRequest, HttpInternalServerError

passes = Blueprint('passes', __name__, url_prefix='/passes')

@passes.route('/', methods=['GET'])
def api_get_passes():
    passes = get_passes()
    return jsonify(passes)

@passes.route('/create_pass', methods=['POST'])
def api_create_pass():
    try:
        # gets json request
        raw_pass = request.get_json()
        if raw_pass is None:
            raise HttpBadRequest()
        
        # gets user object from email
        created_user = get_user_by_email(raw_pass['email'])
        if created_user is None:
            raise UserNotFoundException(email=raw_pass['email'])
        raw_pass['created_user'] = created_user

        # use the current creation date
        raw_pass['creation_date'] = datetime.now()

        # create a new pass object
        new_pass = Pass(**raw_pass)
        create_pass(new_pass)

        # return json of the new pass
        return new_pass.to_json()
    except HttpBadRequest:
        return HttpBadRequest("The request body is invalid.")
    except (UserNotFoundException, Exception) as ex:
        return HttpInternalServerError(ex)
