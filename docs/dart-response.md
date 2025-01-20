## DaRT API response Type

`object` ([DaRT API response](dart-response.md))

# DaRT API response Properties

| Property                                                            | Type      | Required | Nullable       | Defined by                                                                                                                                               |
| :------------------------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [caseId](#caseid)                                                   | `integer` | Optional | cannot be null | [DaRT API response](dart-response-properties-caseid.md "dart-response.schema.json#/properties/caseId")                                                   |
| [caseReference](#casereference)                                     | `integer` | Optional | cannot be null | [DaRT API response](dart-response-properties-casereference.md "dart-response.schema.json#/properties/caseReference")                                     |
| [caseStatus](#casestatus)                                           | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-casestatus.md "dart-response.schema.json#/properties/caseStatus")                                           |
| [caseType](#casetype)                                               | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-casetype.md "dart-response.schema.json#/properties/caseType")                                               |
| [caseProcedure](#caseprocedure)                                     | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-caseprocedure.md "dart-response.schema.json#/properties/caseProcedure")                                     |
| [lpaCode](#lpacode)                                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-lpacode.md "dart-response.schema.json#/properties/lpaCode")                                                 |
| [lpaName](#lpaname)                                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-lpaname.md "dart-response.schema.json#/properties/lpaName")                                                 |
| [allocationLevel](#allocationlevel)                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-allocationlevel.md "dart-response.schema.json#/properties/allocationLevel")                                 |
| [allocationBand](#allocationband)                                   | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-allocationband.md "dart-response.schema.json#/properties/allocationBand")                                   |
| [caseSpecialisms](#casespecialisms)                                 | `array`   | Optional | can be null    | [DaRT API response](dart-response-properties-casespecialisms.md "dart-response.schema.json#/properties/caseSpecialisms")                                 |
| [caseSubmittedDate](#casesubmitteddate)                             | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-casesubmitteddate.md "dart-response.schema.json#/properties/caseSubmittedDate")                             |
| [caseCreatedDate](#casecreateddate)                                 | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-casecreateddate.md "dart-response.schema.json#/properties/caseCreatedDate")                                 |
| [caseUpdatedDate](#caseupdateddate)                                 | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-caseupdateddate.md "dart-response.schema.json#/properties/caseUpdatedDate")                                 |
| [caseValidDate](#casevaliddate)                                     | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casevaliddate.md "dart-response.schema.json#/properties/caseValidDate")                                     |
| [caseValidationDate](#casevalidationdate)                           | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casevalidationdate.md "dart-response.schema.json#/properties/caseValidationDate")                           |
| [caseValidationOutcome](#casevalidationoutcome)                     | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casevalidationoutcome.md "dart-response.schema.json#/properties/caseValidationOutcome")                     |
| [caseValidationInvalidDetails](#casevalidationinvaliddetails)       | `array`   | Optional | can be null    | [DaRT API response](dart-response-properties-casevalidationinvaliddetails.md "dart-response.schema.json#/properties/caseValidationInvalidDetails")       |
| [caseValidationIncompleteDetails](#casevalidationincompletedetails) | `array`   | Optional | can be null    | [DaRT API response](dart-response-properties-casevalidationincompletedetails.md "dart-response.schema.json#/properties/caseValidationIncompleteDetails") |
| [caseExtensionDate](#caseextensiondate)                             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-caseextensiondate.md "dart-response.schema.json#/properties/caseExtensionDate")                             |
| [caseStartedDate](#casestarteddate)                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casestarteddate.md "dart-response.schema.json#/properties/caseStartedDate")                                 |
| [casePublishedDate](#casepublisheddate)                             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casepublisheddate.md "dart-response.schema.json#/properties/casePublishedDate")                             |
| [linkedCaseStatus](#linkedcasestatus)                               | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-linkedcasestatus.md "dart-response.schema.json#/properties/linkedCaseStatus")                               |
| [leadCaseReference](#leadcasereference)                             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-leadcasereference.md "dart-response.schema.json#/properties/leadCaseReference")                             |
| [caseWithdrawnDate](#casewithdrawndate)                             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casewithdrawndate.md "dart-response.schema.json#/properties/caseWithdrawnDate")                             |
| [caseTransferredDate](#casetransferreddate)                         | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casetransferreddate.md "dart-response.schema.json#/properties/caseTransferredDate")                         |
| [transferredCaseClosedDate](#transferredcasecloseddate)             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-transferredcasecloseddate.md "dart-response.schema.json#/properties/transferredCaseClosedDate")             |
| [caseDecisionOutcomeDate](#casedecisionoutcomedate)                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casedecisionoutcomedate.md "dart-response.schema.json#/properties/caseDecisionOutcomeDate")                 |
| [caseDecisionPublishedDate](#casedecisionpublisheddate)             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casedecisionpublisheddate.md "dart-response.schema.json#/properties/caseDecisionPublishedDate")             |
| [caseDecisionOutcome](#casedecisionoutcome)                         | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casedecisionoutcome.md "dart-response.schema.json#/properties/caseDecisionOutcome")                         |
| [caseCompletedDate](#casecompleteddate)                             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casecompleteddate.md "dart-response.schema.json#/properties/caseCompletedDate")                             |
| [enforcementNotice](#enforcementnotice)                             | `boolean` | Optional | can be null    | [DaRT API response](dart-response-properties-enforcementnotice.md "dart-response.schema.json#/properties/enforcementNotice")                             |
| [applicationReference](#applicationreference)                       | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-applicationreference.md "dart-response.schema.json#/properties/applicationReference")                       |
| [applicationDate](#applicationdate)                                 | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-applicationdate.md "dart-response.schema.json#/properties/applicationDate")                                 |
| [applicationDecision](#applicationdecision)                         | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-applicationdecision.md "dart-response.schema.json#/properties/applicationDecision")                         |
| [lpaDecisionDate](#lpadecisiondate)                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-lpadecisiondate.md "dart-response.schema.json#/properties/lpaDecisionDate")                                 |
| [caseSubmissionDueDate](#casesubmissionduedate)                     | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-casesubmissionduedate.md "dart-response.schema.json#/properties/caseSubmissionDueDate")                     |
| [siteAddressLine1](#siteaddressline1)                               | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-siteaddressline1.md "dart-response.schema.json#/properties/siteAddressLine1")                               |
| [siteAddressLine2](#siteaddressline2)                               | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-siteaddressline2.md "dart-response.schema.json#/properties/siteAddressLine2")                               |
| [siteAddressTown](#siteaddresstown)                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-siteaddresstown.md "dart-response.schema.json#/properties/siteAddressTown")                                 |
| [siteAddressCounty](#siteaddresscounty)                             | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-siteaddresscounty.md "dart-response.schema.json#/properties/siteAddressCounty")                             |
| [siteAddressPostcode](#siteaddresspostcode)                         | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-siteaddresspostcode.md "dart-response.schema.json#/properties/siteAddressPostcode")                         |
| [isCorrectAppealType](#iscorrectappealtype)                         | `boolean` | Optional | can be null    | [DaRT API response](dart-response-properties-iscorrectappealtype.md "dart-response.schema.json#/properties/isCorrectAppealType")                         |
| [originalDevelopmentDescription](#originaldevelopmentdescription)   | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-originaldevelopmentdescription.md "dart-response.schema.json#/properties/originalDevelopmentDescription")   |
| [changedDevelopmentDescription](#changeddevelopmentdescription)     | `boolean` | Optional | can be null    | [DaRT API response](dart-response-properties-changeddevelopmentdescription.md "dart-response.schema.json#/properties/changedDevelopmentDescription")     |
| [newConditionDetails](#newconditiondetails)                         | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-newconditiondetails.md "dart-response.schema.json#/properties/newConditionDetails")                         |
| [nearbyCaseReferences](#nearbycasereferences)                       | `array`   | Optional | can be null    | [DaRT API response](dart-response-properties-nearbycasereferences.md "dart-response.schema.json#/properties/nearbyCaseReferences")                       |
| [neighbouringSiteAddresses](#neighbouringsiteaddresses)             | `array`   | Optional | can be null    | [DaRT API response](dart-response-properties-neighbouringsiteaddresses.md "dart-response.schema.json#/properties/neighbouringSiteAddresses")             |
| [affectedListedBuildingNumbers](#affectedlistedbuildingnumbers)     | `array`   | Optional | can be null    | [DaRT API response](dart-response-properties-affectedlistedbuildingnumbers.md "dart-response.schema.json#/properties/affectedListedBuildingNumbers")     |
| [appellantCostsAppliedFor](#appellantcostsappliedfor)               | `boolean` | Optional | can be null    | [DaRT API response](dart-response-properties-appellantcostsappliedfor.md "dart-response.schema.json#/properties/appellantCostsAppliedFor")               |
| [lpaCostsAppliedFor](#lpacostsappliedfor)                           | `boolean` | Optional | can be null    | [DaRT API response](dart-response-properties-lpacostsappliedfor.md "dart-response.schema.json#/properties/lpaCostsAppliedFor")                           |
| [appellantName](#appellantname)                                     | `string`  | Optional | cannot be null | [DaRT API response](dart-response-properties-appellantname.md "dart-response.schema.json#/properties/appellantName")                                     |
| [typeOfEvent](#typeofevent)                                         | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-typeofevent.md "dart-response.schema.json#/properties/typeOfEvent")                                         |
| [startDateOfTheEvent](#startdateoftheevent)                         | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-startdateoftheevent.md "dart-response.schema.json#/properties/startDateOfTheEvent")                         |
| [inspectorName](#inspectorname)                                     | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-inspectorname.md "dart-response.schema.json#/properties/inspectorName")                                     |
| [caseOfficerName](#caseofficername)                                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-caseofficername.md "dart-response.schema.json#/properties/caseOfficerName")                                 |
| [inspectorQualifications](#inspectorqualifications)                 | `string`  | Optional | can be null    | [DaRT API response](dart-response-properties-inspectorqualifications.md "dart-response.schema.json#/properties/inspectorQualifications")                 |
| Additional Properties                                               | Any       | Optional | can be null    |                                                                                                                                                          |

## caseId

Internal case identifier

`caseId`

* is optional

* Type: `integer`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-caseid.md "dart-response.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
"2744"
```

## caseReference

External case identifier

`caseReference`

* is optional

* Type: `integer`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-casereference.md "dart-response.schema.json#/properties/caseReference")

### caseReference Type

`integer`

### caseReference Examples

```json
"6002744"
```

## caseStatus

The processing state for the case

`caseStatus`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-casestatus.md "dart-response.schema.json#/properties/caseStatus")

### caseStatus Type

`string`

### caseStatus Examples

```json
"lpa_questionnaire"
```

## caseType

The internal code for a type of case

`caseType`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-casetype.md "dart-response.schema.json#/properties/caseType")

### caseType Type

`string`

### caseType Examples

```json
"w"
```

## caseProcedure

The type of procedure for the case

`caseProcedure`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-caseprocedure.md "dart-response.schema.json#/properties/caseProcedure")

### caseProcedure Type

`string`

### caseProcedure Examples

```json
"W"
```

## lpaCode

PINS internal code for LPA

`lpaCode`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-lpacode.md "dart-response.schema.json#/properties/lpaCode")

### lpaCode Type

`string`

### lpaCode Examples

```json
"DORS"
```

## lpaName

Name of the LPA

`lpaName`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-lpaname.md "dart-response.schema.json#/properties/lpaName")

### lpaName Type

`string`

### lpaName Examples

```json
"example"
```

## allocationLevel

A case level used for allocation purposes

`allocationLevel`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-allocationlevel.md "dart-response.schema.json#/properties/allocationLevel")

### allocationLevel Type

`string`

### allocationLevel Examples

```json
"H"
```

## allocationBand

A band used for allocation purposes

`allocationBand`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-allocationband.md "dart-response.schema.json#/properties/allocationBand")

### allocationBand Type

`string`

### allocationBand Examples

```json
"1"
```

## caseSpecialisms

A list of case specialisms for allocation purposes

`caseSpecialisms`

* is optional

* Type: `string[]`

* can be null

* defined in: [DaRT API response](dart-response-properties-casespecialisms.md "dart-response.schema.json#/properties/caseSpecialisms")

### caseSpecialisms Type

`string[]`

### caseSpecialisms Examples

```json
"General allocation"
```

```json
"Housing orders"
```

```json
"Waste"
```

## caseSubmittedDate

The date the case was submitted by the appellant

`caseSubmittedDate`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-casesubmitteddate.md "dart-response.schema.json#/properties/caseSubmittedDate")

### caseSubmittedDate Type

`string`

### caseSubmittedDate Examples

```json
"025-01-02T16:20:07.753Z"
```

## caseCreatedDate

The date the case was received

`caseCreatedDate`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-casecreateddate.md "dart-response.schema.json#/properties/caseCreatedDate")

### caseCreatedDate Type

`string`

### caseCreatedDate Examples

```json
"025-01-02T16:20:07.753Z"
```

## caseUpdatedDate

The date the case was last updated in the back-office

`caseUpdatedDate`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-caseupdateddate.md "dart-response.schema.json#/properties/caseUpdatedDate")

### caseUpdatedDate Type

`string`

### caseUpdatedDate Examples

```json
"025-01-02T16:20:07.753Z"
```

## caseValidDate

The date since when the case was considered valid

`caseValidDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casevaliddate.md "dart-response.schema.json#/properties/caseValidDate")

### caseValidDate Type

`string`

### caseValidDate Examples

```json
"025-01-02T16:20:07.753Z"
```

## caseValidationDate

The date the case was validated in the back-office

`caseValidationDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casevalidationdate.md "dart-response.schema.json#/properties/caseValidationDate")

### caseValidationDate Type

`string`

### caseValidationDate Examples

```json
"025-01-02T16:20:07.753Z"
```

## caseValidationOutcome

The outcome of the validation action

`caseValidationOutcome`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casevalidationoutcome.md "dart-response.schema.json#/properties/caseValidationOutcome")

### caseValidationOutcome Type

`string`

### caseValidationOutcome Examples

```json
"valid"
```

## caseValidationInvalidDetails

A list of reasons why the appeal is invalid

> The list will contain items only if the caseValidationOutcome is invalid

`caseValidationInvalidDetails`

* is optional

* Type: `string[]`

* can be null

* defined in: [DaRT API response](dart-response-properties-casevalidationinvaliddetails.md "dart-response.schema.json#/properties/caseValidationInvalidDetails")

### caseValidationInvalidDetails Type

`string[]`

### caseValidationInvalidDetails Examples

```json
"Appeal has not been submitted on time"
```

```json
"Documents have not been submitted on time"
```

```json
"Other: scddsfv"
```

## caseValidationIncompleteDetails

A list of reasons why the appeal is incomplete

> The list will contain items only if the caseValidationOutcome is incomplete

`caseValidationIncompleteDetails`

* is optional

* Type: `string[]`

* can be null

* defined in: [DaRT API response](dart-response-properties-casevalidationincompletedetails.md "dart-response.schema.json#/properties/caseValidationIncompleteDetails")

### caseValidationIncompleteDetails Type

`string[]`

### caseValidationIncompleteDetails Examples

```json
"Appellant name is not the same on the application form and appeal form"
```

```json
"LPA's decision notice is missing"
```

## caseExtensionDate

When the validation outcome is incomplete, an extension may be granted to provide missing information

`caseExtensionDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-caseextensiondate.md "dart-response.schema.json#/properties/caseExtensionDate")

### caseExtensionDate Type

`string`

### caseExtensionDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## caseStartedDate

A date indicating when the case was started, resulting in the creation of a timetable

`caseStartedDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casestarteddate.md "dart-response.schema.json#/properties/caseStartedDate")

### caseStartedDate Type

`string`

### caseStartedDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## casePublishedDate

A date indicating when the case was published

`casePublishedDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casepublisheddate.md "dart-response.schema.json#/properties/casePublishedDate")

### casePublishedDate Type

`string`

### casePublishedDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## linkedCaseStatus

Indicates if the case is linked, and the type of relationship

`linkedCaseStatus`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-linkedcasestatus.md "dart-response.schema.json#/properties/linkedCaseStatus")

### linkedCaseStatus Type

`string`

### linkedCaseStatus Examples

```json
"child"
```

## leadCaseReference

The reference of the lead case, if the case is a child case

`leadCaseReference`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-leadcasereference.md "dart-response.schema.json#/properties/leadCaseReference")

### leadCaseReference Type

`string`

### leadCaseReference Examples

```json
"6002745"
```

## caseWithdrawnDate

The date the case was withdrawn by the appellant

`caseWithdrawnDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casewithdrawndate.md "dart-response.schema.json#/properties/caseWithdrawnDate")

### caseWithdrawnDate Type

`string`

### caseWithdrawnDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## caseTransferredDate

The date the case was transferred to a new case of a different type

`caseTransferredDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casetransferreddate.md "dart-response.schema.json#/properties/caseTransferredDate")

### caseTransferredDate Type

`string`

### caseTransferredDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## transferredCaseClosedDate

The date the case was closed and the appellant requested to resubmit

`transferredCaseClosedDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-transferredcasecloseddate.md "dart-response.schema.json#/properties/transferredCaseClosedDate")

### transferredCaseClosedDate Type

`string`

### transferredCaseClosedDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## caseDecisionOutcomeDate

The date of the case decision

`caseDecisionOutcomeDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casedecisionoutcomedate.md "dart-response.schema.json#/properties/caseDecisionOutcomeDate")

### caseDecisionOutcomeDate Type

`string`

### caseDecisionOutcomeDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## caseDecisionPublishedDate

The date the case decision was published

`caseDecisionPublishedDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casedecisionpublisheddate.md "dart-response.schema.json#/properties/caseDecisionPublishedDate")

### caseDecisionPublishedDate Type

`string`

### caseDecisionPublishedDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## caseDecisionOutcome

The final outcome for the decision

`caseDecisionOutcome`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casedecisionoutcome.md "dart-response.schema.json#/properties/caseDecisionOutcome")

### caseDecisionOutcome Type

`string`

### caseDecisionOutcome Examples

```json
"allowed"
```

## caseCompletedDate

The date the case decision letter

`caseCompletedDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casecompleteddate.md "dart-response.schema.json#/properties/caseCompletedDate")

### caseCompletedDate Type

`string`

### caseCompletedDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## enforcementNotice

Indicates if an enforcement notice is the reason for the appeal

`enforcementNotice`

* is optional

* Type: `boolean`

* can be null

* defined in: [DaRT API response](dart-response-properties-enforcementnotice.md "dart-response.schema.json#/properties/enforcementNotice")

### enforcementNotice Type

`boolean`

## applicationReference

The unique identifier of the LPA application

`applicationReference`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-applicationreference.md "dart-response.schema.json#/properties/applicationReference")

### applicationReference Type

`string`

### applicationReference Examples

```json
"21824/APP/0/203130"
```

## applicationDate

The date of the original LPA application

`applicationDate`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-applicationdate.md "dart-response.schema.json#/properties/applicationDate")

### applicationDate Type

`string`

### applicationDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## applicationDecision

The outcome of the original LPA decision

`applicationDecision`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-applicationdecision.md "dart-response.schema.json#/properties/applicationDecision")

### applicationDecision Type

`string`

### applicationDecision Examples

```json
"refused"
```

## lpaDecisionDate

The date of the original LPA decision

`lpaDecisionDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-lpadecisiondate.md "dart-response.schema.json#/properties/lpaDecisionDate")

### lpaDecisionDate Type

`string`

### lpaDecisionDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## caseSubmissionDueDate

The statutory deadline for submitting an appeal from the original LPA decision date

`caseSubmissionDueDate`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-casesubmissionduedate.md "dart-response.schema.json#/properties/caseSubmissionDueDate")

### caseSubmissionDueDate Type

`string`

### caseSubmissionDueDate Examples

```json
"2025-01-10T00:00:00.000Z"
```

## siteAddressLine1

First line of case site address

`siteAddressLine1`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-siteaddressline1.md "dart-response.schema.json#/properties/siteAddressLine1")

### siteAddressLine1 Type

`string`

### siteAddressLine1 Examples

```json
"21 The Pavement"
```

## siteAddressLine2

Second line of case site address

`siteAddressLine2`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-siteaddressline2.md "dart-response.schema.json#/properties/siteAddressLine2")

### siteAddressLine2 Type

`string`

### siteAddressLine2 Examples

```json
"Shotesham Road"
```

## siteAddressTown

Town / City of the site address

`siteAddressTown`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-siteaddresstown.md "dart-response.schema.json#/properties/siteAddressTown")

### siteAddressTown Type

`string`

### siteAddressTown Examples

```json
"Bristol"
```

## siteAddressCounty

County of the site address

`siteAddressCounty`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-siteaddresscounty.md "dart-response.schema.json#/properties/siteAddressCounty")

### siteAddressCounty Type

`string`

### siteAddressCounty Examples

```json
"Wandsworth"
```

## siteAddressPostcode

Postal code of the site address

`siteAddressPostcode`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-siteaddresspostcode.md "dart-response.schema.json#/properties/siteAddressPostcode")

### siteAddressPostcode Type

`string`

### siteAddressPostcode Examples

```json
"SW4 0HY"
```

## isCorrectAppealType

Indicates if the LPA considers the appeal type appropriate

`isCorrectAppealType`

* is optional

* Type: `boolean`

* can be null

* defined in: [DaRT API response](dart-response-properties-iscorrectappealtype.md "dart-response.schema.json#/properties/isCorrectAppealType")

### isCorrectAppealType Type

`boolean`

### isCorrectAppealType Examples

```json
"True"
```

## originalDevelopmentDescription

The original description of the development, as provided by the appellant

`originalDevelopmentDescription`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-originaldevelopmentdescription.md "dart-response.schema.json#/properties/originalDevelopmentDescription")

### originalDevelopmentDescription Type

`string`

### originalDevelopmentDescription Examples

```json
"Replacement of an existing gate to access the property"
```

## changedDevelopmentDescription

Indicates that the LPA has changed the development description

`changedDevelopmentDescription`

* is optional

* Type: `boolean`

* can be null

* defined in: [DaRT API response](dart-response-properties-changeddevelopmentdescription.md "dart-response.schema.json#/properties/changedDevelopmentDescription")

### changedDevelopmentDescription Type

`boolean`

### changedDevelopmentDescription Examples

```json
"True"
```

## newConditionDetails

Since the original application, a number of things have changed.

`newConditionDetails`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-newconditiondetails.md "dart-response.schema.json#/properties/newConditionDetails")

### newConditionDetails Type

`string`

### newConditionDetails Examples

```json
"example"
```

## nearbyCaseReferences

A list of related case references known to the appellant and the LPA

`nearbyCaseReferences`

* is optional

* Type: `string[]`

* can be null

* defined in: [DaRT API response](dart-response-properties-nearbycasereferences.md "dart-response.schema.json#/properties/nearbyCaseReferences")

### nearbyCaseReferences Type

`string[]`

## neighbouringSiteAddresses

A list of neighbouring site addresses

`neighbouringSiteAddresses`

* is optional

* Type: `object[]` ([Details](dart-response-properties-neighbouringsiteaddresses-items.md))

* can be null

* defined in: [DaRT API response](dart-response-properties-neighbouringsiteaddresses.md "dart-response.schema.json#/properties/neighbouringSiteAddresses")

### neighbouringSiteAddresses Type

`object[]` ([Details](dart-response-properties-neighbouringsiteaddresses-items.md))

## affectedListedBuildingNumbers

A list of affected listed building IDs from Historic England

`affectedListedBuildingNumbers`

* is optional

* Type: `string[]`

* can be null

* defined in: [DaRT API response](dart-response-properties-affectedlistedbuildingnumbers.md "dart-response.schema.json#/properties/affectedListedBuildingNumbers")

### affectedListedBuildingNumbers Type

`string[]`

## appellantCostsAppliedFor

Indicates if the appellant has applied for costs

`appellantCostsAppliedFor`

* is optional

* Type: `boolean`

* can be null

* defined in: [DaRT API response](dart-response-properties-appellantcostsappliedfor.md "dart-response.schema.json#/properties/appellantCostsAppliedFor")

### appellantCostsAppliedFor Type

`boolean`

### appellantCostsAppliedFor Examples

```json
"True"
```

## lpaCostsAppliedFor

Indicates if the LPA has applied for costs

`lpaCostsAppliedFor`

* is optional

* Type: `boolean`

* can be null

* defined in: [DaRT API response](dart-response-properties-lpacostsappliedfor.md "dart-response.schema.json#/properties/lpaCostsAppliedFor")

### lpaCostsAppliedFor Type

`boolean`

### lpaCostsAppliedFor Examples

```json
"False"
```

## appellantName

Name of the appellant

`appellantName`

* is optional

* Type: `string`

* cannot be null

* defined in: [DaRT API response](dart-response-properties-appellantname.md "dart-response.schema.json#/properties/appellantName")

### appellantName Type

`string`

### appellantName Examples

```json
"example"
```

## typeOfEvent

The type of event

`typeOfEvent`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-typeofevent.md "dart-response.schema.json#/properties/typeOfEvent")

### typeOfEvent Type

`string`

### typeOfEvent Examples

```json
"site_visit_access_required"
```

## startDateOfTheEvent

Event start date and time

`startDateOfTheEvent`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-startdateoftheevent.md "dart-response.schema.json#/properties/startDateOfTheEvent")

### startDateOfTheEvent Type

`string`

### startDateOfTheEvent Examples

```json
"2025-01-10T00:00:00.000Z"
```

## inspectorName

Name of inspector allocated to case

`inspectorName`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-inspectorname.md "dart-response.schema.json#/properties/inspectorName")

### inspectorName Type

`string`

### inspectorName Examples

```json
"In Spector"
```

## caseOfficerName

name of case officer assigned to case

`caseOfficerName`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-caseofficername.md "dart-response.schema.json#/properties/caseOfficerName")

### caseOfficerName Type

`string`

### caseOfficerName Examples

```json
"example"
```

## inspectorQualifications

The qualifications of the inspector

`inspectorQualifications`

* is optional

* Type: `string`

* can be null

* defined in: [DaRT API response](dart-response-properties-inspectorqualifications.md "dart-response.schema.json#/properties/inspectorQualifications")

### inspectorQualifications Type

`string`

### inspectorQualifications Examples

```json
"example"
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
