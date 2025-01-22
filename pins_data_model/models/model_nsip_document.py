# generated by datamodel-codegen:
#   filename:  nsip-document.schema.json
#   timestamp: 2025-01-22T15:22:39+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, ConfigDict, Field


class VirusCheckStatus(Enum):
    not_scanned = "not_scanned"
    scanned = "scanned"
    affected = "affected"
    NoneType_None = None


class CaseType(Enum):
    nsip = "nsip"
    has = "has"
    NoneType_None = None


class RedactedStatus(Enum):
    not_redacted = "not_redacted"
    redacted = "redacted"
    NoneType_None = None


class PublishedStatus(Enum):
    not_checked = "not_checked"
    checked = "checked"
    ready_to_publish = "ready_to_publish"
    do_not_publish = "do_not_publish"
    publishing = "publishing"
    published = "published"
    archived = "archived"
    unpublished = "unpublished"
    unpublishing = "unpublishing"
    awaiting_upload = "awaiting_upload"
    NoneType_None = None


class SecurityClassification(Enum):
    public = "public"
    official = "official"
    secret = "secret"
    top_secret = "top-secret"
    NoneType_None = None


class SourceSystem(Enum):
    back_office_appeals = "back-office-appeals"
    back_office_applications = "back-office-applications"
    horizon = "horizon"
    ni_file = "ni_file"
    sharepoint = "sharepoint"
    NoneType_None = None


class Origin(Enum):
    pins = "pins"
    citizen = "citizen"
    lpa = "lpa"
    ogd = "ogd"
    NoneType_None = None


class DocumentCaseStage(Enum):
    draft = "draft"
    pre_application = "pre-application"
    acceptance = "acceptance"
    pre_examination = "pre-examination"
    examination = "examination"
    recommendation = "recommendation"
    decision = "decision"
    post_decision = "post_decision"
    withdrawn = "withdrawn"
    developers_application = "developers_application"
    correspondence = "correspondence"
    field_0 = "0"
    NoneType_None = None


class NsipDocument(BaseModel):
    """
    NSIP document schema
    """

    model_config = ConfigDict(
        extra="allow",
    )
    documentId: str = Field(..., examples=["01c958f2-4e9f-4ce2-adf9-81038702cafa"])
    """
    The unique identifier for the file. This will be different to documentReference
    """
    caseId: int | None = Field(..., examples=[1])
    """
    Internal case identifier
    """
    caseRef: str | None = Field(..., examples=["EN010120"])
    documentReference: str | None = Field(..., examples=["WA0110015-000002"])
    """
    Reference used throughout ODT <CaseRef>-<SequenceNo>
    """
    version: int = Field(..., examples=[1])
    examinationRefNo: str | None = Field(..., examples=["XXX-0000"])
    filename: str = Field(..., examples=["filename.pdf"])
    """
    Current stored filename of the file
    """
    originalFilename: str = Field(..., examples=["original_filename.pdf"])
    """
    Original filename of file
    """
    size: int = Field(..., examples=[23452])
    mime: str | None = Field(..., examples=["application/pdf"])
    documentURI: str = Field(
        ...,
        examples=[
            "https://pinsstdocsboprodukw001.blob.core.windows.net/document-service-uploads/application/BC0110001/01adeade-791a-483a-a51d-99df2122b5cc/1"
        ],
    )
    """
    The internal location of the document
    """
    publishedDocumentURI: str | None = Field(
        ...,
        examples=[
            "https://pinsstdocsboprodukw001.blob.core.windows.net/published-documents/BC0110003-001-olive-oil.pdf"
        ],
    )
    """
    The location of the published document. Only applicable to documents which are published.
    """
    path: str | None = Field(
        ...,
        examples=[
            "EN010011/2. Post-Submission/Application Documents/Application Form/Letter.PDF"
        ],
    )
    virusCheckStatus: VirusCheckStatus
    fileMD5: str | None = Field(..., examples=["b1946ac92492d2347c6235b4d2611184"])
    dateCreated: AwareDatetime = Field(..., examples=["2023-07-27T20:30:00.000Z"])
    lastModified: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    caseType: CaseType
    redactedStatus: RedactedStatus
    publishedStatus: PublishedStatus
    datePublished: AwareDatetime | None = Field(
        ..., examples=["2023-07-27T20:30:00.000Z"]
    )
    documentType: str | None = Field(..., examples=["Rule 8 letter"])
    securityClassification: SecurityClassification
    sourceSystem: SourceSystem
    origin: Origin
    owner: str | None = None
    author: str | None = None
    """
    Name of person who authored document
    """
    authorWelsh: str | None = None
    """
    Welsh name of person who authored document
    """
    representative: str | None = Field(..., examples=["ZZZ Agency"])
    """
    The on behalf of or agent submitter of document
    """
    description: str | None = Field(
        ...,
        examples=[
            "Attachments to the letter to Department for Business, Energy & Industrial Strategy"
        ],
    )
    descriptionWelsh: str | None = None
    documentCaseStage: DocumentCaseStage
    filter1: str | None = Field(..., examples=["Deadline 2"])
    """
    Filter field to provide additional filtering
    """
    filter1Welsh: str | None = None
    """
    Filter field in Welsh
    """
    filter2: str | None = Field(..., examples=["Scoping Option Report"])
    """
    Filter field to provide additional filtering
    """
    horizonFolderId: str | None = None
    """
    The folder where the document exists
    """
    transcriptId: str | None = None
    """
    The GUID of the transcript document (if one was provided).
    """
