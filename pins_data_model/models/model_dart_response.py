# generated by datamodel-codegen:
#   filename:  dart-response.schema.json
#   timestamp: 2025-01-20T13:24:57+00:00

from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field


class NeighbouringSiteAddress(BaseModel):
    model_config = ConfigDict(
        extra="allow",
    )
    neighbouringSiteAddressLine1: str | None = Field(..., examples=["96 The Avenue"])
    """
    First line of address of the neighbouring site
    """
    neighbouringSiteAddressLine2: str | None = None
    """
    Second line of address of the neighbouring site
    """
    neighbouringSiteAddressTown: str | None = Field(..., examples=["Maidstone"])
    """
    Town / City of the neighbouring site address
    """
    neighbouringSiteAddressCounty: str | None = Field(..., examples=["Kent"])
    """
    County of the neighbouring site address
    """
    neighbouringSiteAddressPostcode: str | None = Field(..., examples=["MD21 5XY"])
    """
    Postal code of the neighbouring site address
    """


class DartApiResponse(BaseModel):
    """
    Schema defining the data returned by the DaRT API
    """

    model_config = ConfigDict(
        extra="allow",
    )
    caseId: int | None = Field(None, examples=["2744"])
    """
    Internal case identifier
    """
    caseReference: int = Field(..., examples=["6002744"])
    """
    External case identifier
    """
    caseStatus: str | None = Field(None, examples=["lpa_questionnaire"])
    """
    The processing state for the case
    """
    caseType: str | None = Field(None, examples=["w"])
    """
    The internal code for a type of case
    """
    caseProcedure: str | None = Field(None, examples=["W"])
    """
    The type of procedure for the case
    """
    lpaCode: str | None = Field(None, examples=["DORS"])
    """
    PINS internal code for LPA
    """
    lpaName: str | None = Field(None, examples=["example"])
    """
    Name of the LPA
    """
    allocationLevel: str | None = Field(None, examples=["H"])
    """
    A case level used for allocation purposes
    """
    allocationBand: str | None = Field(None, examples=["1"])
    """
    A band used for allocation purposes
    """
    caseSpecialisms: list[str] | None = Field(
        None, examples=["General allocation", "Housing orders", "Waste"]
    )
    """
    A list of case specialisms for allocation purposes
    """
    caseSubmittedDate: str | None = Field(None, examples=["025-01-02T16:20:07.753Z"])
    """
    The date the case was submitted by the appellant
    """
    caseCreatedDate: str | None = Field(None, examples=["025-01-02T16:20:07.753Z"])
    """
    The date the case was received
    """
    caseUpdatedDate: str | None = Field(None, examples=["025-01-02T16:20:07.753Z"])
    """
    The date the case was last updated in the back-office
    """
    caseValidDate: str | None = Field(None, examples=["025-01-02T16:20:07.753Z"])
    """
    The date since when the case was considered valid
    """
    caseValidationDate: str | None = Field(None, examples=["025-01-02T16:20:07.753Z"])
    """
    The date the case was validated in the back-office
    """
    caseValidationOutcome: str | None = Field(None, examples=["valid"])
    """
    The outcome of the validation action
    """
    caseValidationInvalidDetails: list[str] | None = Field(
        None,
        examples=[
            "Appeal has not been submitted on time",
            "Documents have not been submitted on time",
            "Other: scddsfv",
        ],
    )
    """
    A list of reasons why the appeal is invalid
    """
    caseValidationIncompleteDetails: list[str] | None = Field(
        None,
        examples=[
            "Appellant name is not the same on the application form and appeal form",
            "LPA's decision notice is missing",
        ],
    )
    """
    A list of reasons why the appeal is incomplete
    """
    caseExtensionDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    When the validation outcome is incomplete, an extension may be granted to provide missing information
    """
    caseStartedDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    A date indicating when the case was started, resulting in the creation of a timetable
    """
    casePublishedDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    A date indicating when the case was published
    """
    linkedCaseStatus: str | None = Field(None, examples=["child"])
    """
    Indicates if the case is linked, and the type of relationship
    """
    leadCaseReference: str | None = Field(None, examples=["6002745"])
    """
    The reference of the lead case, if the case is a child case
    """
    caseWithdrawnDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    The date the case was withdrawn by the appellant
    """
    caseTransferredDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    The date the case was transferred to a new case of a different type
    """
    transferredCaseClosedDate: str | None = Field(
        None, examples=["2025-01-10T00:00:00.000Z"]
    )
    """
    The date the case was closed and the appellant requested to resubmit
    """
    caseDecisionOutcomeDate: str | None = Field(
        None, examples=["2025-01-10T00:00:00.000Z"]
    )
    """
    The date of the case decision
    """
    caseDecisionPublishedDate: str | None = Field(
        None, examples=["2025-01-10T00:00:00.000Z"]
    )
    """
    The date the case decision was published
    """
    caseDecisionOutcome: str | None = Field(None, examples=["allowed"])
    """
    The final outcome for the decision
    """
    caseCompletedDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    The date the case decision letter
    """
    enforcementNotice: bool | None = None
    """
    Indicates if an enforcement notice is the reason for the appeal
    """
    applicationReference: str = Field(..., examples=["21824/APP/0/203130"])
    """
    The unique identifier of the LPA application
    """
    applicationDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    The date of the original LPA application
    """
    applicationDecision: str | None = Field(None, examples=["refused"])
    """
    The outcome of the original LPA decision
    """
    lpaDecisionDate: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    The date of the original LPA decision
    """
    caseSubmissionDueDate: str | None = Field(
        None, examples=["2025-01-10T00:00:00.000Z"]
    )
    """
    The statutory deadline for submitting an appeal from the original LPA decision date
    """
    siteAddressLine1: str | None = Field(None, examples=["21 The Pavement"])
    """
    First line of case site address
    """
    siteAddressLine2: str | None = Field(None, examples=["Shotesham Road"])
    """
    Second line of case site address
    """
    siteAddressTown: str | None = Field(None, examples=["Bristol"])
    """
    Town / City of the site address
    """
    siteAddressCounty: str | None = Field(None, examples=["Wandsworth"])
    """
    County of the site address
    """
    siteAddressPostcode: str | None = Field(None, examples=["SW4 0HY"])
    """
    Postal code of the site address
    """
    isCorrectAppealType: bool | None = Field(None, examples=["True"])
    """
    Indicates if the LPA considers the appeal type appropriate
    """
    originalDevelopmentDescription: str | None = Field(
        None, examples=["Replacement of an existing gate to access the property"]
    )
    """
    The original description of the development, as provided by the appellant
    """
    changedDevelopmentDescription: bool | None = Field(None, examples=["True"])
    """
    Indicates that the LPA has changed the development description
    """
    newConditionDetails: str | None = Field(None, examples=["example"])
    """
    Since the original application, a number of things have changed.
    """
    nearbyCaseReferences: list[str] | None = None
    """
    A list of related case references known to the appellant and the LPA
    """
    neighbouringSiteAddresses: list[NeighbouringSiteAddress] | None = None
    """
    A list of neighbouring site addresses
    """
    affectedListedBuildingNumbers: list[str] | None = None
    """
    A list of affected listed building IDs from Historic England
    """
    appellantCostsAppliedFor: bool | None = Field(None, examples=["True"])
    """
    Indicates if the appellant has applied for costs
    """
    lpaCostsAppliedFor: bool | None = Field(None, examples=["False"])
    """
    Indicates if the LPA has applied for costs
    """
    appellantName: str | None = Field(None, examples=["example"])
    """
    Name of the appellant
    """
    typeOfEvent: str | None = Field(None, examples=["site_visit_access_required"])
    """
    The type of event
    """
    startDateOfTheEvent: str | None = Field(None, examples=["2025-01-10T00:00:00.000Z"])
    """
    Event start date and time
    """
    inspectorName: str | None = Field(None, examples=["In Spector"])
    """
    Name of inspector allocated to case
    """
    caseOfficerName: str | None = Field(None, examples=["example"])
    """
    name of case officer assigned to case
    """
    inspectorQualifications: str | None = Field(None, examples=["example"])
    """
    The qualifications of the inspector
    """