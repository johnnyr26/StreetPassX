from typing import Optional

class UserNotFoundException(Exception):
    def __init__(
            self, 
            _id: Optional[str] = None, 
            name: Optional[str]= None, 
            email: Optional[str] = None
        ):
        if _id:
            message = f"User with _id:{_id} could not be found."
            super().__init__(message)
        if name:
            message = f"User with name:{name} could not be found."
            super().__init__(message)
        if email:
            message = f"User with email:{email} could not be found."
            super().__init__(message)

class PassNotFoundException(Exception):
    def __init__(
        self, 
        _id: Optional[str] = None
    ):
        if _id:
            message = f"Pass with _id:{_id} could not be found."
            super().__init__(message)

class InvalidPassException(Exception):
    def __init__(
        self, 
        message: Optional[str] = None
    ):
        if message:
            super().__init__(message)

class PassRequestNotFoundException(Exception):
    def __init__(
            self,
            _id: Optional[str] = None
    ):
        if _id:
            message = f"Pass request with _id:{_id} could not be found."
            super().__init__(message)