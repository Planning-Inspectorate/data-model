## Casework Representation Schema Type

`object` ([Casework Representation Schema](applications-representation.md))

# Casework Representation Schema Properties

| Property                                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                                                                 | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-id.md "applications-representation.schema.json#/properties/id")                                                                 |
| [reference](#reference)                                                   | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-reference.md "applications-representation.schema.json#/properties/reference")                                                   |
| [caseReference](#casereference)                                           | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-casereference.md "applications-representation.schema.json#/properties/caseReference")                                           |
| [caseId](#caseid)                                                         | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-caseid.md "applications-representation.schema.json#/properties/caseId")                                                         |
| [caseType](#casetype)                                                     | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-casetype.md "applications-representation.schema.json#/properties/caseType")                                                     |
| [representationStatus](#representationstatus)                             | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-representationstatus.md "applications-representation.schema.json#/properties/representationStatus")                             |
| [submittedFor](#submittedfor)                                             | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-submittedfor.md "applications-representation.schema.json#/properties/submittedFor")                                             |
| [submittedByContact](#submittedbycontact)                                 | `array`   | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-submittedbycontact.md "applications-representation.schema.json#/properties/submittedByContact")                                 |
| [submittedByAgent](#submittedbyagent)                                     | `boolean` | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-submittedbyagent.md "applications-representation.schema.json#/properties/submittedByAgent")                                     |
| [submittedByAgentOrgName](#submittedbyagentorgname)                       | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-submittedbyagentorgname.md "applications-representation.schema.json#/properties/submittedByAgentOrgName")                       |
| [submittedDate](#submitteddate)                                           | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-submitteddate.md "applications-representation.schema.json#/properties/submittedDate")                                           |
| [submittedReceivedMethod](#submittedreceivedmethod)                       | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-submittedreceivedmethod.md "applications-representation.schema.json#/properties/submittedReceivedMethod")                       |
| [submissionMethodReason](#submissionmethodreason)                         | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-submissionmethodreason.md "applications-representation.schema.json#/properties/submissionMethodReason")                         |
| [comment](#comment)                                                       | `string`  | Required | cannot be null | [Casework Representation Schema](applications-representation-properties-comment.md "applications-representation.schema.json#/properties/comment")                                                       |
| [commentRedacted](#commentredacted)                                       | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-commentredacted.md "applications-representation.schema.json#/properties/commentRedacted")                                       |
| [representedType](#representedtype)                                       | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-representedtype.md "applications-representation.schema.json#/properties/representedType")                                       |
| [representedContact](#representedcontact)                                 | `array`   | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-representedcontact.md "applications-representation.schema.json#/properties/representedContact")                                 |
| [representedCategory](#representedcategory)                               | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-representedcategory.md "applications-representation.schema.json#/properties/representedCategory")                               |
| [wantsToBeHeard](#wantstobeheard)                                         | `boolean` | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-wantstobeheard.md "applications-representation.schema.json#/properties/wantsToBeHeard")                                         |
| [containsAttachments](#containsattachments)                               | `boolean` | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-containsattachments.md "applications-representation.schema.json#/properties/containsAttachments")                               |
| [sharePointFolderCreated](#sharepointfoldercreated)                       | `boolean` | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-sharepointfoldercreated.md "applications-representation.schema.json#/properties/sharePointFolderCreated")                       |
| [distressingContentInRepresentation](#distressingcontentinrepresentation) | `boolean` | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-distressingcontentinrepresentation.md "applications-representation.schema.json#/properties/distressingContentInRepresentation") |
| [withdrawalRequestDate](#withdrawalrequestdate)                           | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-withdrawalrequestdate.md "applications-representation.schema.json#/properties/withdrawalRequestDate")                           |
| [withdrawalReason](#withdrawalreason)                                     | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-withdrawalreason.md "applications-representation.schema.json#/properties/withdrawalReason")                                     |
| [dateWithdrawn](#datewithdrawn)                                           | `string`  | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-datewithdrawn.md "applications-representation.schema.json#/properties/dateWithdrawn")                                           |
| [representationDocuments](#representationdocuments)                       | `array`   | Optional | can be null    | [Casework Representation Schema](applications-representation-properties-representationdocuments.md "applications-representation.schema.json#/properties/representationDocuments")                       |
| Additional Properties                                                     | Any       | Optional | can be null    |                                                                                                                                                                                                         |

## id

Primary key

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-id.md "applications-representation.schema.json#/properties/id")

### id Type

`string`

## reference

Auto-generated hexadecimal reference: AAAAA-BBBBB

`reference`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-reference.md "applications-representation.schema.json#/properties/reference")

### reference Type

`string`

## caseReference

Business Key for the related case

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-casereference.md "applications-representation.schema.json#/properties/caseReference")

### caseReference Type

`string`

## caseId

The unique ID for the case this representation belongs to.

`caseId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-caseid.md "applications-representation.schema.json#/properties/caseId")

### caseId Type

`string`

## caseType

The type of case this representation is for.

`caseType`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-casetype.md "applications-representation.schema.json#/properties/caseType")

### caseType Type

`string`

## representationStatus



`representationStatus`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-representationstatus.md "applications-representation.schema.json#/properties/representationStatus")

### representationStatus Type

`string`

### representationStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"Awaiting review"` |             |
| `"Accepted"`        |             |
| `"Rejected"`        |             |
| `"Withdrawn"`       |             |

## submittedFor



`submittedFor`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-submittedfor.md "applications-representation.schema.json#/properties/submittedFor")

### submittedFor Type

`string`

### submittedFor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                              | Explanation |
| :------------------------------------------------- | :---------- |
| `"Myself"`                                         |             |
| `"On behalf of another person or an organisation"` |             |

## submittedByContact



`submittedByContact`

* is optional

* Type: `object[]` ([Details](applications-representation-defs-contact.md))

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-submittedbycontact.md "applications-representation.schema.json#/properties/submittedByContact")

### submittedByContact Type

`object[]` ([Details](applications-representation-defs-contact.md))

## submittedByAgent



`submittedByAgent`

* is optional

* Type: `boolean`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-submittedbyagent.md "applications-representation.schema.json#/properties/submittedByAgent")

### submittedByAgent Type

`boolean`

## submittedByAgentOrgName



`submittedByAgentOrgName`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-submittedbyagentorgname.md "applications-representation.schema.json#/properties/submittedByAgentOrgName")

### submittedByAgentOrgName Type

`string`

## submittedDate



`submittedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-submitteddate.md "applications-representation.schema.json#/properties/submittedDate")

### submittedDate Type

`string`

### submittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## submittedReceivedMethod

How we received the representation

`submittedReceivedMethod`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-submittedreceivedmethod.md "applications-representation.schema.json#/properties/submittedReceivedMethod")

### submittedReceivedMethod Type

`string`

### submittedReceivedMethod Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"Online"`    |             |
| `"Phone"`     |             |
| `"Email"`     |             |
| `"Post"`      |             |
| `"In person"` |             |

## submissionMethodReason



`submissionMethodReason`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-submissionmethodreason.md "applications-representation.schema.json#/properties/submissionMethodReason")

### submissionMethodReason Type

`string`

## comment



`comment`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-properties-comment.md "applications-representation.schema.json#/properties/comment")

### comment Type

`string`

## commentRedacted

redacted version of the comment, null if not redacted

`commentRedacted`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-commentredacted.md "applications-representation.schema.json#/properties/commentRedacted")

### commentRedacted Type

`string`

## representedType

When representation is on behalf of a person/org/group

`representedType`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-representedtype.md "applications-representation.schema.json#/properties/representedType")

### representedType Type

`string`

### representedType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                         | Explanation |
| :------------------------------------------------------------ | :---------- |
| `"A person"`                                                  |             |
| `"An organisation or charity I work or volunteer for"`        |             |
| `"An organisation or charity I do not work or volunteer for"` |             |

## representedContact

When representation is on behalf of a person/org/group

`representedContact`

* is optional

* Type: `object[]` ([Details](applications-representation-defs-contact.md))

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-representedcontact.md "applications-representation.schema.json#/properties/representedContact")

### representedContact Type

`object[]` ([Details](applications-representation-defs-contact.md))

## representedCategory



`representedCategory`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-representedcategory.md "applications-representation.schema.json#/properties/representedCategory")

### representedCategory Type

`string`

### representedCategory Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"Consultees"`       |             |
| `"Interested party"` |             |

## wantsToBeHeard

Internal: wants to be heard at a hearing

`wantsToBeHeard`

* is optional

* Type: `boolean`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-wantstobeheard.md "applications-representation.schema.json#/properties/wantsToBeHeard")

### wantsToBeHeard Type

`boolean`

## containsAttachments

Is a document attached to the representation

`containsAttachments`

* is optional

* Type: `boolean`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-containsattachments.md "applications-representation.schema.json#/properties/containsAttachments")

### containsAttachments Type

`boolean`

## sharePointFolderCreated

to avoid creating new folders for documents when managing representations

`sharePointFolderCreated`

* is optional

* Type: `boolean`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-sharepointfoldercreated.md "applications-representation.schema.json#/properties/sharePointFolderCreated")

### sharePointFolderCreated Type

`boolean`

## distressingContentInRepresentation

Flags the representation as containing distressing content

`distressingContentInRepresentation`

* is optional

* Type: `boolean`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-distressingcontentinrepresentation.md "applications-representation.schema.json#/properties/distressingContentInRepresentation")

### distressingContentInRepresentation Type

`boolean`

## withdrawalRequestDate

Date the representing party requested that the representation be withdrawn

`withdrawalRequestDate`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-withdrawalrequestdate.md "applications-representation.schema.json#/properties/withdrawalRequestDate")

### withdrawalRequestDate Type

`string`

### withdrawalRequestDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## withdrawalReason

Reason for the withdrawal

`withdrawalReason`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-withdrawalreason.md "applications-representation.schema.json#/properties/withdrawalReason")

### withdrawalReason Type

`string`

### withdrawalReason Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"Change of opinion"`   |             |
| `"Mistaken Submission"` |             |
| `"Misunderstanding"`    |             |
| `"Personal Reasons"`    |             |

## dateWithdrawn

Date the representation was withdrawn

`dateWithdrawn`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-datewithdrawn.md "applications-representation.schema.json#/properties/dateWithdrawn")

### dateWithdrawn Type

`string`

### dateWithdrawn Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## representationDocuments



`representationDocuments`

* is optional

* Type: `object[]` ([Details](applications-representation-defs-representationdocument.md))

* can be null

* defined in: [Casework Representation Schema](applications-representation-properties-representationdocuments.md "applications-representation.schema.json#/properties/representationDocuments")

### representationDocuments Type

`object[]` ([Details](applications-representation-defs-representationdocument.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# Casework Representation Schema Definitions

## Definitions group contact

Reference this group by using

```json
{"$ref":"applications-representation.schema.json#/$defs/contact"}
```

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contactId](#contactid)                               | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-contact-properties-contactid.md "applications-representation.schema.json#/$defs/contact/properties/contactId")                               |
| [contactPreference](#contactpreference)               | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-contact-properties-contactpreference.md "applications-representation.schema.json#/$defs/contact/properties/contactPreference")               |
| [writtenRepOrgName](#writtenreporgname)               | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-contact-properties-writtenreporgname.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepOrgName")               |
| [writtenRepJobTitleorRole](#writtenrepjobtitleorrole) | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-contact-properties-writtenrepjobtitleorrole.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole") |

### contactId

Source PK for Contact

`contactId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-contactid.md "applications-representation.schema.json#/$defs/contact/properties/contactId")

#### contactId Type

`string`

### contactPreference



`contactPreference`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-contactpreference.md "applications-representation.schema.json#/$defs/contact/properties/contactPreference")

#### contactPreference Type

`string`

#### contactPreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"email"` |             |
| `"post"`  |             |

### writtenRepOrgName



`writtenRepOrgName`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-writtenreporgname.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepOrgName")

#### writtenRepOrgName Type

`string`

### writtenRepJobTitleorRole



`writtenRepJobTitleorRole`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-writtenrepjobtitleorrole.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole")

#### writtenRepJobTitleorRole Type

`string`

## Definitions group representationDocument

Reference this group by using

```json
{"$ref":"applications-representation.schema.json#/$defs/representationDocument"}
```

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)                           | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-id.md "applications-representation.schema.json#/$defs/representationDocument/properties/id")                             |
| [representationId](#representationid) | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-representationid.md "applications-representation.schema.json#/$defs/representationDocument/properties/representationId") |
| [itemId](#itemid)                     | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-itemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/itemId")                     |
| [fileName](#filename)                 | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-filename.md "applications-representation.schema.json#/$defs/representationDocument/properties/fileName")                 |
| [redactedItemId](#redacteditemid)     | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redacteditemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedItemId")     |
| [redactedFileName](#redactedfilename) | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redactedfilename.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedFileName") |
| [status](#status)                     | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-representationdocument-properties-status.md "applications-representation.schema.json#/$defs/representationDocument/properties/status")                     |

### id

Source Key for Representation Document

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-id.md "applications-representation.schema.json#/$defs/representationDocument/properties/id")

#### id Type

`string`

### representationId

The representation this relates to

`representationId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-representationid.md "applications-representation.schema.json#/$defs/representationDocument/properties/representationId")

#### representationId Type

`string`

### itemId

The id of the item in SharePoint

`itemId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-itemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/itemId")

#### itemId Type

`string`

### fileName

The name of the file

`fileName`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-filename.md "applications-representation.schema.json#/$defs/representationDocument/properties/fileName")

#### fileName Type

`string`

### redactedItemId

The id of the redacted version of the item in sharepoint

`redactedItemId`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redacteditemid.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedItemId")

#### redactedItemId Type

`string`

### redactedFileName

the name of the redacted file

`redactedFileName`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-redactedfilename.md "applications-representation.schema.json#/$defs/representationDocument/properties/redactedFileName")

#### redactedFileName Type

`string`

### status

The status of the document

`status`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-representationdocument-properties-status.md "applications-representation.schema.json#/$defs/representationDocument/properties/status")

#### status Type

`string`

#### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"Awaiting review"` |             |
| `"Accepted"`        |             |
| `"Rejected"`        |             |
| `"Withdrawn"`       |             |
