# generated by datamodel-codegen:
#   filename:  appeal-event.schema.json
#   timestamp: 2025-01-22T11:51:29+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, ConfigDict, Field


class EventType(Enum):
    """
    The type of event
    """

    site_visit_access_required = "site_visit_access_required"
    site_visit_accompanied = "site_visit_accompanied"
    site_visit_unaccompanied = "site_visit_unaccompanied"
    hearing = "hearing"
    hearing_virtual = "hearing_virtual"
    inquiry = "inquiry"
    inquiry_virtual = "inquiry_virtual"
    in_house = "in_house"
    pre_inquiry = "pre_inquiry"
    pre_inquiry_virtual = "pre_inquiry_virtual"


class EventStatus(Enum):
    """
    Status of the event
    """

    withdrawn = "withdrawn"
    in_abeyance = "in_abeyance"
    change_of_procedure = "change_of_procedure"
    new_rescheduled = "new_rescheduled"
    confirmed = "confirmed"
    link_to_enforcement = "link_to_enforcement"
    offered = "offered"
    postponed = "postponed"


class AppealEvent(BaseModel):
    """
    Schema defining the metadata for appeal events, such as site visits, inquiries, hearings
    """

    model_config = ConfigDict(
        extra="allow",
    )
    eventId: str = Field(..., examples=["7000000-1"])
    """
    The unique identifier for the event
    """
    caseReference: str = Field(..., examples=["7002471"])
    """
    External case identifier
    """
    eventType: EventType
    """
    The type of event
    """
    eventName: str | None = Field(..., examples=["A site visit"])
    """
    An optional description / name for the event
    """
    eventStatus: EventStatus
    """
    Status of the event
    """
    isUrgent: bool
    """
    Indicates if the event is urgent
    """
    eventPublished: bool | None = None
    """
    Indicates if the event has been published
    """
    eventStartDateTime: AwareDatetime = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Event start date and time
    """
    eventEndDateTime: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Event end date and time
    """
    notificationOfSiteVisit: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date third-parties were informed of the site visit event
    """
    addressLine1: str = Field(..., examples=["96 The Avenue"])
    """
    First line of address for the event site
    """
    addressLine2: str | None = None
    """
    Second line of address for the event site
    """
    addressTown: str = Field(..., examples=["Maidstone"])
    """
    Town / City of the event address
    """
    addressCounty: str | None = Field(..., examples=["Kent"])
    """
    County of the event address
    """
    addressPostcode: str = Field(..., examples=["MD21 5XY"])
    """
    Postal code of the event address
    """
