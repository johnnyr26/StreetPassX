from flask import Flask

def register_routes(app: Flask):
    from .root import root
    from .passes import passes
    from .members import members
    from .pass_requests import pass_requests

    app.register_blueprint(root)
    app.register_blueprint(passes)
    app.register_blueprint(pass_requests)
    app.register_blueprint(members)
    
