import os
from dotenv import load_dotenv
from flask import Flask, jsonify
from backend.api.routes import register_routes
from backend.utils.exceptions import MemberNotAuthenticatedException
load_dotenv()

def create_app():
    app = Flask(__name__)
    app.secret_key = os.environ['SECRET_KEY']
    register_routes(app)

    # Error handler for when Members are not authenticated
    def handle_unauthorized_error(e: MemberNotAuthenticatedException):
        response = jsonify({"error": str(e)})
        response.status_code = 401
        return response

    app.register_error_handler(MemberNotAuthenticatedException, handle_unauthorized_error)

    return app
