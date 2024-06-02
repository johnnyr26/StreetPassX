from typing import Optional
from pydantic import BaseModel, Field
from datetime import date
from enum import Enum

from user import User

class SpotTradeRequestStatus(Enum):
    accepted = "accepted"
    pending = "pending"
    deleted = "deleted"

class SpotStatus():
    offered_user_completed: bool = Field(default=False)
    accepted_user_completed: bool = Field(default=False)


class Spot(BaseModel):
    user: str = Field()
    trade_for: str = Field()
    trade_for_date: Optional[date]
    trade_away: str = Field()
    trade_away_date: Optional[date]
    additional_note: Optional[str]

    trade_status: SpotTradeRequestStatus
    accepted_user: Optional[User]

    spot_status: SpotStatus



