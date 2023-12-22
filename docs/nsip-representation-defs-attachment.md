## attachment Type

`object` ([Details](nsip-representation-defs-attachment.md))

# attachment Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [documentId](#documentid)   | `string` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-documentid.md "nsip-representation.schema.json#/$defs/attachment/properties/documentId")   |
| [filename](#filename)       | `string` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-filename.md "nsip-representation.schema.json#/$defs/attachment/properties/filename")       |
| [size](#size)               | `number` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-size.md "nsip-representation.schema.json#/$defs/attachment/properties/size")               |
| [mime](#mime)               | `string` | Optional | cannot be null | [Representation](nsip-representation-defs-attachment-properties-mime.md "nsip-representation.schema.json#/$defs/attachment/properties/mime")               |
| [documentURI](#documenturi) | `string` | Required | cannot be null | [Representation](nsip-representation-defs-attachment-properties-documenturi.md "nsip-representation.schema.json#/$defs/attachment/properties/documentURI") |

## documentId

The unique identifier for the file

`documentId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-documentid.md "nsip-representation.schema.json#/$defs/attachment/properties/documentId")

### documentId Type

`string`

### documentId Examples

```json
"ID23343453"
```

## filename

Current stored filename of the file

`filename`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-filename.md "nsip-representation.schema.json#/$defs/attachment/properties/filename")

### filename Type

`string`

### filename Examples

```json
"filename.pdf"
```

## size



`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-size.md "nsip-representation.schema.json#/$defs/attachment/properties/size")

### size Type

`number`

### size Examples

```json
23452
```

## mime



`mime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-mime.md "nsip-representation.schema.json#/$defs/attachment/properties/mime")

### mime Type

`string`

### mime Examples

```json
"application/pdf"
```

## documentURI



`documentURI`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Representation](nsip-representation-defs-attachment-properties-documenturi.md "nsip-representation.schema.json#/$defs/attachment/properties/documentURI")

### documentURI Type

`string`

### documentURI Examples

```json
"blob:https://published/en010120/filename.pdf"
```
