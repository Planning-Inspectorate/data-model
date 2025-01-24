# generated by datamodel-codegen:
#   filename:  appeal-s78.schema.json
#   timestamp: 2025-01-24T16:40:02+00:00

from __future__ import annotations

from enum import Enum
from uuid import UUID

from pydantic import AwareDatetime, BaseModel, ConfigDict, Field, RootModel


class CaseStatus(Enum):
    """
    The processing status for the appeal
    """

    assign_case_officer = "assign_case_officer"
    validation = "validation"
    ready_to_start = "ready_to_start"
    lpa_questionnaire = "lpa_questionnaire"
    issue_determination = "issue_determination"
    statements = "statements"
    evidence = "evidence"
    witnesses = "witnesses"
    final_comments = "final_comments"
    complete = "complete"
    invalid = "invalid"
    closed = "closed"
    withdrawn = "withdrawn"
    awaiting_transfer = "awaiting_transfer"
    transferred = "transferred"
    event = "event"
    awaiting_event = "awaiting_event"


class CaseType(Enum):
    """
    The internal code for an appeal type, e.g. D (Householder)
    """

    C = "C"
    D = "D"
    F = "F"
    G = "G"
    H = "H"
    L = "L"
    Q = "Q"
    S = "S"
    V = "V"
    W = "W"
    X = "X"
    Y = "Y"
    Z = "Z"


class CaseProcedure(Enum):
    """
    The type of procedure for the appeal
    """

    written = "written"
    hearing = "hearing"
    inquiry = "inquiry"
    NoneType_None = None


class AllocationLevel(Enum):
    """
    A level used for allocation purposes
    """

    A = "A"
    B = "B"
    C = "C"
    D = "D"
    E = "E"
    F = "F"
    G = "G"
    H = "H"
    NoneType_None = None


class AllocationBand(Enum):
    """
    A band used for allocation purposes
    """

    int_1 = 1
    int_2 = 2
    int_3 = 3
    NoneType_None = None


class CaseValidationOutcome(Enum):
    """
    The outcome of the validation action
    """

    valid = "valid"
    invalid = "invalid"
    incomplete = "incomplete"
    NoneType_None = None


class LinkedCaseStatus(Enum):
    """
    Indicates if the case is linked, and the type of relationship
    """

    lead = "lead"
    child = "child"
    NoneType_None = None


class LpaQuestionnaireValidationOutcome(Enum):
    """
    The outcome of the validation action
    """

    complete = "complete"
    incomplete = "incomplete"
    NoneType_None = None


class CaseDecisionOutcome(Enum):
    """
    The final outcome for the decision
    """

    allowed = "allowed"
    split_decision = "split_decision"
    dismissed = "dismissed"
    invalid = "invalid"
    NoneType_None = None


class ApplicationDecision(Enum):
    """
    The outcome of the original LPA decision
    """

    granted = "granted"
    refused = "refused"
    not_received = "not_received"


class KnowsOtherOwners(Enum):
    """
    Indicates if the appellant knows other owners of the site
    """

    Yes = "Yes"
    No = "No"
    Some = "Some"
    NoneType_None = None


class KnowsAllOwners(Enum):
    """
    Indicates if the appellant knows all owners of the site
    """

    Yes = "Yes"
    No = "No"
    Some = "Some"
    NoneType_None = None


class NotificationMethodEnumEnumEnum(Enum):
    notice = "notice"
    letter = "letter"
    advert = "advert"


class NotificationMethodEnum(RootModel[NotificationMethodEnumEnumEnum | None]):
    root: NotificationMethodEnumEnumEnum | None = None


class NeighbouringSiteAddress(BaseModel):
    model_config = ConfigDict(
        extra="allow",
    )
    neighbouringSiteAddressLine1: str = Field(..., examples=["96 The Avenue"])
    """
    First line of address of the site
    """
    neighbouringSiteAddressLine2: str | None = None
    """
    Second line of address of the site
    """
    neighbouringSiteAddressTown: str = Field(..., examples=["Maidstone"])
    """
    Town / City of the site address
    """
    neighbouringSiteAddressCounty: str | None = Field(..., examples=["Kent"])
    """
    County of the site address
    """
    neighbouringSiteAddressPostcode: str = Field(..., examples=["MD21 5XY"])
    """
    Postal code of the site address
    """
    neighbouringSiteAccessDetails: str | None = Field(
        ..., examples=["Ongoing road works at this address"]
    )
    """
    Provided information on site accessibility on this address
    """
    neighbouringSiteSafetyDetails: str | None = Field(
        ..., examples=["Ongoing road works at this address"]
    )
    """
    Provided information on site health and safety on this address
    """


