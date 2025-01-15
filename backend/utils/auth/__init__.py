from functools import wraps
from flask import session
from backend.utils.exceptions import MemberNotAuthenticatedException

from typing import Callable, Any
from flask import Response

def auth_required(func: Callable[..., Any]) -> Callable[..., Any]:
    @wraps(func)
    def decorated_function(*args: Any, **kwargs: Any) -> Response:
        if 'Member' not in session:
            raise MemberNotAuthenticatedException()
        return func(*args, **kwargs)
    return decorated_function