from functools import wraps
from flask import session
from utils.exceptions import UserNotAuthenticatedException

from typing import Callable, Any
from flask import Response

def auth_required(func: Callable[..., Response]) -> Callable[..., Response]:
    @wraps(func)
    def decorated_function(*args: Any, **kwargs: Any) -> Response:
        if 'user' not in session:
            raise UserNotAuthenticatedException()
        return func(*args, **kwargs)
    return decorated_function