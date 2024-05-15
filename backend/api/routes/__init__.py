from flask import Flask

def register_routes(app: Flask):
    from .root import root

    app.register_blueprint(root)
