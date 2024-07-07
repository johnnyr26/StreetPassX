from flask import Flask

def register_routes(app: Flask):
    from .root import root
    from .passes import passes
    from .users import user

    app.register_blueprint(root)
    app.register_blueprint(passes)
    app.register_blueprint(user)
