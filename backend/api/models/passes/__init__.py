from fastapi.encoders import jsonable_encoder

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field
from enum import Enum

from ..user import User

class PassStatus(Enum):
    # user accepts trade request, has not completed exchange
    accepted = "accepted"
    completed = "completed"
    pending = "pending"
    deleted = "deleted"

class Pass(BaseModel):
    created_user: User = Field()
    accepted_user: Optional[User] = None
    trade_for: str = Field()
    trade_for_date: Optional[datetime] = None
    trade_away: str = Field()
    trade_away_date: Optional[datetime] = None
    guests: Optional[str] = ""
    trade_status: PassStatus = PassStatus.pending
    creation_date: datetime

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)



