## Representation Type

`object` ([Representation](nsip-representation.md))

# Representation Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                      |
| :------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| [representationId](#representationid)             | `number`  | Required | cannot be null | [Representation](nsip-representation-properties-representationid.md "nsip-representation.schema.json#/properties/representationId")             |
| [referenceId](#referenceid)                       | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-referenceid.md "nsip-representation.schema.json#/properties/referenceId")                       |
| [examinationLibraryRef](#examinationlibraryref)   | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-examinationlibraryref.md "nsip-representation.schema.json#/properties/examinationLibraryRef")   |
| [caseRef](#caseref)                               | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-caseref.md "nsip-representation.schema.json#/properties/caseRef")                               |
| [caseId](#caseid)                                 | `number`  | Optional | cannot be null | [Representation](nsip-representation-properties-caseid.md "nsip-representation.schema.json#/properties/caseId")                                 |
| [status](#status)                                 | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-status.md "nsip-representation.schema.json#/properties/status")                                 |
| [originalRepresentation](#originalrepresentation) | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-originalrepresentation.md "nsip-representation.schema.json#/properties/originalRepresentation") |
| [redacted](#redacted)                             | `boolean` | Optional | cannot be null | [Representation](nsip-representation-properties-redacted.md "nsip-representation.schema.json#/properties/redacted")                             |
| [redactedRepresentation](#redactedrepresentation) | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-redactedrepresentation.md "nsip-representation.schema.json#/properties/redactedRepresentation") |
| [redactedBy](#redactedby)                         | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-redactedby.md "nsip-representation.schema.json#/properties/redactedBy")                         |
| [redactedNotes](#redactednotes)                   | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-redactednotes.md "nsip-representation.schema.json#/properties/redactedNotes")                   |
| [representationFrom](#representationfrom)         | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-representationfrom.md "nsip-representation.schema.json#/properties/representationFrom")         |
| [representedId](#representedid)                   | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-representedid.md "nsip-representation.schema.json#/properties/representedId")                   |
| [representativeId](#representativeid)             | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-representativeid.md "nsip-representation.schema.json#/properties/representativeId")             |
| [registerFor](#registerfor)                       | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-registerfor.md "nsip-representation.schema.json#/properties/registerFor")                       |
| [representationType](#representationtype)         | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-representationtype.md "nsip-representation.schema.json#/properties/representationType")         |
| [dateReceived](#datereceived)                     | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-datereceived.md "nsip-representation.schema.json#/properties/dateReceived")                     |
| [attachmentIds](#attachmentids)                   | `array`   | Optional | cannot be null | [Representation](nsip-representation-properties-attachmentids.md "nsip-representation.schema.json#/properties/attachmentIds")                   |

## representationId



`representationId`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-representationid.md "nsip-representation.schema.json#/properties/representationId")

### representationId Type

`number`

## referenceId



`referenceId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-referenceid.md "nsip-representation.schema.json#/properties/referenceId")

### referenceId Type

`string`

### referenceId Examples

```json
"TR043003-000010"
```

## examinationLibraryRef



`examinationLibraryRef`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-examinationlibraryref.md "nsip-representation.schema.json#/properties/examinationLibraryRef")

### examinationLibraryRef Type

`string`

### examinationLibraryRef Examples

```json
"RR-0001"
```

## caseRef



`caseRef`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-caseref.md "nsip-representation.schema.json#/properties/caseRef")

### caseRef Type

`string`

## caseId

The unique identifier within the Back Office. This is not the same as the case reference

`caseId`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-caseid.md "nsip-representation.schema.json#/properties/caseId")

### caseId Type

`number`

### caseId Examples

```json
1242
```

## status



`status`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-status.md "nsip-representation.schema.json#/properties/status")

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

## originalRepresentation



`originalRepresentation`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-originalrepresentation.md "nsip-representation.schema.json#/properties/originalRepresentation")

### originalRepresentation Type

`string`

## redacted



`redacted`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-redacted.md "nsip-representation.schema.json#/properties/redacted")

### redacted Type

`boolean`

## redactedRepresentation



`redactedRepresentation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-redactedrepresentation.md "nsip-representation.schema.json#/properties/redactedRepresentation")

### redactedRepresentation Type

`string`

## redactedBy



`redactedBy`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-redactedby.md "nsip-representation.schema.json#/properties/redactedBy")

### redactedBy Type

`string`

### redactedBy Examples

```json
"Joe Blogs"
```

## redactedNotes



`redactedNotes`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-redactednotes.md "nsip-representation.schema.json#/properties/redactedNotes")

### redactedNotes Type

`string`

### redactedNotes Examples

```json
"Removed names of family members"
```

## representationFrom



`representationFrom`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-representationfrom.md "nsip-representation.schema.json#/properties/representationFrom")

### representationFrom Type

`string`

### representationFrom Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"PERSON"`       |             |
| `"ORGANISATION"` |             |
| `"AGENT"`        |             |

## representedId

ServiceUser Id of the person or organisation being represented

`representedId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-representedid.md "nsip-representation.schema.json#/properties/representedId")

### representedId Type

`string`

## representativeId

ServiceUser Id of the person or organisation submitting representation in the case of Agent representationFrom

`representativeId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-representativeid.md "nsip-representation.schema.json#/properties/representativeId")

### representativeId Type

`string`

## registerFor



`registerFor`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-registerfor.md "nsip-representation.schema.json#/properties/registerFor")

### registerFor Type

`string`

### registerFor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"PERSON"`       |             |
| `"ORGANISATION"` |             |
| `"FAMILY_GROUP"` |             |

## representationType



`representationType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-representationtype.md "nsip-representation.schema.json#/properties/representationType")

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

## dateReceived



`dateReceived`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-datereceived.md "nsip-representation.schema.json#/properties/dateReceived")

### dateReceived Type

`string`

### dateReceived Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateReceived Examples

```json
"2023-03-26T00:00:00.000"
```

## attachmentIds



`attachmentIds`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-attachmentids.md "nsip-representation.schema.json#/properties/attachmentIds")

### attachmentIds Type

`string[]`
