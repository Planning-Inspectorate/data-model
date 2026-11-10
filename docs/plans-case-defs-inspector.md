## inspector Type

`object` ([Details](plans-case-defs-inspector.md))

# inspector Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :---------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [entraId](#entraid)                 | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-inspector-properties-entraid.md "plans-case.schema.json#/$defs/inspector/properties/entraId")                 |
| [appointmentDate](#appointmentdate) | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-inspector-properties-appointmentdate.md "plans-case.schema.json#/$defs/inspector/properties/appointmentDate") |
| [endDate](#enddate)                 | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-inspector-properties-enddate.md "plans-case.schema.json#/$defs/inspector/properties/endDate")                 |

## entraId

Entra ID

`entraId`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-inspector-properties-entraid.md "plans-case.schema.json#/$defs/inspector/properties/entraId")

### entraId Type

`string`

## appointmentDate

Date inspector appointed to case

`appointmentDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-inspector-properties-appointmentdate.md "plans-case.schema.json#/$defs/inspector/properties/appointmentDate")

### appointmentDate Type

`string`

### appointmentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## endDate

Date inspector disassociated with case

`endDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-inspector-properties-enddate.md "plans-case.schema.json#/$defs/inspector/properties/endDate")

### endDate Type

`string`

### endDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
