## event Type

`object` ([Details](nsip-exam-timetable-defs-event.md))

# event Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                    |
| :------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [eventId](#eventid)                               | `integer` | Required | cannot be null | [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventid.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventId")                               |
| [type](#type)                                     | `string`  | Required | cannot be null | [Examination Timetable](nsip-exam-timetable-defs-event-properties-type.md "nsip-exam-timetable.schema.json#/$defs/event/properties/type")                                     |
| [eventTitle](#eventtitle)                         | `string`  | Required | cannot be null | [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventtitle.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventTitle")                         |
| [description](#description)                       | `string`  | Required | cannot be null | [Examination Timetable](nsip-exam-timetable-defs-event-properties-description.md "nsip-exam-timetable.schema.json#/$defs/event/properties/description")                       |
| [eventDeadlineStartDate](#eventdeadlinestartdate) | `string`  | Optional | can be null    | [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventdeadlinestartdate.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventDeadlineStartDate") |
| [date](#date)                                     | `string`  | Required | cannot be null | [Examination Timetable](nsip-exam-timetable-defs-event-properties-date.md "nsip-exam-timetable.schema.json#/$defs/event/properties/date")                                     |
| [eventLineItems](#eventlineitems)                 | `array`   | Required | cannot be null | [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventlineitems.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventLineItems")                 |

## eventId

Event Identifier

`eventId`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventid.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventId")

### eventId Type

`integer`

## type

Compulsory Acquisition Hearing/Deadline/Issue Specific Hearing etc

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-type.md "nsip-exam-timetable.schema.json#/$defs/event/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                     | Explanation |
| :---------------------------------------- | :---------- |
| `"Accompanied Site Inspection"`           |             |
| `"Compulsory Acquisition Hearing"`        |             |
| `"Deadline"`                              |             |
| `"Deadline For Close Of Examination"`     |             |
| `"Issued By"`                             |             |
| `"Issue Specific Hearing"`                |             |
| `"Open Floor Hearing"`                    |             |
| `"Other Meeting"`                         |             |
| `"Preliminary Meeting"`                   |             |
| `"Procedural Deadline (Pre-Examination)"` |             |
| `"Procedural Decision"`                   |             |
| `"Publication Of"`                        |             |

## eventTitle

Title Of Examination Timetable Event

`eventTitle`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventtitle.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventTitle")

### eventTitle Type

`string`

## description



`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-description.md "nsip-exam-timetable.schema.json#/$defs/event/properties/description")

### description Type

`string`

## eventDeadlineStartDate

Optional start date for event window

`eventDeadlineStartDate`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventdeadlinestartdate.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventDeadlineStartDate")

### eventDeadlineStartDate Type

`string`

### eventDeadlineStartDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### eventDeadlineStartDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## date

Event Date = effective deadline (end) date

`date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-date.md "nsip-exam-timetable.schema.json#/$defs/event/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### date Examples

```json
"2023-07-27T20:30:00.000Z"
```

## eventLineItems



`eventLineItems`

*   is required

*   Type: `object[]` ([Details](nsip-exam-timetable-defs-line-item.md))

*   cannot be null

*   defined in: [Examination Timetable](nsip-exam-timetable-defs-event-properties-eventlineitems.md "nsip-exam-timetable.schema.json#/$defs/event/properties/eventLineItems")

### eventLineItems Type

`object[]` ([Details](nsip-exam-timetable-defs-line-item.md))
