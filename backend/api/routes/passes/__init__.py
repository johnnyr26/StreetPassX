from flask import Blueprint, jsonify, request
from backend.db import get_passes, create_pass
from backend.api.models.passes import Pass
from datetime import datetime
passes = Blueprint('passes', __name__, url_prefix='/passes')

@passes.route('/', methods=['GET'])
def api_get_passes():
    passes = get_passes()
    return jsonify(passes)

@passes.route('/create_pass', methods=['POST'])
def api_create_pass():
    raw_pass = request.get_json()
    
    raw_pass['creation_date'] = datetime.now()

    new_pass = Pass(**raw_pass)
    create_pass(new_pass)

    return new_pass.to_json()
