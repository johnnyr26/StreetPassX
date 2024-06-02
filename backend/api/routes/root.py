from flask import jsonify, Blueprint
from backend.db import get_passes

root = Blueprint('api', __name__, '/api')

@root.route('/', methods=['GET'])
def health_check():
    return jsonify(msg='Server is healthy.')

@root.route('/passes', methods=['GET'])
def api_get_passes():
    passes = get_passes()
    return jsonify(str(passes[0]))