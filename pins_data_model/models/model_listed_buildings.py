# generated by datamodel-codegen:
#   filename:  listed-buildings.schema.json
#   timestamp: 2025-02-18T12:18:50+00:00

from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field


class ListedBuilding(BaseModel):
    """
    Delta of listed building data pushed by the ODW. Primary use case is to support Appeals UI
    """

    model_config = ConfigDict(
        extra="allow",
    )
    entity: int = Field(..., examples=["31717222"])
    """
    A unique identifier for the listed building.
    """
    reference: str = Field(..., examples=["1260842"])
    """
    Reference number for the listed buildign
    """
    name: str = Field(..., examples=["41A, NEWBIGGIN"])
    """
    Name of listed building
    """
    listedBuildingGrade: str = Field(..., examples=["II"])
    """
    Grade assigned to the listing.
    """
