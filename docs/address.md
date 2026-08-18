## PINS Address Schema Type

`object` ([PINS Address Schema](address.md))

# PINS Address Schema Properties

| Property                                | Type          | Required | Nullable       | Defined by                                                                                                         |
| :-------------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------- |
| [addressDimKey](#addressdimkey)         | `number`      | Required | cannot be null | [PINS Address Schema](address-properties-addressdimkey.md "address.schema.json#/properties/addressDimKey")         |
| [addressType](#addresstype)             | `string`      | Optional | cannot be null | [PINS Address Schema](address-properties-addresstype.md "address.schema.json#/properties/addressType")             |
| [caseReference](#casereference)         | `string`      | Required | cannot be null | [PINS Address Schema](address-properties-casereference.md "address.schema.json#/properties/caseReference")         |
| [caseId](#caseid)                       | `string`      | Required | cannot be null | [PINS Address Schema](address-properties-caseid.md "address.schema.json#/properties/caseId")                       |
| [caseType](#casetype)                   | `string`      | Required | cannot be null | [PINS Address Schema](address-properties-casetype.md "address.schema.json#/properties/caseType")                   |
| [description](#description)             | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-description.md "address.schema.json#/properties/description")             |
| [line1](#line1)                         | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-line1.md "address.schema.json#/properties/line1")                         |
| [line2](#line2)                         | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-line2.md "address.schema.json#/properties/line2")                         |
| [townCity](#towncity)                   | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-towncity.md "address.schema.json#/properties/townCity")                   |
| [county](#county)                       | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-county.md "address.schema.json#/properties/county")                       |
| [postcode](#postcode)                   | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-postcode.md "address.schema.json#/properties/postcode")                   |
| [country](#country)                     | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-country.md "address.schema.json#/properties/country")                     |
| [easting](#easting)                     | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-easting.md "address.schema.json#/properties/easting")                     |
| [northing](#northing)                   | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-northing.md "address.schema.json#/properties/northing")                   |
| [latitudeWGS84](#latitudewgs84)         | `number`      | Optional | can be null    | [PINS Address Schema](address-properties-latitudewgs84.md "address.schema.json#/properties/latitudeWGS84")         |
| [longitudeWGS84](#longitudewgs84)       | `number`      | Optional | can be null    | [PINS Address Schema](address-properties-longitudewgs84.md "address.schema.json#/properties/longitudeWGS84")       |
| [UPRN](#uprn)                           | `string`      | Optional | can be null    | [PINS Address Schema](address-properties-uprn.md "address.schema.json#/properties/UPRN")                           |
| [dependentRequired](#dependentrequired) | Not specified | Optional | cannot be null | [PINS Address Schema](address-properties-dependentrequired.md "address.schema.json#/properties/dependentRequired") |
| Additional Properties                   | Any           | Optional | can be null    |                                                                                                                    |

## addressDimKey

Primary Key for an Address.

`addressDimKey`

* is required

* Type: `number`

* cannot be null

* defined in: [PINS Address Schema](address-properties-addressdimkey.md "address.schema.json#/properties/addressDimKey")

### addressDimKey Type

`number`

## addressType

The type of thing this address is for.

`addressType`

* is optional

* Type: `string`

* cannot be null

* defined in: [PINS Address Schema](address-properties-addresstype.md "address.schema.json#/properties/addressType")

### addressType Type

`string`

### addressType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"site"`         |             |
| `"neighbouring"` |             |
| `"organisation"` |             |
| `"contact"`      |             |

## caseReference

Business Key for the related case

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Address Schema](address-properties-casereference.md "address.schema.json#/properties/caseReference")

### caseReference Type

`string`

## caseId

The unique ID for the case this representation belongs to.

`caseId`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Address Schema](address-properties-caseid.md "address.schema.json#/properties/caseId")

### caseId Type

`string`

## caseType

The type of case this representation is for.

`caseType`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Address Schema](address-properties-casetype.md "address.schema.json#/properties/caseType")

### caseType Type

`string`

## description

Some sites may have a postcode, but do not have postal addresses.

`description`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-description.md "address.schema.json#/properties/description")

### description Type

`string`

## line1



`line1`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-line1.md "address.schema.json#/properties/line1")

### line1 Type

`string`

## line2



`line2`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-line2.md "address.schema.json#/properties/line2")

### line2 Type

`string`

## townCity



`townCity`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-towncity.md "address.schema.json#/properties/townCity")

### townCity Type

`string`

## county



`county`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-county.md "address.schema.json#/properties/county")

### county Type

`string`

## postcode



`postcode`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-postcode.md "address.schema.json#/properties/postcode")

### postcode Type

`string`

## country



`country`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-country.md "address.schema.json#/properties/country")

### country Type

`string`

## easting



`easting`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-easting.md "address.schema.json#/properties/easting")

### easting Type

`string`

## northing



`northing`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-northing.md "address.schema.json#/properties/northing")

### northing Type

`string`

## latitudeWGS84



`latitudeWGS84`

* is optional

* Type: `number`

* can be null

* defined in: [PINS Address Schema](address-properties-latitudewgs84.md "address.schema.json#/properties/latitudeWGS84")

### latitudeWGS84 Type

`number`

## longitudeWGS84



`longitudeWGS84`

* is optional

* Type: `number`

* can be null

* defined in: [PINS Address Schema](address-properties-longitudewgs84.md "address.schema.json#/properties/longitudeWGS84")

### longitudeWGS84 Type

`number`

## UPRN

The Unique Property Reference Number (UPRN) is a unique number (a geocode) for every addressable location—e.g., a building, a bus stop, a post box, a feature in the landscape, or a defibrillator—in Great Britain.

`UPRN`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Address Schema](address-properties-uprn.md "address.schema.json#/properties/UPRN")

### UPRN Type

`string`

## dependentRequired



`dependentRequired`

* is optional

* Type: unknown

* cannot be null

* defined in: [PINS Address Schema](address-properties-dependentrequired.md "address.schema.json#/properties/dependentRequired")

### dependentRequired Type

unknown

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
