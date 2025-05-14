## Appeal Event Type

`object` ([Appeal Event](appeal-event.md))

# Appeal Event Properties

| Property                                            | Type      | Required | Nullable       | Defined by                                                                                                                        |
| :-------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [eventId](#eventid)                                 | `string`  | Required | cannot be null | [Appeal Event](appeal-event-properties-eventid.md "appeal-event.schema.json#/properties/eventId")                                 |
| [caseReference](#casereference)                     | `string`  | Required | cannot be null | [Appeal Event](appeal-event-properties-casereference.md "appeal-event.schema.json#/properties/caseReference")                     |
| [eventType](#eventtype)                             | `string`  | Required | cannot be null | [Appeal Event](appeal-event-properties-eventtype.md "appeal-event.schema.json#/properties/eventType")                             |
| [eventName](#eventname)                             | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-eventname.md "appeal-event.schema.json#/properties/eventName")                             |
| [eventStatus](#eventstatus)                         | `string`  | Required | cannot be null | [Appeal Event](appeal-event-properties-eventstatus.md "appeal-event.schema.json#/properties/eventStatus")                         |
| [isUrgent](#isurgent)                               | `boolean` | Required | cannot be null | [Appeal Event](appeal-event-properties-isurgent.md "appeal-event.schema.json#/properties/isUrgent")                               |
| [eventPublished](#eventpublished)                   | `boolean` | Required | can be null    | [Appeal Event](appeal-event-properties-eventpublished.md "appeal-event.schema.json#/properties/eventPublished")                   |
| [eventStartDateTime](#eventstartdatetime)           | `string`  | Required | cannot be null | [Appeal Event](appeal-event-properties-eventstartdatetime.md "appeal-event.schema.json#/properties/eventStartDateTime")           |
| [eventEndDateTime](#eventenddatetime)               | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-eventenddatetime.md "appeal-event.schema.json#/properties/eventEndDateTime")               |
| [notificationOfSiteVisit](#notificationofsitevisit) | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-notificationofsitevisit.md "appeal-event.schema.json#/properties/notificationOfSiteVisit") |
| [addressLine1](#addressline1)                       | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-addressline1.md "appeal-event.schema.json#/properties/addressLine1")                       |
| [addressLine2](#addressline2)                       | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-addressline2.md "appeal-event.schema.json#/properties/addressLine2")                       |
| [addressTown](#addresstown)                         | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-addresstown.md "appeal-event.schema.json#/properties/addressTown")                         |
| [addressCounty](#addresscounty)                     | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-addresscounty.md "appeal-event.schema.json#/properties/addressCounty")                     |
| [addressPostcode](#addresspostcode)                 | `string`  | Required | can be null    | [Appeal Event](appeal-event-properties-addresspostcode.md "appeal-event.schema.json#/properties/addressPostcode")                 |
| Additional Properties                               | Any       | Optional | can be null    |                                                                                                                                   |

## eventId

The unique identifier for the event

> This is a composite key with the caseReference and an event counter

`eventId`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal Event](appeal-event-properties-eventid.md "appeal-event.schema.json#/properties/eventId")

### eventId Type

`string`

### eventId Examples

```json
"7000000-1"
```

## caseReference

External case identifier

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal Event](appeal-event-properties-casereference.md "appeal-event.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"7002471"
```

## eventType

The type of event

`eventType`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal Event](appeal-event-properties-eventtype.md "appeal-event.schema.json#/properties/eventType")

### eventType Type

`string`

### eventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"site_visit_access_required"` |             |
| `"site_visit_accompanied"`     |             |
| `"site_visit_unaccompanied"`   |             |
| `"hearing"`                    |             |
| `"hearing_virtual"`            |             |
| `"inquiry"`                    |             |
| `"inquiry_virtual"`            |             |
| `"in_house"`                   |             |
| `"pre_inquiry"`                |             |
| `"pre_inquiry_virtual"`        |             |

## eventName

An optional description / name for the event

`eventName`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-eventname.md "appeal-event.schema.json#/properties/eventName")

### eventName Type

`string`

### eventName Examples

```json
"A site visit"
```

## eventStatus

Status of the event

`eventStatus`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal Event](appeal-event-properties-eventstatus.md "appeal-event.schema.json#/properties/eventStatus")

### eventStatus Type

`string`

### eventStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"withdrawn"`           |             |
| `"in_abeyance"`         |             |
| `"change_of_procedure"` |             |
| `"new_rescheduled"`     |             |
| `"confirmed"`           |             |
| `"link_to_enforcement"` |             |
| `"offered"`             |             |
| `"postponed"`           |             |

## isUrgent

Indicates if the event is urgent

`isUrgent`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Appeal Event](appeal-event-properties-isurgent.md "appeal-event.schema.json#/properties/isUrgent")

### isUrgent Type

`boolean`

## eventPublished

Indicates if the event has been published

`eventPublished`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal Event](appeal-event-properties-eventpublished.md "appeal-event.schema.json#/properties/eventPublished")

### eventPublished Type

`boolean`

## eventStartDateTime

Event start date and time

`eventStartDateTime`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal Event](appeal-event-properties-eventstartdatetime.md "appeal-event.schema.json#/properties/eventStartDateTime")

### eventStartDateTime Type

`string`

### eventStartDateTime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### eventStartDateTime Examples

```json
"2023-07-27T20:30:00.000Z"
```

## eventEndDateTime

Event end date and time

`eventEndDateTime`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-eventenddatetime.md "appeal-event.schema.json#/properties/eventEndDateTime")

### eventEndDateTime Type

`string`

### eventEndDateTime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### eventEndDateTime Examples

```json
"2023-07-27T20:30:00.000Z"
```

## notificationOfSiteVisit

The date third-parties were informed of the site visit event

`notificationOfSiteVisit`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-notificationofsitevisit.md "appeal-event.schema.json#/properties/notificationOfSiteVisit")

### notificationOfSiteVisit Type

`string`

### notificationOfSiteVisit Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### notificationOfSiteVisit Examples

```json
"2023-07-27T20:30:00.000Z"
```

## addressLine1

First line of address for the event site

`addressLine1`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-addressline1.md "appeal-event.schema.json#/properties/addressLine1")

### addressLine1 Type

`string`

### addressLine1 Examples

```json
"96 The Avenue"
```

## addressLine2

Second line of address for the event site

`addressLine2`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-addressline2.md "appeal-event.schema.json#/properties/addressLine2")

### addressLine2 Type

`string`

## addressTown

Town / City of the event address

`addressTown`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-addresstown.md "appeal-event.schema.json#/properties/addressTown")

### addressTown Type

`string`

### addressTown Examples

```json
"Maidstone"
```

## addressCounty

County of the event address

`addressCounty`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-addresscounty.md "appeal-event.schema.json#/properties/addressCounty")

### addressCounty Type

`string`

### addressCounty Examples

```json
"Kent"
```

## addressPostcode

Postal code of the event address

`addressPostcode`

* is required

* Type: `string`

* can be null

* defined in: [Appeal Event](appeal-event-properties-addresspostcode.md "appeal-event.schema.json#/properties/addressPostcode")

### addressPostcode Type

`string`

### addressPostcode Examples

```json
"MD21 5XY"
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
