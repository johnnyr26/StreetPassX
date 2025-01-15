from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field

class Member(BaseModel):
    name: object = Field()
    phone_number: object = Field()

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)
    