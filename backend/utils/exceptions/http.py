from flask import Response

from werkzeug.exceptions import (
    BadRequest,
    InternalServerError,
)
from typing import Optional, Union

class HttpBadRequest(BadRequest):
    def __init__(
        self,
        exception: Optional[Union[Exception, str]] = None,
        response: Optional["Response"] = None,
    ) -> None:
        super().__init__(str(exception), response)

class HttpInternalServerError(InternalServerError):
    def __init__(
        self,
        exception: Optional[Union[Exception, str]] = None,
        response: Optional["Response"] = None,
    ) -> None:
        super().__init__(str(exception), response)