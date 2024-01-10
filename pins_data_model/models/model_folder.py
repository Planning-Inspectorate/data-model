# generated by datamodel-codegen:
#   filename:  folder.schema.json
#   timestamp: 2024-01-10T16:51:21+00:00

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
    the case reference this update relates to
    """
    displayNameEnglish: str
    """
    the case reference this update relates to
    """
    displayNameWelsh: str | None = None
    """
    Internal title or name of the update
    """
    parentFolderId: int | None = None
    """
    Optional parent folder ID
    """
