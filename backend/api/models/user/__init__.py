from typing import Optional
from pydantic import BaseModel, Field

from spot import Spot

class User(BaseModel):
    name: str = Field()
    email: str = Field()

    passes: Optional[list[Spot]]

    