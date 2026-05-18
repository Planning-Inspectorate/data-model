## Application Update Schema Type

`object` ([Application Update Schema](application-update.md))

# Application Update Schema Properties

| Property                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :-------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                           | `string` | Required | cannot be null | [Application Update Schema](application-update-properties-id.md "application-update.schema.json#/properties/id")                                           |
| [caseReference](#casereference)                     | `string` | Required | cannot be null | [Application Update Schema](application-update-properties-casereference.md "application-update.schema.json#/properties/caseReference")                     |
| [caseId](#caseid)                                   | `string` | Required | cannot be null | [Application Update Schema](application-update-properties-caseid.md "application-update.schema.json#/properties/caseId")                                   |
| [caseType](#casetype)                               | `string` | Required | cannot be null | [Application Update Schema](application-update-properties-casetype.md "application-update.schema.json#/properties/caseType")                               |
| [applicationUpdateStatus](#applicationupdatestatus) | `string` | Required | cannot be null | [Application Update Schema](application-update-properties-applicationupdatestatus.md "application-update.schema.json#/properties/applicationUpdateStatus") |
| [details](#details)                                 | `string` | Required | cannot be null | [Application Update Schema](application-update-properties-details.md "application-update.schema.json#/properties/details")                                 |
| [firstPublished](#firstpublished)                   | `string` | Optional | can be null    | [Application Update Schema](application-update-properties-firstpublished.md "application-update.schema.json#/properties/firstPublished")                   |
| [unpublishedDate](#unpublisheddate)                 | `string` | Optional | can be null    | [Application Update Schema](application-update-properties-unpublisheddate.md "application-update.schema.json#/properties/unpublishedDate")                 |
| [lastEdited](#lastedited)                           | `string` | Optional | can be null    | [Application Update Schema](application-update-properties-lastedited.md "application-update.schema.json#/properties/lastEdited")                           |
| Additional Properties                               | Any      | Optional | can be null    |                                                                                                                                                            |

## id

Primary key

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Application Update Schema](application-update-properties-id.md "application-update.schema.json#/properties/id")

### id Type

`string`

## caseReference

Business Key for the related case

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Application Update Schema](application-update-properties-casereference.md "application-update.schema.json#/properties/caseReference")

### caseReference Type

`string`

## caseId

The unique ID for the case this Application Update belongs to.

`caseId`

* is required

* Type: `string`

* cannot be null

* defined in: [Application Update Schema](application-update-properties-caseid.md "application-update.schema.json#/properties/caseId")

### caseId Type

`string`

## caseType

The type of case this Application Update is for.

`caseType`

* is required

* Type: `string`

* cannot be null

* defined in: [Application Update Schema](application-update-properties-casetype.md "application-update.schema.json#/properties/caseType")

### caseType Type

`string`

## applicationUpdateStatus

Application Update Status. Name displayed to users, e.g. Draft

`applicationUpdateStatus`

* is required

* Type: `string`

* cannot be null

* defined in: [Application Update Schema](application-update-properties-applicationupdatestatus.md "application-update.schema.json#/properties/applicationUpdateStatus")

### applicationUpdateStatus Type

`string`

### applicationUpdateStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"Draft"`       |             |
| `"Published"`   |             |
| `"Unpublished"` |             |

## details

Application Update text description.

`details`

* is required

* Type: `string`

* cannot be null

* defined in: [Application Update Schema](application-update-properties-details.md "application-update.schema.json#/properties/details")

### details Type

`string`

## firstPublished



`firstPublished`

* is optional

* Type: `string`

* can be null

* defined in: [Application Update Schema](application-update-properties-firstpublished.md "application-update.schema.json#/properties/firstPublished")

### firstPublished Type

`string`

### firstPublished Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## unpublishedDate



`unpublishedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Application Update Schema](application-update-properties-unpublisheddate.md "application-update.schema.json#/properties/unpublishedDate")

### unpublishedDate Type

`string`

### unpublishedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## lastEdited



`lastEdited`

* is optional

* Type: `string`

* can be null

* defined in: [Application Update Schema](application-update-properties-lastedited.md "application-update.schema.json#/properties/lastEdited")

### lastEdited Type

`string`

### lastEdited Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
