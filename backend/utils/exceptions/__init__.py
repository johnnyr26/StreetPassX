from typing import Optional

class MemberNotAuthenticatedException(Exception):
    def __init__(self):
        message = f"Member has not been authenticated."
        super().__init__(message)

class MemberNotFoundException(Exception):
    def __init__(
            self, 
            _id: Optional[str] = None, 
            name: Optional[str]= None, 
            phone_number: Optional[str] = None
        ):
        if _id:
            message = f"Member with _id:{_id} could not be found."
            super().__init__(message)
        if name:
            message = f"Member with name:{name} could not be found."
            super().__init__(message)
        if phone_number:
            message = f"Member with phone_number:{phone_number} could not be found."
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