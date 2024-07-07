from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field

class User(BaseModel):
    name: object = Field()
    email: object = Field()

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)
    