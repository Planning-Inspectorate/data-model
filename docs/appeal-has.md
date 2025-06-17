## Appeal HAS Case Type

`object` ([Appeal HAS Case](appeal-has.md))

# Appeal HAS Case Properties

| Property                                                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                   |
| :------------------------------------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [caseId](#caseid)                                                               | `integer` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-caseid.md "appeal-has.schema.json#/properties/caseId")                                                               |
| [caseReference](#casereference)                                                 | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-casereference.md "appeal-has.schema.json#/properties/caseReference")                                                 |
| [submissionId](#submissionid)                                                   | `string`  | Optional | can be null    | [Appeal HAS Case](appeal-has-properties-submissionid.md "appeal-has.schema.json#/properties/submissionId")                                                   |
| [caseStatus](#casestatus)                                                       | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-casestatus.md "appeal-has.schema.json#/properties/caseStatus")                                                       |
| [caseType](#casetype)                                                           | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-casetype.md "appeal-has.schema.json#/properties/caseType")                                                           |
| [caseProcedure](#caseprocedure)                                                 | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-caseprocedure.md "appeal-has.schema.json#/properties/caseProcedure")                                                 |
| [lpaCode](#lpacode)                                                             | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-lpacode.md "appeal-has.schema.json#/properties/lpaCode")                                                             |
| [caseOfficerId](#caseofficerid)                                                 | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-caseofficerid.md "appeal-has.schema.json#/properties/caseOfficerId")                                                 |
| [inspectorId](#inspectorid)                                                     | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-inspectorid.md "appeal-has.schema.json#/properties/inspectorId")                                                     |
| [allocationLevel](#allocationlevel)                                             | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-allocationlevel.md "appeal-has.schema.json#/properties/allocationLevel")                                             |
| [allocationBand](#allocationband)                                               | `number`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-allocationband.md "appeal-has.schema.json#/properties/allocationBand")                                               |
| [caseSpecialisms](#casespecialisms)                                             | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casespecialisms.md "appeal-has.schema.json#/properties/caseSpecialisms")                                             |
| [caseSubmittedDate](#casesubmitteddate)                                         | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-casesubmitteddate.md "appeal-has.schema.json#/properties/caseSubmittedDate")                                         |
| [caseCreatedDate](#casecreateddate)                                             | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-casecreateddate.md "appeal-has.schema.json#/properties/caseCreatedDate")                                             |
| [caseUpdatedDate](#caseupdateddate)                                             | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-caseupdateddate.md "appeal-has.schema.json#/properties/caseUpdatedDate")                                             |
| [caseValidDate](#casevaliddate)                                                 | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casevaliddate.md "appeal-has.schema.json#/properties/caseValidDate")                                                 |
| [caseValidationDate](#casevalidationdate)                                       | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casevalidationdate.md "appeal-has.schema.json#/properties/caseValidationDate")                                       |
| [caseValidationOutcome](#casevalidationoutcome)                                 | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casevalidationoutcome.md "appeal-has.schema.json#/properties/caseValidationOutcome")                                 |
| [caseValidationInvalidDetails](#casevalidationinvaliddetails)                   | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casevalidationinvaliddetails.md "appeal-has.schema.json#/properties/caseValidationInvalidDetails")                   |
| [caseValidationIncompleteDetails](#casevalidationincompletedetails)             | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casevalidationincompletedetails.md "appeal-has.schema.json#/properties/caseValidationIncompleteDetails")             |
| [caseExtensionDate](#caseextensiondate)                                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-caseextensiondate.md "appeal-has.schema.json#/properties/caseExtensionDate")                                         |
| [caseStartedDate](#casestarteddate)                                             | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casestarteddate.md "appeal-has.schema.json#/properties/caseStartedDate")                                             |
| [casePublishedDate](#casepublisheddate)                                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casepublisheddate.md "appeal-has.schema.json#/properties/casePublishedDate")                                         |
| [linkedCaseStatus](#linkedcasestatus)                                           | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-linkedcasestatus.md "appeal-has.schema.json#/properties/linkedCaseStatus")                                           |
| [leadCaseReference](#leadcasereference)                                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-leadcasereference.md "appeal-has.schema.json#/properties/leadCaseReference")                                         |
| [lpaQuestionnaireDueDate](#lpaquestionnaireduedate)                             | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnaireduedate.md "appeal-has.schema.json#/properties/lpaQuestionnaireDueDate")                             |
| [lpaQuestionnaireSubmittedDate](#lpaquestionnairesubmitteddate)                 | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnairesubmitteddate.md "appeal-has.schema.json#/properties/lpaQuestionnaireSubmittedDate")                 |
| [lpaQuestionnaireCreatedDate](#lpaquestionnairecreateddate)                     | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnairecreateddate.md "appeal-has.schema.json#/properties/lpaQuestionnaireCreatedDate")                     |
| [lpaQuestionnairePublishedDate](#lpaquestionnairepublisheddate)                 | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnairepublisheddate.md "appeal-has.schema.json#/properties/lpaQuestionnairePublishedDate")                 |
| [lpaQuestionnaireValidationOutcome](#lpaquestionnairevalidationoutcome)         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnairevalidationoutcome.md "appeal-has.schema.json#/properties/lpaQuestionnaireValidationOutcome")         |
| [lpaQuestionnaireValidationOutcomeDate](#lpaquestionnairevalidationoutcomedate) | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnairevalidationoutcomedate.md "appeal-has.schema.json#/properties/lpaQuestionnaireValidationOutcomeDate") |
| [lpaQuestionnaireValidationDetails](#lpaquestionnairevalidationdetails)         | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpaquestionnairevalidationdetails.md "appeal-has.schema.json#/properties/lpaQuestionnaireValidationDetails")         |
| [lpaStatement](#lpastatement)                                                   | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpastatement.md "appeal-has.schema.json#/properties/lpaStatement")                                                   |
| [caseWithdrawnDate](#casewithdrawndate)                                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casewithdrawndate.md "appeal-has.schema.json#/properties/caseWithdrawnDate")                                         |
| [caseTransferredDate](#casetransferreddate)                                     | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casetransferreddate.md "appeal-has.schema.json#/properties/caseTransferredDate")                                     |
| [transferredCaseClosedDate](#transferredcasecloseddate)                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-transferredcasecloseddate.md "appeal-has.schema.json#/properties/transferredCaseClosedDate")                         |
| [caseDecisionOutcomeDate](#casedecisionoutcomedate)                             | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casedecisionoutcomedate.md "appeal-has.schema.json#/properties/caseDecisionOutcomeDate")                             |
| [caseDecisionPublishedDate](#casedecisionpublisheddate)                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casedecisionpublisheddate.md "appeal-has.schema.json#/properties/caseDecisionPublishedDate")                         |
| [caseDecisionOutcome](#casedecisionoutcome)                                     | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casedecisionoutcome.md "appeal-has.schema.json#/properties/caseDecisionOutcome")                                     |
| [caseCompletedDate](#casecompleteddate)                                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casecompleteddate.md "appeal-has.schema.json#/properties/caseCompletedDate")                                         |
| [enforcementNotice](#enforcementnotice)                                         | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-enforcementnotice.md "appeal-has.schema.json#/properties/enforcementNotice")                                         |
| [applicationReference](#applicationreference)                                   | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-applicationreference.md "appeal-has.schema.json#/properties/applicationReference")                                   |
| [applicationDate](#applicationdate)                                             | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-applicationdate.md "appeal-has.schema.json#/properties/applicationDate")                                             |
| [applicationDecision](#applicationdecision)                                     | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-applicationdecision.md "appeal-has.schema.json#/properties/applicationDecision")                                     |
| [applicationDecisionDate](#applicationdecisiondate)                             | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-applicationdecisiondate.md "appeal-has.schema.json#/properties/applicationDecisionDate")                             |
| [caseSubmissionDueDate](#casesubmissionduedate)                                 | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-casesubmissionduedate.md "appeal-has.schema.json#/properties/caseSubmissionDueDate")                                 |
| [siteAddressLine1](#siteaddressline1)                                           | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-siteaddressline1.md "appeal-has.schema.json#/properties/siteAddressLine1")                                           |
| [siteAddressLine2](#siteaddressline2)                                           | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-siteaddressline2.md "appeal-has.schema.json#/properties/siteAddressLine2")                                           |
| [siteAddressTown](#siteaddresstown)                                             | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-siteaddresstown.md "appeal-has.schema.json#/properties/siteAddressTown")                                             |
| [siteAddressCounty](#siteaddresscounty)                                         | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-siteaddresscounty.md "appeal-has.schema.json#/properties/siteAddressCounty")                                         |
| [siteAddressPostcode](#siteaddresspostcode)                                     | `string`  | Required | cannot be null | [Appeal HAS Case](appeal-has-properties-siteaddresspostcode.md "appeal-has.schema.json#/properties/siteAddressPostcode")                                     |
| [siteAccessDetails](#siteaccessdetails)                                         | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-siteaccessdetails.md "appeal-has.schema.json#/properties/siteAccessDetails")                                         |
| [siteSafetyDetails](#sitesafetydetails)                                         | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-sitesafetydetails.md "appeal-has.schema.json#/properties/siteSafetyDetails")                                         |
| [siteAreaSquareMetres](#siteareasquaremetres)                                   | `number`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-siteareasquaremetres.md "appeal-has.schema.json#/properties/siteAreaSquareMetres")                                   |
| [floorSpaceSquareMetres](#floorspacesquaremetres)                               | `number`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-floorspacesquaremetres.md "appeal-has.schema.json#/properties/floorSpaceSquareMetres")                               |
| [isCorrectAppealType](#iscorrectappealtype)                                     | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-iscorrectappealtype.md "appeal-has.schema.json#/properties/isCorrectAppealType")                                     |
| [isGreenBelt](#isgreenbelt)                                                     | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-isgreenbelt.md "appeal-has.schema.json#/properties/isGreenBelt")                                                     |
| [inConservationArea](#inconservationarea)                                       | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-inconservationarea.md "appeal-has.schema.json#/properties/inConservationArea")                                       |
| [ownsAllLand](#ownsallland)                                                     | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-ownsallland.md "appeal-has.schema.json#/properties/ownsAllLand")                                                     |
| [ownsSomeLand](#ownssomeland)                                                   | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-ownssomeland.md "appeal-has.schema.json#/properties/ownsSomeLand")                                                   |
| [knowsOtherOwners](#knowsotherowners)                                           | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-knowsotherowners.md "appeal-has.schema.json#/properties/knowsOtherOwners")                                           |
| [knowsAllOwners](#knowsallowners)                                               | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-knowsallowners.md "appeal-has.schema.json#/properties/knowsAllOwners")                                               |
| [advertisedAppeal](#advertisedappeal)                                           | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-advertisedappeal.md "appeal-has.schema.json#/properties/advertisedAppeal")                                           |
| [notificationMethod](#notificationmethod)                                       | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-notificationmethod.md "appeal-has.schema.json#/properties/notificationMethod")                                       |
| [ownersInformed](#ownersinformed)                                               | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-ownersinformed.md "appeal-has.schema.json#/properties/ownersInformed")                                               |
| [originalDevelopmentDescription](#originaldevelopmentdescription)               | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-originaldevelopmentdescription.md "appeal-has.schema.json#/properties/originalDevelopmentDescription")               |
| [changedDevelopmentDescription](#changeddevelopmentdescription)                 | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-changeddevelopmentdescription.md "appeal-has.schema.json#/properties/changedDevelopmentDescription")                 |
| [newConditionDetails](#newconditiondetails)                                     | `string`  | Required | can be null    | [Appeal HAS Case](appeal-has-properties-newconditiondetails.md "appeal-has.schema.json#/properties/newConditionDetails")                                     |
| [nearbyCaseReferences](#nearbycasereferences)                                   | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-nearbycasereferences.md "appeal-has.schema.json#/properties/nearbyCaseReferences")                                   |
| [neighbouringSiteAddresses](#neighbouringsiteaddresses)                         | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-neighbouringsiteaddresses.md "appeal-has.schema.json#/properties/neighbouringSiteAddresses")                         |
| [reasonForNeighbourVisits](#reasonforneighbourvisits)                           | `string`  | Optional | can be null    | [Appeal HAS Case](appeal-has-properties-reasonforneighbourvisits.md "appeal-has.schema.json#/properties/reasonForNeighbourVisits")                           |
| [affectedListedBuildingNumbers](#affectedlistedbuildingnumbers)                 | `array`   | Required | can be null    | [Appeal HAS Case](appeal-has-properties-affectedlistedbuildingnumbers.md "appeal-has.schema.json#/properties/affectedListedBuildingNumbers")                 |
| [appellantCostsAppliedFor](#appellantcostsappliedfor)                           | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-appellantcostsappliedfor.md "appeal-has.schema.json#/properties/appellantCostsAppliedFor")                           |
| [lpaCostsAppliedFor](#lpacostsappliedfor)                                       | `boolean` | Required | can be null    | [Appeal HAS Case](appeal-has-properties-lpacostsappliedfor.md "appeal-has.schema.json#/properties/lpaCostsAppliedFor")                                       |
| [typeOfPlanningApplication](#typeofplanningapplication)                         | `string`  | Optional | can be null    | [Appeal HAS Case](appeal-has-properties-typeofplanningapplication.md "appeal-has.schema.json#/properties/typeOfPlanningApplication")                         |
| Additional Properties                                                           | Any       | Optional | can be null    |                                                                                                                                                              |

## caseId

Internal case identifier

`caseId`

* is required

* Type: `integer`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-caseid.md "appeal-has.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1200
```

## caseReference

External case identifier

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-casereference.md "appeal-has.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"7002471"
```

## submissionId

Case submission id - link to draft submission created by appellant

`submissionId`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-submissionid.md "appeal-has.schema.json#/properties/submissionId")

### submissionId Type

`string`

### submissionId Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

### submissionId Examples

```json
"7f45748c-2342-4b59-b934-ad6183e8d834"
```

## caseStatus

The processing status for the appeal

`caseStatus`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-casestatus.md "appeal-has.schema.json#/properties/caseStatus")

### caseStatus Type

`string`

### caseStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"assign_case_officer"` |             |
| `"validation"`          |             |
| `"ready_to_start"`      |             |
| `"lpa_questionnaire"`   |             |
| `"issue_determination"` |             |
| `"complete"`            |             |
| `"invalid"`             |             |
| `"closed"`              |             |
| `"withdrawn"`           |             |
| `"awaiting_transfer"`   |             |
| `"transferred"`         |             |
| `"event"`               |             |
| `"awaiting_event"`      |             |

## caseType

The internal code for an appeal type, e.g. D (Householder)

`caseType`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-casetype.md "appeal-has.schema.json#/properties/caseType")

### caseType Type

`string`

### caseType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"C"` |             |
| `"D"` |             |
| `"F"` |             |
| `"G"` |             |
| `"H"` |             |
| `"L"` |             |
| `"Q"` |             |
| `"S"` |             |
| `"V"` |             |
| `"W"` |             |
| `"X"` |             |
| `"Y"` |             |
| `"Z"` |             |

## caseProcedure

The type of procedure for the appeal

`caseProcedure`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-caseprocedure.md "appeal-has.schema.json#/properties/caseProcedure")

### caseProcedure Type

`string`

### caseProcedure Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"written"` |             |
| `"hearing"` |             |
| `"inquiry"` |             |

## lpaCode

A unique identifier for the Local Planning Authority

> Uses the internal PINS code identifying LPAs

`lpaCode`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpacode.md "appeal-has.schema.json#/properties/lpaCode")

### lpaCode Type

`string`

### lpaCode Examples

```json
"Q9999"
```

## caseOfficerId

Unique identifier for the case officer assigned to the case

> This is the user in Entra ID

`caseOfficerId`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-caseofficerid.md "appeal-has.schema.json#/properties/caseOfficerId")

### caseOfficerId Type

`string`

## inspectorId

Unique identifier for the inspector assigned to the case

> This is the user in Entra ID

`inspectorId`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-inspectorid.md "appeal-has.schema.json#/properties/inspectorId")

### inspectorId Type

`string`

## allocationLevel

A level used for allocation purposes

`allocationLevel`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-allocationlevel.md "appeal-has.schema.json#/properties/allocationLevel")

### allocationLevel Type

`string`

### allocationLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"A"`  |             |
| `"B"`  |             |
| `"C"`  |             |
| `"D"`  |             |
| `"E"`  |             |
| `"F"`  |             |
| `"G"`  |             |
| `"H"`  |             |
| `null` |             |

## allocationBand

A band used for allocation purposes

> Linked to the level, e.g. 1\[E,F,G,H], 2\[C,D], 3\[A,B]

`allocationBand`

* is required

* Type: `number`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-allocationband.md "appeal-has.schema.json#/properties/allocationBand")

### allocationBand Type

`number`

### allocationBand Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `1`    |             |
| `2`    |             |
| `3`    |             |
| `null` |             |

## caseSpecialisms

A list of specialisms for allocation purposes

`caseSpecialisms`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casespecialisms.md "appeal-has.schema.json#/properties/caseSpecialisms")

### caseSpecialisms Type

`string[]`

### caseSpecialisms Examples

```json
"Access"
```

```json
"Listed building and enforcement"
```

```json
"Roads and traffics"
```

```json
"Natural heritage"
```

```json
"Schedule 1"
```

## caseSubmittedDate

The date the appeal was submitted by the appellant

`caseSubmittedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-casesubmitteddate.md "appeal-has.schema.json#/properties/caseSubmittedDate")

### caseSubmittedDate Type

`string`

### caseSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseCreatedDate

The date the appeal was received

`caseCreatedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-casecreateddate.md "appeal-has.schema.json#/properties/caseCreatedDate")

### caseCreatedDate Type

`string`

### caseCreatedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseCreatedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseUpdatedDate

The date the appeal was last updated in the back-office

`caseUpdatedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-caseupdateddate.md "appeal-has.schema.json#/properties/caseUpdatedDate")

### caseUpdatedDate Type

`string`

### caseUpdatedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseUpdatedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseValidDate

The date since when the appeal was considered valid

`caseValidDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casevaliddate.md "appeal-has.schema.json#/properties/caseValidDate")

### caseValidDate Type

`string`

### caseValidDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseValidDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseValidationDate

The date the appeal was validated in the back-office

`caseValidationDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casevalidationdate.md "appeal-has.schema.json#/properties/caseValidationDate")

### caseValidationDate Type

`string`

### caseValidationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseValidationDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseValidationOutcome

The outcome of the validation action

`caseValidationOutcome`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casevalidationoutcome.md "appeal-has.schema.json#/properties/caseValidationOutcome")

### caseValidationOutcome Type

`string`

### caseValidationOutcome Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"valid"`      |             |
| `"invalid"`    |             |
| `"incomplete"` |             |
| `null`         |             |

## caseValidationInvalidDetails

A list of reasons why the appeal is invalid

> The list will contain items only if the caseValidationOutcome is invalid

`caseValidationInvalidDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casevalidationinvaliddetails.md "appeal-has.schema.json#/properties/caseValidationInvalidDetails")

### caseValidationInvalidDetails Type

`string[]`

## caseValidationIncompleteDetails

A list of reasons why the appeal is incomplete

> The list will contain items only if the caseValidationOutcome is incomplete

`caseValidationIncompleteDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casevalidationincompletedetails.md "appeal-has.schema.json#/properties/caseValidationIncompleteDetails")

### caseValidationIncompleteDetails Type

`string[]`

## caseExtensionDate

When the validation outcome is incomplete, an extension may be granted to provide missing information

`caseExtensionDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-caseextensiondate.md "appeal-has.schema.json#/properties/caseExtensionDate")

### caseExtensionDate Type

`string`

### caseExtensionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseExtensionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseStartedDate

A date indicating when the case was started, resulting in the creation of a timetable

`caseStartedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casestarteddate.md "appeal-has.schema.json#/properties/caseStartedDate")

### caseStartedDate Type

`string`

### caseStartedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseStartedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## casePublishedDate

A date indicating when the case was published

`casePublishedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casepublisheddate.md "appeal-has.schema.json#/properties/casePublishedDate")

### casePublishedDate Type

`string`

### casePublishedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### casePublishedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## linkedCaseStatus

Indicates if the case is linked, and the type of relationship

`linkedCaseStatus`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-linkedcasestatus.md "appeal-has.schema.json#/properties/linkedCaseStatus")

### linkedCaseStatus Type

`string`

### linkedCaseStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"lead"`  |             |
| `"child"` |             |
| `null`    |             |

## leadCaseReference

The reference of the lead case, if the case is a child case

`leadCaseReference`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-leadcasereference.md "appeal-has.schema.json#/properties/leadCaseReference")

### leadCaseReference Type

`string`

### leadCaseReference Examples

```json
"7002471"
```

## lpaQuestionnaireDueDate

If the case is started and has a timetable, a deadline for the LPA to provide a response

`lpaQuestionnaireDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnaireduedate.md "appeal-has.schema.json#/properties/lpaQuestionnaireDueDate")

### lpaQuestionnaireDueDate Type

`string`

### lpaQuestionnaireDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaQuestionnaireDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaQuestionnaireSubmittedDate

The date the LPA provided a response to the case

`lpaQuestionnaireSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnairesubmitteddate.md "appeal-has.schema.json#/properties/lpaQuestionnaireSubmittedDate")

### lpaQuestionnaireSubmittedDate Type

`string`

### lpaQuestionnaireSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaQuestionnaireSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaQuestionnaireCreatedDate

The date the LPA response was receeived

`lpaQuestionnaireCreatedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnairecreateddate.md "appeal-has.schema.json#/properties/lpaQuestionnaireCreatedDate")

### lpaQuestionnaireCreatedDate Type

`string`

### lpaQuestionnaireCreatedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaQuestionnaireCreatedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaQuestionnairePublishedDate

The date indicating when the questionnaire review was completed and the questionnaire published

`lpaQuestionnairePublishedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnairepublisheddate.md "appeal-has.schema.json#/properties/lpaQuestionnairePublishedDate")

### lpaQuestionnairePublishedDate Type

`string`

### lpaQuestionnairePublishedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaQuestionnairePublishedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaQuestionnaireValidationOutcome

The outcome of the validation action

`lpaQuestionnaireValidationOutcome`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnairevalidationoutcome.md "appeal-has.schema.json#/properties/lpaQuestionnaireValidationOutcome")

### lpaQuestionnaireValidationOutcome Type

`string`

### lpaQuestionnaireValidationOutcome Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"complete"`   |             |
| `"incomplete"` |             |
| `null`         |             |

## lpaQuestionnaireValidationOutcomeDate

The date the LPA response was validated

`lpaQuestionnaireValidationOutcomeDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnairevalidationoutcomedate.md "appeal-has.schema.json#/properties/lpaQuestionnaireValidationOutcomeDate")

### lpaQuestionnaireValidationOutcomeDate Type

`string`

### lpaQuestionnaireValidationOutcomeDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaQuestionnaireValidationOutcomeDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaQuestionnaireValidationDetails

A list of reasons why the questionnaire is incomplete

> The list will contain items only if the lpaQuestionnaireValidationOutcome is incomplete

`lpaQuestionnaireValidationDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpaquestionnairevalidationdetails.md "appeal-has.schema.json#/properties/lpaQuestionnaireValidationDetails")

### lpaQuestionnaireValidationDetails Type

`string[]`

## lpaStatement

A statement provided by the LPA

`lpaStatement`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpastatement.md "appeal-has.schema.json#/properties/lpaStatement")

### lpaStatement Type

`string`

### lpaStatement Examples

```json
"We refused the application because of ..."
```

## caseWithdrawnDate

The date the appeal was withdrawn by the appellant

`caseWithdrawnDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casewithdrawndate.md "appeal-has.schema.json#/properties/caseWithdrawnDate")

### caseWithdrawnDate Type

`string`

### caseWithdrawnDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseWithdrawnDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseTransferredDate

The date the appeal was transferred to a new case of a different type

`caseTransferredDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casetransferreddate.md "appeal-has.schema.json#/properties/caseTransferredDate")

### caseTransferredDate Type

`string`

### caseTransferredDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseTransferredDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## transferredCaseClosedDate

The date the appeal was closed and the appellant requested to resubmit

`transferredCaseClosedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-transferredcasecloseddate.md "appeal-has.schema.json#/properties/transferredCaseClosedDate")

### transferredCaseClosedDate Type

`string`

### transferredCaseClosedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### transferredCaseClosedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseDecisionOutcomeDate

The date of the appeal decision

`caseDecisionOutcomeDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casedecisionoutcomedate.md "appeal-has.schema.json#/properties/caseDecisionOutcomeDate")

### caseDecisionOutcomeDate Type

`string`

### caseDecisionOutcomeDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseDecisionOutcomeDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseDecisionPublishedDate

The date the appeal decision was published

`caseDecisionPublishedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casedecisionpublisheddate.md "appeal-has.schema.json#/properties/caseDecisionPublishedDate")

### caseDecisionPublishedDate Type

`string`

### caseDecisionPublishedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseDecisionPublishedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseDecisionOutcome

The final outcome for the decision

`caseDecisionOutcome`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casedecisionoutcome.md "appeal-has.schema.json#/properties/caseDecisionOutcome")

### caseDecisionOutcome Type

`string`

### caseDecisionOutcome Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"allowed"`        |             |
| `"split_decision"` |             |
| `"dismissed"`      |             |
| `"invalid"`        |             |
| `null`             |             |

## caseCompletedDate

The date the appeal decision letter

`caseCompletedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casecompleteddate.md "appeal-has.schema.json#/properties/caseCompletedDate")

### caseCompletedDate Type

`string`

### caseCompletedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseCompletedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## enforcementNotice

Indicates if an enforcement notice is the reason for the appeal

`enforcementNotice`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-enforcementnotice.md "appeal-has.schema.json#/properties/enforcementNotice")

### enforcementNotice Type

`boolean`

## applicationReference

The unique identifier of the LPA application

`applicationReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-applicationreference.md "appeal-has.schema.json#/properties/applicationReference")

### applicationReference Type

`string`

### applicationReference Examples

```json
"43010/APP/1/290572"
```

## applicationDate

The date of the original LPA application

`applicationDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-applicationdate.md "appeal-has.schema.json#/properties/applicationDate")

### applicationDate Type

`string`

### applicationDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### applicationDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## applicationDecision

The outcome of the original LPA decision

`applicationDecision`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-applicationdecision.md "appeal-has.schema.json#/properties/applicationDecision")

### applicationDecision Type

`string`

### applicationDecision Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"refused"`      |             |
| `"not_received"` |             |

## applicationDecisionDate

The date of the original LPA decision

`applicationDecisionDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-applicationdecisiondate.md "appeal-has.schema.json#/properties/applicationDecisionDate")

### applicationDecisionDate Type

`string`

### applicationDecisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### applicationDecisionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseSubmissionDueDate

The statutory deadline for submitting an appeal from the original LPA decision date

> Calculated from the applicationDecisionDate

`caseSubmissionDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-casesubmissionduedate.md "appeal-has.schema.json#/properties/caseSubmissionDueDate")

### caseSubmissionDueDate Type

`string`

### caseSubmissionDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseSubmissionDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## siteAddressLine1

First line of address for the appeal site

`siteAddressLine1`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteaddressline1.md "appeal-has.schema.json#/properties/siteAddressLine1")

### siteAddressLine1 Type

`string`

### siteAddressLine1 Examples

```json
"96 The Avenue"
```

## siteAddressLine2

Second line of address for the appeal site

`siteAddressLine2`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteaddressline2.md "appeal-has.schema.json#/properties/siteAddressLine2")

### siteAddressLine2 Type

`string`

## siteAddressTown

Town / City of the site address

`siteAddressTown`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteaddresstown.md "appeal-has.schema.json#/properties/siteAddressTown")

### siteAddressTown Type

`string`

### siteAddressTown Examples

```json
"Maidstone"
```

## siteAddressCounty

County of the site address

`siteAddressCounty`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteaddresscounty.md "appeal-has.schema.json#/properties/siteAddressCounty")

### siteAddressCounty Type

`string`

### siteAddressCounty Examples

```json
"Kent"
```

## siteAddressPostcode

Postal code of the site address

`siteAddressPostcode`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteaddresspostcode.md "appeal-has.schema.json#/properties/siteAddressPostcode")

### siteAddressPostcode Type

`string`

### siteAddressPostcode Examples

```json
"MD21 5XY"
```

## siteAccessDetails

Provided information on site accessibility

`siteAccessDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteaccessdetails.md "appeal-has.schema.json#/properties/siteAccessDetails")

### siteAccessDetails Type

`string[]`

## siteSafetyDetails

Provided information on site health and safety

`siteSafetyDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-sitesafetydetails.md "appeal-has.schema.json#/properties/siteSafetyDetails")

### siteSafetyDetails Type

`string[]`

## siteAreaSquareMetres

The site area, in square meters

`siteAreaSquareMetres`

* is required

* Type: `number`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-siteareasquaremetres.md "appeal-has.schema.json#/properties/siteAreaSquareMetres")

### siteAreaSquareMetres Type

`number`

### siteAreaSquareMetres Examples

```json
45.7
```

## floorSpaceSquareMetres

The floor space, in square meters

`floorSpaceSquareMetres`

* is required

* Type: `number`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-floorspacesquaremetres.md "appeal-has.schema.json#/properties/floorSpaceSquareMetres")

### floorSpaceSquareMetres Type

`number`

### floorSpaceSquareMetres Examples

```json
3.5
```

## isCorrectAppealType

Indicates if the LPA considers the appeal type appropriate

`isCorrectAppealType`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-iscorrectappealtype.md "appeal-has.schema.json#/properties/isCorrectAppealType")

### isCorrectAppealType Type

`boolean`

## isGreenBelt

Indicates if the site is in a green belt

`isGreenBelt`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-isgreenbelt.md "appeal-has.schema.json#/properties/isGreenBelt")

### isGreenBelt Type

`boolean`

## inConservationArea

Indicates if the site is in a conservation area

`inConservationArea`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-inconservationarea.md "appeal-has.schema.json#/properties/inConservationArea")

### inConservationArea Type

`boolean`

## ownsAllLand

Indicates if the appellant has complete ownership of the site

`ownsAllLand`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-ownsallland.md "appeal-has.schema.json#/properties/ownsAllLand")

### ownsAllLand Type

`boolean`

## ownsSomeLand

Indicates if the appellant has partial ownership of the site

`ownsSomeLand`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-ownssomeland.md "appeal-has.schema.json#/properties/ownsSomeLand")

### ownsSomeLand Type

`boolean`

## knowsOtherOwners

Indicates if the appellant knows other owners of the site

`knowsOtherOwners`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-knowsotherowners.md "appeal-has.schema.json#/properties/knowsOtherOwners")

### knowsOtherOwners Type

`string`

### knowsOtherOwners Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"Yes"`  |             |
| `"No"`   |             |
| `"Some"` |             |
| `null`   |             |

## knowsAllOwners

Indicates if the appellant knows all owners of the site

`knowsAllOwners`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-knowsallowners.md "appeal-has.schema.json#/properties/knowsAllOwners")

### knowsAllOwners Type

`string`

### knowsAllOwners Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"Yes"`  |             |
| `"No"`   |             |
| `"Some"` |             |
| `null`   |             |

## advertisedAppeal

Indicates if the appellant has advertised the appeal to the LPA decision

`advertisedAppeal`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-advertisedappeal.md "appeal-has.schema.json#/properties/advertisedAppeal")

### advertisedAppeal Type

`boolean`

## notificationMethod

The methods used to notify relevant parties

`notificationMethod`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-notificationmethod.md "appeal-has.schema.json#/properties/notificationMethod")

### notificationMethod Type

`string[]`

## ownersInformed

Indicates if the appellant has informed other owners of the site

`ownersInformed`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-ownersinformed.md "appeal-has.schema.json#/properties/ownersInformed")

### ownersInformed Type

`boolean`

## originalDevelopmentDescription

The original description of the development, as provided by the appellant

`originalDevelopmentDescription`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-originaldevelopmentdescription.md "appeal-has.schema.json#/properties/originalDevelopmentDescription")

### originalDevelopmentDescription Type

`string`

### originalDevelopmentDescription Examples

```json
"Replacement of an existing gate to access the property"
```

## changedDevelopmentDescription

Indicates that the LPA has changed the development description

`changedDevelopmentDescription`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-changeddevelopmentdescription.md "appeal-has.schema.json#/properties/changedDevelopmentDescription")

### changedDevelopmentDescription Type

`boolean`

## newConditionDetails

New conditions details provided by the LPA

`newConditionDetails`

* is required

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-newconditiondetails.md "appeal-has.schema.json#/properties/newConditionDetails")

### newConditionDetails Type

`string`

### newConditionDetails Examples

```json
"Since the original application, a number of things have changed..."
```

## nearbyCaseReferences

A list of related case references known to the appellant and the LPA

`nearbyCaseReferences`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-nearbycasereferences.md "appeal-has.schema.json#/properties/nearbyCaseReferences")

### nearbyCaseReferences Type

`string[]`

## neighbouringSiteAddresses

A list of neighbouring site addresses

`neighbouringSiteAddresses`

* is required

* Type: `object[]` ([Details](appeal-has-properties-neighbouringsiteaddresses-items.md))

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-neighbouringsiteaddresses.md "appeal-has.schema.json#/properties/neighbouringSiteAddresses")

### neighbouringSiteAddresses Type

`object[]` ([Details](appeal-has-properties-neighbouringsiteaddresses-items.md))

## reasonForNeighbourVisits

A general reason given for the need to visit any neighbours

`reasonForNeighbourVisits`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-reasonforneighbourvisits.md "appeal-has.schema.json#/properties/reasonForNeighbourVisits")

### reasonForNeighbourVisits Type

`string`

## affectedListedBuildingNumbers

A list of affected listed building IDs from Historic England

`affectedListedBuildingNumbers`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-affectedlistedbuildingnumbers.md "appeal-has.schema.json#/properties/affectedListedBuildingNumbers")

### affectedListedBuildingNumbers Type

`string[]`

## appellantCostsAppliedFor

Indicates if the appellant has applied for costs

`appellantCostsAppliedFor`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-appellantcostsappliedfor.md "appeal-has.schema.json#/properties/appellantCostsAppliedFor")

### appellantCostsAppliedFor Type

`boolean`

## lpaCostsAppliedFor

Indicates if the appellant has applied for costs

`lpaCostsAppliedFor`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-lpacostsappliedfor.md "appeal-has.schema.json#/properties/lpaCostsAppliedFor")

### lpaCostsAppliedFor Type

`boolean`

## typeOfPlanningApplication



`typeOfPlanningApplication`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal HAS Case](appeal-has-properties-typeofplanningapplication.md "appeal-has.schema.json#/properties/typeOfPlanningApplication")

### typeOfPlanningApplication Type

`string`

### typeOfPlanningApplication Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"full-appeal"`                        |             |
| `"householder-planning"`               |             |
| `"outline-planning"`                   |             |
| `"prior-approval"`                     |             |
| `"reserved-matters"`                   |             |
| `"removal-or-variation-of-conditions"` |             |
| `"listed-building"`                    |             |
| `"minor-commercial-development"`       |             |
| `null`                                 |             |

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
