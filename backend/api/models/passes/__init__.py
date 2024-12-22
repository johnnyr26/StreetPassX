from fastapi.encoders import jsonable_encoder
from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from bson import ObjectId

from backend.api.models.user import User
from backend.api.models.status import Status

class Pass(BaseModel):
    _id: ObjectId
    user: Optional[User]
    event: Optional[str]
    date: Optional[datetime] = None
    guests: Optional[str] = ""
    pass_status: Status = Status.pending
    creation_date: Optional[datetime]
    completion_date: Optional[datetime] = None

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)
    
    def get_id(self):
        return self._id
    
    def set_id(self, _id: ObjectId):
        self._id = _id



