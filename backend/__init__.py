import os
from dotenv import load_dotenv
from flask import Flask
from backend.api.routes import register_routes

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.secret_key = os.environ['SECRET_KEY']
    register_routes(app)

    return app
