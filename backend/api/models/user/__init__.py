from fastapi.encoders import jsonable_encoder

# from typing import Optional
from pydantic import BaseModel, Field

# from backend.api.models.passes import Pass

class User(BaseModel):
    name: str = Field()
    email: str = Field()

    # passes: Optional[list[Pass]]
    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)

    def to_bson(self):
        data = self.model_dump(by_alias=True, exclude_none=True)
        if "_id" in data and data["_id"] is None:
            data.pop("_id")
        return data
    