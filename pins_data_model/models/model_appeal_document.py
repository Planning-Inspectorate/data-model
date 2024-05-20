# generated by datamodel-codegen:
#   filename:  appeal-document.schema.json
#   timestamp: 2024-05-20T09:28:11+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, ConfigDict, Field


class VirusCheckStatus(Enum):
    """
    Indicates the virus check status for the current document
    """

    not_scanned = "not_scanned"
    scanned = "scanned"
    affected = "affected"
    NoneType_None = None


class CaseType(Enum):
    """
    The internal code for an appeal type, e.g. Householder (D)
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
    NoneType_None = None


class RedactedStatus(Enum):
    """
    Indicates the redaction status for the document
    """

    not_redacted = "not_redacted"
    redacted = "redacted"
    no_redaction_required = "no_redaction_required"
    NoneType_None = None


class DocumentType(Enum):
    """
    The type of document, used for exchange, migrations and consumption from the appeal back-office system
    """

    appellantCaseCorrespondence = "appellantCaseCorrespondence"
    appellantCaseWithdrawalLetter = "appellantCaseWithdrawalLetter"
    appellantCostsApplication = "appellantCostsApplication"
    appellantCostsCorrespondence = "appellantCostsCorrespondence"
    appellantCostsWithdrawal = "appellantCostsWithdrawal"
    appellantStatement = "appellantStatement"
    applicationDecisionLetter = "applicationDecisionLetter"
    changedDescription = "changedDescription"
    originalApplicationForm = "originalApplicationForm"
    whoNotified = "whoNotified"
    conservationMap = "conservationMap"
    lettersNeighbours = "lettersNeighbours"
    lpaCaseCorrespondence = "lpaCaseCorrespondence"
    lpaCostsApplication = "lpaCostsApplication"
    lpaCostsCorrespondence = "lpaCostsCorrespondence"
    lpaCostsWithdrawal = "lpaCostsWithdrawal"
    otherPartyRepresentations = "otherPartyRepresentations"
    planningOfficerReport = "planningOfficerReport"
    pressAdvert = "pressAdvert"
    costsDecisionLetter = "costsDecisionLetter"
    caseDecisionLetter = "caseDecisionLetter"
    crossTeamCorrespondence = "crossTeamCorrespondence"
    inspectorCorrespondence = "inspectorCorrespondence"
    NoneType_None = None


class SourceSystem(Enum):
    """
    The system mastering the metadata for the current document
    """

    back_office_appeals = "back-office-appeals"
    horizon = "horizon"
    acp = "acp"
    sharepoint = "sharepoint"
    NoneType_None = None


class Origin(Enum):
    """
    Indicates where the documents originates from
    """

    pins = "pins"
    citizen = "citizen"
    lpa = "lpa"
    ogd = "ogd"
    NoneType_None = None


class CaseStage(Enum):
    """
    The stage in the appeal process that has created the document
    """

    appellant_case = "appellant-case"
    lpa_questionnaire = "lpa-questionnaire"
    statements = "statements"
    third_party_comments = "third-party-comments"
    final_comments = "final-comments"
    appeal_decision = "appeal-decision"
    costs = "costs"
    NoneType_None = None


class AppealDocument(BaseModel):
    """
    Schema defining the metadata for appeal documents
    """

    model_config = ConfigDict(
        extra="allow",
    )
    documentId: str = Field(..., examples=["4547fec8-16b2-47bb-836d-4d0baac04079"])
    """
    The unique identifier for the document
    """
    caseId: int | None = Field(..., examples=[1200])
    """
    Internal case identifier
    """
    caseReference: str = Field(..., examples=["7002471"])
    """
    External case identifier
    """
    version: int = Field(..., examples=[1])
    """
    A document can have multiple versions, and this indicates the latest version
    """
    filename: str = Field(..., examples=["filename.pdf"])
    """
    Current stored name of the document
    """
    originalFilename: str = Field(..., examples=["original_filename.pdf"])
    """
    Original name of document
    """
    size: int = Field(..., examples=[23452])
    """
    The file size, in bytes
    """
    mime: str = Field(..., examples=["application/pdf"])
    """
    The mime type for the current version of the file
    """
    documentURI: str = Field(
        ...,
        examples=[
            "https://custom-domain.gov.uk/container-name/appeal/7002471/4547fec8-16b2-47bb-836d-4d0baac04079/v1/filename.pdf"
        ],
    )
    """
    The internal location of the document
    """
    publishedDocumentURI: str | None = Field(
        ...,
        examples=[
            "https://custom-domain.gov.uk/container-name/appeal/7002471/4547fec8-16b2-47bb-836d-4d0baac04079/v1/filename.pdf"
        ],
    )
    """
    The location of the published document, will be null if the datePublished is not set
    """
    virusCheckStatus: VirusCheckStatus
    """
    Indicates the virus check status for the current document
    """
    fileMD5: str | None = Field(..., examples=["b1946ac92492d2347c6235b4d2611184"])
    """
    A MD5 hash to check the validity of the file
    """
    dateCreated: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    """
    The creation date for the document
    """
    dateReceived: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the document was received
    """
    datePublished: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The date the document was published
    """
    lastModified: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    """
    The last update date for the document
    """
    caseType: CaseType
    """
    The internal code for an appeal type, e.g. Householder (D)
    """
    redactedStatus: RedactedStatus
    """
    Indicates the redaction status for the document
    """
    documentType: DocumentType
    """
    The type of document, used for exchange, migrations and consumption from the appeal back-office system
    """
    sourceSystem: SourceSystem
    """
    The system mastering the metadata for the current document
    """
    origin: Origin
    """
    Indicates where the documents originates from
    """
    owner: str | None = None
    """
    Owner of the current document
    """
    author: str | None = None
    """
    Name of person who authored document
    """
    description: str | None = None
    """
    A custom description for the document
    """
    caseStage: CaseStage
    """
    The stage in the appeal process that has created the document
    """
    horizonFolderId: str | None = None
    """
    The folder ID containing the document in Horizon
    """
