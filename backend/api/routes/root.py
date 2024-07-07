from flask import jsonify, Blueprint

root = Blueprint('api', __name__, url_prefix='/')

@root.route('/', methods=['GET'])
def health_check():
    return jsonify(msg='Server is healthy.')