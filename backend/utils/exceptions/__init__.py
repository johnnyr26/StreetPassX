from typing import Optional

class UserNotFoundException(Exception):
    def __init__(
            self, 
            _id: Optional[str] = None, 
            name: Optional[str]= None, 
            email: Optional[str] = None
        ):
        if _id:
            message = f"User with _id:{_id} cannot be found."
            super().__init__(message)
        if name:
            message = f"User with name:{name} cannot be found."
            super().__init__(message)
        if email:
            message = f"User with email:{email} cannot be found."
            super().__init__(message)