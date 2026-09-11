## representationDocument Type

`object` ([Details](applications-representation-defs-representationdocument.md))

# representationDocument Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                             | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-id.md "applications-representation.schema.json#/$defs/representationDocument/properties/id")                             |
| [representationId](#representationid) | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-representationid.md "applications-representation.schema.json#/$defs/representationDocument/properties/representationId") |
| [itemId](#itemid)                     | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-itemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/itemId")                     |
| [fileName](#filename)                 | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-filename.md "applications-representation.schema.json#/$defs/representationDocument/properties/fileName")                 |
| [redactedItemId](#redacteditemid)     | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redacteditemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedItemId")     |
| [redactedFileName](#redactedfilename) | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redactedfilename.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedFileName") |
| [status](#status)                     | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-status.md "applications-representation.schema.json#/$defs/representationDocument/properties/status")                     |

## id

Source Key for Representation Document

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-id.md "applications-representation.schema.json#/$defs/representationDocument/properties/id")

### id Type

`string`

## representationId

The representation this relates to

`representationId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-representationid.md "applications-representation.schema.json#/$defs/representationDocument/properties/representationId")

### representationId Type

`string`

## itemId

The id of the item in SharePoint

`itemId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-itemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/itemId")

### itemId Type

`string`

## fileName

The name of the file

`fileName`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-filename.md "applications-representation.schema.json#/$defs/representationDocument/properties/fileName")

### fileName Type

`string`

## redactedItemId

The id of the redacted version of the item in sharepoint

`redactedItemId`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redacteditemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedItemId")

### redactedItemId Type

`string`

## redactedFileName

the name of the redacted file

`redactedFileName`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redactedfilename.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedFileName")

### redactedFileName Type

`string`

## status

The status of the document

`status`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-status.md "applications-representation.schema.json#/$defs/representationDocument/properties/status")

### status Type

`string`

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"Awaiting review"` |             |
| `"Accepted"`        |             |
| `"Rejected"`        |             |
| `"Withdrawn"`       |             |
