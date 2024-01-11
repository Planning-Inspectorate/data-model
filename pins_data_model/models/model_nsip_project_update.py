# generated by datamodel-codegen:
#   filename:  nsip-project-update.schema.json
#   timestamp: 2024-01-11T14:34:04+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel


class UpdateStatus(Enum):
    """
    The current status of this update
    """

    draft = "draft"
    ready_to_publish = "ready-to-publish"
    published = "published"
    ready_to_unpublish = "ready-to-unpublish"
    unpublished = "unpublished"
    archived = "archived"


class NsipProjectUpdate(BaseModel):
    """
    NSIP Project Update (formerly known as Banners)
    """

    id: int
    """
    The unique identifier within the Back Office.
    """
    caseReference: str
    """
    the case reference this update relates to
    """
    updateDate: AwareDatetime | None = None
    """
    The date the update was published
    """
    updateName: str | None = None
    """
    Internal title or name of the update
    """
    updateContentEnglish: str
    """
    HTML content of the update in English. Can only include `<a> <b> <ul> <li>` tags.
    """
    updateContentWelsh: str | None = None
    """
    HTML content of the update in Welsh. Can only include `<a> <b> <ul> <li>` tags.
    """
    updateStatus: UpdateStatus
    """
    The current status of this update
    """
