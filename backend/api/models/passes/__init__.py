from fastapi.encoders import jsonable_encoder
from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from bson import ObjectId

from backend.api.models.member import Member
from backend.api.models.status import Status

class Pass(BaseModel):
    _id: ObjectId
    # the Member that is adding the guest
    added_by_member: Optional[Member]
    # the Member that is referring the guest
    referred_by_member: Optional[Member]
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



