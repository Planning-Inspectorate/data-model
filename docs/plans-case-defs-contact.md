## contact Type

`object` ([Details](plans-case-defs-contact.md))

# contact Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :---------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [firstName](#firstname)       | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-contact-properties-firstname.md "plans-case.schema.json#/$defs/contact/properties/firstName")       |
| [lastName](#lastname)         | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-contact-properties-lastname.md "plans-case.schema.json#/$defs/contact/properties/lastName")         |
| [emailAddress](#emailaddress) | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-contact-properties-emailaddress.md "plans-case.schema.json#/$defs/contact/properties/emailAddress") |
| [phone](#phone)               | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-contact-properties-phone.md "plans-case.schema.json#/$defs/contact/properties/phone")               |
| [pinsLpaCode](#pinslpacode)   | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-contact-properties-pinslpacode.md "plans-case.schema.json#/$defs/contact/properties/pinsLpaCode")   |
| [startDate](#startdate)       | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-contact-properties-startdate.md "plans-case.schema.json#/$defs/contact/properties/startDate")       |
| [endDate](#enddate)           | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-contact-properties-enddate.md "plans-case.schema.json#/$defs/contact/properties/endDate")           |

## firstName

First name

`firstName`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-contact-properties-firstname.md "plans-case.schema.json#/$defs/contact/properties/firstName")

### firstName Type

`string`

## lastName

Last name

`lastName`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-contact-properties-lastname.md "plans-case.schema.json#/$defs/contact/properties/lastName")

### lastName Type

`string`

## emailAddress

Email address

`emailAddress`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-contact-properties-emailaddress.md "plans-case.schema.json#/$defs/contact/properties/emailAddress")

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

* defined in: [Local Plans Case](plans-case-defs-contact-properties-phone.md "plans-case.schema.json#/$defs/contact/properties/phone")

### phone Type

`string`

## pinsLpaCode

PINS LPA Code

`pinsLpaCode`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-contact-properties-pinslpacode.md "plans-case.schema.json#/$defs/contact/properties/pinsLpaCode")

### pinsLpaCode Type

`string`

## startDate

Start date

`startDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-contact-properties-startdate.md "plans-case.schema.json#/$defs/contact/properties/startDate")

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

* defined in: [Local Plans Case](plans-case-defs-contact-properties-enddate.md "plans-case.schema.json#/$defs/contact/properties/endDate")

### endDate Type

`string`

### endDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
