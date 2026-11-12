## Local Plans Case Type

`object` ([Local Plans Case](plans-case.md))

# Local Plans Case Properties

| Property                                                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                  |
| :---------------------------------------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                                     | `string`  | Required | cannot be null | [Local Plans Case](plans-case-properties-id.md "plans-case.schema.json#/properties/id")                                                                     |
| [caseReference](#casereference)                                               | `string`  | Required | cannot be null | [Local Plans Case](plans-case-properties-casereference.md "plans-case.schema.json#/properties/caseReference")                                               |
| [planTitle](#plantitle)                                                       | `string`  | Required | cannot be null | [Local Plans Case](plans-case-properties-plantitle.md "plans-case.schema.json#/properties/planTitle")                                                       |
| [planType](#plantype)                                                         | `string`  | Required | cannot be null | [Local Plans Case](plans-case-properties-plantype.md "plans-case.schema.json#/properties/planType")                                                         |
| [planBand](#planband)                                                         | `integer` | Optional | can be null    | [Local Plans Case](plans-case-properties-planband.md "plans-case.schema.json#/properties/planBand")                                                         |
| [caseOfficerId](#caseofficerid)                                               | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-caseofficerid.md "plans-case.schema.json#/properties/caseOfficerId")                                               |
| [lpaId](#lpaid)                                                               | `array`   | Required | cannot be null | [Local Plans Case](plans-case-properties-lpaid.md "plans-case.schema.json#/properties/lpaId")                                                               |
| [lpaContact](#lpacontact)                                                     | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-lpacontact.md "plans-case.schema.json#/properties/lpaContact")                                                     |
| [caseProgrammeOfficer](#caseprogrammeofficer)                                 | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-caseprogrammeofficer.md "plans-case.schema.json#/properties/caseProgrammeOfficer")                                 |
| [intentionToCommenceDate](#intentiontocommencedate)                           | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-intentiontocommencedate.md "plans-case.schema.json#/properties/intentionToCommenceDate")                           |
| [expectedSubmissionForExaminationDate](#expectedsubmissionforexaminationdate) | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-expectedsubmissionforexaminationdate.md "plans-case.schema.json#/properties/expectedSubmissionForExaminationDate") |
| [expectedPublicationDate](#expectedpublicationdate)                           | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-expectedpublicationdate.md "plans-case.schema.json#/properties/expectedPublicationDate")                           |
| [createdDate](#createddate)                                                   | `string`  | Required | cannot be null | [Local Plans Case](plans-case-properties-createddate.md "plans-case.schema.json#/properties/createdDate")                                                   |
| [deletedDate](#deleteddate)                                                   | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-deleteddate.md "plans-case.schema.json#/properties/deletedDate")                                                   |
| [gateway1ExpectedDate](#gateway1expecteddate)                                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway1expecteddate.md "plans-case.schema.json#/properties/gateway1ExpectedDate")                                 |
| [gateway1ActualDate](#gateway1actualdate)                                     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway1actualdate.md "plans-case.schema.json#/properties/gateway1ActualDate")                                     |
| [slaSentDate](#slasentdate)                                                   | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-slasentdate.md "plans-case.schema.json#/properties/slaSentDate")                                                   |
| [slaReceivedDate](#slareceiveddate)                                           | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-slareceiveddate.md "plans-case.schema.json#/properties/slaReceivedDate")                                           |
| [dsaCurrentAndValid](#dsacurrentandvalid)                                     | `boolean` | Optional | can be null    | [Local Plans Case](plans-case-properties-dsacurrentandvalid.md "plans-case.schema.json#/properties/dsaCurrentAndValid")                                     |
| [gateway2ExpectedDate](#gateway2expecteddate)                                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway2expecteddate.md "plans-case.schema.json#/properties/gateway2ExpectedDate")                                 |
| [gateway2ActualDate](#gateway2actualdate)                                     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway2actualdate.md "plans-case.schema.json#/properties/gateway2ActualDate")                                     |
| [gateway2AssessorId](#gateway2assessorid)                                     | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway2assessorid.md "plans-case.schema.json#/properties/gateway2AssessorId")                                     |
| [gateway2ReportIssuedDate](#gateway2reportissueddate)                         | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway2reportissueddate.md "plans-case.schema.json#/properties/gateway2ReportIssuedDate")                         |
| [reportPublishedByLpaDate](#reportpublishedbylpadate)                         | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-reportpublishedbylpadate.md "plans-case.schema.json#/properties/reportPublishedByLpaDate")                         |
| [workshopDocumentUploadedDate](#workshopdocumentuploadeddate)                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-workshopdocumentuploadeddate.md "plans-case.schema.json#/properties/workshopDocumentUploadedDate")                 |
| [gateway3ExpectedDate](#gateway3expecteddate)                                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway3expecteddate.md "plans-case.schema.json#/properties/gateway3ExpectedDate")                                 |
| [gateway3ActualDate](#gateway3actualdate)                                     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway3actualdate.md "plans-case.schema.json#/properties/gateway3ActualDate")                                     |
| [gateway3AssessorId](#gateway3assessorid)                                     | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-gateway3assessorid.md "plans-case.schema.json#/properties/gateway3AssessorId")                                     |
| [completionDate](#completiondate)                                             | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-completiondate.md "plans-case.schema.json#/properties/completionDate")                                             |
| [actualSubmissionForExaminationDate](#actualsubmissionforexaminationdate)     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-actualsubmissionforexaminationdate.md "plans-case.schema.json#/properties/actualSubmissionForExaminationDate")     |
| [examiningInspectorId](#examininginspectorid)                                 | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-examininginspectorid.md "plans-case.schema.json#/properties/examiningInspectorId")                                 |
| [examinationWebsite](#examinationwebsite)                                     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-examinationwebsite.md "plans-case.schema.json#/properties/examinationWebsite")                                     |
| [letterSentToMHCLGDate](#lettersenttomhclgdate)                               | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-lettersenttomhclgdate.md "plans-case.schema.json#/properties/letterSentToMHCLGDate")                               |
| [letterIssueDate](#letterissuedate)                                           | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-letterissuedate.md "plans-case.schema.json#/properties/letterIssueDate")                                           |
| [qaDate](#qadate)                                                             | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-qadate.md "plans-case.schema.json#/properties/qaDate")                                                             |
| [qaInspectorId](#qainspectorid)                                               | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-qainspectorid.md "plans-case.schema.json#/properties/qaInspectorId")                                               |
| [reportSentToPanelDate](#reportsenttopaneldate)                               | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-reportsenttopaneldate.md "plans-case.schema.json#/properties/reportSentToPanelDate")                               |
| [panelresponseToInspectorDate](#panelresponsetoinspectordate)                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-panelresponsetoinspectordate.md "plans-case.schema.json#/properties/panelresponseToInspectorDate")                 |
| [factCheckDateReceivedFromInspector](#factcheckdatereceivedfrominspector)     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-factcheckdatereceivedfrominspector.md "plans-case.schema.json#/properties/factCheckDateReceivedFromInspector")     |
| [factCheckDueDate](#factcheckduedate)                                         | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-factcheckduedate.md "plans-case.schema.json#/properties/factCheckDueDate")                                         |
| [factCheckActualDate](#factcheckactualdate)                                   | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-factcheckactualdate.md "plans-case.schema.json#/properties/factCheckActualDate")                                   |
| [factCheckReceivedBackFromLPADate](#factcheckreceivedbackfromlpadate)         | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-factcheckreceivedbackfromlpadate.md "plans-case.schema.json#/properties/factCheckReceivedBackFromLPADate")         |
| [finalReportIssueDate](#finalreportissuedate)                                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-finalreportissuedate.md "plans-case.schema.json#/properties/finalReportIssueDate")                                 |
| [planPauses](#planpauses)                                                     | `array`   | Optional | can be null    | [Local Plans Case](plans-case-properties-planpauses.md "plans-case.schema.json#/properties/planPauses")                                                     |
| [withdrawnDate](#withdrawndate)                                               | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-withdrawndate.md "plans-case.schema.json#/properties/withdrawnDate")                                               |
| [examinationOutcome](#examinationoutcome)                                     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-examinationoutcome.md "plans-case.schema.json#/properties/examinationOutcome")                                     |
| [examinationOutcomeDate](#examinationoutcomedate)                             | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-examinationoutcomedate.md "plans-case.schema.json#/properties/examinationOutcomeDate")                             |
| [adoptionDate](#adoptiondate)                                                 | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-adoptiondate.md "plans-case.schema.json#/properties/adoptionDate")                                                 |
| [approvedForCilDate](#approvedforcildate)                                     | `string`  | Optional | can be null    | [Local Plans Case](plans-case-properties-approvedforcildate.md "plans-case.schema.json#/properties/approvedForCilDate")                                     |
| Additional Properties                                                         | Any       | Optional | can be null    |                                                                                                                                                             |

## id

Primary Key

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-properties-id.md "plans-case.schema.json#/properties/id")

### id Type

`string`

### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## caseReference

CBOS Business Key

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-properties-casereference.md "plans-case.schema.json#/properties/caseReference")

### caseReference Type

`string`

## planTitle

The official title as in the Notice of Intention

`planTitle`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-properties-plantitle.md "plans-case.schema.json#/properties/planTitle")

### planTitle Type

`string`

## planType

Type of plan to be examined

`planType`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-properties-plantype.md "plans-case.schema.json#/properties/planType")

### planType Type

`string`

### planType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"local_plans"` |             |
| `"other"`       |             |

## planBand

Classification of grade/level of plan. Local Plans Band = 1

`planBand`

* is optional

* Type: `integer`

* can be null

* defined in: [Local Plans Case](plans-case-properties-planband.md "plans-case.schema.json#/properties/planBand")

### planBand Type

`integer`

### planBand Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `1`   |             |
| `2`   |             |
| `3`   |             |

## caseOfficerId

Entra IDs of PINS Case Officers assigned

`caseOfficerId`

* is optional

* Type: `string[]`

* can be null

* defined in: [Local Plans Case](plans-case-properties-caseofficerid.md "plans-case.schema.json#/properties/caseOfficerId")

### caseOfficerId Type

`string[]`

## lpaId

LPAs involved with case

`lpaId`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Local Plans Case](plans-case-properties-lpaid.md "plans-case.schema.json#/properties/lpaId")

### lpaId Type

`string[]`

## lpaContact

LPA Contacts involved with case

`lpaContact`

* is optional

* Type: `object[]` ([Details](plans-case-defs-localplanscontact.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-lpacontact.md "plans-case.schema.json#/properties/lpaContact")

### lpaContact Type

`object[]` ([Details](plans-case-defs-localplanscontact.md))

## caseProgrammeOfficer

Programme Officer(s) assigned to case by LPA(s)

`caseProgrammeOfficer`

* is optional

* Type: `object[]` ([Details](plans-case-defs-localplanscontact.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-caseprogrammeofficer.md "plans-case.schema.json#/properties/caseProgrammeOfficer")

### caseProgrammeOfficer Type

`object[]` ([Details](plans-case-defs-localplanscontact.md))

## intentionToCommenceDate

Date the LPA give notice to commence plan preparation

`intentionToCommenceDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-intentiontocommencedate.md "plans-case.schema.json#/properties/intentionToCommenceDate")

### intentionToCommenceDate Type

`string`

### intentionToCommenceDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## expectedSubmissionForExaminationDate

Date that LPA are seeking to submit

`expectedSubmissionForExaminationDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-expectedsubmissionforexaminationdate.md "plans-case.schema.json#/properties/expectedSubmissionForExaminationDate")

### expectedSubmissionForExaminationDate Type

`string`

### expectedSubmissionForExaminationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## expectedPublicationDate

Date that LPA are seeking to publish

`expectedPublicationDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-expectedpublicationdate.md "plans-case.schema.json#/properties/expectedPublicationDate")

### expectedPublicationDate Type

`string`

### expectedPublicationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## createdDate

Date case created in Back Office?

`createdDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-properties-createddate.md "plans-case.schema.json#/properties/createdDate")

### createdDate Type

`string`

### createdDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## deletedDate

Date case (soft) deleted in Back Office?

`deletedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-deleteddate.md "plans-case.schema.json#/properties/deletedDate")

### deletedDate Type

`string`

### deletedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway1ExpectedDate

Date that LPA expect to pass Gateway 1

`gateway1ExpectedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway1expecteddate.md "plans-case.schema.json#/properties/gateway1ExpectedDate")

### gateway1ExpectedDate Type

`string`

### gateway1ExpectedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway1ActualDate

Date that LPA actually passed Gateway 1

`gateway1ActualDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway1actualdate.md "plans-case.schema.json#/properties/gateway1ActualDate")

### gateway1ActualDate Type

`string`

### gateway1ActualDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## slaSentDate

Date SLA sent to LPA

`slaSentDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-slasentdate.md "plans-case.schema.json#/properties/slaSentDate")

### slaSentDate Type

`string`

### slaSentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## slaReceivedDate

Date SLA(s) signed/received back from LPA(s)

`slaReceivedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-slareceiveddate.md "plans-case.schema.json#/properties/slaReceivedDate")

### slaReceivedDate Type

`string`

### slaReceivedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## dsaCurrentAndValid

Do PINS and LPA(s) have current/valid DSAs

`dsaCurrentAndValid`

* is optional

* Type: `boolean`

* can be null

* defined in: [Local Plans Case](plans-case-properties-dsacurrentandvalid.md "plans-case.schema.json#/properties/dsaCurrentAndValid")

### dsaCurrentAndValid Type

`boolean`

## gateway2ExpectedDate

Date that LPA expect to pass Gateway 2

`gateway2ExpectedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway2expecteddate.md "plans-case.schema.json#/properties/gateway2ExpectedDate")

### gateway2ExpectedDate Type

`string`

### gateway2ExpectedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway2ActualDate

Date that LPA actually passed Gateway 2

`gateway2ActualDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway2actualdate.md "plans-case.schema.json#/properties/gateway2ActualDate")

### gateway2ActualDate Type

`string`

### gateway2ActualDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway2AssessorId

Gateway 2 Assessor inspector(s)

`gateway2AssessorId`

* is optional

* Type: `object[]` ([Details](plans-case-defs-inspector.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway2assessorid.md "plans-case.schema.json#/properties/gateway2AssessorId")

### gateway2AssessorId Type

`object[]` ([Details](plans-case-defs-inspector.md))

## gateway2ReportIssuedDate

Date report issued to LPA

`gateway2ReportIssuedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway2reportissueddate.md "plans-case.schema.json#/properties/gateway2ReportIssuedDate")

### gateway2ReportIssuedDate Type

`string`

### gateway2ReportIssuedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## reportPublishedByLpaDate

LPA should publish within 2 weeks of receiving report

`reportPublishedByLpaDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-reportpublishedbylpadate.md "plans-case.schema.json#/properties/reportPublishedByLpaDate")

### reportPublishedByLpaDate Type

`string`

### reportPublishedByLpaDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## workshopDocumentUploadedDate

Date workshop documents are uploaded

`workshopDocumentUploadedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-workshopdocumentuploadeddate.md "plans-case.schema.json#/properties/workshopDocumentUploadedDate")

### workshopDocumentUploadedDate Type

`string`

### workshopDocumentUploadedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway3ExpectedDate

Date that LPA expect to pass Gateway 3

`gateway3ExpectedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway3expecteddate.md "plans-case.schema.json#/properties/gateway3ExpectedDate")

### gateway3ExpectedDate Type

`string`

### gateway3ExpectedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway3ActualDate

Date that LPA actually passed Gateway 3

`gateway3ActualDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway3actualdate.md "plans-case.schema.json#/properties/gateway3ActualDate")

### gateway3ActualDate Type

`string`

### gateway3ActualDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## gateway3AssessorId

Gateway 3 Assessor inspector(s)

`gateway3AssessorId`

* is optional

* Type: `object[]` ([Details](plans-case-defs-inspector.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-gateway3assessorid.md "plans-case.schema.json#/properties/gateway3AssessorId")

### gateway3AssessorId Type

`object[]` ([Details](plans-case-defs-inspector.md))

## completionDate

Date Gateway3 completed

`completionDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-completiondate.md "plans-case.schema.json#/properties/completionDate")

### completionDate Type

`string`

### completionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## actualSubmissionForExaminationDate

Actual examination submission date

`actualSubmissionForExaminationDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-actualsubmissionforexaminationdate.md "plans-case.schema.json#/properties/actualSubmissionForExaminationDate")

### actualSubmissionForExaminationDate Type

`string`

### actualSubmissionForExaminationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## examiningInspectorId

Examining inspector(s) and appointment dates

`examiningInspectorId`

* is optional

* Type: `object[]` ([Details](plans-case-defs-inspector.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-examininginspectorid.md "plans-case.schema.json#/properties/examiningInspectorId")

### examiningInspectorId Type

`object[]` ([Details](plans-case-defs-inspector.md))

## examinationWebsite

URL to examination website

`examinationWebsite`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-examinationwebsite.md "plans-case.schema.json#/properties/examinationWebsite")

### examinationWebsite Type

`string`

### examinationWebsite Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## letterSentToMHCLGDate

Date letter is sent to MHCLG under 48 hour protocol

`letterSentToMHCLGDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-lettersenttomhclgdate.md "plans-case.schema.json#/properties/letterSentToMHCLGDate")

### letterSentToMHCLGDate Type

`string`

### letterSentToMHCLGDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## letterIssueDate

Date Letter(s) sent to LPA

`letterIssueDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-letterissuedate.md "plans-case.schema.json#/properties/letterIssueDate")

### letterIssueDate Type

`string`

### letterIssueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## qaDate

Date the report has come in for QA

`qaDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-qadate.md "plans-case.schema.json#/properties/qaDate")

### qaDate Type

`string`

### qaDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## qaInspectorId

QA inspector(s)

`qaInspectorId`

* is optional

* Type: `object[]` ([Details](plans-case-defs-inspector.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-qainspectorid.md "plans-case.schema.json#/properties/qaInspectorId")

### qaInspectorId Type

`object[]` ([Details](plans-case-defs-inspector.md))

## reportSentToPanelDate

Date report is sent to panel

`reportSentToPanelDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-reportsenttopaneldate.md "plans-case.schema.json#/properties/reportSentToPanelDate")

### reportSentToPanelDate Type

`string`

### reportSentToPanelDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## panelresponseToInspectorDate

Date panel responds to inspector

`panelresponseToInspectorDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-panelresponsetoinspectordate.md "plans-case.schema.json#/properties/panelresponseToInspectorDate")

### panelresponseToInspectorDate Type

`string`

### panelresponseToInspectorDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## factCheckDateReceivedFromInspector

Date the report was received from the Inspector for Fact Check

`factCheckDateReceivedFromInspector`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-factcheckdatereceivedfrominspector.md "plans-case.schema.json#/properties/factCheckDateReceivedFromInspector")

### factCheckDateReceivedFromInspector Type

`string`

### factCheckDateReceivedFromInspector Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## factCheckDueDate

Date the report is expected to be sent to the LPA for Fact Check

`factCheckDueDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-factcheckduedate.md "plans-case.schema.json#/properties/factCheckDueDate")

### factCheckDueDate Type

`string`

### factCheckDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## factCheckActualDate

Date the report is actually sent to the LPA for Fact Check

`factCheckActualDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-factcheckactualdate.md "plans-case.schema.json#/properties/factCheckActualDate")

### factCheckActualDate Type

`string`

### factCheckActualDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## factCheckReceivedBackFromLPADate

Fact Check received back from LPA

`factCheckReceivedBackFromLPADate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-factcheckreceivedbackfromlpadate.md "plans-case.schema.json#/properties/factCheckReceivedBackFromLPADate")

### factCheckReceivedBackFromLPADate Type

`string`

### factCheckReceivedBackFromLPADate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## finalReportIssueDate

Date the report is issued to the LPA

`finalReportIssueDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-finalreportissuedate.md "plans-case.schema.json#/properties/finalReportIssueDate")

### finalReportIssueDate Type

`string`

### finalReportIssueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## planPauses

History of plan pause(s)

`planPauses`

* is optional

* Type: `object[]` ([Details](plans-case-defs-planpausehistory.md))

* can be null

* defined in: [Local Plans Case](plans-case-properties-planpauses.md "plans-case.schema.json#/properties/planPauses")

### planPauses Type

`object[]` ([Details](plans-case-defs-planpausehistory.md))

## withdrawnDate

Date the Plan is Withdrawn by the LPA

`withdrawnDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-withdrawndate.md "plans-case.schema.json#/properties/withdrawnDate")

### withdrawnDate Type

`string`

### withdrawnDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## examinationOutcome

Outcome

`examinationOutcome`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-examinationoutcome.md "plans-case.schema.json#/properties/examinationOutcome")

### examinationOutcome Type

`string`

### examinationOutcome Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"Sound"`   |             |
| `"Unsound"` |             |
| `null`      |             |

## examinationOutcomeDate

Outcome date

`examinationOutcomeDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-examinationoutcomedate.md "plans-case.schema.json#/properties/examinationOutcomeDate")

### examinationOutcomeDate Type

`string`

### examinationOutcomeDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## adoptionDate

Date the LPA have adopted the Plan

`adoptionDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-adoptiondate.md "plans-case.schema.json#/properties/adoptionDate")

### adoptionDate Type

`string`

### adoptionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## approvedForCilDate

TBC by Ops Team

`approvedForCilDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-properties-approvedforcildate.md "plans-case.schema.json#/properties/approvedForCilDate")

### approvedForCilDate Type

`string`

### approvedForCilDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# Local Plans Case Definitions

## Definitions group localPlansContact

Reference this group by using

```json
{"$ref":"plans-case.schema.json#/$defs/localPlansContact"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :---------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)                   | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-id.md "plans-case.schema.json#/$defs/localPlansContact/properties/id")                     |
| [firstName](#firstname)       | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-firstname.md "plans-case.schema.json#/$defs/localPlansContact/properties/firstName")       |
| [lastName](#lastname)         | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-lastname.md "plans-case.schema.json#/$defs/localPlansContact/properties/lastName")         |
| [emailAddress](#emailaddress) | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-emailaddress.md "plans-case.schema.json#/$defs/localPlansContact/properties/emailAddress") |
| [phone](#phone)               | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-localplanscontact-properties-phone.md "plans-case.schema.json#/$defs/localPlansContact/properties/phone")               |
| [pinsLpaCode](#pinslpacode)   | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-pinslpacode.md "plans-case.schema.json#/$defs/localPlansContact/properties/pinsLpaCode")   |
| [startDate](#startdate)       | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-localplanscontact-properties-startdate.md "plans-case.schema.json#/$defs/localPlansContact/properties/startDate")       |
| [endDate](#enddate)           | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-localplanscontact-properties-enddate.md "plans-case.schema.json#/$defs/localPlansContact/properties/endDate")           |

### id

Primary Key for Contact

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-id.md "plans-case.schema.json#/$defs/localPlansContact/properties/id")

#### id Type

`string`

#### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

### firstName

First name

`firstName`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-firstname.md "plans-case.schema.json#/$defs/localPlansContact/properties/firstName")

#### firstName Type

`string`

### lastName

Last name

`lastName`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-lastname.md "plans-case.schema.json#/$defs/localPlansContact/properties/lastName")

#### lastName Type

`string`

### emailAddress

Email address

`emailAddress`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-emailaddress.md "plans-case.schema.json#/$defs/localPlansContact/properties/emailAddress")

#### emailAddress Type

`string`

#### emailAddress Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

### phone

Phone number

`phone`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-phone.md "plans-case.schema.json#/$defs/localPlansContact/properties/phone")

#### phone Type

`string`

### pinsLpaCode

PINS LPA Code

`pinsLpaCode`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-pinslpacode.md "plans-case.schema.json#/$defs/localPlansContact/properties/pinsLpaCode")

#### pinsLpaCode Type

`string`

### startDate

Start date

`startDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-startdate.md "plans-case.schema.json#/$defs/localPlansContact/properties/startDate")

#### startDate Type

`string`

#### startDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### endDate

End date

`endDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-localplanscontact-properties-enddate.md "plans-case.schema.json#/$defs/localPlansContact/properties/endDate")

#### endDate Type

`string`

#### endDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## Definitions group inspector

Reference this group by using

```json
{"$ref":"plans-case.schema.json#/$defs/inspector"}
```

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :---------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [entraId](#entraid)                 | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-inspector-properties-entraid.md "plans-case.schema.json#/$defs/inspector/properties/entraId")                 |
| [appointmentDate](#appointmentdate) | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-inspector-properties-appointmentdate.md "plans-case.schema.json#/$defs/inspector/properties/appointmentDate") |
| [endDate](#enddate-1)               | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-inspector-properties-enddate.md "plans-case.schema.json#/$defs/inspector/properties/endDate")                 |

### entraId

Entra ID

`entraId`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-inspector-properties-entraid.md "plans-case.schema.json#/$defs/inspector/properties/entraId")

#### entraId Type

`string`

### appointmentDate

Date inspector appointed to case

`appointmentDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-inspector-properties-appointmentdate.md "plans-case.schema.json#/$defs/inspector/properties/appointmentDate")

#### appointmentDate Type

`string`

#### appointmentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### endDate

Date inspector disassociated with case

`endDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-inspector-properties-enddate.md "plans-case.schema.json#/$defs/inspector/properties/endDate")

#### endDate Type

`string`

#### endDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## Definitions group planPauseHistory

Reference this group by using

```json
{"$ref":"plans-case.schema.json#/$defs/planPauseHistory"}
```

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-2)                               | `string` | Required | cannot be null | [Local Plans Case](plans-case-defs-planpausehistory-properties-id.md "plans-case.schema.json#/$defs/planPauseHistory/properties/id")                                 |
| [planPauseStartDate](#planpausestartdate) | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-planpausehistory-properties-planpausestartdate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseStartDate") |
| [planPauseEndDate](#planpauseenddate)     | `string` | Optional | can be null    | [Local Plans Case](plans-case-defs-planpausehistory-properties-planpauseenddate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseEndDate")     |

### id

CBOS Internal key of pause

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Local Plans Case](plans-case-defs-planpausehistory-properties-id.md "plans-case.schema.json#/$defs/planPauseHistory/properties/id")

#### id Type

`string`

### planPauseStartDate

Date pause begins

`planPauseStartDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-planpausehistory-properties-planpausestartdate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseStartDate")

#### planPauseStartDate Type

`string`

#### planPauseStartDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### planPauseEndDate

Date pause ends

`planPauseEndDate`

* is optional

* Type: `string`

* can be null

* defined in: [Local Plans Case](plans-case-defs-planpausehistory-properties-planpauseenddate.md "plans-case.schema.json#/$defs/planPauseHistory/properties/planPauseEndDate")

#### planPauseEndDate Type

`string`

#### planPauseEndDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
