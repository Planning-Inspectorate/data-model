## Appeal Representation Type

`object` ([Appeal Representation](appeal-representation.md))

# Appeal Representation Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [representationId](#representationid)             | `string`  | Required | cannot be null | [Appeal Representation](appeal-representation-properties-representationid.md "appeal-representation.schema.json#/properties/representationId")             |
| [caseId](#caseid)                                 | `integer` | Required | can be null    | [Appeal Representation](appeal-representation-properties-caseid.md "appeal-representation.schema.json#/properties/caseId")                                 |
| [caseReference](#casereference)                   | `string`  | Required | cannot be null | [Appeal Representation](appeal-representation-properties-casereference.md "appeal-representation.schema.json#/properties/caseReference")                   |
| [status](#status)                                 | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-status.md "appeal-representation.schema.json#/properties/status")                                 |
| [originalRepresentation](#originalrepresentation) | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-originalrepresentation.md "appeal-representation.schema.json#/properties/originalRepresentation") |
| [redacted](#redacted)                             | `boolean` | Required | can be null    | [Appeal Representation](appeal-representation-properties-redacted.md "appeal-representation.schema.json#/properties/redacted")                             |
| [redactedRepresentation](#redactedrepresentation) | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-redactedrepresentation.md "appeal-representation.schema.json#/properties/redactedRepresentation") |
| [redactedBy](#redactedby)                         | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-redactedby.md "appeal-representation.schema.json#/properties/redactedBy")                         |
| [invalidDetails](#invaliddetails)                 | `array`   | Required | can be null    | [Appeal Representation](appeal-representation-properties-invaliddetails.md "appeal-representation.schema.json#/properties/invalidDetails")                 |
| [source](#source)                                 | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-source.md "appeal-representation.schema.json#/properties/source")                                 |
| [representedId](#representedid)                   | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-representedid.md "appeal-representation.schema.json#/properties/representedId")                   |
| [representativeId](#representativeid)             | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-representativeid.md "appeal-representation.schema.json#/properties/representativeId")             |
| [lpaCode](#lpacode)                               | `string`  | Optional | can be null    | [Appeal Representation](appeal-representation-properties-lpacode.md "appeal-representation.schema.json#/properties/lpaCode")                               |
| [representationType](#representationtype)         | `string`  | Required | can be null    | [Appeal Representation](appeal-representation-properties-representationtype.md "appeal-representation.schema.json#/properties/representationType")         |
| [dateReceived](#datereceived)                     | `string`  | Required | cannot be null | [Appeal Representation](appeal-representation-properties-datereceived.md "appeal-representation.schema.json#/properties/dateReceived")                     |
| [documentIds](#documentids)                       | `array`   | Optional | cannot be null | [Appeal Representation](appeal-representation-properties-documentids.md "appeal-representation.schema.json#/properties/documentIds")                       |
| Additional Properties                             | Any       | Optional | can be null    |                                                                                                                                                            |

## representationId

The unique identifier for the representation

> This is a composite key with the caseReference and a representation counter

`representationId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Representation](appeal-representation-properties-representationid.md "appeal-representation.schema.json#/properties/representationId")

### representationId Type

`string`

### representationId Examples

```json
"7000000-1"
```

## caseId

Internal case identifier

`caseId`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-caseid.md "appeal-representation.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1200
```

## caseReference

External case identifier

`caseReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Representation](appeal-representation-properties-casereference.md "appeal-representation.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"7002471"
```

## status

Status of the representation

> BO workflow should validate or withdraw a representation.

`status`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-status.md "appeal-representation.schema.json#/properties/status")

### status Type

`string`

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"awaiting_review"` |             |
| `"referred"`        |             |
| `"valid"`           |             |
| `"invalid"`         |             |
| `"published"`       |             |
| `"archived"`        |             |
| `"draft"`           |             |
| `"withdrawn"`       |             |
| `null`              |             |

## originalRepresentation

The original representation

`originalRepresentation`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-originalrepresentation.md "appeal-representation.schema.json#/properties/originalRepresentation")

### originalRepresentation Type

`string`

## redacted

Indicates if the representation is redacted

`redacted`

*   is required

*   Type: `boolean`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-redacted.md "appeal-representation.schema.json#/properties/redacted")

### redacted Type

`boolean`

## redactedRepresentation

The redacted version of the representation

`redactedRepresentation`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-redactedrepresentation.md "appeal-representation.schema.json#/properties/redactedRepresentation")

### redactedRepresentation Type

`string`

## redactedBy

Unique identifier for the case team member that performed the redaction

> This is the user in Entra ID

`redactedBy`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-redactedby.md "appeal-representation.schema.json#/properties/redactedBy")

### redactedBy Type

`string`

## invalidDetails

A list of reasons why the representation has been marked as invalid

> The list will contain items only if the status is `invalid`

`invalidDetails`

*   is required

*   Type: `string[]`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-invaliddetails.md "appeal-representation.schema.json#/properties/invalidDetails")

### invalidDetails Type

`string[]`

## source

Source of the representation (citizen or LPA)

`source`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-source.md "appeal-representation.schema.json#/properties/source")

### source Type

`string`

### source Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"lpa"`     |             |
| `"citizen"` |             |
| `null`      |             |

## representedId

ServiceUser Id of the person or organisation being represented

`representedId`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-representedid.md "appeal-representation.schema.json#/properties/representedId")

### representedId Type

`string`

## representativeId

ServiceUser Id of the agent representing the owner

`representativeId`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-representativeid.md "appeal-representation.schema.json#/properties/representativeId")

### representativeId Type

`string`

## lpaCode

Will only be filled if the representationType is a LPA statement

`lpaCode`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-lpacode.md "appeal-representation.schema.json#/properties/lpaCode")

### lpaCode Type

`string`

## representationType

The type of representation

`representationType`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Representation](appeal-representation-properties-representationtype.md "appeal-representation.schema.json#/properties/representationType")

### representationType Type

`string`

### representationType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"statement"`     |             |
| `"comment"`       |             |
| `"final_comment"` |             |
| `null`            |             |

## dateReceived



`dateReceived`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Representation](appeal-representation-properties-datereceived.md "appeal-representation.schema.json#/properties/dateReceived")

### dateReceived Type

`string`

### dateReceived Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateReceived Examples

```json
"2023-07-27T20:30:00.000Z"
```

## documentIds

An array of documentIds

`documentIds`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Appeal Representation](appeal-representation-properties-documentids.md "appeal-representation.schema.json#/properties/documentIds")

### documentIds Type

`string[]`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
