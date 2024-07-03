# generated by datamodel-codegen:
#   filename:  employee.schema.json
#   timestamp: 2024-07-02T12:56:09+00:00

from __future__ import annotations

from pydantic import BaseModel, ConfigDict


class Employee(BaseModel):
    """
    Employee schema
    """

    model_config = ConfigDict(
        extra="allow",
    )
    id: str
    firstName: str
    lastName: str
