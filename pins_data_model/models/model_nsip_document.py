# generated by datamodel-codegen:
#   filename:  nsip-document.schema.json
#   timestamp: 2024-01-10T16:51:21+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, Field


class VirusCheckStatus(Enum):
    not_scanned = "not_scanned"
    scanned = "scanned"
    affected = "affected"


class CaseType(Enum):
    nsip = "nsip"
    has = "has"


class DocumentStatus(Enum):
    submitted = "submitted"
    internal = "internal"
    draft = "draft"


class RedactedStatus(Enum):
    not_redacted = "not_redacted"
    redacted = "redacted"


class PublishedStatus(Enum):
    not_checked = "not_checked"
    checked = "checked"
    ready_to_publish = "ready_to_publish"
    do_not_publish = "do_not_publish"
    publishing = "publishing"
    published = "published"
    archived = "archived"


class SecurityClassification(Enum):
    public = "public"
    official = "official"
    secret = "secret"
    top_secret = "top-secret"


class SourceSystem(Enum):
    back_office_appeals = "back-office-appeals"
    back_office_applications = "back-office-applications"
    horizon = "horizon"
    ni_file = "ni_file"
    sharepoint = "sharepoint"


class Origin(Enum):
    pins = "pins"
    citizen = "citizen"
    lpa = "lpa"
    ogd = "ogd"


class Stage(Enum):
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


class NsipDocument(BaseModel):
    documentId: str = Field(..., examples=["01c958f2-4e9f-4ce2-adf9-81038702cafa"])
    """
    The unique identifier for the file. This will be different to documentReference
    """
    caseId: float | None = Field(None, examples=[1])
    """
    Internal case identifier
    """
    caseRef: str | None = Field(None, examples=["EN010120"])
    documentReference: str | None = Field(None, examples=["WA0110015-000002"])
    """
    Reference used throughout ODT <CaseRef>-<SequenceNo>
    """
    version: float = Field(..., examples=[1])
    examinationRefNo: str | None = Field(None, examples=["XXX-0000"])
    filename: str = Field(..., examples=["filename.pdf"])
    """
    Current stored filename of the file
    """
    originalFilename: str = Field(..., examples=["original_filename.pdf"])
    """
    Original filename of file
    """
    size: float = Field(..., examples=[23452])
    mime: str | None = Field(None, examples=["application/pdf"])
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
        None,
        examples=[
            "https://pinsstdocsboprodukw001.blob.core.windows.net/published-documents/BC0110003-001-olive-oil.pdf"
        ],
    )
    """
    The location of the published document. Only applicable to documents which are published.
    """
    path: str | None = Field(
        None,
        examples=[
            "EN010011/2. Post-Submission/Application Documents/Application Form/Letter.PDF"
        ],
    )
    virusCheckStatus: VirusCheckStatus | None = None
    fileMD5: str | None = Field(None, examples=["b1946ac92492d2347c6235b4d2611184"])
    dateCreated: AwareDatetime = Field(..., examples=["2023-03-26T00:00:00.000"])
    lastModified: AwareDatetime | None = Field(
        None, examples=["2023-03-26T00:00:00.000"]
    )
    caseType: CaseType | None = None
    documentStatus: DocumentStatus | None = None
    redactedStatus: RedactedStatus | None = None
    publishedStatus: PublishedStatus | None = None
    datePublished: AwareDatetime | None = Field(
        None, examples=["2023-03-26T00:00:00.000"]
    )
    documentType: str | None = Field(None, examples=["Rule 8 letter"])
    securityClassification: SecurityClassification | None = None
    sourceSystem: SourceSystem | None = None
    origin: Origin | None = None
    owner: str | None = None
    author: str | None = None
    """
    Name of person who authored document
    """
    representative: str | None = Field(None, examples=["ZZZ Agency"])
    """
    The on behalf of or agent submitter of document
    """
    description: str | None = Field(
        None,
        examples=[
            "Attachments to the letter to Department for Business, Energy & Industrial Strategy"
        ],
    )
    stage: Stage | None = None
    filter1: str | None = Field(None, examples=["Deadline 2"])
    """
    Filter field to provide additional filtering
    """
    filter2: str | None = Field(None, examples=["Scoping Option Report"])
    """
    Filter field to provide additional filtering
    """