class AppellantProcedurePreference(Enum):
    """
    The procedure preference indicated by the appellant
    """

    written = "written"
    hearing = "hearing"
    inquiry = "inquiry"
    NoneType_None = None


class EiaEnvironmentalImpactSchedule(Enum):
    """
    The impact schedule from EIA
    """

    schedule_1 = "schedule-1"
    schedule_2 = "schedule-2"
    NoneType_None = None


class EiaDevelopmentDescription(Enum):
    """
    The development description from EIA
    """

    agriculture_aquaculture = "agriculture-aquaculture"
    change_extensions = "change-extensions"
    chemical_industry = "chemical-industry"
    energy_industry = "energy-industry"
    extractive_industry = "extractive-industry"
    food_industry = "food-industry"
    infrastructure_projects = "infrastructure-projects"
    mineral_industry = "mineral-industry"
    other_projects = "other-projects"
    production_processing_of_metals = "production-processing-of-metals"
    rubber_industry = "rubber-industry"
    textile_industries = "textile-industries"
    tourism_leisure = "tourism-leisure"
    NoneType_None = None


class LpaProcedurePreference(Enum):
    """
    The procedure preference indicated by the LPA
    """

    written = "written"
    hearing = "hearing"
    inquiry = "inquiry"
    NoneType_None = None


