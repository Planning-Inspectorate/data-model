# generated by datamodel-codegen:
#   filename:  service-user.schema.json
#   timestamp: 2025-02-18T12:18:50+00:00

from __future__ import annotations

from enum import Enum

from pydantic import BaseModel, ConfigDict, Field


class ServiceUserType(Enum):
    """
    Type or category of the service user.
    """

    Applicant = "Applicant"
    Appellant = "Appellant"
    Agent = "Agent"
    Rule6Party = "Rule6Party"
    InterestedParty = "InterestedParty"
    RepresentationContact = "RepresentationContact"
    Subscriber = "Subscriber"


class ServiceUser(BaseModel):
    """
    Service User of the planning inspectorate. Also contains role information by combining serviceUserType and caseReference.
    """

    model_config = ConfigDict(
        extra="allow",
    )
    id: str = Field(..., examples=["12345"])
    """
    A unique identifier for the entity.
    """
    salutation: str | None = Field(..., examples=["Mr"])
    """
    A formal greeting, e.g., Mr, Mrs, Ms.
    """
    firstName: str | None = Field(..., examples=["John"])
    """
    The first name of the individual.
    """
    lastName: str | None = Field(..., examples=["Doe"])
    """
    The last name of the individual.
    """
    addressLine1: str | None = Field(..., examples=["123 Elm Street"])
    """
    The first line of the address.
    """
    addressLine2: str | None = Field(..., examples=["Apt 4B"])
    """
    The second line of the address, usually includes suite or apartment number.
    """
    addressTown: str | None = Field(..., examples=["Springfield"])
    """
    The town or city of the address.
    """
    addressCounty: str | None = Field(..., examples=["Hampshire"])
    """
    The county in which the town or city is located.
    """
    postcode: str | None = Field(..., examples=["M12 4AF"])
    """
    The postal code for the address.
    """
    addressCountry: str | None = Field(..., examples=["United Kingdom"])
    """
    The country of the address.
    """
    organisation: str | None = Field(..., examples=["Tech Corp"])
    """
    The name of the organisation associated with the individual.
    """
    organisationType: str | None = Field(..., examples=["Private Company"])
    """
    The type or nature of the organisation.
    """
    role: str | None = Field(..., examples=["Agent"])
    """
    The individual's role or position within the organisation.
    """
    telephoneNumber: str | None = Field(..., examples=["+447123456789"])
    """
    The primary telephone contact number.
    """
    otherPhoneNumber: str | None = Field(..., examples=["+447123456789"])
    """
    An alternate or secondary phone number.
    """
    faxNumber: str | None = Field(..., examples=["+447123456789"])
    """
    A fax contact number.
    """
    emailAddress: str | None = Field(..., examples=["john.doe@example.com"])
    """
    The primary email address for contact.
    """
    webAddress: str | None = Field(..., examples=["https://www.example.com"])
    """
    Website address or URL.
    """
    serviceUserType: ServiceUserType
    """
    Type or category of the service user.
    """
    caseReference: str = Field(..., examples=["BC0510001"])
    """
    Reference number for a particular case or incident.
    """
    sourceSystem: str = Field(..., examples=["ODT", "Horizon"])
    """
    The originating system from where the data was sourced.
    """
    sourceSuid: str = Field(..., examples=["12345"])
    """
    Unique identifier from the source system.
    """
