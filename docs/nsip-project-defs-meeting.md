## meeting Type

`object` ([Details](nsip-project-defs-meeting.md))

# meeting Properties

| Property                                              | Type     | Required | Nullable    | Defined by                                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [meetingAgenda](#meetingagenda)                       | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-meetingagenda.md "nsip-project.schema.json#/$defs/meeting/properties/meetingAgenda")                       |
| [planningInspectorateRole](#planninginspectoraterole) | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-planninginspectoraterole.md "nsip-project.schema.json#/$defs/meeting/properties/planningInspectorateRole") |
| [meetingDate](#meetingdate)                           | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-meetingdate.md "nsip-project.schema.json#/$defs/meeting/properties/meetingDate")                           |
| [meetingType](#meetingtype)                           | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-meetingtype.md "nsip-project.schema.json#/$defs/meeting/properties/meetingType")                           |
| Additional Properties                                 | Any      | Optional | can be null |                                                                                                                                                                |

## meetingAgenda

Meeting agenda

`meetingAgenda`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-meetingagenda.md "nsip-project.schema.json#/$defs/meeting/properties/meetingAgenda")

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

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-planninginspectoraterole.md "nsip-project.schema.json#/$defs/meeting/properties/planningInspectorateRole")

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

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-meetingdate.md "nsip-project.schema.json#/$defs/meeting/properties/meetingDate")

### meetingDate Type

`string`

### meetingDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### meetingDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## meetingType

Type of Meeting

`meetingType`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-meetingtype.md "nsip-project.schema.json#/$defs/meeting/properties/meetingType")

### meetingType Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
