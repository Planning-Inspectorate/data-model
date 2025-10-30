## specialism Type

`object` ([Details](pins-inspector-defs-specialism.md))

# specialism Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string` | Required | cannot be null | [PINS Inspector](pins-inspector-defs-specialism-properties-name.md "pins-inspector.schema.json#/$defs/specialism/properties/name")               |
| [proficiency](#proficiency) | `string` | Required | can be null    | [PINS Inspector](pins-inspector-defs-specialism-properties-proficiency.md "pins-inspector.schema.json#/$defs/specialism/properties/proficiency") |
| [validFrom](#validfrom)     | `string` | Required | can be null    | [PINS Inspector](pins-inspector-defs-specialism-properties-validfrom.md "pins-inspector.schema.json#/$defs/specialism/properties/validFrom")     |
| Additional Properties       | Any      | Optional | can be null    |                                                                                                                                                  |

## name

Working above band is stored as a specialism

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [PINS Inspector](pins-inspector-defs-specialism-properties-name.md "pins-inspector.schema.json#/$defs/specialism/properties/name")

### name Type

`string`

## proficiency

trained or in-training

`proficiency`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-defs-specialism-properties-proficiency.md "pins-inspector.schema.json#/$defs/specialism/properties/proficiency")

### proficiency Type

`string`

## validFrom

Date training started or date training was completed.

`validFrom`

* is required

* Type: `string`

* can be null

* defined in: [PINS Inspector](pins-inspector-defs-specialism-properties-validfrom.md "pins-inspector.schema.json#/$defs/specialism/properties/validFrom")

### validFrom Type

`string`

### validFrom Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### validFrom Examples

```json
"2023-07-27T20:30:00.000Z"
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
