## Crown Development Application Type

`object` ([Crown Development Application](applications-application.md))

# Crown Development Application Properties

| Property                                                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :-------------------------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                                   | `string`  | Required | cannot be null | [Crown Development Application](applications-application-properties-id.md "applications-application.schema.json#/properties/id")                                                                   |
| [reference](#reference)                                                     | `string`  | Required | cannot be null | [Crown Development Application](applications-application-properties-reference.md "applications-application.schema.json#/properties/reference")                                                     |
| [createdDate](#createddate)                                                 | `string`  | Required | cannot be null | [Crown Development Application](applications-application-properties-createddate.md "applications-application.schema.json#/properties/createdDate")                                                 |
| [updatedDate](#updateddate)                                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-updateddate.md "applications-application.schema.json#/properties/updatedDate")                                                 |
| [type](#type)                                                               | `string`  | Required | cannot be null | [Crown Development Application](applications-application-properties-type.md "applications-application.schema.json#/properties/type")                                                               |
| [subType](#subtype)                                                         | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-subtype.md "applications-application.schema.json#/properties/subType")                                                         |
| [linkedParentId](#linkedparentid)                                           | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-linkedparentid.md "applications-application.schema.json#/properties/linkedParentId")                                           |
| [description](#description)                                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-description.md "applications-application.schema.json#/properties/description")                                                 |
| [primaryLPACode](#primarylpacode)                                           | `string`  | Optional | cannot be null | [Crown Development Application](applications-application-properties-primarylpacode.md "applications-application.schema.json#/properties/primaryLPACode")                                           |
| [secondaryLPACode](#secondarylpacode)                                       | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-secondarylpacode.md "applications-application.schema.json#/properties/secondaryLPACode")                                       |
| [hasAgent](#hasagent)                                                       | `boolean` | Required | cannot be null | [Crown Development Application](applications-application-properties-hasagent.md "applications-application.schema.json#/properties/hasAgent")                                                       |
| [organisations](#organisations)                                             | `array`   | Optional | cannot be null | [Crown Development Application](applications-application-properties-organisations.md "applications-application.schema.json#/properties/organisations")                                             |
| [siteAddress](#siteaddress)                                                 | `array`   | Optional | can be null    | [Crown Development Application](applications-application-properties-siteaddress.md "applications-application.schema.json#/properties/siteAddress")                                                 |
| [siteEasting](#siteeasting)                                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-siteeasting.md "applications-application.schema.json#/properties/siteEasting")                                                 |
| [siteNorthing](#sitenorthing)                                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-sitenorthing.md "applications-application.schema.json#/properties/siteNorthing")                                               |
| [siteArea](#sitearea)                                                       | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-sitearea.md "applications-application.schema.json#/properties/siteArea")                                                       |
| [expectedDateOfSubmission](#expecteddateofsubmission)                       | `string`  | Optional | cannot be null | [Crown Development Application](applications-application-properties-expecteddateofsubmission.md "applications-application.schema.json#/properties/expectedDateOfSubmission")                       |
| [applicationStatus](#applicationstatus)                                     | `string`  | Optional | cannot be null | [Crown Development Application](applications-application-properties-applicationstatus.md "applications-application.schema.json#/properties/applicationStatus")                                     |
| [applicationStage](#applicationstage)                                       | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationstage.md "applications-application.schema.json#/properties/applicationStage")                                       |
| [nationallyImportant](#nationallyimportant)                                 | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-nationallyimportant.md "applications-application.schema.json#/properties/nationallyImportant")                                 |
| [nationallyImportantConfirmationDate](#nationallyimportantconfirmationdate) | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-nationallyimportantconfirmationdate.md "applications-application.schema.json#/properties/nationallyImportantConfirmationDate") |
| [notNationallyImportantEmailSent](#notnationallyimportantemailsent)         | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-notnationallyimportantemailsent.md "applications-application.schema.json#/properties/notNationallyImportantEmailSent")         |
| [containsDistressingContent](#containsdistressingcontent)                   | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-containsdistressingcontent.md "applications-application.schema.json#/properties/containsDistressingContent")                   |
| [lpaReference](#lpareference)                                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-lpareference.md "applications-application.schema.json#/properties/lpaReference")                                               |
| [category](#category)                                                       | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-category.md "applications-application.schema.json#/properties/category")                                                       |
| [isGreenBelt](#isgreenbelt)                                                 | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-isgreenbelt.md "applications-application.schema.json#/properties/isGreenBelt")                                                 |
| [healthAndSafetyIssue](#healthandsafetyissue)                               | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-healthandsafetyissue.md "applications-application.schema.json#/properties/healthAndSafetyIssue")                               |
| [applicationReceivedDate](#applicationreceiveddate)                         | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationreceiveddate.md "applications-application.schema.json#/properties/applicationReceivedDate")                         |
| [applicationReceivedDateEmailSent](#applicationreceiveddateemailsent)       | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationreceiveddateemailsent.md "applications-application.schema.json#/properties/applicationReceivedDateEmailSent")       |
| [applicationAcceptedDate](#applicationaccepteddate)                         | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationaccepteddate.md "applications-application.schema.json#/properties/applicationAcceptedDate")                         |
| [lpaQuestionnaireSentDate](#lpaquestionnairesentdate)                       | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-lpaquestionnairesentdate.md "applications-application.schema.json#/properties/lpaQuestionnaireSentDate")                       |
| [lpaQuestionnaireReceivedDate](#lpaquestionnairereceiveddate)               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-lpaquestionnairereceiveddate.md "applications-application.schema.json#/properties/lpaQuestionnaireReceivedDate")               |
| [lpaQuestionnaireReceivedEmailSent](#lpaquestionnairereceivedemailsent)     | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-lpaquestionnairereceivedemailsent.md "applications-application.schema.json#/properties/lpaQuestionnaireReceivedEmailSent")     |
| [publishDate](#publishdate)                                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-publishdate.md "applications-application.schema.json#/properties/publishDate")                                                 |
| [pressNoticeDate](#pressnoticedate)                                         | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-pressnoticedate.md "applications-application.schema.json#/properties/pressNoticeDate")                                         |
| [neighboursNotifiedByLpaDate](#neighboursnotifiedbylpadate)                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-neighboursnotifiedbylpadate.md "applications-application.schema.json#/properties/neighboursNotifiedByLpaDate")                 |
| [siteNoticeByLpaDate](#sitenoticebylpadate)                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-sitenoticebylpadate.md "applications-application.schema.json#/properties/siteNoticeByLpaDate")                                 |
| [targetDecisionDate](#targetdecisiondate)                                   | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-targetdecisiondate.md "applications-application.schema.json#/properties/targetDecisionDate")                                   |
| [extendedTargetDecisionDate](#extendedtargetdecisiondate)                   | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-extendedtargetdecisiondate.md "applications-application.schema.json#/properties/extendedTargetDecisionDate")                   |
| [recoveredDate](#recovereddate)                                             | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-recovereddate.md "applications-application.schema.json#/properties/recoveredDate")                                             |
| [recoveredReportSentDate](#recoveredreportsentdate)                         | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-recoveredreportsentdate.md "applications-application.schema.json#/properties/recoveredReportSentDate")                         |
| [withdrawnDate](#withdrawndate)                                             | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-withdrawndate.md "applications-application.schema.json#/properties/withdrawnDate")                                             |
| [decisionDate](#decisiondate)                                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-decisiondate.md "applications-application.schema.json#/properties/decisionDate")                                               |
| [originalDecisionDate](#originaldecisiondate)                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-originaldecisiondate.md "applications-application.schema.json#/properties/originalDecisionDate")                               |
| [decisionOutcome](#decisionoutcome)                                         | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-decisionoutcome.md "applications-application.schema.json#/properties/decisionOutcome")                                         |
| [turnedAwayDate](#turnedawaydate)                                           | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-turnedawaydate.md "applications-application.schema.json#/properties/turnedAwayDate")                                           |
| [representationsPublishDate](#representationspublishdate)                   | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-representationspublishdate.md "applications-application.schema.json#/properties/representationsPublishDate")                   |
| [representationsPeriodStartDate](#representationsperiodstartdate)           | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-representationsperiodstartdate.md "applications-application.schema.json#/properties/representationsPeriodStartDate")           |
| [representationsPeriodEndDate](#representationsperiodenddate)               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-representationsperiodenddate.md "applications-application.schema.json#/properties/representationsPeriodEndDate")               |
| [inspector1Id](#inspector1id)                                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-inspector1id.md "applications-application.schema.json#/properties/inspector1Id")                                               |
| [inspector2Id](#inspector2id)                                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-inspector2id.md "applications-application.schema.json#/properties/inspector2Id")                                               |
| [inspector3Id](#inspector3id)                                               | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-inspector3id.md "applications-application.schema.json#/properties/inspector3Id")                                               |
| [assessorInspectorId](#assessorinspectorid)                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-assessorinspectorid.md "applications-application.schema.json#/properties/assessorInspectorId")                                 |
| [caseOfficerId](#caseofficerid)                                             | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-caseofficerid.md "applications-application.schema.json#/properties/caseOfficerId")                                             |
| [planningOfficerId](#planningofficerid)                                     | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-planningofficerid.md "applications-application.schema.json#/properties/planningOfficerId")                                     |
| [eiaScreening](#eiascreening)                                               | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-eiascreening.md "applications-application.schema.json#/properties/eiaScreening")                                               |
| [eiaScreeningOutcome](#eiascreeningoutcome)                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eiascreeningoutcome.md "applications-application.schema.json#/properties/eiaScreeningOutcome")                                 |
| [environmentalStatementReceivedDate](#environmentalstatementreceiveddate)   | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-environmentalstatementreceiveddate.md "applications-application.schema.json#/properties/environmentalStatementReceivedDate")   |
| [siteIsVisibleFromPublicLand](#siteisvisiblefrompublicland)                 | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-siteisvisiblefrompublicland.md "applications-application.schema.json#/properties/siteIsVisibleFromPublicLand")                 |
| [procedure](#procedure)                                                     | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-procedure.md "applications-application.schema.json#/properties/procedure")                                                     |
| [procedureNotificationDate](#procedurenotificationdate)                     | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-procedurenotificationdate.md "applications-application.schema.json#/properties/procedureNotificationDate")                     |
| [eventDate](#eventdate)                                                     | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventdate.md "applications-application.schema.json#/properties/eventDate")                                                     |
| [eventPrepDuration](#eventprepduration)                                     | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventprepduration.md "applications-application.schema.json#/properties/eventPrepDuration")                                     |
| [eventSittingDuration](#eventsittingduration)                               | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventsittingduration.md "applications-application.schema.json#/properties/eventSittingDuration")                               |
| [eventReportingDuration](#eventreportingduration)                           | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventreportingduration.md "applications-application.schema.json#/properties/eventReportingDuration")                           |
| [eventVenue](#eventvenue)                                                   | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventvenue.md "applications-application.schema.json#/properties/eventVenue")                                                   |
| [eventNotificationDate](#eventnotificationdate)                             | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventnotificationdate.md "applications-application.schema.json#/properties/eventNotificationDate")                             |
| [eventIssuesReportPublishedDate](#eventissuesreportpublisheddate)           | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventissuesreportpublisheddate.md "applications-application.schema.json#/properties/eventIssuesReportPublishedDate")           |
| [eventStatementsDate](#eventstatementsdate)                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventstatementsdate.md "applications-application.schema.json#/properties/eventStatementsDate")                                 |
| [eventCaseManagementConferenceDate](#eventcasemanagementconferencedate)     | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventcasemanagementconferencedate.md "applications-application.schema.json#/properties/eventCaseManagementConferenceDate")     |
| [eventPreMeetingDate](#eventpremeetingdate)                                 | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventpremeetingdate.md "applications-application.schema.json#/properties/eventPreMeetingDate")                                 |
| [eventProofsOfEvidenceDate](#eventproofsofevidencedate)                     | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-eventproofsofevidencedate.md "applications-application.schema.json#/properties/eventProofsOfEvidenceDate")                     |
| [hasApplicationFee](#hasapplicationfee)                                     | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-hasapplicationfee.md "applications-application.schema.json#/properties/hasApplicationFee")                                     |
| [applicationFee](#applicationfee)                                           | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationfee.md "applications-application.schema.json#/properties/applicationFee")                                           |
| [applicationFeeReceivedDate](#applicationfeereceiveddate)                   | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationfeereceiveddate.md "applications-application.schema.json#/properties/applicationFeeReceivedDate")                   |
| [eligibleForFeeRefund](#eligibleforfeerefund)                               | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-eligibleforfeerefund.md "applications-application.schema.json#/properties/eligibleForFeeRefund")                               |
| [applicationFeeRefundAmount](#applicationfeerefundamount)                   | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationfeerefundamount.md "applications-application.schema.json#/properties/applicationFeeRefundAmount")                   |
| [applicationFeeRefundDate](#applicationfeerefunddate)                       | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-applicationfeerefunddate.md "applications-application.schema.json#/properties/applicationFeeRefundDate")                       |
| [siteVisitDate](#sitevisitdate)                                             | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-sitevisitdate.md "applications-application.schema.json#/properties/siteVisitDate")                                             |
| [cilLiable](#cilliable)                                                     | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-cilliable.md "applications-application.schema.json#/properties/cilLiable")                                                     |
| [cilAmount](#cilamount)                                                     | `number`  | Optional | can be null    | [Crown Development Application](applications-application-properties-cilamount.md "applications-application.schema.json#/properties/cilAmount")                                                     |
| [bngExempt](#bngexempt)                                                     | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-bngexempt.md "applications-application.schema.json#/properties/bngExempt")                                                     |
| [hasCostsApplications](#hascostsapplications)                               | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-hascostsapplications.md "applications-application.schema.json#/properties/hasCostsApplications")                               |
| [costsApplicationsComment](#costsapplicationscomment)                       | `string`  | Optional | can be null    | [Crown Development Application](applications-application-properties-costsapplicationscomment.md "applications-application.schema.json#/properties/costsApplicationsComment")                       |
| [environmentalImpactAssessment](#environmentalimpactassessment)             | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-environmentalimpactassessment.md "applications-application.schema.json#/properties/environmentalImpactAssessment")             |
| [developmentPlan](#developmentplan)                                         | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-developmentplan.md "applications-application.schema.json#/properties/developmentPlan")                                         |
| [rightOfWay](#rightofway)                                                   | `boolean` | Optional | can be null    | [Crown Development Application](applications-application-properties-rightofway.md "applications-application.schema.json#/properties/rightOfWay")                                                   |
| Additional Properties                                                       | Any       | Optional | can be null    |                                                                                                                                                                                                    |

## id

Internal Identifier UUID

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-id.md "applications-application.schema.json#/properties/id")

### id Type

`string`

## reference

External Identifier: CROWN/YYYY/XXXXXXX

`reference`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-reference.md "applications-application.schema.json#/properties/reference")

### reference Type

`string`

## createdDate

Date the case was created

`createdDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-createddate.md "applications-application.schema.json#/properties/createdDate")

### createdDate Type

`string`

### createdDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## updatedDate

Date the case was updated

`updatedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-updateddate.md "applications-application.schema.json#/properties/updatedDate")

### updatedDate Type

`string`

### updatedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## type

Type of application. Name displayed to users

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-type.md "applications-application.schema.json#/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                                                                                   | Explanation |
| :---------------------------------------------------------------------------------------------------------------------- | :---------- |
| `"Planning permission"`                                                                                                 |             |
| `"Outline planning permission with some matters reserved"`                                                              |             |
| `"Outline planning permission with all matters reserved"`                                                               |             |
| `"Approval of reserved matters following outline approval"`                                                             |             |
| `"Planning permission and listed building consent (LBC) for alterations, extension or demolition of a listed building"` |             |

## subType

SubType applies to Planning permissions and LBC

`subType`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-subtype.md "applications-application.schema.json#/properties/subType")

### subType Type

`string`

### subType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                             | Explanation |
| :-------------------------------- | :---------- |
| `"Planning permission"`           |             |
| `"Listed building consent (LBC)"` |             |

## linkedParentId

Self-referencial for parent to children relationship

`linkedParentId`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-linkedparentid.md "applications-application.schema.json#/properties/linkedParentId")

### linkedParentId Type

`string`

## description

Description of the project

`description`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-description.md "applications-application.schema.json#/properties/description")

### description Type

`string`

## primaryLPACode

Primary Planning Body code

`primaryLPACode`

* is optional

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-primarylpacode.md "applications-application.schema.json#/properties/primaryLPACode")

### primaryLPACode Type

`string`

## secondaryLPACode

Secondary LPAs when project overlaps authorities

`secondaryLPACode`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-secondarylpacode.md "applications-application.schema.json#/properties/secondaryLPACode")

### secondaryLPACode Type

`string`

## hasAgent

Is an agent assigned to the case on behalf of the applicant

`hasAgent`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-hasagent.md "applications-application.schema.json#/properties/hasAgent")

### hasAgent Type

`boolean`

## organisations

Applications can have one or more organisaitons associated with them.

`organisations`

* is optional

* Type: `object[]` ([Details](applications-application-defs-organisation.md))

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-organisations.md "applications-application.schema.json#/properties/organisations")

### organisations Type

`object[]` ([Details](applications-application-defs-organisation.md))

## siteAddress

Site Address details

`siteAddress`

* is optional

* Type: `object[]` ([Details](applications-application-defs-address.md))

* can be null

* defined in: [Crown Development Application](applications-application-properties-siteaddress.md "applications-application.schema.json#/properties/siteAddress")

### siteAddress Type

`object[]` ([Details](applications-application-defs-address.md))

## siteEasting

Easting of the site, if known

`siteEasting`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-siteeasting.md "applications-application.schema.json#/properties/siteEasting")

### siteEasting Type

`string`

## siteNorthing

Northing of the site, if known

`siteNorthing`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-sitenorthing.md "applications-application.schema.json#/properties/siteNorthing")

### siteNorthing Type

`string`

## siteArea

Site area in hectares

`siteArea`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-sitearea.md "applications-application.schema.json#/properties/siteArea")

### siteArea Type

`number`

## expectedDateOfSubmission

Date case officer expects the application to be submitted (NB: cases are created before document submissions as applicants upload directly)

`expectedDateOfSubmission`

* is optional

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-expecteddateofsubmission.md "applications-application.schema.json#/properties/expectedDateOfSubmission")

### expectedDateOfSubmission Type

`string`

### expectedDateOfSubmission Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## applicationStatus

Current status of the case (enum)

`applicationStatus`

* is optional

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-properties-applicationstatus.md "applications-application.schema.json#/properties/applicationStatus")

### applicationStatus Type

`string`

### applicationStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                | Explanation |
| :--------------------------------------------------- | :---------- |
| `"New"`                                              |             |
| `"Accepted"`                                         |             |
| `"Invalid"`                                          |             |
| `"Consultation period open"`                         |             |
| `"Hearing/Inquiry date set"`                         |             |
| `"Application on hold awaiting further information"` |             |
| `"Report awaited"`                                   |             |
| `"Report sent to Decision Branch"`                   |             |
| `"Decision awaited"`                                 |             |
| `"Decided"`                                          |             |
| `"Withdrawn"`                                        |             |
| `"Declined to determine"`                            |             |
| `"Closed - invalid"`                                 |             |
| `"Closed - opened in error"`                         |             |

## applicationStage

Current stage of the case (enum)

`applicationStage`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationstage.md "applications-application.schema.json#/properties/applicationStage")

### applicationStage Type

`string`

### applicationStage Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"Accepted"`                 |             |
| `"Consultation"`             |             |
| `"Procedure choice"`         |             |
| `"Written representations"`  |             |
| `"Inquiry"`                  |             |
| `"Hearing/Inquiry date set"` |             |
| `"Final decision"`           |             |

## nationallyImportant

Site is nationally important (Yes/No)

`nationallyImportant`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-nationallyimportant.md "applications-application.schema.json#/properties/nationallyImportant")

### nationallyImportant Type

`boolean`

## nationallyImportantConfirmationDate

Date the application's national importance was confirmed

`nationallyImportantConfirmationDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-nationallyimportantconfirmationdate.md "applications-application.schema.json#/properties/nationallyImportantConfirmationDate")

### nationallyImportantConfirmationDate Type

`string`

### nationallyImportantConfirmationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## notNationallyImportantEmailSent

Flags if a notNationallyImportant email has been sent

`notNationallyImportantEmailSent`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-notnationallyimportantemailsent.md "applications-application.schema.json#/properties/notNationallyImportantEmailSent")

### notNationallyImportantEmailSent Type

`boolean`

## containsDistressingContent

Highlights the cases as containing distressing content

`containsDistressingContent`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-containsdistressingcontent.md "applications-application.schema.json#/properties/containsDistressingContent")

### containsDistressingContent Type

`boolean`

## lpaReference

LPA cross reference. Reference number for the case as known by the Local Planning Authority (LPA)

`lpaReference`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-lpareference.md "applications-application.schema.json#/properties/lpaReference")

### lpaReference Type

`string`

## category

Application category (enum)

`category`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-category.md "applications-application.schema.json#/properties/category")

### category Type

`string`

### category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                         | Explanation |
| :-------------------------------------------- | :---------- |
| `"Major Development"`                         |             |
| `"Buildings over 1000 square metres"`         |             |
| `"Development of a site above 1 hectare"`     |             |
| `"Dwellings numbering 10 or more"`            |             |
| `"Dwellings of 0.5 hectare or more"`          |             |
| `"Minerals"`                                  |             |
| `"Waste"`                                     |             |
| `"Non-Major Development"`                     |             |
| `"Buildings less than 1000 square metres"`    |             |
| `"Development of a site less than 1 hectare"` |             |
| `"Dwellings numbering between 1 and 9"`       |             |
| `"Dwellings of less than 0.5 hectare"`        |             |
| `"Change of use"`                             |             |
| `"Relevant demolition"`                       |             |
| `"Other"`                                     |             |
| `"Listed building consent to alter/extend"`   |             |
| `"Listed building consent to demolish"`       |             |

## isGreenBelt

Is the site in green belt land

`isGreenBelt`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-isgreenbelt.md "applications-application.schema.json#/properties/isGreenBelt")

### isGreenBelt Type

`boolean`

## healthAndSafetyIssue

Does the Site has H\&S Issue

`healthAndSafetyIssue`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-healthandsafetyissue.md "applications-application.schema.json#/properties/healthAndSafetyIssue")

### healthAndSafetyIssue Type

`boolean`

## applicationReceivedDate

Date the application was received

`applicationReceivedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationreceiveddate.md "applications-application.schema.json#/properties/applicationReceivedDate")

### applicationReceivedDate Type

`string`

### applicationReceivedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## applicationReceivedDateEmailSent

Flags if an applicationReceived email has been sent

`applicationReceivedDateEmailSent`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationreceiveddateemailsent.md "applications-application.schema.json#/properties/applicationReceivedDateEmailSent")

### applicationReceivedDateEmailSent Type

`boolean`

## applicationAcceptedDate

Date the application was accepted

`applicationAcceptedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationaccepteddate.md "applications-application.schema.json#/properties/applicationAcceptedDate")

### applicationAcceptedDate Type

`string`

### applicationAcceptedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## lpaQuestionnaireSentDate

Date the lpa questionnaire was sent

`lpaQuestionnaireSentDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-lpaquestionnairesentdate.md "applications-application.schema.json#/properties/lpaQuestionnaireSentDate")

### lpaQuestionnaireSentDate Type

`string`

### lpaQuestionnaireSentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## lpaQuestionnaireReceivedDate

Date the lpa questionnaire was received

`lpaQuestionnaireReceivedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-lpaquestionnairereceiveddate.md "applications-application.schema.json#/properties/lpaQuestionnaireReceivedDate")

### lpaQuestionnaireReceivedDate Type

`string`

### lpaQuestionnaireReceivedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## lpaQuestionnaireReceivedEmailSent

Flags if an lpaQuestionnaireReceived email has been sent

`lpaQuestionnaireReceivedEmailSent`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-lpaquestionnairereceivedemailsent.md "applications-application.schema.json#/properties/lpaQuestionnaireReceivedEmailSent")

### lpaQuestionnaireReceivedEmailSent Type

`boolean`

## publishDate

Date the application was published to the portal

`publishDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-publishdate.md "applications-application.schema.json#/properties/publishDate")

### publishDate Type

`string`

### publishDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## pressNoticeDate

Date the press notice was published

`pressNoticeDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-pressnoticedate.md "applications-application.schema.json#/properties/pressNoticeDate")

### pressNoticeDate Type

`string`

### pressNoticeDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## neighboursNotifiedByLpaDate

Date the neighbours were notified by the LPA

`neighboursNotifiedByLpaDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-neighboursnotifiedbylpadate.md "applications-application.schema.json#/properties/neighboursNotifiedByLpaDate")

### neighboursNotifiedByLpaDate Type

`string`

### neighboursNotifiedByLpaDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## siteNoticeByLpaDate

Date the site notice was erected by the LPA

`siteNoticeByLpaDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-sitenoticebylpadate.md "applications-application.schema.json#/properties/siteNoticeByLpaDate")

### siteNoticeByLpaDate Type

`string`

### siteNoticeByLpaDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## targetDecisionDate

Date the application should be decided by

`targetDecisionDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-targetdecisiondate.md "applications-application.schema.json#/properties/targetDecisionDate")

### targetDecisionDate Type

`string`

### targetDecisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## extendedTargetDecisionDate

Extended date by which the application should be decided

`extendedTargetDecisionDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-extendedtargetdecisiondate.md "applications-application.schema.json#/properties/extendedTargetDecisionDate")

### extendedTargetDecisionDate Type

`string`

### extendedTargetDecisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## recoveredDate

Date the application was recovered by the Secretary of State

`recoveredDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-recovereddate.md "applications-application.schema.json#/properties/recoveredDate")

### recoveredDate Type

`string`

### recoveredDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## recoveredReportSentDate

Date the Inspector's report was sent to the Secretary of State

`recoveredReportSentDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-recoveredreportsentdate.md "applications-application.schema.json#/properties/recoveredReportSentDate")

### recoveredReportSentDate Type

`string`

### recoveredReportSentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## withdrawnDate

Date application was withdrawn

`withdrawnDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-withdrawndate.md "applications-application.schema.json#/properties/withdrawnDate")

### withdrawnDate Type

`string`

### withdrawnDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## decisionDate

Date the application was decided on

`decisionDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-decisiondate.md "applications-application.schema.json#/properties/decisionDate")

### decisionDate Type

`string`

### decisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## originalDecisionDate

Date of the original decision if later quashed

`originalDecisionDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-originaldecisiondate.md "applications-application.schema.json#/properties/originalDecisionDate")

### originalDecisionDate Type

`string`

### originalDecisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## decisionOutcome

As displayed to users

`decisionOutcome`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-decisionoutcome.md "applications-application.schema.json#/properties/decisionOutcome")

### decisionOutcome Type

`string`

### decisionOutcome Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"Approved"`                 |             |
| `"Approved with conditions"` |             |
| `"Refused"`                  |             |
| `"Withdrawn"`                |             |

## turnedAwayDate

Date application was turned away

`turnedAwayDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-turnedawaydate.md "applications-application.schema.json#/properties/turnedAwayDate")

### turnedAwayDate Type

`string`

### turnedAwayDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## representationsPublishDate

Date the representations was publish

`representationsPublishDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-representationspublishdate.md "applications-application.schema.json#/properties/representationsPublishDate")

### representationsPublishDate Type

`string`

### representationsPublishDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## representationsPeriodStartDate

Start date of the representation period (starts at 00:00)

`representationsPeriodStartDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-representationsperiodstartdate.md "applications-application.schema.json#/properties/representationsPeriodStartDate")

### representationsPeriodStartDate Type

`string`

### representationsPeriodStartDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## representationsPeriodEndDate

End date of the representation period (ends at 23:59)

`representationsPeriodEndDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-representationsperiodenddate.md "applications-application.schema.json#/properties/representationsPeriodEndDate")

### representationsPeriodEndDate Type

`string`

### representationsPeriodEndDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## inspector1Id

EntraID for Inspector

`inspector1Id`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-inspector1id.md "applications-application.schema.json#/properties/inspector1Id")

### inspector1Id Type

`string`

## inspector2Id

EntraID for Inspector

`inspector2Id`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-inspector2id.md "applications-application.schema.json#/properties/inspector2Id")

### inspector2Id Type

`string`

## inspector3Id

EntraID for Inspector

`inspector3Id`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-inspector3id.md "applications-application.schema.json#/properties/inspector3Id")

### inspector3Id Type

`string`

## assessorInspectorId

EntraID for Assessor

`assessorInspectorId`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-assessorinspectorid.md "applications-application.schema.json#/properties/assessorInspectorId")

### assessorInspectorId Type

`string`

## caseOfficerId

EntraID for Case Officer

`caseOfficerId`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-caseofficerid.md "applications-application.schema.json#/properties/caseOfficerId")

### caseOfficerId Type

`string`

## planningOfficerId

EntraID for Planning Officer

`planningOfficerId`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-planningofficerid.md "applications-application.schema.json#/properties/planningOfficerId")

### planningOfficerId Type

`string`

## eiaScreening

Does the application need an Environmental Impact Assessment

`eiaScreening`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eiascreening.md "applications-application.schema.json#/properties/eiaScreening")

### eiaScreening Type

`boolean`

## eiaScreeningOutcome

What was the outcome of the Environmental Impact Assessment

`eiaScreeningOutcome`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eiascreeningoutcome.md "applications-application.schema.json#/properties/eiaScreeningOutcome")

### eiaScreeningOutcome Type

`string`

### eiaScreeningOutcome Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"required"`     |             |
| `"not required"` |             |

## environmentalStatementReceivedDate

Date the environmental statement was received

`environmentalStatementReceivedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-environmentalstatementreceiveddate.md "applications-application.schema.json#/properties/environmentalStatementReceivedDate")

### environmentalStatementReceivedDate Type

`string`

### environmentalStatementReceivedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## siteIsVisibleFromPublicLand

Site is visible from public land (Yes/No or TRUE/FALSE tbc)

`siteIsVisibleFromPublicLand`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-siteisvisiblefrompublicland.md "applications-application.schema.json#/properties/siteIsVisibleFromPublicLand")

### siteIsVisibleFromPublicLand Type

`boolean`

## procedure

Name displayed to users

`procedure`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-procedure.md "applications-application.schema.json#/properties/procedure")

### procedure Type

`string`

### procedure Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                       | Explanation |
| :-------------------------- | :---------- |
| `"Written Representations"` |             |
| `"Hearing"`                 |             |
| `"Inquiry"`                 |             |

## procedureNotificationDate



`procedureNotificationDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-procedurenotificationdate.md "applications-application.schema.json#/properties/procedureNotificationDate")

### procedureNotificationDate Type

`string`

### procedureNotificationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventDate



`eventDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventdate.md "applications-application.schema.json#/properties/eventDate")

### eventDate Type

`string`

### eventDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventPrepDuration



`eventPrepDuration`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventprepduration.md "applications-application.schema.json#/properties/eventPrepDuration")

### eventPrepDuration Type

`number`

## eventSittingDuration



`eventSittingDuration`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventsittingduration.md "applications-application.schema.json#/properties/eventSittingDuration")

### eventSittingDuration Type

`number`

## eventReportingDuration



`eventReportingDuration`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventreportingduration.md "applications-application.schema.json#/properties/eventReportingDuration")

### eventReportingDuration Type

`number`

## eventVenue



`eventVenue`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventvenue.md "applications-application.schema.json#/properties/eventVenue")

### eventVenue Type

`string`

## eventNotificationDate



`eventNotificationDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventnotificationdate.md "applications-application.schema.json#/properties/eventNotificationDate")

### eventNotificationDate Type

`string`

### eventNotificationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventIssuesReportPublishedDate



`eventIssuesReportPublishedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventissuesreportpublisheddate.md "applications-application.schema.json#/properties/eventIssuesReportPublishedDate")

### eventIssuesReportPublishedDate Type

`string`

### eventIssuesReportPublishedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventStatementsDate



`eventStatementsDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventstatementsdate.md "applications-application.schema.json#/properties/eventStatementsDate")

### eventStatementsDate Type

`string`

### eventStatementsDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventCaseManagementConferenceDate



`eventCaseManagementConferenceDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventcasemanagementconferencedate.md "applications-application.schema.json#/properties/eventCaseManagementConferenceDate")

### eventCaseManagementConferenceDate Type

`string`

### eventCaseManagementConferenceDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventPreMeetingDate



`eventPreMeetingDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventpremeetingdate.md "applications-application.schema.json#/properties/eventPreMeetingDate")

### eventPreMeetingDate Type

`string`

### eventPreMeetingDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eventProofsOfEvidenceDate



`eventProofsOfEvidenceDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eventproofsofevidencedate.md "applications-application.schema.json#/properties/eventProofsOfEvidenceDate")

### eventProofsOfEvidenceDate Type

`string`

### eventProofsOfEvidenceDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## hasApplicationFee

Application has associated Fee (Yes/No or TRUE/FALSE tbc)

`hasApplicationFee`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-hasapplicationfee.md "applications-application.schema.json#/properties/hasApplicationFee")

### hasApplicationFee Type

`boolean`

## applicationFee

The amount to be payed by the Applicant

`applicationFee`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationfee.md "applications-application.schema.json#/properties/applicationFee")

### applicationFee Type

`number`

## applicationFeeReceivedDate

Date the application fee was received

`applicationFeeReceivedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationfeereceiveddate.md "applications-application.schema.json#/properties/applicationFeeReceivedDate")

### applicationFeeReceivedDate Type

`string`

### applicationFeeReceivedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eligibleForFeeRefund

Is the applicant eligible for a refund on the fee

`eligibleForFeeRefund`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-eligibleforfeerefund.md "applications-application.schema.json#/properties/eligibleForFeeRefund")

### eligibleForFeeRefund Type

`boolean`

## applicationFeeRefundAmount

The amount to be refunded to the Applicant

`applicationFeeRefundAmount`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationfeerefundamount.md "applications-application.schema.json#/properties/applicationFeeRefundAmount")

### applicationFeeRefundAmount Type

`number`

## applicationFeeRefundDate

Date the application fee was refunded

`applicationFeeRefundDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-applicationfeerefunddate.md "applications-application.schema.json#/properties/applicationFeeRefundDate")

### applicationFeeRefundDate Type

`string`

### applicationFeeRefundDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## siteVisitDate

Date the site was/is going to be visited by the inspector

`siteVisitDate`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-sitevisitdate.md "applications-application.schema.json#/properties/siteVisitDate")

### siteVisitDate Type

`string`

### siteVisitDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## cilLiable

Is the application liable for a community infrastructure levy

`cilLiable`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-cilliable.md "applications-application.schema.json#/properties/cilLiable")

### cilLiable Type

`boolean`

## cilAmount

The amount for the community infrastructure levy

`cilAmount`

* is optional

* Type: `number`

* can be null

* defined in: [Crown Development Application](applications-application-properties-cilamount.md "applications-application.schema.json#/properties/cilAmount")

### cilAmount Type

`number`

## bngExempt

Is the site exempt from the Biodiversity Net Gain

`bngExempt`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-bngexempt.md "applications-application.schema.json#/properties/bngExempt")

### bngExempt Type

`boolean`

## hasCostsApplications

If a party is making a cost claim against another for unreasonable behaviour

`hasCostsApplications`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-hascostsapplications.md "applications-application.schema.json#/properties/hasCostsApplications")

### hasCostsApplications Type

`boolean`

## costsApplicationsComment

Details about the cost application

`costsApplicationsComment`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-properties-costsapplicationscomment.md "applications-application.schema.json#/properties/costsApplicationsComment")

### costsApplicationsComment Type

`string`

## environmentalImpactAssessment

Does the application have an Environmental Impact Assessment - used for context in emails to LPAs

`environmentalImpactAssessment`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-environmentalimpactassessment.md "applications-application.schema.json#/properties/environmentalImpactAssessment")

### environmentalImpactAssessment Type

`boolean`

## developmentPlan

Is the application a standard development plan - used for context in emails to LPAs

`developmentPlan`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-developmentplan.md "applications-application.schema.json#/properties/developmentPlan")

### developmentPlan Type

`boolean`

## rightOfWay

Does the application apply to rights of way - used for context in emails to LPAs

`rightOfWay`

* is optional

* Type: `boolean`

* can be null

* defined in: [Crown Development Application](applications-application-properties-rightofway.md "applications-application.schema.json#/properties/rightOfWay")

### rightOfWay Type

`boolean`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# Crown Development Application Definitions

## Definitions group organisation

Reference this group by using

```json
{"$ref":"applications-application.schema.json#/$defs/organisation"}
```

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [roleType](#roletype)                       | `string` | Optional | cannot be null | [Crown Development Application](applications-application-defs-organisation-properties-roletype.md "applications-application.schema.json#/$defs/organisation/properties/roleType")                       |
| [organisationId](#organisationid)           | `string` | Required | cannot be null | [Crown Development Application](applications-application-defs-organisation-properties-organisationid.md "applications-application.schema.json#/$defs/organisation/properties/organisationId")           |
| [organisationName](#organisationname)       | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-organisation-properties-organisationname.md "applications-application.schema.json#/$defs/organisation/properties/organisationName")       |
| [organisationAddress](#organisationaddress) | `array`  | Optional | can be null    | [Crown Development Application](applications-application-defs-organisation-properties-organisationaddress.md "applications-application.schema.json#/$defs/organisation/properties/organisationAddress") |
| [contacts](#contacts)                       | `array`  | Optional | can be null    | [Crown Development Application](applications-application-defs-organisation-properties-contacts.md "applications-application.schema.json#/$defs/organisation/properties/contacts")                       |
| Additional Properties                       | Any      | Optional | can be null    |                                                                                                                                                                                                         |

### roleType

Agent or Applicant details

`roleType`

* is optional

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-defs-organisation-properties-roletype.md "applications-application.schema.json#/$defs/organisation/properties/roleType")

#### roleType Type

`string`

#### roleType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"agent"`     |             |
| `"applicant"` |             |

### organisationId

Source PK for Organisation

`organisationId`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-defs-organisation-properties-organisationid.md "applications-application.schema.json#/$defs/organisation/properties/organisationId")

#### organisationId Type

`string`

### organisationName



`organisationName`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-organisation-properties-organisationname.md "applications-application.schema.json#/$defs/organisation/properties/organisationName")

#### organisationName Type

`string`

### organisationAddress



`organisationAddress`

* is optional

* Type: `object[]` ([Details](applications-application-defs-address.md))

* can be null

* defined in: [Crown Development Application](applications-application-defs-organisation-properties-organisationaddress.md "applications-application.schema.json#/$defs/organisation/properties/organisationAddress")

#### organisationAddress Type

`object[]` ([Details](applications-application-defs-address.md))

### contacts

An Organisation may be linked to one or more Contacts

`contacts`

* is optional

* Type: `object[]` ([Details](applications-application-defs-contact.md))

* can be null

* defined in: [Crown Development Application](applications-application-defs-organisation-properties-contacts.md "applications-application.schema.json#/$defs/organisation/properties/contacts")

#### contacts Type

`object[]` ([Details](applications-application-defs-contact.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group contact

Reference this group by using

```json
{"$ref":"applications-application.schema.json#/$defs/contact"}
```

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [contactId](#contactid)                               | `string` | Required | cannot be null | [Crown Development Application](applications-application-defs-contact-properties-contactid.md "applications-application.schema.json#/$defs/contact/properties/contactId")                               |
| [contactPreference](#contactpreference)               | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-contact-properties-contactpreference.md "applications-application.schema.json#/$defs/contact/properties/contactPreference")               |
| [writtenRepOrgName](#writtenreporgname)               | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-contact-properties-writtenreporgname.md "applications-application.schema.json#/$defs/contact/properties/writtenRepOrgName")               |
| [writtenRepJobTitleorRole](#writtenrepjobtitleorrole) | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-contact-properties-writtenrepjobtitleorrole.md "applications-application.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole") |
| Additional Properties                                 | Any      | Optional | can be null    |                                                                                                                                                                                                         |

### contactId

Source PK for Contact

`contactId`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-contactid.md "applications-application.schema.json#/$defs/contact/properties/contactId")

#### contactId Type

`string`

### contactPreference



`contactPreference`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-contactpreference.md "applications-application.schema.json#/$defs/contact/properties/contactPreference")

#### contactPreference Type

`string`

#### contactPreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"email"` |             |
| `"post"`  |             |

### writtenRepOrgName

Organisation Name used for written-representation on behalf of an organisation

`writtenRepOrgName`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-writtenreporgname.md "applications-application.schema.json#/$defs/contact/properties/writtenRepOrgName")

#### writtenRepOrgName Type

`string`

### writtenRepJobTitleorRole

Job Title or Role used for written-representation on behalf of an organisation

`writtenRepJobTitleorRole`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-writtenrepjobtitleorrole.md "applications-application.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole")

#### writtenRepJobTitleorRole Type

`string`

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group address

Reference this group by using

```json
{"$ref":"applications-application.schema.json#/$defs/address"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [line1](#line1)       | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-address-properties-line1.md "applications-application.schema.json#/$defs/address/properties/line1")       |
| [line2](#line2)       | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-address-properties-line2.md "applications-application.schema.json#/$defs/address/properties/line2")       |
| [townCity](#towncity) | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-address-properties-towncity.md "applications-application.schema.json#/$defs/address/properties/townCity") |
| [county](#county)     | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-address-properties-county.md "applications-application.schema.json#/$defs/address/properties/county")     |
| [postcode](#postcode) | `string` | Required | cannot be null | [Crown Development Application](applications-application-defs-address-properties-postcode.md "applications-application.schema.json#/$defs/address/properties/postcode") |
| Additional Properties | Any      | Optional | can be null    |                                                                                                                                                                         |

### line1



`line1`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-address-properties-line1.md "applications-application.schema.json#/$defs/address/properties/line1")

#### line1 Type

`string`

### line2



`line2`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-address-properties-line2.md "applications-application.schema.json#/$defs/address/properties/line2")

#### line2 Type

`string`

### townCity



`townCity`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-address-properties-towncity.md "applications-application.schema.json#/$defs/address/properties/townCity")

#### townCity Type

`string`

### county



`county`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-address-properties-county.md "applications-application.schema.json#/$defs/address/properties/county")

#### county Type

`string`

### postcode



`postcode`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-defs-address-properties-postcode.md "applications-application.schema.json#/$defs/address/properties/postcode")

#### postcode Type

`string`

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema
