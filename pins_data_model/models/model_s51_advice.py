# generated by datamodel-codegen:
#   filename:  s51-advice.schema.json
#   timestamp: 2024-05-20T08:15:45+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, ConfigDict, Field


class Method(Enum):
    """
    How the enquiry was made
    """

    phone = "phone"
    email = "email"
    meeting = "meeting"
    post = "post"
    NoneType_None = None


class Status(Enum):
    checked = "checked"
    unchecked = "unchecked"
    readytopublish = "readytopublish"
    published = "published"
    donotpublish = "donotpublish"
    NoneType_None = None


class RedactionStatus(Enum):
    unredacted = "unredacted"
    redacted = "redacted"
    NoneType_None = None


class S51Advice(BaseModel):
    """
    Section 51 Advice schema
    """

    model_config = ConfigDict(
        extra="allow",
    )
    adviceId: int = Field(..., examples=[1234])
    adviceReference: str = Field(..., examples=["TR0200007-0005"])
    caseId: int | None = Field(..., examples=[1234])
    caseReference: str | None = Field(..., examples=["BC0110002"])
    title: str = Field(
        ...,
        examples=[
            "Advice following issue of decision to accept the application for examination"
        ],
    )
    """
    Title of the advice
    """
    titleWelsh: str | None = None
    """
    Title of the advice in Welsh
    """
    from_: str | None = Field(..., alias="from")
    """
    Who the enquiry is from
    """
    agent: str | None = None
    """
    Who the enquiry is on behalf of
    """
    method: Method
    """
    How the enquiry was made
    """
    enquiryDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date the enquiry was made
    """
    enquiryDetails: str | None = None
    """
    Details of the enquiry
    """
    enquiryDetailsWelsh: str | None = None
    """
    Details of the enquiry in Welsh
    """
    adviceGivenBy: str | None = None
    """
    Who issued the advice
    """
    adviceDate: AwareDatetime | None = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    Date the advice was given
    """
    adviceDetails: str | None = None
    """
    Details of the advice
    """
    adviceDetailsWelsh: str | None = None
    """
    Details of the advice in Welsh
    """
    status: Status
    redactionStatus: RedactionStatus
    attachmentIds: list[str]
