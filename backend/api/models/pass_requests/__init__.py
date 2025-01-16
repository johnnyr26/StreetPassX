from fastapi.encoders import jsonable_encoder
from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from bson import ObjectId

from backend.api.models.member import Member
from backend.api.models.status import Status

class PassRequest(BaseModel):
    _id: ObjectId
    member: Optional[Member]
    trade_for: Optional[str]
    trade_for_date: Optional[datetime] = None
    trade_away: Optional[str]
    trade_away_date: Optional[datetime] = None
    guests: Optional[str]
    pass_status: Status = Status.pending
    creation_date: Optional[datetime]
    visible_members: Optional[list[Member]] = None

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)
    
    # gets object_id of the pass request
    def get_id(self) -> ObjectId:
        return self._id
    
    # sets _id of pass request to ObjectId
    def set_id(self, _id: ObjectId):
        self._id = _id