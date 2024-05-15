from flask import jsonify, Blueprint

root = Blueprint('root', __name__, '/root')

@root.route('/', methods=['GET'])
def health_check():
    return jsonify(msg='Server is healthy.')