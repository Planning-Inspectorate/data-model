# generated by datamodel-codegen:
#   filename:  folder.schema.json
#   timestamp: 2024-01-11T14:34:04+00:00

from __future__ import annotations

from pydantic import BaseModel


class Folder(BaseModel):
    """
    Folders can have optional parents. All folders belong to a Case.
    """

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
