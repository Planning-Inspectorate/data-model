# generated by datamodel-codegen:
#   filename:  nsip-exam-timetable.schema.json
#   timestamp: 2024-03-21T11:17:31+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, Field


class Type(Enum):
    """
    Compulsory Acquisition Hearing/Deadline/Issue Specific Hearing etc
    """

    Accompanied_Site_Inspection = "Accompanied Site Inspection"
    Compulsory_Acquisition_Hearing = "Compulsory Acquisition Hearing"
    Deadline = "Deadline"
    Deadline_For_Close_Of_Examination = "Deadline For Close Of Examination"
    Issued_By = "Issued By"
    Issue_Specific_Hearing = "Issue Specific Hearing"
    Open_Floor_Hearing = "Open Floor Hearing"
    Other_Meeting = "Other Meeting"
    Preliminary_Meeting = "Preliminary Meeting"
    Procedural_Deadline__Pre_Examination_ = "Procedural Deadline (Pre-Examination)"
    Procedural_Decision = "Procedural Decision"
    Publication_Of = "Publication Of"


class LineItem(BaseModel):
    description: str


class Event(BaseModel):
    eventId: int
    """
    Event Identifier
    """
    type: Type
    """
    Compulsory Acquisition Hearing/Deadline/Issue Specific Hearing etc
    """
    eventTitle: str
    """
    Title Of Examination Timetable Event
    """
    description: str
    eventDeadlineStartDate: AwareDatetime | None = Field(
        None, examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Optional start date for event window
    """
    date: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    Event Date = effective deadline (end) date
    """
    eventLineItems: list[LineItem]


class ExaminationTimetable(BaseModel):
    """
    Examination Timetable for an NSIP Project
    """

    caseReference: str
    """
    Unique string reference of the associated Case
    """
    events: list[Event]
