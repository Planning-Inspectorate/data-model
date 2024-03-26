# generated by datamodel-codegen:
#   filename:  nsip-project.schema.json
#   timestamp: 2024-03-26T12:12:12+00:00

from __future__ import annotations

from enum import Enum
from typing import Any

from pydantic import AwareDatetime, BaseModel, Field


class Decision(Enum):
    """
    Decision: approved/refused/split-decision
    """

    approved = "approved"
    refused = "refused"
    split_decision = "split-decision"
    NoneType_None = None


class PublishStatus(Enum):
    published = "published"
    unpublished = "unpublished"
    NoneType_None = None


class Sector(Enum):
    """
    {Sector Abbreviation} - {Sector Display Name}
    """

    BC___Business_and_Commercial = "BC - Business and Commercial"
    EN___Energy = "EN - Energy"
    TR___Transport = "TR - Transport"
    WA___Water = "WA - Water"
    WS___Waste = "WS - Waste"
    WW___Waste_Water = "WW - Waste Water"
    NoneType_None = None


class ProjectType(Enum):
    """
    {SubSector Abbreviation} - {SubSector Display Name}
    """

    BC01___Office_Use = "BC01 - Office Use"
    BC02___Research_and_Development_of_Products_or_Processes = (
        "BC02 - Research and Development of Products or Processes"
    )
    BC03___An_Industrial_Process_or_Processes = (
        "BC03 - An Industrial Process or Processes"
    )
    BC04___Storage_or_Distribution_of_Goods = "BC04 - Storage or Distribution of Goods"
    BC05___Conferences = "BC05 - Conferences"
    BC06___Exhibitions = "BC06 - Exhibitions"
    BC07___Sport = "BC07 - Sport"
    BC08___Leisure = "BC08 - Leisure"
    BC09___Tourism = "BC09 - Tourism"
    EN01___Generating_Stations = "EN01 - Generating Stations"
    EN02___Electric_Lines = "EN02 - Electric Lines"
    EN03___Underground_Gas_Storage_Facilities = (
        "EN03 - Underground Gas Storage Facilities"
    )
    EN04___LNG_Facilities = "EN04 - LNG Facilities"
    EN05___Gas_Reception_Facilities = "EN05 - Gas Reception Facilities"
    EN06___Gas_Transporter_Pipe_lines = "EN06 - Gas Transporter Pipe-lines"
    EN07___Other_Pipe_lines = "EN07 - Other Pipe-lines"
    TR01___Highways = "TR01 - Highways"
    TR02___Airports = "TR02 - Airports"
    TR03___Harbour_Facilities = "TR03 - Harbour Facilities"
    TR04___Railways = "TR04 - Railways"
    TR05___Rail_Freight_Interchanges = "TR05 - Rail Freight Interchanges"
    WS01___Hazardous_Waste_Facilities = "WS01 - Hazardous Waste Facilities"
    WW01___Waste_Water_Treatment_Plants = "WW01 - Waste Water Treatment Plants"
    WA01___Dams_and_Reservoirs = "WA01 - Dams and Reservoirs"
    WA02___Transfer_of_Water_Resources = "WA02 - Transfer of Water Resources"
    NoneType_None = None


class SourceSystem(Enum):
    back_office_applications = "back-office-applications"
    horizon = "horizon"


class Stage(Enum):
    """
    Process stage identifier
    """

    draft = "draft"
    pre_application = "pre_application"
    acceptance = "acceptance"
    pre_examination = "pre_examination"
    examination = "examination"
    recommendation = "recommendation"
    decision = "decision"
    post_decision = "post_decision"
    withdrawn = "withdrawn"
    NoneType_None = None


class Region(Enum):
    """
    Geographical region of UK. Applications can cover multiple regions.
    """

    east_midlands = "east_midlands"
    eastern = "eastern"
    london = "london"
    north_east = "north_east"
    north_west = "north_west"
    south_east = "south_east"
    south_west = "south_west"
    wales = "wales"
    west_midlands = "west_midlands"
    yorkshire_and_the_humber = "yorkshire_and_the_humber"


class MapZoomLevel(Enum):
    """
    Resolution of pinned map. Set when co-ordinates are created.
    """

    country = "country"
    region = "region"
    county = "county"
    borough = "borough"
    district = "district"
    city = "city"
    town = "town"
    junction = "junction"
    none = "none"
    NoneType_None = None


