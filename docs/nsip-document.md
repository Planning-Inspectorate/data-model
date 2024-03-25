## NSIP Document Type

`object` ([NSIP Document](nsip-document.md))

# NSIP Document Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                         |
| :------------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [documentId](#documentid)                         | `string`  | Required | cannot be null | [NSIP Document](nsip-document-properties-documentid.md "nsip-document.schema.json#/properties/documentId")                         |
| [caseId](#caseid)                                 | `integer` | Required | can be null    | [NSIP Document](nsip-document-properties-caseid.md "nsip-document.schema.json#/properties/caseId")                                 |
| [caseRef](#caseref)                               | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-caseref.md "nsip-document.schema.json#/properties/caseRef")                               |
| [documentReference](#documentreference)           | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-documentreference.md "nsip-document.schema.json#/properties/documentReference")           |
| [version](#version)                               | `integer` | Required | cannot be null | [NSIP Document](nsip-document-properties-version.md "nsip-document.schema.json#/properties/version")                               |
| [examinationRefNo](#examinationrefno)             | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-examinationrefno.md "nsip-document.schema.json#/properties/examinationRefNo")             |
| [filename](#filename)                             | `string`  | Required | cannot be null | [NSIP Document](nsip-document-properties-filename.md "nsip-document.schema.json#/properties/filename")                             |
| [originalFilename](#originalfilename)             | `string`  | Required | cannot be null | [NSIP Document](nsip-document-properties-originalfilename.md "nsip-document.schema.json#/properties/originalFilename")             |
| [size](#size)                                     | `integer` | Required | cannot be null | [NSIP Document](nsip-document-properties-size.md "nsip-document.schema.json#/properties/size")                                     |
| [mime](#mime)                                     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-mime.md "nsip-document.schema.json#/properties/mime")                                     |
| [documentURI](#documenturi)                       | `string`  | Required | cannot be null | [NSIP Document](nsip-document-properties-documenturi.md "nsip-document.schema.json#/properties/documentURI")                       |
| [publishedDocumentURI](#publisheddocumenturi)     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-publisheddocumenturi.md "nsip-document.schema.json#/properties/publishedDocumentURI")     |
| [path](#path)                                     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-path.md "nsip-document.schema.json#/properties/path")                                     |
| [virusCheckStatus](#viruscheckstatus)             | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-viruscheckstatus.md "nsip-document.schema.json#/properties/virusCheckStatus")             |
| [fileMD5](#filemd5)                               | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-filemd5.md "nsip-document.schema.json#/properties/fileMD5")                               |
| [dateCreated](#datecreated)                       | `string`  | Required | cannot be null | [NSIP Document](nsip-document-properties-datecreated.md "nsip-document.schema.json#/properties/dateCreated")                       |
| [lastModified](#lastmodified)                     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-lastmodified.md "nsip-document.schema.json#/properties/lastModified")                     |
| [caseType](#casetype)                             | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-casetype.md "nsip-document.schema.json#/properties/caseType")                             |
| [redactedStatus](#redactedstatus)                 | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-redactedstatus.md "nsip-document.schema.json#/properties/redactedStatus")                 |
| [publishedStatus](#publishedstatus)               | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-publishedstatus.md "nsip-document.schema.json#/properties/publishedStatus")               |
| [datePublished](#datepublished)                   | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-datepublished.md "nsip-document.schema.json#/properties/datePublished")                   |
| [documentType](#documenttype)                     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-documenttype.md "nsip-document.schema.json#/properties/documentType")                     |
| [securityClassification](#securityclassification) | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-securityclassification.md "nsip-document.schema.json#/properties/securityClassification") |
| [sourceSystem](#sourcesystem)                     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-sourcesystem.md "nsip-document.schema.json#/properties/sourceSystem")                     |
| [origin](#origin)                                 | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-origin.md "nsip-document.schema.json#/properties/origin")                                 |
| [owner](#owner)                                   | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-owner.md "nsip-document.schema.json#/properties/owner")                                   |
| [author](#author)                                 | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-author.md "nsip-document.schema.json#/properties/author")                                 |
| [representative](#representative)                 | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-representative.md "nsip-document.schema.json#/properties/representative")                 |
| [description](#description)                       | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-description.md "nsip-document.schema.json#/properties/description")                       |
| [documentCaseStage](#documentcasestage)           | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-documentcasestage.md "nsip-document.schema.json#/properties/documentCaseStage")           |
| [filter1](#filter1)                               | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-filter1.md "nsip-document.schema.json#/properties/filter1")                               |
| [filter2](#filter2)                               | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-filter2.md "nsip-document.schema.json#/properties/filter2")                               |
| [horizonFolderId](#horizonfolderid)               | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-horizonfolderid.md "nsip-document.schema.json#/properties/horizonFolderId")               |
| [transcriptId](#transcriptid)                     | `string`  | Required | can be null    | [NSIP Document](nsip-document-properties-transcriptid.md "nsip-document.schema.json#/properties/transcriptId")                     |

## documentId

The unique identifier for the file. This will be different to documentReference

`documentId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-documentid.md "nsip-document.schema.json#/properties/documentId")

### documentId Type

`string`

### documentId Examples

```json
"01c958f2-4e9f-4ce2-adf9-81038702cafa"
```

## caseId

Internal case identifier

`caseId`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-caseid.md "nsip-document.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1
```

## caseRef



`caseRef`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-caseref.md "nsip-document.schema.json#/properties/caseRef")

### caseRef Type

`string`

### caseRef Examples

```json
"EN010120"
```

## documentReference

Reference used throughout ODT <CaseRef>-<SequenceNo>

`documentReference`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-documentreference.md "nsip-document.schema.json#/properties/documentReference")

### documentReference Type

`string`

### documentReference Examples

```json
"WA0110015-000002"
```

## version



`version`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-version.md "nsip-document.schema.json#/properties/version")

### version Type

`integer`

### version Examples

```json
1
```

## examinationRefNo



`examinationRefNo`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-examinationrefno.md "nsip-document.schema.json#/properties/examinationRefNo")

### examinationRefNo Type

`string`

### examinationRefNo Examples

```json
"XXX-0000"
```

## filename

Current stored filename of the file

`filename`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-filename.md "nsip-document.schema.json#/properties/filename")

### filename Type

`string`

### filename Examples

```json
"filename.pdf"
```

## originalFilename

Original filename of file

`originalFilename`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-originalfilename.md "nsip-document.schema.json#/properties/originalFilename")

### originalFilename Type

`string`

### originalFilename Examples

```json
"original_filename.pdf"
```

## size



`size`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-size.md "nsip-document.schema.json#/properties/size")

### size Type

`integer`

### size Examples

```json
23452
```

## mime



`mime`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-mime.md "nsip-document.schema.json#/properties/mime")

### mime Type

`string`

### mime Examples

```json
"application/pdf"
```

## documentURI

The internal location of the document

`documentURI`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-documenturi.md "nsip-document.schema.json#/properties/documentURI")

### documentURI Type

`string`

### documentURI Examples

```json
"https://pinsstdocsboprodukw001.blob.core.windows.net/document-service-uploads/application/BC0110001/01adeade-791a-483a-a51d-99df2122b5cc/1"
```

## publishedDocumentURI

The location of the published document. Only applicable to documents which are published.

`publishedDocumentURI`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-publisheddocumenturi.md "nsip-document.schema.json#/properties/publishedDocumentURI")

### publishedDocumentURI Type

`string`

### publishedDocumentURI Examples

```json
"https://pinsstdocsboprodukw001.blob.core.windows.net/published-documents/BC0110003-001-olive-oil.pdf"
```

## path



`path`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-path.md "nsip-document.schema.json#/properties/path")

### path Type

`string`

### path Examples

```json
"EN010011/2. Post-Submission/Application Documents/Application Form/Letter.PDF"
```

## virusCheckStatus



`virusCheckStatus`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-viruscheckstatus.md "nsip-document.schema.json#/properties/virusCheckStatus")

### virusCheckStatus Type

`string`

### virusCheckStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"not_scanned"` |             |
| `"scanned"`     |             |
| `"affected"`    |             |
| `null`          |             |

## fileMD5



`fileMD5`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-filemd5.md "nsip-document.schema.json#/properties/fileMD5")

### fileMD5 Type

`string`

### fileMD5 Examples

```json
"b1946ac92492d2347c6235b4d2611184"
```

## dateCreated



`dateCreated`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Document](nsip-document-properties-datecreated.md "nsip-document.schema.json#/properties/dateCreated")

### dateCreated Type

`string`

### dateCreated Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateCreated Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lastModified



`lastModified`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-lastmodified.md "nsip-document.schema.json#/properties/lastModified")

### lastModified Type

`string`

### lastModified Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lastModified Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseType



`caseType`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-casetype.md "nsip-document.schema.json#/properties/caseType")

### caseType Type

`string`

### caseType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"nsip"` |             |
| `"has"`  |             |
| `null`   |             |

## redactedStatus



`redactedStatus`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-redactedstatus.md "nsip-document.schema.json#/properties/redactedStatus")

### redactedStatus Type

`string`

### redactedStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"not_redacted"` |             |
| `"redacted"`     |             |
| `null`           |             |

## publishedStatus



`publishedStatus`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-publishedstatus.md "nsip-document.schema.json#/properties/publishedStatus")

### publishedStatus Type

`string`

### publishedStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"not_checked"`      |             |
| `"checked"`          |             |
| `"ready_to_publish"` |             |
| `"do_not_publish"`   |             |
| `"publishing"`       |             |
| `"published"`        |             |
| `"archived"`         |             |
| `"unpublished"`      |             |
| `"unpublishing"`     |             |
| `"awaiting_upload"`  |             |
| `null`               |             |

## datePublished



`datePublished`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-datepublished.md "nsip-document.schema.json#/properties/datePublished")

### datePublished Type

`string`

### datePublished Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### datePublished Examples

```json
"2023-07-27T20:30:00.000Z"
```

## documentType



`documentType`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-documenttype.md "nsip-document.schema.json#/properties/documentType")

### documentType Type

`string`

### documentType Examples

```json
"Rule 8 letter"
```

## securityClassification



`securityClassification`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-securityclassification.md "nsip-document.schema.json#/properties/securityClassification")

### securityClassification Type

`string`

### securityClassification Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"public"`     |             |
| `"official"`   |             |
| `"secret"`     |             |
| `"top-secret"` |             |
| `null`         |             |

## sourceSystem



`sourceSystem`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-sourcesystem.md "nsip-document.schema.json#/properties/sourceSystem")

### sourceSystem Type

`string`

### sourceSystem Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"back-office-appeals"`      |             |
| `"back-office-applications"` |             |
| `"horizon"`                  |             |
| `"ni_file"`                  |             |
| `"sharepoint"`               |             |
| `null`                       |             |

## origin



`origin`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-origin.md "nsip-document.schema.json#/properties/origin")

### origin Type

`string`

### origin Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"pins"`    |             |
| `"citizen"` |             |
| `"lpa"`     |             |
| `"ogd"`     |             |
| `null`      |             |

## owner



`owner`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-owner.md "nsip-document.schema.json#/properties/owner")

### owner Type

`string`

## author

Name of person who authored document

`author`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-author.md "nsip-document.schema.json#/properties/author")

### author Type

`string`

## representative

The on behalf of or agent submitter of document

`representative`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-representative.md "nsip-document.schema.json#/properties/representative")

### representative Type

`string`

### representative Examples

```json
"ZZZ Agency"
```

## description



`description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-description.md "nsip-document.schema.json#/properties/description")

### description Type

`string`

### description Examples

```json
"Attachments to the letter to Department for Business, Energy & Industrial Strategy"
```

## documentCaseStage



`documentCaseStage`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-documentcasestage.md "nsip-document.schema.json#/properties/documentCaseStage")

### documentCaseStage Type

`string`

### documentCaseStage Constraints

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
| `null`                     |             |

## filter1

Filter field to provide additional filtering

`filter1`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-filter1.md "nsip-document.schema.json#/properties/filter1")

### filter1 Type

`string`

### filter1 Examples

```json
"Deadline 2"
```

## filter2

Filter field to provide additional filtering

`filter2`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-filter2.md "nsip-document.schema.json#/properties/filter2")

### filter2 Type

`string`

### filter2 Examples

```json
"Scoping Option Report"
```

## horizonFolderId

The folder where the document exists

`horizonFolderId`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-horizonfolderid.md "nsip-document.schema.json#/properties/horizonFolderId")

### horizonFolderId Type

`string`

## transcriptId

The GUID of the transcript document (if one was provided).

`transcriptId`

*   is required

*   Type: `string`

*   can be null

*   defined in: [NSIP Document](nsip-document-properties-transcriptid.md "nsip-document.schema.json#/properties/transcriptId")

### transcriptId Type

`string`
