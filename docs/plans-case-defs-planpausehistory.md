## planPauseHistory Type

`object` ([Details](plans-case-defs-planpausehistory.md))

# planPauseHistory Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                 | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-planpausehistory-properties-id.md "plans-case.schema.json#/$defs/planPauseHistory/properties/id")                                 |
| [planPauseStartDate](#planpausestartdate) | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-planpausehistory-properties-planpausestartdate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseStartDate") |
| [planPauseEndDate](#planpauseenddate)     | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-planpausehistory-properties-planpauseenddate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseEndDate")     |

## id

CBOS Internal key of pause

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-planpausehistory-properties-id.md "plans-case.schema.json#/$defs/planPauseHistory/properties/id")

### id Type

`string`

## planPauseStartDate

Date pause begins

`planPauseStartDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-planpausehistory-properties-planpausestartdate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseStartDate")

### planPauseStartDate Type

`string`

### planPauseStartDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## planPauseEndDate

Date pause ends

`planPauseEndDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-planpausehistory-properties-planpauseenddate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseEndDate")

### planPauseEndDate Type

`string`

### planPauseEndDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
