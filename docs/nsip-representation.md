## Representation Type

`object` ([Representation](nsip-representation.md))

# Representation Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                      |
| :------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| [representationId](#representationid)             | `integer` | Required | cannot be null | [Representation](nsip-representation-properties-representationid.md "nsip-representation.schema.json#/properties/representationId")             |
| [referenceId](#referenceid)                       | `string`  | Required | can be null    | [Representation](nsip-representation-properties-referenceid.md "nsip-representation.schema.json#/properties/referenceId")                       |
| [examinationLibraryRef](#examinationlibraryref)   | `string`  | Required | can be null    | [Representation](nsip-representation-properties-examinationlibraryref.md "nsip-representation.schema.json#/properties/examinationLibraryRef")   |
| [caseRef](#caseref)                               | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-caseref.md "nsip-representation.schema.json#/properties/caseRef")                               |
| [caseId](#caseid)                                 | `integer` | Required | can be null    | [Representation](nsip-representation-properties-caseid.md "nsip-representation.schema.json#/properties/caseId")                                 |
| [status](#status)                                 | `string`  | Required | can be null    | [Representation](nsip-representation-properties-status.md "nsip-representation.schema.json#/properties/status")                                 |
| [originalRepresentation](#originalrepresentation) | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-originalrepresentation.md "nsip-representation.schema.json#/properties/originalRepresentation") |
| [redacted](#redacted)                             | `boolean` | Required | can be null    | [Representation](nsip-representation-properties-redacted.md "nsip-representation.schema.json#/properties/redacted")                             |
| [redactedRepresentation](#redactedrepresentation) | `string`  | Required | can be null    | [Representation](nsip-representation-properties-redactedrepresentation.md "nsip-representation.schema.json#/properties/redactedRepresentation") |
| [redactedBy](#redactedby)                         | `string`  | Required | can be null    | [Representation](nsip-representation-properties-redactedby.md "nsip-representation.schema.json#/properties/redactedBy")                         |
| [redactedNotes](#redactednotes)                   | `string`  | Required | can be null    | [Representation](nsip-representation-properties-redactednotes.md "nsip-representation.schema.json#/properties/redactedNotes")                   |
| [representationFrom](#representationfrom)         | `string`  | Required | can be null    | [Representation](nsip-representation-properties-representationfrom.md "nsip-representation.schema.json#/properties/representationFrom")         |
| [representedId](#representedid)                   | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-representedid.md "nsip-representation.schema.json#/properties/representedId")                   |
| [representativeId](#representativeid)             | `string`  | Required | can be null    | [Representation](nsip-representation-properties-representativeid.md "nsip-representation.schema.json#/properties/representativeId")             |
| [registerFor](#registerfor)                       | `string`  | Required | can be null    | [Representation](nsip-representation-properties-registerfor.md "nsip-representation.schema.json#/properties/registerFor")                       |
| [representationType](#representationtype)         | `string`  | Required | can be null    | [Representation](nsip-representation-properties-representationtype.md "nsip-representation.schema.json#/properties/representationType")         |
| [dateReceived](#datereceived)                     | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-datereceived.md "nsip-representation.schema.json#/properties/dateReceived")                     |
| [attachmentIds](#attachmentids)                   | `array`   | Required | cannot be null | [Representation](nsip-representation-properties-attachmentids.md "nsip-representation.schema.json#/properties/attachmentIds")                   |
| Additional Properties                             | Any       | Optional | can be null    |                                                                                                                                                 |

## representationId



`representationId`

* is required

* Type: `integer`

* cannot be null

* defined in: [Representation](nsip-representation-properties-representationid.md "nsip-representation.schema.json#/properties/representationId")

### representationId Type

`integer`

## referenceId



`referenceId`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-referenceid.md "nsip-representation.schema.json#/properties/referenceId")

### referenceId Type

`string`

### referenceId Examples

```json
"TR043003-000010"
```

## examinationLibraryRef



`examinationLibraryRef`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-examinationlibraryref.md "nsip-representation.schema.json#/properties/examinationLibraryRef")

### examinationLibraryRef Type

`string`

### examinationLibraryRef Examples

```json
"RR-0001"
```

## caseRef



`caseRef`

* is required

* Type: `string`

* cannot be null

* defined in: [Representation](nsip-representation-properties-caseref.md "nsip-representation.schema.json#/properties/caseRef")

### caseRef Type

`string`

## caseId

The unique identifier within the Back Office. This is not the same as the case reference

`caseId`

* is required

* Type: `integer`

* can be null

* defined in: [Representation](nsip-representation-properties-caseid.md "nsip-representation.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1242
```

## status



`status`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-status.md "nsip-representation.schema.json#/properties/status")

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



`originalRepresentation`

* is required

* Type: `string`

* cannot be null

* defined in: [Representation](nsip-representation-properties-originalrepresentation.md "nsip-representation.schema.json#/properties/originalRepresentation")

### originalRepresentation Type

`string`

## redacted



`redacted`

* is required

* Type: `boolean`

* can be null

* defined in: [Representation](nsip-representation-properties-redacted.md "nsip-representation.schema.json#/properties/redacted")

### redacted Type

`boolean`

## redactedRepresentation



`redactedRepresentation`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-redactedrepresentation.md "nsip-representation.schema.json#/properties/redactedRepresentation")

### redactedRepresentation Type

`string`

## redactedBy



`redactedBy`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-redactedby.md "nsip-representation.schema.json#/properties/redactedBy")

### redactedBy Type

`string`

### redactedBy Examples

```json
"Joe Blogs"
```

## redactedNotes



`redactedNotes`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-redactednotes.md "nsip-representation.schema.json#/properties/redactedNotes")

### redactedNotes Type

`string`

### redactedNotes Examples

```json
"Removed names of family members"
```

## representationFrom



`representationFrom`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-representationfrom.md "nsip-representation.schema.json#/properties/representationFrom")

### representationFrom Type

`string`

### representationFrom Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"PERSON"`       |             |
| `"ORGANISATION"` |             |
| `"AGENT"`        |             |
| `null`           |             |

## representedId

ServiceUser Id of the person or organisation being represented

`representedId`

* is required

* Type: `string`

* cannot be null

* defined in: [Representation](nsip-representation-properties-representedid.md "nsip-representation.schema.json#/properties/representedId")

### representedId Type

`string`

## representativeId

ServiceUser Id of the person or organisation submitting representation in the case of Agent representationFrom

`representativeId`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-representativeid.md "nsip-representation.schema.json#/properties/representativeId")

### representativeId Type

`string`

## registerFor



`registerFor`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-registerfor.md "nsip-representation.schema.json#/properties/registerFor")

### registerFor Type

`string`

### registerFor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"PERSON"`       |             |
| `"ORGANISATION"` |             |
| `"FAMILY_GROUP"` |             |
| `null`           |             |

## representationType



`representationType`

* is required

* Type: `string`

* can be null

* defined in: [Representation](nsip-representation-properties-representationtype.md "nsip-representation.schema.json#/properties/representationType")

### representationType Type

`string`

### representationType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                | Explanation |
| :----------------------------------- | :---------- |
| `"Local Authorities"`                |             |
| `"Parish Councils"`                  |             |
| `"Members of the Public/Businesses"` |             |
| `"Public & Businesses"`              |             |
| `"Statutory Consultees"`             |             |
| `"Non-Statutory Organisations"`      |             |
| `"Another Individual"`               |             |
| `null`                               |             |

## dateReceived



`dateReceived`

* is required

* Type: `string`

* cannot be null

* defined in: [Representation](nsip-representation-properties-datereceived.md "nsip-representation.schema.json#/properties/dateReceived")

### dateReceived Type

`string`

### dateReceived Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateReceived Examples

```json
"2023-07-27T20:30:00.000Z"
```

## attachmentIds



`attachmentIds`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Representation](nsip-representation-properties-attachmentids.md "nsip-representation.schema.json#/properties/attachmentIds")

### attachmentIds Type

`string[]`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