class AppealS78Case(BaseModel):
    """
    Schema defining the metadata for an appeal (S78)
    """

    model_config = ConfigDict(
        extra="allow",
    )
    caseId: int | None = Field(..., examples=[1200])
    """
    Internal case identifier
    """
    caseReference: str = Field(..., examples=["7002471"])
    """
    External case identifier
    """
    submissionId: UUID | None = Field(
        None, examples=["7f45748c-2342-4b59-b934-ad6183e8d834"]
    )
    """
    Case submission id - link to draft submission created by appellant
    """
    caseStatus: CaseStatus
    """
    The processing status for the appeal
    """
    caseType: CaseType
    """
    The internal code for an appeal type, e.g. D (Householder)
    """
    caseProcedure: CaseProcedure
    """
    The type of procedure for the appeal
    """
    lpaCode: str = Field(..., examples=["Q9999"])
    """
    A unique identifier for the Local Planning Authority
    """
    caseOfficerId: str | None = None
    """
    Unique identifier for the case officer assigned to the case
    """
    inspectorId: str | None = None
    """
    Unique identifier for the inspector assigned to the case
    """
    allocationLevel: AllocationLevel
    """
    A level used for allocation purposes
    """
    allocationBand: AllocationBand
    """
    A band used for allocation purposes
    """
    caseSpecialisms: list[str] = Field(
        ...,
        examples=[
            "Access",
            "Listed building and enforcement",
            "Roads and traffics",
            "Natural heritage",
            "Schedule 1",
        ],
    )
    """
    A list of specialisms for allocation purposes
    """
    caseSubmittedDate: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    The date the appeal was submitted by the appellant
    """
    caseCreatedDate: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    The date the appeal was received
    """
    caseUpdatedDate: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    The date the appeal was last updated in the back-office
    """
    caseValidDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date since when the appeal was considered valid
    """
    caseValidationDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the appeal was validated in the back-office
    """
    caseValidationOutcome: CaseValidationOutcome
    """
    The outcome of the validation action
    """
    caseValidationInvalidDetails: list[str]
    """
    A list of reasons why the appeal is invalid
    """
    caseValidationIncompleteDetails: list[str]
    """
    A list of reasons why the appeal is incomplete
    """
    caseExtensionDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    When the validation outcome is incomplete, an extension may be granted to provide missing information
    """
    caseStartedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    A date indicating when the case was started, resulting in the creation of a timetable
    """
    casePublishedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    A date indicating when the case was published
    """
    linkedCaseStatus: LinkedCaseStatus
    """
    Indicates if the case is linked, and the type of relationship
    """
    leadCaseReference: str | None = Field(..., examples=["7002471"])
    """
    The reference of the lead case, if the case is a child case
    """
    lpaQuestionnaireDueDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    If the case is started and has a timetable, a deadline for the LPA to provide a response
    """
    lpaQuestionnaireSubmittedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the LPA provided a response to the case
    """
    lpaQuestionnaireCreatedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the LPA response was receeived
    """
    lpaQuestionnairePublishedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date indicating when the questionnaire review was completed and the questionnaire published
    """
    lpaQuestionnaireValidationOutcome: LpaQuestionnaireValidationOutcome
    """
    The outcome of the validation action
    """
    lpaQuestionnaireValidationOutcomeDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the LPA response was validated
    """
    lpaQuestionnaireValidationDetails: list[str]
    """
    A list of reasons why the questionnaire is incomplete
    """
    lpaStatement: str | None = Field(
        ..., examples=["We refused the application because of ..."]
    )
    """
    A statement provided by the LPA
    """
    caseWithdrawnDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the appeal was withdrawn by the appellant
    """
    caseTransferredDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the appeal was transferred to a new case of a different type
    """
    transferredCaseClosedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the appeal was closed and the appellant requested to resubmit
    """
    caseDecisionOutcomeDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date of the appeal decision
    """
    caseDecisionPublishedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the appeal decision was published
    """
    caseDecisionOutcome: CaseDecisionOutcome
    """
    The final outcome for the decision
    """
    caseCompletedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the appeal decision letter
    """
    enforcementNotice: bool | None = None
    """
    Indicates if an enforcement notice is the reason for the appeal
    """
    applicationReference: str = Field(..., examples=["43010/APP/1/290572"])
    """
    The unique identifier of the LPA application
    """
    applicationDate: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    The date of the original LPA application
    """
    applicationDecision: ApplicationDecision
    """
    The outcome of the original LPA decision
    """
    applicationDecisionDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date of the original LPA decision
    """
    caseSubmissionDueDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The statutory deadline for submitting an appeal from the original LPA decision date
    """
    siteAddressLine1: str = Field(..., examples=["96 The Avenue"])
    """
    First line of address for the appeal site
    """
    siteAddressLine2: str | None = None
    """
    Second line of address for the appeal site
    """
    siteAddressTown: str = Field(..., examples=["Maidstone"])
    """
    Town / City of the site address
    """
    siteAddressCounty: str | None = Field(..., examples=["Kent"])
    """
    County of the site address
    """
    siteAddressPostcode: str = Field(..., examples=["MD21 5XY"])
    """
    Postal code of the site address
    """
    siteAccessDetails: list[str]
    """
    Provided information on site accessibility
    """
    siteSafetyDetails: list[str]
    """
    Provided information on site health and safety
    """
    siteAreaSquareMetres: float | None = Field(..., examples=[45.7])
    """
    The site area, in square meters
    """
    floorSpaceSquareMetres: float | None = Field(..., examples=[3.5])
    """
    The floor space, in square meters
    """
    isCorrectAppealType: bool | None = None
    """
    Indicates if the LPA considers the appeal type appropriate
    """
    isGreenBelt: bool | None = None
    """
    Indicates if the site is in a green belt
    """
    inConservationArea: bool | None = None
    """
    Indicates if the site is in a conservation area
    """
    ownsAllLand: bool | None = None
    """
    Indicates if the appellant has complete ownership of the site
    """
    ownsSomeLand: bool | None = None
    """
    Indicates if the appellant has partial ownership of the site
    """
    knowsOtherOwners: KnowsOtherOwners
    """
    Indicates if the appellant knows other owners of the site
    """
    knowsAllOwners: KnowsAllOwners
    """
    Indicates if the appellant knows all owners of the site
    """
    advertisedAppeal: bool | None = None
    """
    Indicates if the appellant has advertised the appeal to the LPA decision
    """
    notificationMethod: list[NotificationMethodEnum]
    """
    The methods used to notify relevant parties
    """
    ownersInformed: bool | None = None
    """
    Indicates if the appellant has informed other owners of the site
    """
    originalDevelopmentDescription: str | None = Field(
        ..., examples=["Replacement of an existing gate to access the property"]
    )
    """
    The original description of the development, as provided by the appellant
    """
    changedDevelopmentDescription: bool | None = None
    """
    Indicates that the LPA has changed the development description
    """
    newConditionDetails: str | None = Field(
        ...,
        examples=["Since the original application, a number of things have changed..."],
    )
    """
    New conditions details provided by the LPA
    """
    nearbyCaseReferences: list[str]
    """
    A list of related case references known to the appellant and the LPA
    """
    neighbouringSiteAddresses: list[NeighbouringSiteAddress]
    """
    A list of neighbouring site addresses
    """
    affectedListedBuildingNumbers: list[str]
    """
    A list of affected listed building IDs from Historic England
    """
    changedListedBuildingNumbers: list[str]
    """
    A list of changed listed building IDs from Historic England
    """
    appellantCostsAppliedFor: bool | None = None
    """
    Indicates if the appellant has applied for costs
    """
    lpaCostsAppliedFor: bool | None = None
    """
    Indicates if the appellant has applied for costs
    """
    agriculturalHolding: bool | None = None
    """
    Indicates if the site is an agricultural holding
    """
    tenantAgriculturalHolding: bool | None = None
    """
    Indicates if the site is a tenant agricultural holding
    """
    otherTenantsAgriculturalHolding: bool | None = None
    """
    Indicates if the site is an agricultural holding with other tenants
    """
    informedTenantsAgriculturalHolding: bool | None = None
    """
    If the site is an agricultural holding, indicates tenants are informed
    """
    appellantProcedurePreference: AppellantProcedurePreference
    """
    The procedure preference indicated by the appellant
    """
    appellantProcedurePreferenceDetails: str | None = None
    """
    The procedure details preference indicated by the appellant
    """
    appellantProcedurePreferenceDuration: float | None = None
    """
    The duration of the procedure indicated by the appellant
    """
    appellantProcedurePreferenceWitnessCount: float | None = None
    """
    The number of witnesses appellant has suggested for inquiries preference
    """
    statusPlanningObligation: str | None = None
    """
    The planning obligation information, if available
    """
    affectsScheduledMonument: bool | None = None
    """
    Indicates that a scheduled monument is affected
    """
    hasProtectedSpecies: bool | None = None
    """
    Indicates the existence of protected species
    """
    isAonbNationalLandscape: bool | None = None
    """
    Indicates an area of outstanding beauty (National Landscape)
    """
    designatedSitesNames: list[str]
    """
    The designated site names
    """
    isGypsyOrTravellerSite: bool | None = None
    """
    Indicates a traveller site
    """
    isPublicRightOfWay: bool | None = None
    """
    Indicates a PROW (public right of way)
    """
    eiaEnvironmentalImpactSchedule: EiaEnvironmentalImpactSchedule
    """
    The impact schedule from EIA
    """
    eiaDevelopmentDescription: EiaDevelopmentDescription
    """
    The development description from EIA
    """
    eiaSensitiveAreaDetails: str | None = None
    """
    The sensitive area details from EIA
    """
    eiaColumnTwoThreshold: bool | None = None
    """
    EIA specific threshold
    """
    eiaScreeningOpinion: bool | None = None
    """
    EIA screening opinion
    """
    eiaRequiresEnvironmentalStatement: bool | None = None
    """
    EIA environmental statement required
    """
    eiaCompletedEnvironmentalStatement: bool | None = None
    """
    EIA completed environmental statement required
    """
    eiaConsultedBodiesDetails: str | None = None
    """
    The details of the bodies consulted by EIA
    """
    hasStatutoryConsultees: bool | None = None
    """
    Indicates statutory consultees
    """
    hasInfrastructureLevy: bool | None = None
    """
    Indicates the existence of an infrastructure levy
    """
    isInfrastructureLevyFormallyAdopted: bool | None = None
    """
    Indicates if the infrastructure levy is formally adopted
    """
    infrastructureLevyAdoptedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date of the infrastructure levy adoption
    """
    infrastructureLevyExpectedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The expected date of the infrastructure levy
    """
    lpaProcedurePreference: LpaProcedurePreference
    """
    The procedure preference indicated by the LPA
    """
    lpaProcedurePreferenceDetails: str | None = None
    """
    The procedure details preference indicated by the LPA
    """
    lpaProcedurePreferenceDuration: float | None = None
    """
    The duration of enquiry indicated by the LPA
    """
    caseworkReason: str | None = None
    developmentType: str | None = None
    importantInformation: str | None = None
    jurisdiction: str | None = None
    redeterminedIndicator: str | None = None
    dateCostsReportDespatched: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date of the cost report
    """
    dateNotRecoveredOrDerecovered: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    dateRecovered: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    originalCaseDecisionDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    targetDate: AwareDatetime | None = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    appellantCommentsSubmittedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    appellantStatementSubmittedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    finalCommentsDueDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    interestedPartyRepsDueDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    lpaCommentsSubmittedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    lpaProofsSubmittedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    lpaStatementSubmittedDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    proofsOfEvidenceDueDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    siteNoticesSentDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    statementDueDate: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    reasonForNeighbourVisits: str | None = None
    numberOfResidencesNetChange: float | None = None
    """
    The net gain in residences of the proposed development
    """
    siteGridReferenceEasting: str | None = None
    siteGridReferenceNorthing: str | None = None
    siteViewableFromRoad: bool | None = None
    siteWithinSSSI: bool | None = None
    typeOfPlanningApplication: str | None = None
