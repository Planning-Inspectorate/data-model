## Plans Event Type

`object` ([Plans Event](plans-event.md))

# Plans Event Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                           |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                 | `string` | Required | cannot be null | [Plans Event](plans-event-properties-id.md "plans-event.schema.json#/properties/id")                                 |
| [caseId](#caseid)                         | `string` | Required | cannot be null | [Plans Event](plans-event-properties-caseid.md "plans-event.schema.json#/properties/caseId")                         |
| [caseReference](#casereference)           | `string` | Required | cannot be null | [Plans Event](plans-event-properties-casereference.md "plans-event.schema.json#/properties/caseReference")           |
| [eventType](#eventtype)                   | `string` | Required | cannot be null | [Plans Event](plans-event-properties-eventtype.md "plans-event.schema.json#/properties/eventType")                   |
| [eventLocationType](#eventlocationtype)   | `string` | Optional | cannot be null | [Plans Event](plans-event-properties-eventlocationtype.md "plans-event.schema.json#/properties/eventLocationType")   |
| [eventStartDateTime](#eventstartdatetime) | `string` | Optional | can be null    | [Plans Event](plans-event-properties-eventstartdatetime.md "plans-event.schema.json#/properties/eventStartDateTime") |
| [eventEndDateTime](#eventenddatetime)     | `string` | Optional | can be null    | [Plans Event](plans-event-properties-eventenddatetime.md "plans-event.schema.json#/properties/eventEndDateTime")     |
| [remoteEventLink](#remoteeventlink)       | `string` | Optional | can be null    | [Plans Event](plans-event-properties-remoteeventlink.md "plans-event.schema.json#/properties/remoteEventLink")       |
| [venueName](#venuename)                   | `string` | Optional | can be null    | [Plans Event](plans-event-properties-venuename.md "plans-event.schema.json#/properties/venueName")                   |
| [addressLine1](#addressline1)             | `string` | Optional | can be null    | [Plans Event](plans-event-properties-addressline1.md "plans-event.schema.json#/properties/addressLine1")             |
| [addressLine2](#addressline2)             | `string` | Optional | can be null    | [Plans Event](plans-event-properties-addressline2.md "plans-event.schema.json#/properties/addressLine2")             |
| [addressTown](#addresstown)               | `string` | Optional | can be null    | [Plans Event](plans-event-properties-addresstown.md "plans-event.schema.json#/properties/addressTown")               |
| [addressCounty](#addresscounty)           | `string` | Optional | can be null    | [Plans Event](plans-event-properties-addresscounty.md "plans-event.schema.json#/properties/addressCounty")           |
| [addressPostcode](#addresspostcode)       | `string` | Optional | can be null    | [Plans Event](plans-event-properties-addresspostcode.md "plans-event.schema.json#/properties/addressPostcode")       |
| Additional Properties                     | Any      | Optional | can be null    |                                                                                                                      |

## id

Primary Key

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Plans Event](plans-event-properties-id.md "plans-event.schema.json#/properties/id")

### id Type

`string`

### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## caseId

Foreign Key --> \[plans-case]

`caseId`

* is required

* Type: `string`

* cannot be null

* defined in: [Plans Event](plans-event-properties-caseid.md "plans-event.schema.json#/properties/caseId")

### caseId Type

`string`

### caseId Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## caseReference

CBOS Business Key case identifier

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Plans Event](plans-event-properties-casereference.md "plans-event.schema.json#/properties/caseReference")

### caseReference Type

`string`

## eventType

Type of event

`eventType`

* is required

* Type: `string`

* cannot be null

* defined in: [Plans Event](plans-event-properties-eventtype.md "plans-event.schema.json#/properties/eventType")

### eventType Type

`string`

### eventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"examination_hearing"` |             |
| `"gateway_2_workshop"`  |             |
| `"other"`               |             |

## eventLocationType

How event is delivered

`eventLocationType`

* is optional

* Type: `string`

* cannot be null

* defined in: [Plans Event](plans-event-properties-eventlocationtype.md "plans-event.schema.json#/properties/eventLocationType")

### eventLocationType Type

`string`

### eventLocationType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"in_person"` |             |
| `"hybrid"`    |             |
| `"virtual"`   |             |

## eventStartDateTime

Event start date and time

`eventStartDateTime`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-eventstartdatetime.md "plans-event.schema.json#/properties/eventStartDateTime")

### eventStartDateTime Type

`string`

### eventStartDateTime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventEndDateTime

Event end date and time

`eventEndDateTime`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-eventenddatetime.md "plans-event.schema.json#/properties/eventEndDateTime")

### eventEndDateTime Type

`string`

### eventEndDateTime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## remoteEventLink

URL of hybrid or virtual event

`remoteEventLink`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-remoteeventlink.md "plans-event.schema.json#/properties/remoteEventLink")

### remoteEventLink Type

`string`

## venueName

Name of event venue

`venueName`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-venuename.md "plans-event.schema.json#/properties/venueName")

### venueName Type

`string`

## addressLine1

Event address line 1

`addressLine1`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-addressline1.md "plans-event.schema.json#/properties/addressLine1")

### addressLine1 Type

`string`

## addressLine2

Event address line 2

`addressLine2`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-addressline2.md "plans-event.schema.json#/properties/addressLine2")

### addressLine2 Type

`string`

## addressTown

Event address town

`addressTown`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-addresstown.md "plans-event.schema.json#/properties/addressTown")

### addressTown Type

`string`

## addressCounty

Event address county

`addressCounty`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-addresscounty.md "plans-event.schema.json#/properties/addressCounty")

### addressCounty Type

`string`

## addressPostcode

Event address postcode

`addressPostcode`

* is optional

* Type: `string`

* can be null

* defined in: [Plans Event](plans-event-properties-addresspostcode.md "plans-event.schema.json#/properties/addressPostcode")

### addressPostcode Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
