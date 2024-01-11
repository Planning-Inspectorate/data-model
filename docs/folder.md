## Folder Type

`object` ([Folder](folder.md))

# Folder Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                            |
| :---------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------- |
| [id](#id)                                 | `integer` | Required | cannot be null | [Folder](folder-properties-id.md "folder.schema.json#/properties/id")                                 |
| [caseReference](#casereference)           | `string`  | Required | cannot be null | [Folder](folder-properties-casereference.md "folder.schema.json#/properties/caseReference")           |
| [displayNameEnglish](#displaynameenglish) | `string`  | Required | cannot be null | [Folder](folder-properties-displaynameenglish.md "folder.schema.json#/properties/displayNameEnglish") |
| [displayNameWelsh](#displaynamewelsh)     | `string`  | Optional | cannot be null | [Folder](folder-properties-displaynamewelsh.md "folder.schema.json#/properties/displayNameWelsh")     |
| [parentFolderId](#parentfolderid)         | `integer` | Optional | cannot be null | [Folder](folder-properties-parentfolderid.md "folder.schema.json#/properties/parentFolderId")         |

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

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Folder](folder-properties-displaynamewelsh.md "folder.schema.json#/properties/displayNameWelsh")

### displayNameWelsh Type

`string`

## parentFolderId

Optional parent folder ID.

`parentFolderId`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Folder](folder-properties-parentfolderid.md "folder.schema.json#/properties/parentFolderId")

### parentFolderId Type

`integer`
