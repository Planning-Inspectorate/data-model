# generated by datamodel-codegen:
#   filename:  s51-advice.schema.json
#   timestamp: 2024-01-12T17:18:50+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, Field


class Method(Enum):
    """
    How the enquiry was made
    """

    phone = "phone"
    email = "email"
    meeting = "meeting"
    post = "post"


class Status(Enum):
    checked = "checked"
    unchecked = "unchecked"
    readytopublish = "readytopublish"
    published = "published"
    donotpublish = "donotpublish"


class RedactionStatus(Enum):
    unredacted = "unredacted"
    redacted = "redacted"


class S51Advice(BaseModel):
    adviceId: int = Field(..., examples=[1234])
    adviceReference: str = Field(..., examples=["TR0200007-0005"])
    caseId: int | None = Field(None, examples=[1234])
    caseReference: str | None = Field(None, examples=["BC0110002"])
    title: str = Field(
        ...,
        examples=[
            "Advice following issue of decision to accept the application for examination"
        ],
    )
    """
    Title of the advice
    """
    from_: str = Field(..., alias="from")
    """
    Who the enquiry is from
    """
    agent: str
    """
    Who the enquiry is on behalf of
    """
    method: Method
    """
    How the enquiry was made
    """
    enquiryDate: AwareDatetime | None = Field(
        None, examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date the enquiry was made
    """
    enquiryDetails: str | None = None
    """
    Details of the enquiry
    """
    adviceGivenBy: str | None = None
    """
    Who issued the advice
    """
    adviceDate: AwareDatetime | None = Field(
        None, examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date the advice was given
    """
    adviceDetails: str | None = None
    """
    Details of the advice
    """
    status: Status | None = None
    redactionStatus: RedactionStatus | None = None
    attachmentIds: list[str] | None = None
