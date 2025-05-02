## Appeal Event Estimate Type

`object` ([Appeal Event Estimate](appeal-event-estimate.md))

# Appeal Event Estimate Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                   |
| :---------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                           | `integer` | Required | cannot be null | [Appeal Event Estimate](appeal-event-estimate-properties-id.md "appeal-event-estimate.schema.json#/properties/id")                           |
| [caseReference](#casereference)     | `string`  | Required | cannot be null | [Appeal Event Estimate](appeal-event-estimate-properties-casereference.md "appeal-event-estimate.schema.json#/properties/caseReference")     |
| [preparationTime](#preparationtime) | `number`  | Required | can be null    | [Appeal Event Estimate](appeal-event-estimate-properties-preparationtime.md "appeal-event-estimate.schema.json#/properties/preparationTime") |
| [sittingTime](#sittingtime)         | `number`  | Required | can be null    | [Appeal Event Estimate](appeal-event-estimate-properties-sittingtime.md "appeal-event-estimate.schema.json#/properties/sittingTime")         |
| [reportingTime](#reportingtime)     | `number`  | Required | can be null    | [Appeal Event Estimate](appeal-event-estimate-properties-reportingtime.md "appeal-event-estimate.schema.json#/properties/reportingTime")     |
| Additional Properties               | Any       | Optional | can be null    |                                                                                                                                              |

## id

The unique identifier within the Back Office.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [Appeal Event Estimate](appeal-event-estimate-properties-id.md "appeal-event-estimate.schema.json#/properties/id")

### id Type

`integer`

## caseReference

The case reference the event estimate belongs to.

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal Event Estimate](appeal-event-estimate-properties-casereference.md "appeal-event-estimate.schema.json#/properties/caseReference")

### caseReference Type

`string`

## preparationTime

Estimated inspector time (days) to prepare for event.

`preparationTime`

* is required

* Type: `number`

* can be null

* defined in: [Appeal Event Estimate](appeal-event-estimate-properties-preparationtime.md "appeal-event-estimate.schema.json#/properties/preparationTime")

### preparationTime Type

`number`

## sittingTime

Estimated inspector time (days) for event.

`sittingTime`

* is required

* Type: `number`

* can be null

* defined in: [Appeal Event Estimate](appeal-event-estimate-properties-sittingtime.md "appeal-event-estimate.schema.json#/properties/sittingTime")

### sittingTime Type

`number`

## reportingTime

Estimated inspector time (days) for event reporting.

`reportingTime`

* is required

* Type: `number`

* can be null

* defined in: [Appeal Event Estimate](appeal-event-estimate-properties-reportingtime.md "appeal-event-estimate.schema.json#/properties/reportingTime")

### reportingTime Type

`number`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
