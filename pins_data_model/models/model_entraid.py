# generated by datamodel-codegen:
#   filename:  entraid.schema.json
#   timestamp: 2024-07-25T10:48:51+00:00

from __future__ import annotations

from pydantic import BaseModel, ConfigDict


class EntraIdUserObjects(BaseModel):
    """
    A list of users from EntraID
    """

    model_config = ConfigDict(
        extra="allow",
    )
    employeeId: int
    """
    The employee's unique identifier
    """
    id: str
    """
    The unique identifier within the EntraID
    """
    givenName: str
    """
    The employee's given name
    """
    surname: str
    """
    The employee's surname
    """
    userPrincipalName: str
    """
    The employee's email address
    """
