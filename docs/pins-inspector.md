## PINS Inspector Type

`object` ([PINS Inspector](pins-inspector.md))

# PINS Inspector Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                |
| :------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [entraId](#entraid)                   | `string` | Required | can be null    | [PINS Inspector](pins-inspector-properties-entraid.md "pins-inspector.schema.json#/properties/entraId")                   |
| [sapId](#sapid)                       | `string` | Required | can be null    | [PINS Inspector](pins-inspector-properties-sapid.md "pins-inspector.schema.json#/properties/sapId")                       |
| [horizonId](#horizonid)               | `string` | Optional | cannot be null | [PINS Inspector](pins-inspector-properties-horizonid.md "pins-inspector.schema.json#/properties/horizonId")               |
| [firstName](#firstname)               | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-firstname.md "pins-inspector.schema.json#/properties/firstName")               |
| [lastName](#lastname)                 | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-lastname.md "pins-inspector.schema.json#/properties/lastName")                 |
| [postName](#postname)                 | `string` | Optional | can be null    | [PINS Inspector](pins-inspector-properties-postname.md "pins-inspector.schema.json#/properties/postName")                 |
| [organisationName](#organisationname) | `string` | Optional | can be null    | [PINS Inspector](pins-inspector-properties-organisationname.md "pins-inspector.schema.json#/properties/organisationName") |
| [title](#title)                       | `string` | Optional | can be null    | [PINS Inspector](pins-inspector-properties-title.md "pins-inspector.schema.json#/properties/title")                       |
| [salutation](#salutation)             | `string` | Optional | can be null    | [PINS Inspector](pins-inspector-properties-salutation.md "pins-inspector.schema.json#/properties/salutation")             |
| [qualifications](#qualifications)     | `string` | Optional | can be null    | [PINS Inspector](pins-inspector-properties-qualifications.md "pins-inspector.schema.json#/properties/qualifications")     |
| [email](#email)                       | `string` | Required | can be null    | [PINS Inspector](pins-inspector-properties-email.md "pins-inspector.schema.json#/properties/email")                       |
| [grade](#grade)                       | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-grade.md "pins-inspector.schema.json#/properties/grade")                       |
| [fte](#fte)                           | `number` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-fte.md "pins-inspector.schema.json#/properties/fte")                           |
| [unit](#unit)                         | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-unit.md "pins-inspector.schema.json#/properties/unit")                         |
| [service](#service)                   | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-service.md "pins-inspector.schema.json#/properties/service")                   |
| [group](#group)                       | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-group.md "pins-inspector.schema.json#/properties/group")                       |
| [inspectorManager](#inspectormanager) | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-inspectormanager.md "pins-inspector.schema.json#/properties/inspectorManager") |
| [validFrom](#validfrom)               | `string` | Optional | can be null    | [PINS Inspector](pins-inspector-properties-validfrom.md "pins-inspector.schema.json#/properties/validFrom")               |
| [address](#address)                   | `object` | Required | cannot be null | [PINS Inspector](pins-inspector-properties-address.md "pins-inspector.schema.json#/properties/address")                   |
| [specialisms](#specialisms)           | `array`  | Required | cannot be null | [PINS Inspector](pins-inspector-properties-specialisms.md "pins-inspector.schema.json#/properties/specialisms")           |
| Additional Properties                 | Any      | Optional | can be null    |                                                                                                                           |

## entraId

EntraID of the Inspector if available in ODW.

`entraId`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-entraid.md "pins-inspector.schema.json#/properties/entraId")

### entraId Type

`string`

## sapId

SAPID of the Inspector if available in ODW.

`sapId`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-sapid.md "pins-inspector.schema.json#/properties/sapId")

### sapId Type

`string`

## horizonId

The PINS-generated unique horizon ID

`horizonId`

* is optional

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-horizonid.md "pins-inspector.schema.json#/properties/horizonId")

### horizonId Type

`string`

## firstName

The first name of the inspector

`firstName`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-firstname.md "pins-inspector.schema.json#/properties/firstName")

### firstName Type

`string`

## lastName

The last name of the inspector

`lastName`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-lastname.md "pins-inspector.schema.json#/properties/lastName")

### lastName Type

`string`

## postName

The post name of the inspector

`postName`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-postname.md "pins-inspector.schema.json#/properties/postName")

### postName Type

`string`

## organisationName

The organisation name of the inspector

`organisationName`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-organisationname.md "pins-inspector.schema.json#/properties/organisationName")

### organisationName Type

`string`

## title

The title of the inspector

`title`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-title.md "pins-inspector.schema.json#/properties/title")

### title Type

`string`

## salutation

The salutation of the inspector

`salutation`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-salutation.md "pins-inspector.schema.json#/properties/salutation")

### salutation Type

`string`

## qualifications

The qualifications of the inspector

`qualifications`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-qualifications.md "pins-inspector.schema.json#/properties/qualifications")

### qualifications Type

`string`

## email

PINS Email address for the Inspector

`email`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-email.md "pins-inspector.schema.json#/properties/email")

### email Type

`string`

### email Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

## grade

Grades as a coded value e.g. B1, B2, B3, FTC-B1, FTC-B2, FTC-B3, PL

`grade`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-grade.md "pins-inspector.schema.json#/properties/grade")

### grade Type

`string`

## fte

FTE Decimal value e.g. 1, 0.5 etc

`fte`

* is required

* Type: `number`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-fte.md "pins-inspector.schema.json#/properties/fte")

### fte Type

`number`

## unit

The personnel area of the Inspector

`unit`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-unit.md "pins-inspector.schema.json#/properties/unit")

### unit Type

`string`

## service

The personnel sub area of the Inspector

`service`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-service.md "pins-inspector.schema.json#/properties/service")

### service Type

`string`

## group

Group of the Inspector

`group`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-group.md "pins-inspector.schema.json#/properties/group")

### group Type

`string`

## inspectorManager

Name of the Inspector's manager.

`inspectorManager`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-inspectormanager.md "pins-inspector.schema.json#/properties/inspectorManager")

### inspectorManager Type

`string`

## validFrom

Date the Inspector record was first recorded.

`validFrom`

* is optional

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-properties-validfrom.md "pins-inspector.schema.json#/properties/validFrom")

### validFrom Type

`string`

### validFrom Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### validFrom Examples

```json
"2023-07-27T20:30:00.000Z"
```

## address



`address`

* is required

* Type: `object` ([Details](pins-inspector-properties-address.md))

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-address.md "pins-inspector.schema.json#/properties/address")

### address Type

`object` ([Details](pins-inspector-properties-address.md))

## specialisms



`specialisms`

* is required

* Type: `object[]` ([Details](pins-inspector-defs-specialism.md))

* cannot be null

* defined in: [PINS Inspector](pins-inspector-properties-specialisms.md "pins-inspector.schema.json#/properties/specialisms")

### specialisms Type

`object[]` ([Details](pins-inspector-defs-specialism.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# PINS Inspector Definitions

## Definitions group specialism

Reference this group by using

```json
{"$ref":"pins-inspector.schema.json#/$defs/specialism"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-defs-specialism-properties-name.md "pins-inspector.schema.json#/$defs/specialism/properties/name")               |
| [proficiency](#proficiency) | `string` | Required | can be null    | [PINS Inspector](pins-inspector-defs-specialism-properties-proficiency.md "pins-inspector.schema.json#/$defs/specialism/properties/proficiency") |
| [validFrom](#validfrom-1)   | `string` | Required | can be null    | [PINS Inspector](pins-inspector-defs-specialism-properties-validfrom.md "pins-inspector.schema.json#/$defs/specialism/properties/validFrom")     |
| Additional Properties       | Any      | Optional | can be null    |                                                                                                                                                  |

### name

Working above band is stored as a specialism

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-defs-specialism-properties-name.md "pins-inspector.schema.json#/$defs/specialism/properties/name")

#### name Type

`string`

### proficiency

trained or in-training

`proficiency`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-defs-specialism-properties-proficiency.md "pins-inspector.schema.json#/$defs/specialism/properties/proficiency")

#### proficiency Type

`string`

### validFrom

Date training started or date training was completed.

`validFrom`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-defs-specialism-properties-validfrom.md "pins-inspector.schema.json#/$defs/specialism/properties/validFrom")

#### validFrom Type

`string`

#### validFrom Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### validFrom Examples

```json
"2023-07-27T20:30:00.000Z"
```

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema
