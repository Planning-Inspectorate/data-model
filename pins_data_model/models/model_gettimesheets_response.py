# generated by datamodel-codegen:
#   filename:  gettimesheets-response.schema.json
#   timestamp: 2025-02-20T09:33:47+00:00

from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field


class GetTimesheetsApiResponse(BaseModel):
    """
    Schema defining the data returned by the DaRT API
    """

    model_config = ConfigDict(
        extra="allow",
    )
    caseReference: int = Field(..., examples=["6002744"])
    """
    External case identifier
    """
    applicationReference: str = Field(..., examples=["12345"])
    """
    The unique identifier of the application
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
