from flask import Flask

def register_routes(app: Flask):
    from .root import root
    from .passes import passes
    from .users import user
    from .pass_requests import pass_requests
    from .signup import signup

    app.register_blueprint(root)
    app.register_blueprint(passes)
    app.register_blueprint(pass_requests)
    app.register_blueprint(signup)
    app.register_blueprint(user)
    
