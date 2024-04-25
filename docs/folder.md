## Folder Type

`object` ([Folder](folder.md))

# Folder Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                            |
| :---------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------- |
| [id](#id)                                 | `integer` | Required | cannot be null | [Folder](folder-properties-id.md "folder.schema.json#/properties/id")                                 |
| [caseReference](#casereference)           | `string`  | Required | cannot be null | [Folder](folder-properties-casereference.md "folder.schema.json#/properties/caseReference")           |
| [displayNameEnglish](#displaynameenglish) | `string`  | Required | cannot be null | [Folder](folder-properties-displaynameenglish.md "folder.schema.json#/properties/displayNameEnglish") |
| [displayNameWelsh](#displaynamewelsh)     | `string`  | Required | can be null    | [Folder](folder-properties-displaynamewelsh.md "folder.schema.json#/properties/displayNameWelsh")     |
| [parentFolderId](#parentfolderid)         | `integer` | Required | can be null    | [Folder](folder-properties-parentfolderid.md "folder.schema.json#/properties/parentFolderId")         |
| [caseStage](#casestage)                   | `string`  | Required | can be null    | [Folder](folder-properties-casestage.md "folder.schema.json#/properties/caseStage")                   |
| Additional Properties                     | Any       | Optional | can be null    |                                                                                                       |

## id

The unique identifier within the Back Office.

`id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Folder](folder-properties-id.md "folder.schema.json#/properties/id")

### id Type

`integer`

## caseReference

The case reference this folder belongs to.

`caseReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Folder](folder-properties-casereference.md "folder.schema.json#/properties/caseReference")

### caseReference Type

`string`

## displayNameEnglish

Folder display name in English.

`displayNameEnglish`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Folder](folder-properties-displaynameenglish.md "folder.schema.json#/properties/displayNameEnglish")

### displayNameEnglish Type

`string`

## displayNameWelsh

Folder display name in Welsh.

`displayNameWelsh`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Folder](folder-properties-displaynamewelsh.md "folder.schema.json#/properties/displayNameWelsh")

### displayNameWelsh Type

`string`

## parentFolderId

Optional parent folder ID.

`parentFolderId`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [Folder](folder-properties-parentfolderid.md "folder.schema.json#/properties/parentFolderId")

### parentFolderId Type

`integer`

## caseStage



`caseStage`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Folder](folder-properties-casestage.md "folder.schema.json#/properties/caseStage")

### caseStage Type

`string`

### caseStage Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"draft"`                  |             |
| `"pre-application"`        |             |
| `"acceptance"`             |             |
| `"pre-examination"`        |             |
| `"examination"`            |             |
| `"recommendation"`         |             |
| `"decision"`               |             |
| `"post_decision"`          |             |
| `"withdrawn"`              |             |
| `"developers_application"` |             |
| `"correspondence"`         |             |
| `"0"`                      |             |
| `null`                     |             |

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
