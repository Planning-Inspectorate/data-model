# generated by datamodel-codegen:
#   filename:  nsip-representation.schema.json
#   timestamp: 2024-01-10T16:51:21+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, Field


class Status(Enum):
    awaiting_review = "awaiting_review"
    referred = "referred"
    valid = "valid"
    invalid = "invalid"
    published = "published"
    archived = "archived"


class RepresentationFrom(Enum):
    PERSON = "PERSON"
    ORGANISATION = "ORGANISATION"
    AGENT = "AGENT"


class RegisterFor(Enum):
    PERSON = "PERSON"
    ORGANISATION = "ORGANISATION"
    FAMILY_GROUP = "FAMILY_GROUP"


class RepresentationType(Enum):
    Local_Authorities = "Local Authorities"
    Parish_Councils = "Parish Councils"
    Members_of_the_Public_Businesses = "Members of the Public/Businesses"
    Public___Businesses = "Public & Businesses"
    Statutory_Consultees = "Statutory Consultees"
    Non_Statutory_Organisations = "Non-Statutory Organisations"
    Another_Individual = "Another Individual"


class Representation(BaseModel):
    representationId: float
    referenceId: str | None = Field(None, examples=["TR043003-000010"])
    examinationLibraryRef: str | None = Field(None, examples=["RR-0001"])
    caseRef: str
    caseId: float | None = Field(None, examples=[1242])
    """
    The unique identifier within the Back Office. This is not the same as the case reference
    """
    status: Status | None = None
    originalRepresentation: str
    redacted: bool | None = None
    redactedRepresentation: str | None = None
    redactedBy: str | None = Field(None, examples=["Joe Blogs"])
    redactedNotes: str | None = Field(
        None, examples=["Removed names of family members"]
    )
    representationFrom: RepresentationFrom | None = None
    representedId: str
    """
    ServiceUser Id of the person or organisation being represented
    """
    representativeId: str | None = None
    """
    ServiceUser Id of the person or organisation submitting representation in the case of Agent representationFrom
    """
    registerFor: RegisterFor | None = None
    representationType: RepresentationType | None = None
    dateReceived: AwareDatetime = Field(..., examples=["2023-03-26T00:00:00.000"])
    attachmentIds: list[str] | None = None
