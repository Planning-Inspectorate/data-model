# generated by datamodel-codegen:
#   filename:  folder.schema.json
#   timestamp: 2025-07-16T14:06:10+00:00

from __future__ import annotations

from enum import Enum

from pydantic import BaseModel, ConfigDict


class CaseStage(Enum):
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


class Folder(BaseModel):
    """
    Folders can have optional parents. All folders belong to a Case.
    """

    model_config = ConfigDict(
        extra="allow",
    )
    id: int
    """
    The unique identifier within the Back Office.
    """
    caseReference: str
    """
    The case reference this folder belongs to.
    """
    displayNameEnglish: str
    """
    Folder display name in English.
    """
    displayNameWelsh: str | None = None
    """
    Folder display name in Welsh.
    """
    parentFolderId: int | None = None
    """
    Optional parent folder ID.
    """
    caseStage: CaseStage
