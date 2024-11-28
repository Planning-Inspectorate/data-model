## Listed Building Type

`object` ([Listed Building](listed-buildings.md))

# Listed Building Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                          |
| :------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [entity](#entity)                           | `integer` | Required | cannot be null | [Listed Building](listed-buildings-properties-entity.md "listed-building.schema.json#/properties/entity")                           |
| [reference](#reference)                     | `string`  | Required | cannot be null | [Listed Building](listed-buildings-properties-reference.md "listed-building.schema.json#/properties/reference")                     |
| [name](#name)                               | `string`  | Required | cannot be null | [Listed Building](listed-buildings-properties-name.md "listed-building.schema.json#/properties/name")                               |
| [listedBuildingGrade](#listedbuildinggrade) | `string`  | Required | cannot be null | [Listed Building](listed-buildings-properties-listedbuildinggrade.md "listed-building.schema.json#/properties/listedBuildingGrade") |
| Additional Properties                       | Any       | Optional | can be null    |                                                                                                                                     |

## entity

A unique identifier for the listed building.

`entity`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Listed Building](listed-buildings-properties-entity.md "listed-building.schema.json#/properties/entity")

### entity Type

`integer`

### entity Examples

```json
"31717222"
```

## reference

Reference number for the listed buildign

`reference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Listed Building](listed-buildings-properties-reference.md "listed-building.schema.json#/properties/reference")

### reference Type

`string`

### reference Examples

```json
"1260842"
```

## name

Name of listed building

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Listed Building](listed-buildings-properties-name.md "listed-building.schema.json#/properties/name")

### name Type

`string`

### name Examples

```json
"41A, NEWBIGGIN"
```

## listedBuildingGrade

Grade assigned to the listing.

`listedBuildingGrade`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Listed Building](listed-buildings-properties-listedbuildinggrade.md "listed-building.schema.json#/properties/listedBuildingGrade")

### listedBuildingGrade Type

`string`

### listedBuildingGrade Examples

```json
"II"
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema