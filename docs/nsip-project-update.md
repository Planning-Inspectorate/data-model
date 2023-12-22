## NSIP Project Update Type

`object` ([NSIP Project Update](nsip-project-update.md))

# NSIP Project Update Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                     | `integer` | Required | cannot be null | [NSIP Project Update](nsip-project-update-properties-id.md "nsip-project-update.schema.json#/properties/id")                                     |
| [caseReference](#casereference)               | `string`  | Required | cannot be null | [NSIP Project Update](nsip-project-update-properties-casereference.md "nsip-project-update.schema.json#/properties/caseReference")               |
| [updateDate](#updatedate)                     | `string`  | Optional | cannot be null | [NSIP Project Update](nsip-project-update-properties-updatedate.md "nsip-project-update.schema.json#/properties/updateDate")                     |
| [updateName](#updatename)                     | `string`  | Optional | cannot be null | [NSIP Project Update](nsip-project-update-properties-updatename.md "nsip-project-update.schema.json#/properties/updateName")                     |
| [updateContentEnglish](#updatecontentenglish) | `string`  | Required | cannot be null | [NSIP Project Update](nsip-project-update-properties-updatecontentenglish.md "nsip-project-update.schema.json#/properties/updateContentEnglish") |
| [updateContentWelsh](#updatecontentwelsh)     | `string`  | Optional | cannot be null | [NSIP Project Update](nsip-project-update-properties-updatecontentwelsh.md "nsip-project-update.schema.json#/properties/updateContentWelsh")     |
| [updateStatus](#updatestatus)                 | `string`  | Required | cannot be null | [NSIP Project Update](nsip-project-update-properties-updatestatus.md "nsip-project-update.schema.json#/properties/updateStatus")                 |

## id

The unique identifier within the Back Office.

`id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-id.md "nsip-project-update.schema.json#/properties/id")

### id Type

`integer`

## caseReference

the case reference this update relates to

`caseReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-casereference.md "nsip-project-update.schema.json#/properties/caseReference")

### caseReference Type

`string`

## updateDate

The date the update was published

`updateDate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-updatedate.md "nsip-project-update.schema.json#/properties/updateDate")

### updateDate Type

`string`

### updateDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updateName

Internal title or name of the update

`updateName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-updatename.md "nsip-project-update.schema.json#/properties/updateName")

### updateName Type

`string`

## updateContentEnglish

HTML content of the update in English. Can only include `<a> <b> <ul> <li>` tags.

`updateContentEnglish`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-updatecontentenglish.md "nsip-project-update.schema.json#/properties/updateContentEnglish")

### updateContentEnglish Type

`string`

## updateContentWelsh

HTML content of the update in Welsh. Can only include `<a> <b> <ul> <li>` tags.

`updateContentWelsh`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-updatecontentwelsh.md "nsip-project-update.schema.json#/properties/updateContentWelsh")

### updateContentWelsh Type

`string`

## updateStatus

The current status of this update

`updateStatus`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project Update](nsip-project-update-properties-updatestatus.md "nsip-project-update.schema.json#/properties/updateStatus")

### updateStatus Type

`string`

### updateStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"draft"`              |             |
| `"ready-to-publish"`   |             |
| `"published"`          |             |
| `"ready-to-unpublish"` |             |
| `"unpublished"`        |             |
| `"archived"`           |             |
