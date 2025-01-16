from flask import Blueprint, jsonify, request
from ...models.member.functions import get_members, create_member
from ...models.member import Member

members = Blueprint('member', __name__, url_prefix='/Member')

@members.route('/', methods=['GET'])
def api_get_Members():
    passes = get_members()
    return jsonify(passes)

@members.route('/create_Member', methods=['POST'])
def api_create_member():
    raw_member = request.get_json()
    new_member = Member(**raw_member)
    create_member(new_member)

    return new_member.to_json()