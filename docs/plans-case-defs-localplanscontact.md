## localPlansContact Type

`object` ([Details](plans-case-defs-localplanscontact.md))

# localPlansContact Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :---------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                     | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-id.md "plans-case.schema.json#/$defs/localPlansContact/properties/id")                     |
| [firstName](#firstname)       | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-firstname.md "plans-case.schema.json#/$defs/localPlansContact/properties/firstName")       |
| [lastName](#lastname)         | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-lastname.md "plans-case.schema.json#/$defs/localPlansContact/properties/lastName")         |
| [emailAddress](#emailaddress) | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-emailaddress.md "plans-case.schema.json#/$defs/localPlansContact/properties/emailAddress") |
| [phone](#phone)               | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-localplanscontact-properties-phone.md "plans-case.schema.json#/$defs/localPlansContact/properties/phone")               |
| [pinsLpaCode](#pinslpacode)   | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-pinslpacode.md "plans-case.schema.json#/$defs/localPlansContact/properties/pinsLpaCode")   |
| [startDate](#startdate)       | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-startdate.md "plans-case.schema.json#/$defs/localPlansContact/properties/startDate")       |
| [endDate](#enddate)           | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-localplanscontact-properties-enddate.md "plans-case.schema.json#/$defs/localPlansContact/properties/endDate")           |

## id

Primary Key for Contact

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-id.md "plans-case.schema.json#/$defs/localPlansContact/properties/id")

### id Type

`string`

### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## firstName

First name

`firstName`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-firstname.md "plans-case.schema.json#/$defs/localPlansContact/properties/firstName")

### firstName Type

`string`

## lastName

Last name

`lastName`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-lastname.md "plans-case.schema.json#/$defs/localPlansContact/properties/lastName")

### lastName Type

`string`

## emailAddress

Email address

`emailAddress`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-emailaddress.md "plans-case.schema.json#/$defs/localPlansContact/properties/emailAddress")

### emailAddress Type

`string`

### emailAddress Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

## phone

Phone number

`phone`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-phone.md "plans-case.schema.json#/$defs/localPlansContact/properties/phone")

### phone Type

`string`

## pinsLpaCode

PINS LPA Code

`pinsLpaCode`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-pinslpacode.md "plans-case.schema.json#/$defs/localPlansContact/properties/pinsLpaCode")

### pinsLpaCode Type

`string`

## startDate

Start date

`startDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-startdate.md "plans-case.schema.json#/$defs/localPlansContact/properties/startDate")

### startDate Type

`string`

### startDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## endDate

End date

`endDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-enddate.md "plans-case.schema.json#/$defs/localPlansContact/properties/endDate")

### endDate Type

`string`

### endDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
