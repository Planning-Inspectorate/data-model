# generated by datamodel-codegen:
#   filename:  nsip-representation.schema.json
#   timestamp: 2024-05-20T09:28:11+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, ConfigDict, Field


class Status(Enum):
    awaiting_review = "awaiting_review"
    referred = "referred"
    valid = "valid"
    invalid = "invalid"
    published = "published"
    archived = "archived"
    draft = "draft"
    withdrawn = "withdrawn"
    NoneType_None = None


class RepresentationFrom(Enum):
    PERSON = "PERSON"
    ORGANISATION = "ORGANISATION"
    AGENT = "AGENT"
    NoneType_None = None


class RegisterFor(Enum):
    PERSON = "PERSON"
    ORGANISATION = "ORGANISATION"
    FAMILY_GROUP = "FAMILY_GROUP"
    NoneType_None = None


class RepresentationType(Enum):
    Local_Authorities = "Local Authorities"
    Parish_Councils = "Parish Councils"
    Members_of_the_Public_Businesses = "Members of the Public/Businesses"
    Public___Businesses = "Public & Businesses"
    Statutory_Consultees = "Statutory Consultees"
    Non_Statutory_Organisations = "Non-Statutory Organisations"
    Another_Individual = "Another Individual"
    NoneType_None = None


class Representation(BaseModel):
    """
    NSIP Representation schema
    """

    model_config = ConfigDict(
        extra="allow",
    )
    representationId: int
    referenceId: str | None = Field(..., examples=["TR043003-000010"])
    examinationLibraryRef: str | None = Field(..., examples=["RR-0001"])
    caseRef: str
    caseId: int | None = Field(..., examples=[1242])
    """
    The unique identifier within the Back Office. This is not the same as the case reference
    """
    status: Status
    originalRepresentation: str
    redacted: bool | None = None
    redactedRepresentation: str | None = None
    redactedBy: str | None = Field(..., examples=["Joe Blogs"])
    redactedNotes: str | None = Field(..., examples=["Removed names of family members"])
    representationFrom: RepresentationFrom
    representedId: str
    """
    ServiceUser Id of the person or organisation being represented
    """
    representativeId: str | None = None
    """
    ServiceUser Id of the person or organisation submitting representation in the case of Agent representationFrom
    """
    registerFor: RegisterFor
    representationType: RepresentationType
    dateReceived: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    attachmentIds: list[str]
