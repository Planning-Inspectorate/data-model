# generated by datamodel-codegen:
#   filename:  employee.schema.json
#   timestamp: 2024-03-28T10:15:45+00:00

from __future__ import annotations

from pydantic import BaseModel


class Employee(BaseModel):
    """
    Employee schema
    """

    id: str
    firstName: str
    lastName: str
