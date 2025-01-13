## Appeal Document Type

`object` ([Appeal Document](appeal-document.md))

# Appeal Document Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                           |
| :-------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [documentId](#documentid)                     | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-documentid.md "appeal-document.schema.json#/properties/documentId")                     |
| [caseId](#caseid)                             | `integer` | Required | can be null    | [Appeal Document](appeal-document-properties-caseid.md "appeal-document.schema.json#/properties/caseId")                             |
| [caseReference](#casereference)               | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-casereference.md "appeal-document.schema.json#/properties/caseReference")               |
| [version](#version)                           | `integer` | Required | cannot be null | [Appeal Document](appeal-document-properties-version.md "appeal-document.schema.json#/properties/version")                           |
| [filename](#filename)                         | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-filename.md "appeal-document.schema.json#/properties/filename")                         |
| [originalFilename](#originalfilename)         | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-originalfilename.md "appeal-document.schema.json#/properties/originalFilename")         |
| [size](#size)                                 | `integer` | Required | cannot be null | [Appeal Document](appeal-document-properties-size.md "appeal-document.schema.json#/properties/size")                                 |
| [mime](#mime)                                 | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-mime.md "appeal-document.schema.json#/properties/mime")                                 |
| [documentURI](#documenturi)                   | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-documenturi.md "appeal-document.schema.json#/properties/documentURI")                   |
| [publishedDocumentURI](#publisheddocumenturi) | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-publisheddocumenturi.md "appeal-document.schema.json#/properties/publishedDocumentURI") |
| [virusCheckStatus](#viruscheckstatus)         | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-viruscheckstatus.md "appeal-document.schema.json#/properties/virusCheckStatus")         |
| [fileMD5](#filemd5)                           | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-filemd5.md "appeal-document.schema.json#/properties/fileMD5")                           |
| [dateCreated](#datecreated)                   | `string`  | Required | cannot be null | [Appeal Document](appeal-document-properties-datecreated.md "appeal-document.schema.json#/properties/dateCreated")                   |
| [dateReceived](#datereceived)                 | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-datereceived.md "appeal-document.schema.json#/properties/dateReceived")                 |
| [datePublished](#datepublished)               | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-datepublished.md "appeal-document.schema.json#/properties/datePublished")               |
| [lastModified](#lastmodified)                 | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-lastmodified.md "appeal-document.schema.json#/properties/lastModified")                 |
| [caseType](#casetype)                         | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-casetype.md "appeal-document.schema.json#/properties/caseType")                         |
| [redactedStatus](#redactedstatus)             | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-redactedstatus.md "appeal-document.schema.json#/properties/redactedStatus")             |
| [documentType](#documenttype)                 | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-documenttype.md "appeal-document.schema.json#/properties/documentType")                 |
| [sourceSystem](#sourcesystem)                 | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-sourcesystem.md "appeal-document.schema.json#/properties/sourceSystem")                 |
| [origin](#origin)                             | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-origin.md "appeal-document.schema.json#/properties/origin")                             |
| [owner](#owner)                               | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-owner.md "appeal-document.schema.json#/properties/owner")                               |
| [author](#author)                             | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-author.md "appeal-document.schema.json#/properties/author")                             |
| [description](#description)                   | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-description.md "appeal-document.schema.json#/properties/description")                   |
| [caseStage](#casestage)                       | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-casestage.md "appeal-document.schema.json#/properties/caseStage")                       |
| [horizonFolderId](#horizonfolderid)           | `string`  | Required | can be null    | [Appeal Document](appeal-document-properties-horizonfolderid.md "appeal-document.schema.json#/properties/horizonFolderId")           |
| Additional Properties                         | Any       | Optional | can be null    |                                                                                                                                      |

## documentId

The unique identifier for the document

`documentId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-documentid.md "appeal-document.schema.json#/properties/documentId")

### documentId Type

`string`

### documentId Examples

```json
"4547fec8-16b2-47bb-836d-4d0baac04079"
```

## caseId

Internal case identifier

`caseId`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-caseid.md "appeal-document.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1200
```

## caseReference

External case identifier

`caseReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-casereference.md "appeal-document.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"7002471"
```

## version

A document can have multiple versions, and this indicates the latest version

`version`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-version.md "appeal-document.schema.json#/properties/version")

### version Type

`integer`

### version Examples

```json
1
```

## filename

Current stored name of the document

`filename`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-filename.md "appeal-document.schema.json#/properties/filename")

### filename Type

`string`

### filename Examples

```json
"filename.pdf"
```

## originalFilename

Original name of document

`originalFilename`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-originalfilename.md "appeal-document.schema.json#/properties/originalFilename")

### originalFilename Type

`string`

### originalFilename Examples

```json
"original_filename.pdf"
```

## size

The file size, in bytes

`size`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-size.md "appeal-document.schema.json#/properties/size")

### size Type

`integer`

### size Examples

```json
23452
```

## mime

The mime type for the current version of the file

`mime`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-mime.md "appeal-document.schema.json#/properties/mime")

### mime Type

`string`

### mime Examples

```json
"application/pdf"
```

## documentURI

The internal location of the document

> This property contains blob storage info (domain, container), caseReference, version and filename

`documentURI`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-documenturi.md "appeal-document.schema.json#/properties/documentURI")

### documentURI Type

`string`

### documentURI Examples

```json
"https://custom-domain.gov.uk/container-name/appeal/7002471/4547fec8-16b2-47bb-836d-4d0baac04079/v1/filename.pdf"
```

## publishedDocumentURI

The location of the published document, will be null if the datePublished is not set

`publishedDocumentURI`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-publisheddocumenturi.md "appeal-document.schema.json#/properties/publishedDocumentURI")

### publishedDocumentURI Type

`string`

### publishedDocumentURI Examples

```json
"https://custom-domain.gov.uk/container-name/appeal/7002471/4547fec8-16b2-47bb-836d-4d0baac04079/v1/filename.pdf"
```

## virusCheckStatus

Indicates the virus check status for the current document

`virusCheckStatus`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-viruscheckstatus.md "appeal-document.schema.json#/properties/virusCheckStatus")

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

A MD5 hash to check the validity of the file

`fileMD5`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-filemd5.md "appeal-document.schema.json#/properties/fileMD5")

### fileMD5 Type

`string`

### fileMD5 Examples

```json
"b1946ac92492d2347c6235b4d2611184"
```

## dateCreated

The creation date for the document

`dateCreated`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Appeal Document](appeal-document-properties-datecreated.md "appeal-document.schema.json#/properties/dateCreated")

### dateCreated Type

`string`

### dateCreated Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateCreated Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateReceived

The date the document was received

> This is a manually entered date to indicate documents exchanged manually

`dateReceived`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-datereceived.md "appeal-document.schema.json#/properties/dateReceived")

### dateReceived Type

`string`

### dateReceived Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateReceived Examples

```json
"2023-07-27T20:30:00.000Z"
```

## datePublished

The date the document was published

`datePublished`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-datepublished.md "appeal-document.schema.json#/properties/datePublished")

### datePublished Type

`string`

### datePublished Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### datePublished Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lastModified

The last update date for the document

`lastModified`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-lastmodified.md "appeal-document.schema.json#/properties/lastModified")

### lastModified Type

`string`

### lastModified Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lastModified Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseType

The internal code for an appeal type, e.g. Householder (D)

`caseType`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-casetype.md "appeal-document.schema.json#/properties/caseType")

### caseType Type

`string`

### caseType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"C"`  |             |
| `"D"`  |             |
| `"F"`  |             |
| `"G"`  |             |
| `"H"`  |             |
| `"L"`  |             |
| `"Q"`  |             |
| `"S"`  |             |
| `"V"`  |             |
| `"W"`  |             |
| `"X"`  |             |
| `"Y"`  |             |
| `"Z"`  |             |
| `null` |             |

## redactedStatus

Indicates the redaction status for the document

`redactedStatus`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-redactedstatus.md "appeal-document.schema.json#/properties/redactedStatus")

### redactedStatus Type

`string`

### redactedStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"not_redacted"`          |             |
| `"redacted"`              |             |
| `"no_redaction_required"` |             |
| `null`                    |             |

## documentType

The type of document, used for exchange, migrations and consumption from the appeal back-office system

`documentType`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-documenttype.md "appeal-document.schema.json#/properties/documentType")

### documentType Type

`string`

### documentType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                             | Explanation |
| :-------------------------------- | :---------- |
| `"appellantCaseCorrespondence"`   |             |
| `"appellantCaseWithdrawalLetter"` |             |
| `"appellantCostsApplication"`     |             |
| `"appellantCostsCorrespondence"`  |             |
| `"appellantCostsWithdrawal"`      |             |
| `"appellantStatement"`            |             |
| `"applicationDecisionLetter"`     |             |
| `"changedDescription"`            |             |
| `"originalApplicationForm"`       |             |
| `"whoNotified"`                   |             |
| `"whoNotifiedSiteNotice"`         |             |
| `"whoNotifiedLetterToNeighbours"` |             |
| `"whoNotifiedPressAdvert"`        |             |
| `"conservationMap"`               |             |
| `"lpaCaseCorrespondence"`         |             |
| `"lpaCostsApplication"`           |             |
| `"lpaCostsCorrespondence"`        |             |
| `"lpaCostsWithdrawal"`            |             |
| `"otherPartyRepresentations"`     |             |
| `"planningOfficerReport"`         |             |
| `"costsDecisionLetter"`           |             |
| `"caseDecisionLetter"`            |             |
| `"crossTeamCorrespondence"`       |             |
| `"inspectorCorrespondence"`       |             |
| `"uncategorised"`                 |             |
| `"designAccessStatement"`         |             |
| `"plansDrawings"`                 |             |
| `"newPlansDrawings"`              |             |
| `"planningObligation"`            |             |
| `"ownershipCertificate"`          |             |
| `"otherNewDocuments"`             |             |
| `"statementCommonGround"`         |             |
| `"communityInfrastructureLevy"`   |             |
| `"supplementaryPlanning"`         |             |
| `"otherRelevantPolicies"`         |             |
| `"emergingPlan"`                  |             |
| `"developmentPlanPolicies"`       |             |
| `"consultationResponses"`         |             |
| `"eiaEnvironmentalStatement"`     |             |
| `"eiaScreeningDirection"`         |             |
| `"eiaScreeningOpinion"`           |             |
| `"definitiveMapStatement"`        |             |
| `"treePreservationPlan"`          |             |
| `"interestedPartyComment"`        |             |
| `"lpaStatement"`                  |             |
| `"rule6Statement"`                |             |
| `"appellantFinalComment"`         |             |
| `"lpaFinalComment"`               |             |
| `"appellantProofOfEvidence"`      |             |
| `"appellantWitnessesEvidence"`    |             |
| `"lpaProofOfEvidence"`            |             |
| `"lpaWitnessesEvidence"`          |             |
| `"rule6ProofOfEvidence"`          |             |
| `"environmentalAssessment"`       |             |
| `null`                            |             |

## sourceSystem

The system mastering the metadata for the current document

`sourceSystem`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-sourcesystem.md "appeal-document.schema.json#/properties/sourceSystem")

### sourceSystem Type

`string`

### sourceSystem Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"back-office-appeals"` |             |
| `"horizon"`             |             |
| `"acp"`                 |             |
| `"sharepoint"`          |             |
| `null`                  |             |

## origin

Indicates where the documents originates from

`origin`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-origin.md "appeal-document.schema.json#/properties/origin")

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

Owner of the current document

`owner`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-owner.md "appeal-document.schema.json#/properties/owner")

### owner Type

`string`

## author

Name of person who authored document

`author`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-author.md "appeal-document.schema.json#/properties/author")

### author Type

`string`

## description

A custom description for the document

`description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-description.md "appeal-document.schema.json#/properties/description")

### description Type

`string`

## caseStage

The stage in the appeal process that has created the document

> This could be useful to reduce the number of document types, allowing the same type to be reused across stages

`caseStage`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-casestage.md "appeal-document.schema.json#/properties/caseStage")

### caseStage Type

`string`

### caseStage Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"appellant-case"`       |             |
| `"lpa-questionnaire"`    |             |
| `"statements"`           |             |
| `"third-party-comments"` |             |
| `"evidence"`             |             |
| `"witnesses"`            |             |
| `"final-comments"`       |             |
| `"appeal-decision"`      |             |
| `"costs"`                |             |
| `"internal"`             |             |
| `null`                   |             |

## horizonFolderId

The folder ID containing the document in Horizon

> Used for legacy / migrations

`horizonFolderId`

*   is required

*   Type: `string`

*   can be null

*   defined in: [Appeal Document](appeal-document-properties-horizonfolderid.md "appeal-document.schema.json#/properties/horizonFolderId")

### horizonFolderId Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
