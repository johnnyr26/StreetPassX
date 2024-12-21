# external imports
from flask import Blueprint, request, jsonify
from datetime import datetime

# model functions imports
from backend.api.models.status import Status
from backend.api.models.passes.functions import get_passes, get_pass_by_id, update_pass, get_pending_passes
# from backend.api.models.user.functions import get_user_by_email

# error imports
from backend.utils.exceptions import PassNotFoundException, InvalidPassException
from backend.utils.exceptions.http import HttpBadRequest, HttpInternalServerError

passes = Blueprint('passes', __name__, url_prefix='/passes')

@passes.route('/get_passes', methods=['GET'])
def api_get_passes():
    passes = get_passes()
    return jsonify(passes)

# @passes.route('/create_pass', methods=['POST'])
# def api_create_pass():
#     try:
#         # gets json request
#         raw_pass = request.get_json()
#         if raw_pass is None:
#             raise HttpBadRequest()
        
#         # gets user object from email
#         created_user = get_user_by_email(raw_pass['email'])
#         if created_user is None:
#             raise UserNotFoundException(email=raw_pass['email'])
#         raw_pass['created_user'] = created_user

#         # use the current creation date
#         raw_pass['creation_date'] = datetime.now()

#         # create a new pass object
#         new_pass = Pass(**raw_pass)
#         create_pass(new_pass)

#         # return json of the new pass
#         return new_pass.to_json()
#     except HttpBadRequest as ex:
#         print(ex)
#         return HttpBadRequest("The request body is invalid.")
#     except UserNotFoundException as ex:
#         print(ex)
#         return HttpInternalServerError(ex)
#     except Exception as ex:
#         print(ex)
#         return HttpInternalServerError(ex)

@passes.route('/get_pending_passes', methods=['GET'])
def api_get_pending_passes():
    passes = get_pending_passes()
    return jsonify(passes)
    
# @passes.route('/accept_pass', methods=['POST'])
# def api_accept_pass():
#     try:
#         # gets json request
#         raw_pass = request.get_json()
#         if raw_pass is None:
#             raise HttpBadRequest()
    
#         # gets pass from request
#         _id = raw_pass.get('_id')
#         if _id is None:
#             raise InvalidPassException('The _id field is missing.')
#         curr_pass = get_pass_by_id(_id=_id)

#         # assign accepted user to the accepted_pass_user field
#         user = get_user_by_email(email=raw_pass['email'])
#         if user is None:
#             raise UserNotFoundException(email=raw_pass['email'])
        
#         # assign missing fields to accepted pass user
#         curr_pass.user = user
#         curr_pass.creation_date = datetime.now()
#         curr_pass.pass_status = Status.accepted

#         # update the pass with the new user
#         update_pass(curr_pass)

#         return curr_pass.to_json()
#     except HttpBadRequest as ex:
#         print(ex)
#         return HttpBadRequest('The request body is invalid.')
#     except PassNotFoundException as ex:
#         print(ex)
#         return HttpInternalServerError(ex)
#     except InvalidPassException as ex:
#         print(ex)
#         return HttpInternalServerError(ex)

@passes.route('/complete_exchange', methods=['POST'])
def api_complete_exchange():
    try:
        # gets json request
        raw_pass = request.get_json()
        if raw_pass is None:
            raise HttpBadRequest()
        
        # gets pass from request
        _id = raw_pass.get('_id')
        if _id is None:
            raise InvalidPassException('The _id field is missing.')
        curr_pass = get_pass_by_id(_id=_id)

        # mark pass as completed
        curr_pass.pass_status = Status.completed
        curr_pass.completion_date = datetime.now()

        # update pass in database
        update_pass(curr_pass)

        return curr_pass.to_json()
    except HttpBadRequest as ex:
        return HttpBadRequest('The request body is invalid.')
    except PassNotFoundException as ex:
        print(ex)
        return HttpInternalServerError(ex)
    except InvalidPassException as ex:
        print(ex)
        return HttpInternalServerError(ex)
    
@passes.route('/update_guests', methods=['POST'])
def api_add_guests():
    try:
        # gets json request
        raw_pass = request.get_json()
        if raw_pass is None:
            raise HttpBadRequest()
        
        # gets pass from request
        _id = raw_pass.get('_id')
        if _id is None:
            raise InvalidPassException('The _id field is missing.')
        curr_pass = get_pass_by_id(_id=_id)

        # update guests for pass
        curr_pass.guests = raw_pass.get('guests')

        # update pass in database
        update_pass(curr_pass)

        return curr_pass.to_json()
    except HttpBadRequest as ex:
        return HttpBadRequest('The request body is invalid.')
    except PassNotFoundException as ex:
        print(ex)
        return HttpInternalServerError(ex)
    except InvalidPassException as ex:
        print(ex)
        return HttpInternalServerError(ex)

@passes.route('/cancel_pass', methods=['POSTS'])
def api_cancel_pass():
    try:
        # gets json request
        raw_pass = request.get_json()
        if raw_pass is None:
            raise HttpBadRequest('The request body for raw_pass is None')
        
        # gets pass from request
        _id = raw_pass.get('_id')
        if _id is None:
            raise InvalidPassException('The _id field is missing.')
        curr_pass = get_pass_by_id(_id=_id)

        # mark pass as deleted
        curr_pass.pass_status = Status.deleted
        curr_pass.completion_date = datetime.now()

        # update pass in database
        update_pass(curr_pass)

        return curr_pass.to_json()
    except HttpBadRequest as ex:
        return HttpBadRequest('The request body is invalid.')
    except PassNotFoundException as ex:
        print(ex)
        return HttpInternalServerError(ex)
    except InvalidPassException as ex:
        print(ex)
        return HttpInternalServerError(ex)