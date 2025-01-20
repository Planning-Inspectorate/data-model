## Get Timesheets API response Type

`object` ([Get Timesheets API response](gettimesheets-response.md))

# Get Timesheets API response Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [caseReference](#casereference)               | `integer` | Required | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-casereference.md "gettimesheets-response.schema.json#/properties/caseReference")               |
| [applicationReference](#applicationreference) | `string`  | Required | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-applicationreference.md "gettimesheets-response.schema.json#/properties/applicationReference") |
| [siteAddressLine1](#siteaddressline1)         | `string`  | Optional | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-siteaddressline1.md "gettimesheets-response.schema.json#/properties/siteAddressLine1")         |
| [siteAddressLine2](#siteaddressline2)         | `string`  | Optional | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-siteaddressline2.md "gettimesheets-response.schema.json#/properties/siteAddressLine2")         |
| [siteAddressTown](#siteaddresstown)           | `string`  | Optional | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-siteaddresstown.md "gettimesheets-response.schema.json#/properties/siteAddressTown")           |
| [siteAddressCounty](#siteaddresscounty)       | `string`  | Optional | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-siteaddresscounty.md "gettimesheets-response.schema.json#/properties/siteAddressCounty")       |
| [siteAddressPostcode](#siteaddresspostcode)   | `string`  | Optional | cannot be null | [Get Timesheets API response](gettimesheets-response-properties-siteaddresspostcode.md "gettimesheets-response.schema.json#/properties/siteAddressPostcode")   |
| Additional Properties                         | Any       | Optional | can be null    |                                                                                                                                                                |

## caseReference

External case identifier

`caseReference`

* is required

* Type: `integer`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-casereference.md "gettimesheets-response.schema.json#/properties/caseReference")

### caseReference Type

`integer`

### caseReference Examples

```json
"6002744"
```

## applicationReference

The unique identifier of the application

`applicationReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-applicationreference.md "gettimesheets-response.schema.json#/properties/applicationReference")

### applicationReference Type

`string`

### applicationReference Examples

```json
"12345"
```

## siteAddressLine1

First line of case site address

`siteAddressLine1`

* is optional

* Type: `string`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-siteaddressline1.md "gettimesheets-response.schema.json#/properties/siteAddressLine1")

### siteAddressLine1 Type

`string`

### siteAddressLine1 Examples

```json
"21 The Pavement"
```

## siteAddressLine2

Second line of case site address

`siteAddressLine2`

* is optional

* Type: `string`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-siteaddressline2.md "gettimesheets-response.schema.json#/properties/siteAddressLine2")

### siteAddressLine2 Type

`string`

### siteAddressLine2 Examples

```json
"Shotesham Road"
```

## siteAddressTown

Town / City of the site address

`siteAddressTown`

* is optional

* Type: `string`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-siteaddresstown.md "gettimesheets-response.schema.json#/properties/siteAddressTown")

### siteAddressTown Type

`string`

### siteAddressTown Examples

```json
"Bristol"
```

## siteAddressCounty

County of the site address

`siteAddressCounty`

* is optional

* Type: `string`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-siteaddresscounty.md "gettimesheets-response.schema.json#/properties/siteAddressCounty")

### siteAddressCounty Type

`string`

### siteAddressCounty Examples

```json
"Wandsworth"
```

## siteAddressPostcode

Postal code of the site address

`siteAddressPostcode`

* is optional

* Type: `string`

* cannot be null

* defined in: [Get Timesheets API response](gettimesheets-response-properties-siteaddresspostcode.md "gettimesheets-response.schema.json#/properties/siteAddressPostcode")

### siteAddressPostcode Type

`string`

### siteAddressPostcode Examples

```json
"SW4 0HY"
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
