from flask import Blueprint, jsonify, request
from backend.db import get_users, create_user
from backend.api.models.user import User

user = Blueprint('user', __name__, url_prefix='/user')

@user.route('/', methods=['GET'])
def api_get_users():
    passes = get_users()
    return jsonify(passes)

@user.route('/create_user', methods=['POST'])
def api_create_user():
    raw_user = request.get_json()
    new_user = User(**raw_user)
    create_user(new_user)

    return new_user.to_json()
