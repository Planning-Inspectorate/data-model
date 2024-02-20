## NSIP Project Type

`object` ([NSIP Project](nsip-project.md))

# NSIP Project Properties

| Property                                                                                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                            |
| :------------------------------------------------------------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [caseId](#caseid)                                                                                       | `integer`     | Required | cannot be null | [NSIP Project](nsip-project-properties-caseid.md "nsip-project.schema.json#/properties/caseId")                                                                                       |
| [caseReference](#casereference)                                                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-casereference.md "nsip-project.schema.json#/properties/caseReference")                                                                         |
| [projectName](#projectname)                                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-projectname.md "nsip-project.schema.json#/properties/projectName")                                                                             |
| [projectDescription](#projectdescription)                                                               | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-projectdescription.md "nsip-project.schema.json#/properties/projectDescription")                                                               |
| [decision](#decision)                                                                                   | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-decision.md "nsip-project.schema.json#/properties/decision")                                                                                   |
| [publishStatus](#publishstatus)                                                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-publishstatus.md "nsip-project.schema.json#/properties/publishStatus")                                                                         |
| [sector](#sector)                                                                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-sector.md "nsip-project.schema.json#/properties/sector")                                                                                       |
| [projectType](#projecttype)                                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-projecttype.md "nsip-project.schema.json#/properties/projectType")                                                                             |
| [sourceSystem](#sourcesystem)                                                                           | `string`      | Required | cannot be null | [NSIP Project](nsip-project-properties-sourcesystem.md "nsip-project.schema.json#/properties/sourceSystem")                                                                           |
| [stage](#stage)                                                                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-stage.md "nsip-project.schema.json#/properties/stage")                                                                                         |
| [projectLocation](#projectlocation)                                                                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-projectlocation.md "nsip-project.schema.json#/properties/projectLocation")                                                                     |
| [projectEmailAddress](#projectemailaddress)                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-projectemailaddress.md "nsip-project.schema.json#/properties/projectEmailAddress")                                                             |
| [regions](#regions)                                                                                     | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-regions.md "nsip-project.schema.json#/properties/regions")                                                                                     |
| [transboundary](#transboundary)                                                                         | `boolean`     | Optional | cannot be null | [NSIP Project](nsip-project-properties-transboundary.md "nsip-project.schema.json#/properties/transboundary")                                                                         |
| [easting](#easting)                                                                                     | `integer`     | Optional | cannot be null | [NSIP Project](nsip-project-properties-easting.md "nsip-project.schema.json#/properties/easting")                                                                                     |
| [northing](#northing)                                                                                   | `integer`     | Optional | cannot be null | [NSIP Project](nsip-project-properties-northing.md "nsip-project.schema.json#/properties/northing")                                                                                   |
| [welshLanguage](#welshlanguage)                                                                         | `boolean`     | Optional | cannot be null | [NSIP Project](nsip-project-properties-welshlanguage.md "nsip-project.schema.json#/properties/welshLanguage")                                                                         |
| [mapZoomLevel](#mapzoomlevel)                                                                           | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-mapzoomlevel.md "nsip-project.schema.json#/properties/mapZoomLevel")                                                                           |
| [secretaryOfState](#secretaryofstate)                                                                   | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-secretaryofstate.md "nsip-project.schema.json#/properties/secretaryOfState")                                                                   |
| [\_preApplicationDates](#_preapplicationdates)                                                          | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_preapplicationdates.md "nsip-project.schema.json#/properties/_preApplicationDates")                                                           |
| [datePINSFirstNotifiedOfProject](#datepinsfirstnotifiedofproject)                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-datepinsfirstnotifiedofproject.md "nsip-project.schema.json#/properties/datePINSFirstNotifiedOfProject")                                       |
| [dateProjectAppearsOnWebsite](#dateprojectappearsonwebsite)                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateprojectappearsonwebsite.md "nsip-project.schema.json#/properties/dateProjectAppearsOnWebsite")                                             |
| [anticipatedSubmissionDateNonSpecific](#anticipatedsubmissiondatenonspecific)                           | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-anticipatedsubmissiondatenonspecific.md "nsip-project.schema.json#/properties/anticipatedSubmissionDateNonSpecific")                           |
| [anticipatedDateOfSubmission](#anticipateddateofsubmission)                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-anticipateddateofsubmission.md "nsip-project.schema.json#/properties/anticipatedDateOfSubmission")                                             |
| [screeningOpinionSought](#screeningopinionsought)                                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-screeningopinionsought.md "nsip-project.schema.json#/properties/screeningOpinionSought")                                                       |
| [screeningOpinionIssued](#screeningopinionissued)                                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-screeningopinionissued.md "nsip-project.schema.json#/properties/screeningOpinionIssued")                                                       |
| [scopingOpinionSought](#scopingopinionsought)                                                           | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-scopingopinionsought.md "nsip-project.schema.json#/properties/scopingOpinionSought")                                                           |
| [scopingOpinionIssued](#scopingopinionissued)                                                           | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-scopingopinionissued.md "nsip-project.schema.json#/properties/scopingOpinionIssued")                                                           |
| [section46Notification](#section46notification)                                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-section46notification.md "nsip-project.schema.json#/properties/section46Notification")                                                         |
| [\_acceptanceDates](#_acceptancedates)                                                                  | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_acceptancedates.md "nsip-project.schema.json#/properties/_acceptanceDates")                                                                   |
| [dateOfDCOSubmission](#dateofdcosubmission)                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateofdcosubmission.md "nsip-project.schema.json#/properties/dateOfDCOSubmission")                                                             |
| [deadlineForAcceptanceDecision](#deadlineforacceptancedecision)                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-deadlineforacceptancedecision.md "nsip-project.schema.json#/properties/deadlineForAcceptanceDecision")                                         |
| [dateOfDCOAcceptance](#dateofdcoacceptance)                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateofdcoacceptance.md "nsip-project.schema.json#/properties/dateOfDCOAcceptance")                                                             |
| [dateOfNonAcceptance](#dateofnonacceptance)                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateofnonacceptance.md "nsip-project.schema.json#/properties/dateOfNonAcceptance")                                                             |
| [\_preExaminationDates](#_preexaminationdates)                                                          | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_preexaminationdates.md "nsip-project.schema.json#/properties/_preExaminationDates")                                                           |
| [dateOfRepresentationPeriodOpen](#dateofrepresentationperiodopen)                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateofrepresentationperiodopen.md "nsip-project.schema.json#/properties/dateOfRepresentationPeriodOpen")                                       |
| [dateOfRelevantRepresentationClose](#dateofrelevantrepresentationclose)                                 | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateofrelevantrepresentationclose.md "nsip-project.schema.json#/properties/dateOfRelevantRepresentationClose")                                 |
| [extensionToDateRelevantRepresentationsClose](#extensiontodaterelevantrepresentationsclose)             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-extensiontodaterelevantrepresentationsclose.md "nsip-project.schema.json#/properties/extensionToDateRelevantRepresentationsClose")             |
| [dateRRepAppearOnWebsite](#daterrepappearonwebsite)                                                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-daterrepappearonwebsite.md "nsip-project.schema.json#/properties/dateRRepAppearOnWebsite")                                                     |
| [dateIAPIDue](#dateiapidue)                                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateiapidue.md "nsip-project.schema.json#/properties/dateIAPIDue")                                                                             |
| [rule6LetterPublishDate](#rule6letterpublishdate)                                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-rule6letterpublishdate.md "nsip-project.schema.json#/properties/rule6LetterPublishDate")                                                       |
| [preliminaryMeetingStartDate](#preliminarymeetingstartdate)                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-preliminarymeetingstartdate.md "nsip-project.schema.json#/properties/preliminaryMeetingStartDate")                                             |
| [notificationDateForPMAndEventsDirectlyFollowingPM](#notificationdateforpmandeventsdirectlyfollowingpm) | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-notificationdateforpmandeventsdirectlyfollowingpm.md "nsip-project.schema.json#/properties/notificationDateForPMAndEventsDirectlyFollowingPM") |
| [notificationDateForEventsDeveloper](#notificationdateforeventsdeveloper)                               | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-notificationdateforeventsdeveloper.md "nsip-project.schema.json#/properties/notificationDateForEventsDeveloper")                               |
| [\_examinationDates](#_examinationdates)                                                                | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_examinationdates.md "nsip-project.schema.json#/properties/_examinationDates")                                                                 |
| [dateSection58NoticeReceived](#datesection58noticereceived)                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-datesection58noticereceived.md "nsip-project.schema.json#/properties/dateSection58NoticeReceived")                                             |
| [confirmedStartOfExamination](#confirmedstartofexamination)                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-confirmedstartofexamination.md "nsip-project.schema.json#/properties/confirmedStartOfExamination")                                             |
| [rule8LetterPublishDate](#rule8letterpublishdate)                                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-rule8letterpublishdate.md "nsip-project.schema.json#/properties/rule8LetterPublishDate")                                                       |
| [deadlineForCloseOfExamination](#deadlineforcloseofexamination)                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-deadlineforcloseofexamination.md "nsip-project.schema.json#/properties/deadlineForCloseOfExamination")                                         |
| [dateTimeExaminationEnds](#datetimeexaminationends)                                                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-datetimeexaminationends.md "nsip-project.schema.json#/properties/dateTimeExaminationEnds")                                                     |
| [stage4ExtensionToExamCloseDate](#stage4extensiontoexamclosedate)                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-stage4extensiontoexamclosedate.md "nsip-project.schema.json#/properties/stage4ExtensionToExamCloseDate")                                       |
| [\_recommendationDates](#_recommendationdates)                                                          | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_recommendationdates.md "nsip-project.schema.json#/properties/_recommendationDates")                                                           |
| [deadlineForSubmissionOfRecommendation](#deadlineforsubmissionofrecommendation)                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-deadlineforsubmissionofrecommendation.md "nsip-project.schema.json#/properties/deadlineForSubmissionOfRecommendation")                         |
| [dateOfRecommendations](#dateofrecommendations)                                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateofrecommendations.md "nsip-project.schema.json#/properties/dateOfRecommendations")                                                         |
| [stage5ExtensionToRecommendationDeadline](#stage5extensiontorecommendationdeadline)                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-stage5extensiontorecommendationdeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToRecommendationDeadline")                     |
| [\_decisionDates](#_decisiondates)                                                                      | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_decisiondates.md "nsip-project.schema.json#/properties/_decisionDates")                                                                       |
| [deadlineForDecision](#deadlinefordecision)                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-deadlinefordecision.md "nsip-project.schema.json#/properties/deadlineForDecision")                                                             |
| [confirmedDateOfDecision](#confirmeddateofdecision)                                                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-confirmeddateofdecision.md "nsip-project.schema.json#/properties/confirmedDateOfDecision")                                                     |
| [stage5ExtensionToDecisionDeadline](#stage5extensiontodecisiondeadline)                                 | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-stage5extensiontodecisiondeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToDecisionDeadline")                                 |
| [\_postDecisionDates](#_postdecisiondates)                                                              | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_postdecisiondates.md "nsip-project.schema.json#/properties/_postDecisionDates")                                                               |
| [jRPeriodEndDate](#jrperiodenddate)                                                                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-jrperiodenddate.md "nsip-project.schema.json#/properties/jRPeriodEndDate")                                                                     |
| [\_withdrawalDates](#_withdrawaldates)                                                                  | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_withdrawaldates.md "nsip-project.schema.json#/properties/_withdrawalDates")                                                                   |
| [dateProjectWithdrawn](#dateprojectwithdrawn)                                                           | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-dateprojectwithdrawn.md "nsip-project.schema.json#/properties/dateProjectWithdrawn")                                                           |
| [operationsLeadId](#operationsleadid)                                                                   | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-operationsleadid.md "nsip-project.schema.json#/properties/operationsLeadId")                                                                   |
| [operationsManagerId](#operationsmanagerid)                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-operationsmanagerid.md "nsip-project.schema.json#/properties/operationsManagerId")                                                             |
| [caseManagerId](#casemanagerid)                                                                         | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-casemanagerid.md "nsip-project.schema.json#/properties/caseManagerId")                                                                         |
| [nsipOfficerIds](#nsipofficerids)                                                                       | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-nsipofficerids.md "nsip-project.schema.json#/properties/nsipOfficerIds")                                                                       |
| [nsipAdministrationOfficerIds](#nsipadministrationofficerids)                                           | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-nsipadministrationofficerids.md "nsip-project.schema.json#/properties/nsipAdministrationOfficerIds")                                           |
| [leadInspectorId](#leadinspectorid)                                                                     | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-leadinspectorid.md "nsip-project.schema.json#/properties/leadInspectorId")                                                                     |
| [inspectorIds](#inspectorids)                                                                           | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-inspectorids.md "nsip-project.schema.json#/properties/inspectorIds")                                                                           |
| [environmentalServicesOfficerId](#environmentalservicesofficerid)                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-environmentalservicesofficerid.md "nsip-project.schema.json#/properties/environmentalServicesOfficerId")                                       |
| [legalOfficerId](#legalofficerid)                                                                       | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-legalofficerid.md "nsip-project.schema.json#/properties/legalOfficerId")                                                                       |
| [applicantId](#applicantid)                                                                             | `string`      | Optional | cannot be null | [NSIP Project](nsip-project-properties-applicantid.md "nsip-project.schema.json#/properties/applicantId")                                                                             |
| [migrationStatus](#migrationstatus)                                                                     | `boolean`     | Optional | can be null    | [NSIP Project](nsip-project-properties-migrationstatus.md "nsip-project.schema.json#/properties/migrationStatus")                                                                     |

## caseId

The unique identifier within the Back Office. This is not the same as the case reference

`caseId`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-caseid.md "nsip-project.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1242
```

## caseReference



`caseReference`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-casereference.md "nsip-project.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"BC0510001"
```

## projectName

Name of project

`projectName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-projectname.md "nsip-project.schema.json#/properties/projectName")

### projectName Type

`string`

### projectName Examples

```json
"A1 Birtley to Coal House Improvement Scheme"
```

## projectDescription



`projectDescription`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-projectdescription.md "nsip-project.schema.json#/properties/projectDescription")

### projectDescription Type

`string`

### projectDescription Examples

```json
"The scheme is 6.5 km in length and will consist of online widening of the A1 south of Gateshead to four lanes between junction 65"
```

## decision

Decision: approved/refused/split-decision

`decision`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-decision.md "nsip-project.schema.json#/properties/decision")

### decision Type

`string`

### decision Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"approved"`       |             |
| `"refused"`        |             |
| `"split-decision"` |             |

## publishStatus



`publishStatus`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-publishstatus.md "nsip-project.schema.json#/properties/publishStatus")

### publishStatus Type

`string`

### publishStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"published"`   |             |
| `"unpublished"` |             |

## sector

{Sector Abbreviation} - {Sector Display Name}

`sector`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-sector.md "nsip-project.schema.json#/properties/sector")

### sector Type

`string`

### sector Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"BC - Business and Commercial"` |             |
| `"EN - Energy"`                  |             |
| `"TR - Transport"`               |             |
| `"WA - Water"`                   |             |
| `"WS - Waste"`                   |             |
| `"WW - Waste Water"`             |             |

## projectType

{SubSector Abbreviation} - {SubSector Display Name}

`projectType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-projecttype.md "nsip-project.schema.json#/properties/projectType")

### projectType Type

`string`

### projectType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                        | Explanation |
| :----------------------------------------------------------- | :---------- |
| `"BC01 - Office Use"`                                        |             |
| `"BC02 - Research and Development of Products or Processes"` |             |
| `"BC03 - An Industrial Process or Processes"`                |             |
| `"BC04 - Storage or Distribution of Goods"`                  |             |
| `"BC05 - Conferences"`                                       |             |
| `"BC06 - Exhibitions"`                                       |             |
| `"BC07 - Sport"`                                             |             |
| `"BC08 - Leisure"`                                           |             |
| `"BC09 - Tourism"`                                           |             |
| `"EN01 - Generating Stations"`                               |             |
| `"EN02 - Electric Lines"`                                    |             |
| `"EN03 - Underground Gas Storage Facilities"`                |             |
| `"EN04 - LNG Facilities"`                                    |             |
| `"EN05 - Gas Reception Facilities"`                          |             |
| `"EN06 - Gas Transporter Pipe-lines"`                        |             |
| `"EN07 - Other Pipe-lines"`                                  |             |
| `"TR01 - Highways"`                                          |             |
| `"TR02 - Airports"`                                          |             |
| `"TR03 - Harbour Facilities"`                                |             |
| `"TR04 - Railways"`                                          |             |
| `"TR05 - Rail Freight Interchanges"`                         |             |
| `"WS01 - Hazardous Waste Facilities"`                        |             |
| `"WW01 - Waste Water Treatment Plants"`                      |             |
| `"WA01 - Dams and Reservoirs"`                               |             |
| `"WA02 - Transfer of Water Resources"`                       |             |

## sourceSystem



`sourceSystem`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-sourcesystem.md "nsip-project.schema.json#/properties/sourceSystem")

### sourceSystem Type

`string`

### sourceSystem Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"back-office-applications"` |             |
| `"horizon"`                  |             |

## stage

Process stage identifier

`stage`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-stage.md "nsip-project.schema.json#/properties/stage")

### stage Type

`string`

### stage Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"draft"`           |             |
| `"pre_application"` |             |
| `"acceptance"`      |             |
| `"pre_examination"` |             |
| `"examination"`     |             |
| `"recommendation"`  |             |
| `"decision"`        |             |
| `"post_decision"`   |             |
| `"withdrawn"`       |             |

## projectLocation

Description of site location

`projectLocation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-projectlocation.md "nsip-project.schema.json#/properties/projectLocation")

### projectLocation Type

`string`

### projectLocation Examples

```json
"The scheme is located on the A1 Newcastle Gateshead Western Bypass, between junctions 65 and 67."
```

## projectEmailAddress

PINS Project email address pubished on website

`projectEmailAddress`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-projectemailaddress.md "nsip-project.schema.json#/properties/projectEmailAddress")

### projectEmailAddress Type

`string`

### projectEmailAddress Examples

```json
"NIEnquiries@planninginspectorate.gsi.gov.uk"
```

## regions



`regions`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-regions.md "nsip-project.schema.json#/properties/regions")

### regions Type

`string[]`

## transboundary

Drives addition of Transboundary tab on website. \[TODO]

`transboundary`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-transboundary.md "nsip-project.schema.json#/properties/transboundary")

### transboundary Type

`boolean`

### transboundary Examples

```json
true
```

```json
false
```

## easting

Project site Easting co-ordinate.

`easting`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-easting.md "nsip-project.schema.json#/properties/easting")

### easting Type

`integer`

### easting Examples

```json
345678
```

## northing

Project site Northing co-ordinate.

`northing`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-northing.md "nsip-project.schema.json#/properties/northing")

### northing Type

`integer`

### northing Examples

```json
345678
```

## welshLanguage

Welsh Language translation required.

`welshLanguage`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-welshlanguage.md "nsip-project.schema.json#/properties/welshLanguage")

### welshLanguage Type

`boolean`

### welshLanguage Examples

```json
true
```

```json
false
```

## mapZoomLevel

Resolution of pinned map. Set when co-ordinates are created.

`mapZoomLevel`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-mapzoomlevel.md "nsip-project.schema.json#/properties/mapZoomLevel")

### mapZoomLevel Type

`string`

### mapZoomLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"country"`  |             |
| `"region"`   |             |
| `"county"`   |             |
| `"borough"`  |             |
| `"district"` |             |
| `"city"`     |             |
| `"town"`     |             |
| `"junction"` |             |
| `"none"`     |             |

## secretaryOfState

Relevant Government Department. \[TODO]

`secretaryOfState`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-secretaryofstate.md "nsip-project.schema.json#/properties/secretaryOfState")

### secretaryOfState Type

`string`

## \_preApplicationDates



`_preApplicationDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_preapplicationdates.md "nsip-project.schema.json#/properties/_preApplicationDates")

### \_preApplicationDates Type

unknown

## datePINSFirstNotifiedOfProject

Date at which applicant notify PINS of a project (pre-publishing)

`datePINSFirstNotifiedOfProject`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-datepinsfirstnotifiedofproject.md "nsip-project.schema.json#/properties/datePINSFirstNotifiedOfProject")

### datePINSFirstNotifiedOfProject Type

`string`

### datePINSFirstNotifiedOfProject Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### datePINSFirstNotifiedOfProject Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateProjectAppearsOnWebsite

Date Project Appears On Website

`dateProjectAppearsOnWebsite`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateprojectappearsonwebsite.md "nsip-project.schema.json#/properties/dateProjectAppearsOnWebsite")

### dateProjectAppearsOnWebsite Type

`string`

### dateProjectAppearsOnWebsite Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateProjectAppearsOnWebsite Examples

```json
"2023-07-27T20:30:00.000Z"
```

## anticipatedSubmissionDateNonSpecific

Approximate Anticipated Submission Date Of Application, e.g. Q3 2023

`anticipatedSubmissionDateNonSpecific`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-anticipatedsubmissiondatenonspecific.md "nsip-project.schema.json#/properties/anticipatedSubmissionDateNonSpecific")

### anticipatedSubmissionDateNonSpecific Type

`string`

### anticipatedSubmissionDateNonSpecific Examples

```json
"Q3 2023"
```

## anticipatedDateOfSubmission

Anticipated Submission Date Of Application

`anticipatedDateOfSubmission`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-anticipateddateofsubmission.md "nsip-project.schema.json#/properties/anticipatedDateOfSubmission")

### anticipatedDateOfSubmission Type

`string`

### anticipatedDateOfSubmission Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### anticipatedDateOfSubmission Examples

```json
"2023-07-27T20:30:00.000Z"
```

## screeningOpinionSought

(TBC by Env. Services Team)

`screeningOpinionSought`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-screeningopinionsought.md "nsip-project.schema.json#/properties/screeningOpinionSought")

### screeningOpinionSought Type

`string`

### screeningOpinionSought Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### screeningOpinionSought Examples

```json
"2023-07-27T20:30:00.000Z"
```

## screeningOpinionIssued

(TBC by Env. Services Team)

`screeningOpinionIssued`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-screeningopinionissued.md "nsip-project.schema.json#/properties/screeningOpinionIssued")

### screeningOpinionIssued Type

`string`

### screeningOpinionIssued Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### screeningOpinionIssued Examples

```json
"2023-07-27T20:30:00.000Z"
```

## scopingOpinionSought

(TBC by Env. Services Team)

`scopingOpinionSought`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-scopingopinionsought.md "nsip-project.schema.json#/properties/scopingOpinionSought")

### scopingOpinionSought Type

`string`

### scopingOpinionSought Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### scopingOpinionSought Examples

```json
"2023-07-27T20:30:00.000Z"
```

## scopingOpinionIssued

(TBC by Env. Services Team)

`scopingOpinionIssued`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-scopingopinionissued.md "nsip-project.schema.json#/properties/scopingOpinionIssued")

### scopingOpinionIssued Type

`string`

### scopingOpinionIssued Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### scopingOpinionIssued Examples

```json
"2023-07-27T20:30:00.000Z"
```

## section46Notification

Applicant must notify PINS of statutory consultation

`section46Notification`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-section46notification.md "nsip-project.schema.json#/properties/section46Notification")

### section46Notification Type

`string`

### section46Notification Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### section46Notification Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_acceptanceDates



`_acceptanceDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_acceptancedates.md "nsip-project.schema.json#/properties/_acceptanceDates")

### \_acceptanceDates Type

unknown

## dateOfDCOSubmission

Date Applcation is submitted

`dateOfDCOSubmission`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateofdcosubmission.md "nsip-project.schema.json#/properties/dateOfDCOSubmission")

### dateOfDCOSubmission Type

`string`

### dateOfDCOSubmission Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfDCOSubmission Examples

```json
"2023-07-27T20:30:00.000Z"
```

## deadlineForAcceptanceDecision

DeadlineForAcceptanceDecision

`deadlineForAcceptanceDecision`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-deadlineforacceptancedecision.md "nsip-project.schema.json#/properties/deadlineForAcceptanceDecision")

### deadlineForAcceptanceDecision Type

`string`

### deadlineForAcceptanceDecision Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### deadlineForAcceptanceDecision Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateOfDCOAcceptance

Date Application is Formerly Accepted by PINS

`dateOfDCOAcceptance`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateofdcoacceptance.md "nsip-project.schema.json#/properties/dateOfDCOAcceptance")

### dateOfDCOAcceptance Type

`string`

### dateOfDCOAcceptance Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfDCOAcceptance Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateOfNonAcceptance

Date of Non Acceptance

`dateOfNonAcceptance`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateofnonacceptance.md "nsip-project.schema.json#/properties/dateOfNonAcceptance")

### dateOfNonAcceptance Type

`string`

### dateOfNonAcceptance Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfNonAcceptance Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_preExaminationDates



`_preExaminationDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_preexaminationdates.md "nsip-project.schema.json#/properties/_preExaminationDates")

### \_preExaminationDates Type

unknown

## dateOfRepresentationPeriodOpen

Date at which point publish can submit relevant reps

`dateOfRepresentationPeriodOpen`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateofrepresentationperiodopen.md "nsip-project.schema.json#/properties/dateOfRepresentationPeriodOpen")

### dateOfRepresentationPeriodOpen Type

`string`

### dateOfRepresentationPeriodOpen Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfRepresentationPeriodOpen Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateOfRelevantRepresentationClose

Date at which point publish can no longer submit relevant reps

`dateOfRelevantRepresentationClose`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateofrelevantrepresentationclose.md "nsip-project.schema.json#/properties/dateOfRelevantRepresentationClose")

### dateOfRelevantRepresentationClose Type

`string`

### dateOfRelevantRepresentationClose Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfRelevantRepresentationClose Examples

```json
"2023-07-27T20:30:00.000Z"
```

## extensionToDateRelevantRepresentationsClose

ExtensionToDateRelevantRepresentationsClose

`extensionToDateRelevantRepresentationsClose`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-extensiontodaterelevantrepresentationsclose.md "nsip-project.schema.json#/properties/extensionToDateRelevantRepresentationsClose")

### extensionToDateRelevantRepresentationsClose Type

`string`

### extensionToDateRelevantRepresentationsClose Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### extensionToDateRelevantRepresentationsClose Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateRRepAppearOnWebsite

Date at which relevant reps appear on the website

`dateRRepAppearOnWebsite`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-daterrepappearonwebsite.md "nsip-project.schema.json#/properties/dateRRepAppearOnWebsite")

### dateRRepAppearOnWebsite Type

`string`

### dateRRepAppearOnWebsite Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateRRepAppearOnWebsite Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateIAPIDue



`dateIAPIDue`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateiapidue.md "nsip-project.schema.json#/properties/dateIAPIDue")

### dateIAPIDue Type

`string`

### dateIAPIDue Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateIAPIDue Examples

```json
"2023-07-27T20:30:00.000Z"
```

## rule6LetterPublishDate



`rule6LetterPublishDate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-rule6letterpublishdate.md "nsip-project.schema.json#/properties/rule6LetterPublishDate")

### rule6LetterPublishDate Type

`string`

### rule6LetterPublishDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### rule6LetterPublishDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## preliminaryMeetingStartDate

Meeting between all parties inc public

`preliminaryMeetingStartDate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-preliminarymeetingstartdate.md "nsip-project.schema.json#/properties/preliminaryMeetingStartDate")

### preliminaryMeetingStartDate Type

`string`

### preliminaryMeetingStartDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### preliminaryMeetingStartDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## notificationDateForPMAndEventsDirectlyFollowingPM



`notificationDateForPMAndEventsDirectlyFollowingPM`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-notificationdateforpmandeventsdirectlyfollowingpm.md "nsip-project.schema.json#/properties/notificationDateForPMAndEventsDirectlyFollowingPM")

### notificationDateForPMAndEventsDirectlyFollowingPM Type

`string`

### notificationDateForPMAndEventsDirectlyFollowingPM Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### notificationDateForPMAndEventsDirectlyFollowingPM Examples

```json
"2023-07-27T20:30:00.000Z"
```

## notificationDateForEventsDeveloper



`notificationDateForEventsDeveloper`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-notificationdateforeventsdeveloper.md "nsip-project.schema.json#/properties/notificationDateForEventsDeveloper")

### notificationDateForEventsDeveloper Type

`string`

### notificationDateForEventsDeveloper Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### notificationDateForEventsDeveloper Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_examinationDates



`_examinationDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_examinationdates.md "nsip-project.schema.json#/properties/_examinationDates")

### \_examinationDates Type

unknown

## dateSection58NoticeReceived

Applicant has notified all parties of application

`dateSection58NoticeReceived`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-datesection58noticereceived.md "nsip-project.schema.json#/properties/dateSection58NoticeReceived")

### dateSection58NoticeReceived Type

`string`

### dateSection58NoticeReceived Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateSection58NoticeReceived Examples

```json
"2023-07-27T20:30:00.000Z"
```

## confirmedStartOfExamination

ConfirmedStartOfExamination by panel

`confirmedStartOfExamination`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-confirmedstartofexamination.md "nsip-project.schema.json#/properties/confirmedStartOfExamination")

### confirmedStartOfExamination Type

`string`

### confirmedStartOfExamination Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### confirmedStartOfExamination Examples

```json
"2023-07-27T20:30:00.000Z"
```

## rule8LetterPublishDate



`rule8LetterPublishDate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-rule8letterpublishdate.md "nsip-project.schema.json#/properties/rule8LetterPublishDate")

### rule8LetterPublishDate Type

`string`

### rule8LetterPublishDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### rule8LetterPublishDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## deadlineForCloseOfExamination

DeadlineForCloseOfExamination

`deadlineForCloseOfExamination`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-deadlineforcloseofexamination.md "nsip-project.schema.json#/properties/deadlineForCloseOfExamination")

### deadlineForCloseOfExamination Type

`string`

### deadlineForCloseOfExamination Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### deadlineForCloseOfExamination Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateTimeExaminationEnds

ConfirmedSEndOfExamination by panel

`dateTimeExaminationEnds`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-datetimeexaminationends.md "nsip-project.schema.json#/properties/dateTimeExaminationEnds")

### dateTimeExaminationEnds Type

`string`

### dateTimeExaminationEnds Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateTimeExaminationEnds Examples

```json
"2023-07-27T20:30:00.000Z"
```

## stage4ExtensionToExamCloseDate

Examination Period extended to this date

`stage4ExtensionToExamCloseDate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-stage4extensiontoexamclosedate.md "nsip-project.schema.json#/properties/stage4ExtensionToExamCloseDate")

### stage4ExtensionToExamCloseDate Type

`string`

### stage4ExtensionToExamCloseDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### stage4ExtensionToExamCloseDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_recommendationDates



`_recommendationDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_recommendationdates.md "nsip-project.schema.json#/properties/_recommendationDates")

### \_recommendationDates Type

unknown

## deadlineForSubmissionOfRecommendation

DeadlineForSubmissionOfRecommendation

`deadlineForSubmissionOfRecommendation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-deadlineforsubmissionofrecommendation.md "nsip-project.schema.json#/properties/deadlineForSubmissionOfRecommendation")

### deadlineForSubmissionOfRecommendation Type

`string`

### deadlineForSubmissionOfRecommendation Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### deadlineForSubmissionOfRecommendation Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateOfRecommendations

Date recomm report sent to SoS

`dateOfRecommendations`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateofrecommendations.md "nsip-project.schema.json#/properties/dateOfRecommendations")

### dateOfRecommendations Type

`string`

### dateOfRecommendations Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfRecommendations Examples

```json
"2023-07-27T20:30:00.000Z"
```

## stage5ExtensionToRecommendationDeadline

Recommendation period extended to this date

`stage5ExtensionToRecommendationDeadline`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-stage5extensiontorecommendationdeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToRecommendationDeadline")

### stage5ExtensionToRecommendationDeadline Type

`string`

### stage5ExtensionToRecommendationDeadline Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### stage5ExtensionToRecommendationDeadline Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_decisionDates



`_decisionDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_decisiondates.md "nsip-project.schema.json#/properties/_decisionDates")

### \_decisionDates Type

unknown

## deadlineForDecision

DeadlineForDecision

`deadlineForDecision`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-deadlinefordecision.md "nsip-project.schema.json#/properties/deadlineForDecision")

### deadlineForDecision Type

`string`

### deadlineForDecision Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### deadlineForDecision Examples

```json
"2023-07-27T20:30:00.000Z"
```

## confirmedDateOfDecision

Decision by SoS

`confirmedDateOfDecision`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-confirmeddateofdecision.md "nsip-project.schema.json#/properties/confirmedDateOfDecision")

### confirmedDateOfDecision Type

`string`

### confirmedDateOfDecision Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### confirmedDateOfDecision Examples

```json
"2023-07-27T20:30:00.000Z"
```

## stage5ExtensionToDecisionDeadline

Decision period extended to this date

`stage5ExtensionToDecisionDeadline`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-stage5extensiontodecisiondeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToDecisionDeadline")

### stage5ExtensionToDecisionDeadline Type

`string`

### stage5ExtensionToDecisionDeadline Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### stage5ExtensionToDecisionDeadline Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_postDecisionDates



`_postDecisionDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_postdecisiondates.md "nsip-project.schema.json#/properties/_postDecisionDates")

### \_postDecisionDates Type

unknown

## jRPeriodEndDate

Judicial Review

`jRPeriodEndDate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-jrperiodenddate.md "nsip-project.schema.json#/properties/jRPeriodEndDate")

### jRPeriodEndDate Type

`string`

### jRPeriodEndDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### jRPeriodEndDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## \_withdrawalDates



`_withdrawalDates`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-_withdrawaldates.md "nsip-project.schema.json#/properties/_withdrawalDates")

### \_withdrawalDates Type

unknown

## dateProjectWithdrawn

DateProjectWithdrawn by applicant

`dateProjectWithdrawn`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-dateprojectwithdrawn.md "nsip-project.schema.json#/properties/dateProjectWithdrawn")

### dateProjectWithdrawn Type

`string`

### dateProjectWithdrawn Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateProjectWithdrawn Examples

```json
"2023-07-27T20:30:00.000Z"
```

## operationsLeadId

Maps to \[Employee].\[EmployeeID].

`operationsLeadId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-operationsleadid.md "nsip-project.schema.json#/properties/operationsLeadId")

### operationsLeadId Type

`string`

## operationsManagerId

New NSIP role, Maps to \[Employee].\[EmployeeID]

`operationsManagerId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-operationsmanagerid.md "nsip-project.schema.json#/properties/operationsManagerId")

### operationsManagerId Type

`string`

## caseManagerId

Maps to \[Employee].\[EmployeeID]

`caseManagerId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-casemanagerid.md "nsip-project.schema.json#/properties/caseManagerId")

### caseManagerId Type

`string`

## nsipOfficerIds



`nsipOfficerIds`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-nsipofficerids.md "nsip-project.schema.json#/properties/nsipOfficerIds")

### nsipOfficerIds Type

`string[]`

## nsipAdministrationOfficerIds



`nsipAdministrationOfficerIds`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-nsipadministrationofficerids.md "nsip-project.schema.json#/properties/nsipAdministrationOfficerIds")

### nsipAdministrationOfficerIds Type

`string[]`

## leadInspectorId

Maps to \[Employee].\[EmployeeID]

`leadInspectorId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-leadinspectorid.md "nsip-project.schema.json#/properties/leadInspectorId")

### leadInspectorId Type

`string`

## inspectorIds



`inspectorIds`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-inspectorids.md "nsip-project.schema.json#/properties/inspectorIds")

### inspectorIds Type

`string[]`

## environmentalServicesOfficerId

Maps to \[Employee].\[EmployeeID]

`environmentalServicesOfficerId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-environmentalservicesofficerid.md "nsip-project.schema.json#/properties/environmentalServicesOfficerId")

### environmentalServicesOfficerId Type

`string`

## legalOfficerId

Maps to \[Employee].\[EmployeeID]

`legalOfficerId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-legalofficerid.md "nsip-project.schema.json#/properties/legalOfficerId")

### legalOfficerId Type

`string`

## applicantId

Maps to \[ServiceUser].\[id] where the serviceUserType is Applicant

`applicantId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [NSIP Project](nsip-project-properties-applicantid.md "nsip-project.schema.json#/properties/applicantId")

### applicantId Type

`string`

## migrationStatus

Has this case been migrated from the legacy system? True if so.

`migrationStatus`

*   is optional

*   Type: `boolean`

*   can be null

*   defined in: [NSIP Project](nsip-project-properties-migrationstatus.md "nsip-project.schema.json#/properties/migrationStatus")

### migrationStatus Type

`boolean`
