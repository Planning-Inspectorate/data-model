## nsip-exam-timetable-submission Type

`object` ([nsip-exam-timetable-submission](nsip-exam-timetable-submission.md))

# nsip-exam-timetable-submission Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :-------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [status](#status)                 | `string` | Required | cannot be null | [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-status.md "nsip-exam-timetable-submission.schema.json#/properties/status")                 |
| [deadline](#deadline)             | `string` | Required | cannot be null | [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-deadline.md "nsip-exam-timetable-submission.schema.json#/properties/deadline")             |
| [submissionType](#submissiontype) | `string` | Required | cannot be null | [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-submissiontype.md "nsip-exam-timetable-submission.schema.json#/properties/submissionType") |
| [blobGuid](#blobguid)             | `string` | Required | cannot be null | [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-blobguid.md "nsip-exam-timetable-submission.schema.json#/properties/blobGuid")             |
| [documentName](#documentname)     | `string` | Required | cannot be null | [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-documentname.md "nsip-exam-timetable-submission.schema.json#/properties/documentName")     |

## status



`status`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-status.md "nsip-exam-timetable-submission.schema.json#/properties/status")

### status Type

`string`

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"SUCCESS"`        |             |
| `"VIRUS_DETECTED"` |             |
| `"FAILURE"`        |             |

## deadline



`deadline`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-deadline.md "nsip-exam-timetable-submission.schema.json#/properties/deadline")

### deadline Type

`string`

## submissionType



`submissionType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-submissiontype.md "nsip-exam-timetable-submission.schema.json#/properties/submissionType")

### submissionType Type

`string`

## blobGuid



`blobGuid`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-blobguid.md "nsip-exam-timetable-submission.schema.json#/properties/blobGuid")

### blobGuid Type

`string`

## documentName



`documentName`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-exam-timetable-submission](nsip-exam-timetable-submission-properties-documentname.md "nsip-exam-timetable-submission.schema.json#/properties/documentName")

### documentName Type

`string`
