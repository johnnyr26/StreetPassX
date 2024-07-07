from fastapi.encoders import jsonable_encoder

from typing import Optional
from pydantic import BaseModel, Field
from datetime import date
from enum import Enum

from backend.api.models.user import User

class PassStatus(Enum):
    # user accepts trade request, has not completed exchange
    accepted = "accepted"
    completed = "completed"
    pending = "pending"
    deleted = "deleted"

class Pass(BaseModel):
    created_user: User = Field()
    accepted_user: Optional[User]
    trade_for: str = Field()
    trade_for_date: Optional[date]
    trade_away: str = Field()
    trade_away_date: Optional[date]
    guests: Optional[str]
    trade_status: PassStatus
    creation_date: date

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)

    def to_bson(self):
        data = self.model_dump(by_alias=True, exclude_none=True)
        if "_id" in data and data["_id"] is None:
            data.pop("_id")
        return data



