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
| [represented](#represented)                       | `object`  | Required | cannot be null | [Representation](nsip-representation-properties-interested-party.md "interested-party.schema.json#/properties/represented")                     |
| [representative](#representative)                 | `object`  | Optional | cannot be null | [Representation](nsip-representation-properties-interested-party-1.md "interested-party.schema.json#/properties/representative")                |
| [registerFor](#registerfor)                       | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-registerfor.md "nsip-representation.schema.json#/properties/registerFor")                       |
| [representationType](#representationtype)         | `string`  | Optional | cannot be null | [Representation](nsip-representation-properties-representationtype.md "nsip-representation.schema.json#/properties/representationType")         |
| [dateReceived](#datereceived)                     | `string`  | Required | cannot be null | [Representation](nsip-representation-properties-datereceived.md "nsip-representation.schema.json#/properties/dateReceived")                     |
| [attachments](#attachments)                       | `array`   | Optional | cannot be null | [Representation](nsip-representation-properties-attachments.md "nsip-representation.schema.json#/properties/attachments")                       |

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

## represented

Subset of Pins Data Model \[Service User]

`represented`

*   is required

*   Type: `object` ([interested-party](nsip-representation-properties-interested-party-1.md))

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-interested-party-1.md "interested-party.schema.json#/properties/represented")

### represented Type

`object` ([interested-party](nsip-representation-properties-interested-party-1.md))

## representative

Subset of Pins Data Model \[Service User]

`representative`

*   is optional

*   Type: `object` ([interested-party](nsip-representation-properties-interested-party-1.md))

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-interested-party-1.md "interested-party.schema.json#/properties/representative")

### representative Type

`object` ([interested-party](nsip-representation-properties-interested-party-1.md))

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

## attachments



`attachments`

*   is optional

*   Type: `object[]` ([Details](nsip-representation-defs-attachment.md))

*   cannot be null

*   defined in: [Representation](nsip-representation-properties-attachments.md "nsip-representation.schema.json#/properties/attachments")

### attachments Type

`object[]` ([Details](nsip-representation-defs-attachment.md))

# Representation Definitions

## Definitions group attachment

Reference this group by using

```json
{"$ref":"nsip-representation.schema.json#/$defs/attachment"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [documentId](#documentid)   | `string` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-documentid.md "nsip-representation.schema.json#/$defs/attachment/properties/documentId")   |
| [filename](#filename)       | `string` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-filename.md "nsip-representation.schema.json#/$defs/attachment/properties/filename")       |
| [size](#size)               | `number` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-size.md "nsip-representation.schema.json#/$defs/attachment/properties/size")               |
| [mime](#mime)               | `string` | Optional | cannot be null | [Representation](nsip-representation-defs-attachment-properties-mime.md "nsip-representation.schema.json#/$defs/attachment/properties/mime")               |
| [documentURI](#documenturi) | `string` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-documenturi.md "nsip-representation.schema.json#/$defs/attachment/properties/documentURI") |

### documentId

The unique identifier for the file

`documentId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-documentid.md "nsip-representation.schema.json#/$defs/attachment/properties/documentId")

#### documentId Type

`string`

#### documentId Examples

```json
"ID23343453"
```

### filename

Current stored filename of the file

`filename`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-filename.md "nsip-representation.schema.json#/$defs/attachment/properties/filename")

#### filename Type

`string`

#### filename Examples

```json
"filename.pdf"
```

### size



`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-size.md "nsip-representation.schema.json#/$defs/attachment/properties/size")

#### size Type

`number`

#### size Examples

```json
23452
```

### mime



`mime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-mime.md "nsip-representation.schema.json#/$defs/attachment/properties/mime")

#### mime Type

`string`

#### mime Examples

```json
"application/pdf"
```

### documentURI



`documentURI`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-documenturi.md "nsip-representation.schema.json#/$defs/attachment/properties/documentURI")

#### documentURI Type

`string`

#### documentURI Examples

```json
"blob:https://published/en010120/filename.pdf"
```
