## NSIP Meeting Type

`object` ([NSIP Meeting](nsip-meeting.md))

# NSIP Meeting Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [meetingID](#meetingid)                                   | `integer` | Required | cannot be null | [NSIP Meeting](nsip-meeting-properties-meetingid.md "nsip-meeting.schema.json#/properties/meetingID")                                   |
| [caseId](#caseid)                                         | `integer` | Required | cannot be null | [NSIP Meeting](nsip-meeting-properties-caseid.md "nsip-meeting.schema.json#/properties/caseId")                                         |
| [caseReference](#casereference)                           | `string`  | Optional | can be null    | [NSIP Meeting](nsip-meeting-properties-casereference.md "nsip-meeting.schema.json#/properties/caseReference")                           |
| [meetingAgenda](#meetingagenda)                           | `string`  | Optional | can be null    | [NSIP Meeting](nsip-meeting-properties-meetingagenda.md "nsip-meeting.schema.json#/properties/meetingAgenda")                           |
| [planningInspectorateRole](#planninginspectoraterole)     | `string`  | Optional | can be null    | [NSIP Meeting](nsip-meeting-properties-planninginspectoraterole.md "nsip-meeting.schema.json#/properties/planningInspectorateRole")     |
| [meetingDate](#meetingdate)                               | `string`  | Optional | can be null    | [NSIP Meeting](nsip-meeting-properties-meetingdate.md "nsip-meeting.schema.json#/properties/meetingDate")                               |
| [estimatedPrelimMeetingDate](#estimatedprelimmeetingdate) | `string`  | Optional | can be null    | [NSIP Meeting](nsip-meeting-properties-estimatedprelimmeetingdate.md "nsip-meeting.schema.json#/properties/estimatedPrelimMeetingDate") |
| [meetingType](#meetingtype)                               | `string`  | Optional | can be null    | [NSIP Meeting](nsip-meeting-properties-meetingtype.md "nsip-meeting.schema.json#/properties/meetingType")                               |
| Additional Properties                                     | Any       | Optional | can be null    |                                                                                                                                         |

## meetingID

The unique identifier for an NSIP Meeting.

`meetingID`

* is required

* Type: `integer`

* cannot be null

* defined in: [NSIP Meeting](nsip-meeting-properties-meetingid.md "nsip-meeting.schema.json#/properties/meetingID")

### meetingID Type

`integer`

### meetingID Examples

```json
1234
```

## caseId

The unique identifier for the case within the Back Office. This is not the same as the case reference

`caseId`

* is required

* Type: `integer`

* cannot be null

* defined in: [NSIP Meeting](nsip-meeting-properties-caseid.md "nsip-meeting.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1242
```

## caseReference



`caseReference`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Meeting](nsip-meeting-properties-casereference.md "nsip-meeting.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"BC0510001"
```

## meetingAgenda

Meeting agenda

`meetingAgenda`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Meeting](nsip-meeting-properties-meetingagenda.md "nsip-meeting.schema.json#/properties/meetingAgenda")

### meetingAgenda Type

`string`

### meetingAgenda Examples

```json
"Flood Risk Assessment (FRA)"
```

## planningInspectorateRole

Planning Inspectorate role

`planningInspectorateRole`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Meeting](nsip-meeting-properties-planninginspectoraterole.md "nsip-meeting.schema.json#/properties/planningInspectorateRole")

### planningInspectorateRole Type

`string`

### planningInspectorateRole Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"facilitator"` |             |
| `"advisor"`     |             |
| `"observer"`    |             |
| `null`          |             |

### planningInspectorateRole Examples

```json
"facilitator"
```

## meetingDate

Meeting date

`meetingDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Meeting](nsip-meeting-properties-meetingdate.md "nsip-meeting.schema.json#/properties/meetingDate")

### meetingDate Type

`string`

### meetingDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### meetingDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## estimatedPrelimMeetingDate

Estimated Preliminary Meeting date

`estimatedPrelimMeetingDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Meeting](nsip-meeting-properties-estimatedprelimmeetingdate.md "nsip-meeting.schema.json#/properties/estimatedPrelimMeetingDate")

### estimatedPrelimMeetingDate Type

`string`

### estimatedPrelimMeetingDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### estimatedPrelimMeetingDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## meetingType

Type of Meeting

`meetingType`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Meeting](nsip-meeting-properties-meetingtype.md "nsip-meeting.schema.json#/properties/meetingType")

### meetingType Type

`string`

### meetingType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"evidence_plan"` |             |
| `"project"`       |             |
| `null`            |             |

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