class NsipProject(BaseModel):
    """
    Subset of Pins Data Model [Case]
    """

    caseId: int = Field(..., examples=[1242])
    """
    The unique identifier within the Back Office. This is not the same as the case reference
    """
    caseReference: str | None = Field(..., examples=["BC0510001"])
    projectName: str | None = Field(
        ..., examples=["A1 Birtley to Coal House Improvement Scheme"]
    )
    """
    Name of project
    """
    projectDescription: str | None = Field(
        ...,
        examples=[
            "The scheme is 6.5 km in length and will consist of online widening of the A1 south of Gateshead to four lanes between junction 65"
        ],
    )
    decision: Decision
    """
    Decision: approved/refused/split-decision
    """
    publishStatus: PublishStatus
    sector: Sector
    """
    {Sector Abbreviation} - {Sector Display Name}
    """
    projectType: ProjectType
    """
    {SubSector Abbreviation} - {SubSector Display Name}
    """
    sourceSystem: SourceSystem
    stage: Stage
    """
    Process stage identifier
    """
    projectLocation: str | None = Field(
        ...,
        examples=[
            "The scheme is located on the A1 Newcastle Gateshead Western Bypass, between junctions 65 and 67."
        ],
    )
    """
    Description of site location
    """
    projectEmailAddress: str | None = Field(
        ..., examples=["NIEnquiries@planninginspectorate.gsi.gov.uk"]
    )
    """
    PINS Project email address pubished on website
    """
    regions: list[Region]
    transboundary: bool | None = Field(..., examples=[True, False])
    """
    Drives addition of Transboundary tab on website. [TODO]
    """
    easting: int | None = Field(..., examples=[345678])
    """
    Project site Easting co-ordinate.
    """
    northing: int | None = Field(..., examples=[345678])
    """
    Project site Northing co-ordinate.
    """
    welshLanguage: bool | None = Field(..., examples=[True, False])
    """
    Welsh Language translation required.
    """
    mapZoomLevel: MapZoomLevel
    """
    Resolution of pinned map. Set when co-ordinates are created.
    """
    secretaryOfState: str | None = None
    """
    Relevant Government Department. [TODO]
    """
    field_preApplicationDates: Any | None = Field(None, alias="_preApplicationDates")
    datePINSFirstNotifiedOfProject: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date at which applicant notify PINS of a project (pre-publishing)
    """
    dateProjectAppearsOnWebsite: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date Project Appears On Website
    """
    anticipatedSubmissionDateNonSpecific: str | None = Field(..., examples=["Q3 2023"])
    """
    Approximate Anticipated Submission Date Of Application, e.g. Q3 2023
    """
    anticipatedDateOfSubmission: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Anticipated Submission Date Of Application
    """
    screeningOpinionSought: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    (TBC by Env. Services Team)
    """
    screeningOpinionIssued: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    (TBC by Env. Services Team)
    """
    scopingOpinionSought: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    (TBC by Env. Services Team)
    """
    scopingOpinionIssued: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    (TBC by Env. Services Team)
    """
    section46Notification: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Applicant must notify PINS of statutory consultation
    """
    field_acceptanceDates: Any | None = Field(None, alias="_acceptanceDates")
    dateOfDCOSubmission: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date Applcation is submitted
    """
    deadlineForAcceptanceDecision: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    DeadlineForAcceptanceDecision
    """
    dateOfDCOAcceptance: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date Application is Formerly Accepted by PINS
    """
    dateOfNonAcceptance: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date of Non Acceptance
    """
    field_preExaminationDates: Any | None = Field(None, alias="_preExaminationDates")
    dateOfRepresentationPeriodOpen: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date at which point publish can submit relevant reps
    """
    dateOfRelevantRepresentationClose: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date at which point publish can no longer submit relevant reps
    """
    extensionToDateRelevantRepresentationsClose: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    ExtensionToDateRelevantRepresentationsClose
    """
    dateRRepAppearOnWebsite: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date at which relevant reps appear on the website
    """
    dateIAPIDue: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    rule6LetterPublishDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    preliminaryMeetingStartDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Meeting between all parties inc public
    """
    notificationDateForPMAndEventsDirectlyFollowingPM: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    notificationDateForEventsDeveloper: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    field_examinationDates: Any | None = Field(None, alias="_examinationDates")
    dateSection58NoticeReceived: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Applicant has notified all parties of application
    """
    confirmedStartOfExamination: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    ConfirmedStartOfExamination by panel
    """
    rule8LetterPublishDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    deadlineForCloseOfExamination: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    DeadlineForCloseOfExamination
    """
    dateTimeExaminationEnds: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    ConfirmedSEndOfExamination by panel
    """
    stage4ExtensionToExamCloseDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Examination Period extended to this date
    """
    field_recommendationDates: Any | None = Field(None, alias="_recommendationDates")
    deadlineForSubmissionOfRecommendation: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    DeadlineForSubmissionOfRecommendation
    """
    dateOfRecommendations: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date recomm report sent to SoS
    """
    stage5ExtensionToRecommendationDeadline: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Recommendation period extended to this date
    """
    field_decisionDates: Any | None = Field(None, alias="_decisionDates")
    deadlineForDecision: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    DeadlineForDecision
    """
    confirmedDateOfDecision: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Decision by SoS
    """
    stage5ExtensionToDecisionDeadline: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Decision period extended to this date
    """
    field_postDecisionDates: Any | None = Field(None, alias="_postDecisionDates")
    jRPeriodEndDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Judicial Review
    """
    field_withdrawalDates: Any | None = Field(None, alias="_withdrawalDates")
    dateProjectWithdrawn: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    DateProjectWithdrawn by applicant
    """
    operationsLeadId: str | None = None
    """
    Maps to [Employee].[EmployeeID].
    """
    operationsManagerId: str | None = None
    """
    New NSIP role, Maps to [Employee].[EmployeeID]
    """
    caseManagerId: str | None = None
    """
    Maps to [Employee].[EmployeeID]
    """
    nsipOfficerIds: list[str]
    nsipAdministrationOfficerIds: list[str]
    leadInspectorId: str | None = None
    """
    Maps to [Employee].[EmployeeID]
    """
    inspectorIds: list[str]
    environmentalServicesOfficerId: str | None = None
    """
    Maps to [Employee].[EmployeeID]
    """
    legalOfficerId: str | None = None
    """
    Maps to [Employee].[EmployeeID]
    """
    applicantId: str | None = None
    """
    Maps to [ServiceUser].[id] where the serviceUserType is Applicant
    """
    migrationStatus: bool | None = None
    """
    Has this case been migrated from the legacy system? True if so.
    """
    dateOfReOpenRelevantRepresentationStart: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date at which relevant reps can be reopened
    """
    dateOfReOpenRelevantRepresentationClose: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    Date at which relevant reps can no longer be reopened
    """
