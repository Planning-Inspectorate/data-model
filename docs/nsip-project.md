## NSIP Project Type

`object` ([NSIP Project](nsip-project.md))

# NSIP Project Properties

| Property                                                                                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                            |
| :------------------------------------------------------------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [caseId](#caseid)                                                                                       | `integer`     | Required | cannot be null | [NSIP Project](nsip-project-properties-caseid.md "nsip-project.schema.json#/properties/caseId")                                                                                       |
| [caseReference](#casereference)                                                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-casereference.md "nsip-project.schema.json#/properties/caseReference")                                                                         |
| [projectName](#projectname)                                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-projectname.md "nsip-project.schema.json#/properties/projectName")                                                                             |
| [projectNameWelsh](#projectnamewelsh)                                                                   | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-projectnamewelsh.md "nsip-project.schema.json#/properties/projectNameWelsh")                                                                   |
| [projectDescription](#projectdescription)                                                               | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-projectdescription.md "nsip-project.schema.json#/properties/projectDescription")                                                               |
| [projectDescriptionWelsh](#projectdescriptionwelsh)                                                     | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-projectdescriptionwelsh.md "nsip-project.schema.json#/properties/projectDescriptionWelsh")                                                     |
| [decision](#decision)                                                                                   | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-decision.md "nsip-project.schema.json#/properties/decision")                                                                                   |
| [publishStatus](#publishstatus)                                                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-publishstatus.md "nsip-project.schema.json#/properties/publishStatus")                                                                         |
| [sector](#sector)                                                                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-sector.md "nsip-project.schema.json#/properties/sector")                                                                                       |
| [projectType](#projecttype)                                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-projecttype.md "nsip-project.schema.json#/properties/projectType")                                                                             |
| [sourceSystem](#sourcesystem)                                                                           | `string`      | Required | cannot be null | [NSIP Project](nsip-project-properties-sourcesystem.md "nsip-project.schema.json#/properties/sourceSystem")                                                                           |
| [stage](#stage)                                                                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-stage.md "nsip-project.schema.json#/properties/stage")                                                                                         |
| [projectLocation](#projectlocation)                                                                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-projectlocation.md "nsip-project.schema.json#/properties/projectLocation")                                                                     |
| [projectLocationWelsh](#projectlocationwelsh)                                                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-projectlocationwelsh.md "nsip-project.schema.json#/properties/projectLocationWelsh")                                                           |
| [projectEmailAddress](#projectemailaddress)                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-projectemailaddress.md "nsip-project.schema.json#/properties/projectEmailAddress")                                                             |
| [regions](#regions)                                                                                     | `array`       | Required | cannot be null | [NSIP Project](nsip-project-properties-regions.md "nsip-project.schema.json#/properties/regions")                                                                                     |
| [transboundary](#transboundary)                                                                         | `boolean`     | Required | can be null    | [NSIP Project](nsip-project-properties-transboundary.md "nsip-project.schema.json#/properties/transboundary")                                                                         |
| [easting](#easting)                                                                                     | `integer`     | Required | can be null    | [NSIP Project](nsip-project-properties-easting.md "nsip-project.schema.json#/properties/easting")                                                                                     |
| [northing](#northing)                                                                                   | `integer`     | Required | can be null    | [NSIP Project](nsip-project-properties-northing.md "nsip-project.schema.json#/properties/northing")                                                                                   |
| [welshLanguage](#welshlanguage)                                                                         | `boolean`     | Required | can be null    | [NSIP Project](nsip-project-properties-welshlanguage.md "nsip-project.schema.json#/properties/welshLanguage")                                                                         |
| [mapZoomLevel](#mapzoomlevel)                                                                           | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-mapzoomlevel.md "nsip-project.schema.json#/properties/mapZoomLevel")                                                                           |
| [secretaryOfState](#secretaryofstate)                                                                   | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-secretaryofstate.md "nsip-project.schema.json#/properties/secretaryOfState")                                                                   |
| [\_preApplicationDates](#_preapplicationdates)                                                          | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_preapplicationdates.md "nsip-project.schema.json#/properties/_preApplicationDates")                                                           |
| [datePINSFirstNotifiedOfProject](#datepinsfirstnotifiedofproject)                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-datepinsfirstnotifiedofproject.md "nsip-project.schema.json#/properties/datePINSFirstNotifiedOfProject")                                       |
| [dateProjectAppearsOnWebsite](#dateprojectappearsonwebsite)                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateprojectappearsonwebsite.md "nsip-project.schema.json#/properties/dateProjectAppearsOnWebsite")                                             |
| [anticipatedSubmissionDateNonSpecific](#anticipatedsubmissiondatenonspecific)                           | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-anticipatedsubmissiondatenonspecific.md "nsip-project.schema.json#/properties/anticipatedSubmissionDateNonSpecific")                           |
| [anticipatedDateOfSubmission](#anticipateddateofsubmission)                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-anticipateddateofsubmission.md "nsip-project.schema.json#/properties/anticipatedDateOfSubmission")                                             |
| [screeningOpinionSought](#screeningopinionsought)                                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-screeningopinionsought.md "nsip-project.schema.json#/properties/screeningOpinionSought")                                                       |
| [screeningOpinionIssued](#screeningopinionissued)                                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-screeningopinionissued.md "nsip-project.schema.json#/properties/screeningOpinionIssued")                                                       |
| [scopingOpinionSought](#scopingopinionsought)                                                           | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-scopingopinionsought.md "nsip-project.schema.json#/properties/scopingOpinionSought")                                                           |
| [scopingOpinionIssued](#scopingopinionissued)                                                           | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-scopingopinionissued.md "nsip-project.schema.json#/properties/scopingOpinionIssued")                                                           |
| [section46Notification](#section46notification)                                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-section46notification.md "nsip-project.schema.json#/properties/section46Notification")                                                         |
| [\_acceptanceDates](#_acceptancedates)                                                                  | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_acceptancedates.md "nsip-project.schema.json#/properties/_acceptanceDates")                                                                   |
| [dateOfDCOSubmission](#dateofdcosubmission)                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofdcosubmission.md "nsip-project.schema.json#/properties/dateOfDCOSubmission")                                                             |
| [deadlineForAcceptanceDecision](#deadlineforacceptancedecision)                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-deadlineforacceptancedecision.md "nsip-project.schema.json#/properties/deadlineForAcceptanceDecision")                                         |
| [dateOfDCOAcceptance](#dateofdcoacceptance)                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofdcoacceptance.md "nsip-project.schema.json#/properties/dateOfDCOAcceptance")                                                             |
| [dateOfNonAcceptance](#dateofnonacceptance)                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofnonacceptance.md "nsip-project.schema.json#/properties/dateOfNonAcceptance")                                                             |
| [\_preExaminationDates](#_preexaminationdates)                                                          | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_preexaminationdates.md "nsip-project.schema.json#/properties/_preExaminationDates")                                                           |
| [dateOfRepresentationPeriodOpen](#dateofrepresentationperiodopen)                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofrepresentationperiodopen.md "nsip-project.schema.json#/properties/dateOfRepresentationPeriodOpen")                                       |
| [dateOfRelevantRepresentationClose](#dateofrelevantrepresentationclose)                                 | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofrelevantrepresentationclose.md "nsip-project.schema.json#/properties/dateOfRelevantRepresentationClose")                                 |
| [extensionToDateRelevantRepresentationsClose](#extensiontodaterelevantrepresentationsclose)             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-extensiontodaterelevantrepresentationsclose.md "nsip-project.schema.json#/properties/extensionToDateRelevantRepresentationsClose")             |
| [dateRRepAppearOnWebsite](#daterrepappearonwebsite)                                                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-daterrepappearonwebsite.md "nsip-project.schema.json#/properties/dateRRepAppearOnWebsite")                                                     |
| [dateIAPIDue](#dateiapidue)                                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateiapidue.md "nsip-project.schema.json#/properties/dateIAPIDue")                                                                             |
| [rule6LetterPublishDate](#rule6letterpublishdate)                                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-rule6letterpublishdate.md "nsip-project.schema.json#/properties/rule6LetterPublishDate")                                                       |
| [preliminaryMeetingStartDate](#preliminarymeetingstartdate)                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-preliminarymeetingstartdate.md "nsip-project.schema.json#/properties/preliminaryMeetingStartDate")                                             |
| [notificationDateForPMAndEventsDirectlyFollowingPM](#notificationdateforpmandeventsdirectlyfollowingpm) | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-notificationdateforpmandeventsdirectlyfollowingpm.md "nsip-project.schema.json#/properties/notificationDateForPMAndEventsDirectlyFollowingPM") |
| [notificationDateForEventsDeveloper](#notificationdateforeventsdeveloper)                               | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-notificationdateforeventsdeveloper.md "nsip-project.schema.json#/properties/notificationDateForEventsDeveloper")                               |
| [\_examinationDates](#_examinationdates)                                                                | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_examinationdates.md "nsip-project.schema.json#/properties/_examinationDates")                                                                 |
| [dateSection58NoticeReceived](#datesection58noticereceived)                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-datesection58noticereceived.md "nsip-project.schema.json#/properties/dateSection58NoticeReceived")                                             |
| [confirmedStartOfExamination](#confirmedstartofexamination)                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-confirmedstartofexamination.md "nsip-project.schema.json#/properties/confirmedStartOfExamination")                                             |
| [rule8LetterPublishDate](#rule8letterpublishdate)                                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-rule8letterpublishdate.md "nsip-project.schema.json#/properties/rule8LetterPublishDate")                                                       |
| [deadlineForCloseOfExamination](#deadlineforcloseofexamination)                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-deadlineforcloseofexamination.md "nsip-project.schema.json#/properties/deadlineForCloseOfExamination")                                         |
| [dateTimeExaminationEnds](#datetimeexaminationends)                                                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-datetimeexaminationends.md "nsip-project.schema.json#/properties/dateTimeExaminationEnds")                                                     |
| [stage4ExtensionToExamCloseDate](#stage4extensiontoexamclosedate)                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-stage4extensiontoexamclosedate.md "nsip-project.schema.json#/properties/stage4ExtensionToExamCloseDate")                                       |
| [\_recommendationDates](#_recommendationdates)                                                          | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_recommendationdates.md "nsip-project.schema.json#/properties/_recommendationDates")                                                           |
| [deadlineForSubmissionOfRecommendation](#deadlineforsubmissionofrecommendation)                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-deadlineforsubmissionofrecommendation.md "nsip-project.schema.json#/properties/deadlineForSubmissionOfRecommendation")                         |
| [dateOfRecommendations](#dateofrecommendations)                                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofrecommendations.md "nsip-project.schema.json#/properties/dateOfRecommendations")                                                         |
| [stage5ExtensionToRecommendationDeadline](#stage5extensiontorecommendationdeadline)                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-stage5extensiontorecommendationdeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToRecommendationDeadline")                     |
| [\_decisionDates](#_decisiondates)                                                                      | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_decisiondates.md "nsip-project.schema.json#/properties/_decisionDates")                                                                       |
| [deadlineForDecision](#deadlinefordecision)                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-deadlinefordecision.md "nsip-project.schema.json#/properties/deadlineForDecision")                                                             |
| [confirmedDateOfDecision](#confirmeddateofdecision)                                                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-confirmeddateofdecision.md "nsip-project.schema.json#/properties/confirmedDateOfDecision")                                                     |
| [stage5ExtensionToDecisionDeadline](#stage5extensiontodecisiondeadline)                                 | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-stage5extensiontodecisiondeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToDecisionDeadline")                                 |
| [\_postDecisionDates](#_postdecisiondates)                                                              | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_postdecisiondates.md "nsip-project.schema.json#/properties/_postDecisionDates")                                                               |
| [jRPeriodEndDate](#jrperiodenddate)                                                                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-jrperiodenddate.md "nsip-project.schema.json#/properties/jRPeriodEndDate")                                                                     |
| [\_withdrawalDates](#_withdrawaldates)                                                                  | Not specified | Optional | cannot be null | [NSIP Project](nsip-project-properties-_withdrawaldates.md "nsip-project.schema.json#/properties/_withdrawalDates")                                                                   |
| [dateProjectWithdrawn](#dateprojectwithdrawn)                                                           | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateprojectwithdrawn.md "nsip-project.schema.json#/properties/dateProjectWithdrawn")                                                           |
| [operationsLeadId](#operationsleadid)                                                                   | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-operationsleadid.md "nsip-project.schema.json#/properties/operationsLeadId")                                                                   |
| [operationsManagerId](#operationsmanagerid)                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-operationsmanagerid.md "nsip-project.schema.json#/properties/operationsManagerId")                                                             |
| [caseManagerId](#casemanagerid)                                                                         | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-casemanagerid.md "nsip-project.schema.json#/properties/caseManagerId")                                                                         |
| [nsipOfficerIds](#nsipofficerids)                                                                       | `array`       | Required | cannot be null | [NSIP Project](nsip-project-properties-nsipofficerids.md "nsip-project.schema.json#/properties/nsipOfficerIds")                                                                       |
| [nsipAdministrationOfficerIds](#nsipadministrationofficerids)                                           | `array`       | Required | cannot be null | [NSIP Project](nsip-project-properties-nsipadministrationofficerids.md "nsip-project.schema.json#/properties/nsipAdministrationOfficerIds")                                           |
| [leadInspectorId](#leadinspectorid)                                                                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-leadinspectorid.md "nsip-project.schema.json#/properties/leadInspectorId")                                                                     |
| [inspectorIds](#inspectorids)                                                                           | `array`       | Required | cannot be null | [NSIP Project](nsip-project-properties-inspectorids.md "nsip-project.schema.json#/properties/inspectorIds")                                                                           |
| [environmentalServicesOfficerId](#environmentalservicesofficerid)                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-environmentalservicesofficerid.md "nsip-project.schema.json#/properties/environmentalServicesOfficerId")                                       |
| [legalOfficerId](#legalofficerid)                                                                       | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-legalofficerid.md "nsip-project.schema.json#/properties/legalOfficerId")                                                                       |
| [applicantId](#applicantid)                                                                             | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-applicantid.md "nsip-project.schema.json#/properties/applicantId")                                                                             |
| [migrationStatus](#migrationstatus)                                                                     | `boolean`     | Required | can be null    | [NSIP Project](nsip-project-properties-migrationstatus.md "nsip-project.schema.json#/properties/migrationStatus")                                                                     |
| [dateOfReOpenRelevantRepresentationStart](#dateofreopenrelevantrepresentationstart)                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofreopenrelevantrepresentationstart.md "nsip-project.schema.json#/properties/dateOfReOpenRelevantRepresentationStart")                     |
| [dateOfReOpenRelevantRepresentationClose](#dateofreopenrelevantrepresentationclose)                     | `string`      | Required | can be null    | [NSIP Project](nsip-project-properties-dateofreopenrelevantrepresentationclose.md "nsip-project.schema.json#/properties/dateOfReOpenRelevantRepresentationClose")                     |
| [isMaterialChange](#ismaterialchange)                                                                   | `boolean`     | Optional | can be null    | [NSIP Project](nsip-project-properties-ismaterialchange.md "nsip-project.schema.json#/properties/isMaterialChange")                                                                   |
| [courtDecisionDate](#courtdecisiondate)                                                                 | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-courtdecisiondate.md "nsip-project.schema.json#/properties/courtDecisionDate")                                                                 |
| [courtDecisionOutcomeText](#courtdecisionoutcometext)                                                   | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-courtdecisionoutcometext.md "nsip-project.schema.json#/properties/courtDecisionOutcomeText")                                                   |
| [decisionChallengeSubmissionDate](#decisionchallengesubmissiondate)                                     | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-decisionchallengesubmissiondate.md "nsip-project.schema.json#/properties/decisionChallengeSubmissionDate")                                     |
| [recommendation](#recommendation)                                                                       | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-recommendation.md "nsip-project.schema.json#/properties/recommendation")                                                                       |
| [inceptionMeetingDate](#inceptionmeetingdate)                                                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-inceptionmeetingdate.md "nsip-project.schema.json#/properties/inceptionMeetingDate")                                                           |
| [draftDocumentSubmissionDate](#draftdocumentsubmissiondate)                                             | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-draftdocumentsubmissiondate.md "nsip-project.schema.json#/properties/draftDocumentSubmissionDate")                                             |
| [programmeDocumentSubmissionDate](#programmedocumentsubmissiondate)                                     | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-programmedocumentsubmissiondate.md "nsip-project.schema.json#/properties/programmeDocumentSubmissionDate")                                     |
| [tier](#tier)                                                                                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-tier.md "nsip-project.schema.json#/properties/tier")                                                                                           |
| [s61SummaryURI](#s61summaryuri)                                                                         | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-s61summaryuri.md "nsip-project.schema.json#/properties/s61SummaryURI")                                                                         |
| [estimatedScopingSubmissionDate](#estimatedscopingsubmissiondate)                                       | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-estimatedscopingsubmissiondate.md "nsip-project.schema.json#/properties/estimatedScopingSubmissionDate")                                       |
| [consultationMilestoneAdequacyDate](#consultationmilestoneadequacydate)                                 | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-consultationmilestoneadequacydate.md "nsip-project.schema.json#/properties/consultationMilestoneAdequacyDate")                                 |
| [planProcessEvidence](#planprocessevidence)                                                             | `boolean`     | Optional | can be null    | [NSIP Project](nsip-project-properties-planprocessevidence.md "nsip-project.schema.json#/properties/planProcessEvidence")                                                             |
| [issuesTracker](#issuestracker)                                                                         | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-issuestracker.md "nsip-project.schema.json#/properties/issuesTracker")                                                                         |
| [essentialFastTrackComponents](#essentialfasttrackcomponents)                                           | `boolean`     | Optional | can be null    | [NSIP Project](nsip-project-properties-essentialfasttrackcomponents.md "nsip-project.schema.json#/properties/essentialFastTrackComponents")                                           |
| [principalAreaDisagreementSummaryStmt](#principalareadisagreementsummarystmt)                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-principalareadisagreementsummarystmt.md "nsip-project.schema.json#/properties/principalAreaDisagreementSummaryStmt")                           |
| [principalAreaDisagreementSummaryStmtSubmittedDate](#principalareadisagreementsummarystmtsubmitteddate) | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-principalareadisagreementsummarystmtsubmitteddate.md "nsip-project.schema.json#/properties/principalAreaDisagreementSummaryStmtSubmittedDate") |
| [policyComplianceDocument](#policycompliancedocument)                                                   | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-policycompliancedocument.md "nsip-project.schema.json#/properties/policyComplianceDocument")                                                   |
| [policyComplianceDocumentSubmittedDate](#policycompliancedocumentsubmitteddate)                         | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-policycompliancedocumentsubmitteddate.md "nsip-project.schema.json#/properties/policyComplianceDocumentSubmittedDate")                         |
| [designApproachDocument](#designapproachdocument)                                                       | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-designapproachdocument.md "nsip-project.schema.json#/properties/designApproachDocument")                                                       |
| [designApproachDocumentSubmittedDate](#designapproachdocumentsubmitteddate)                             | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-designapproachdocumentsubmitteddate.md "nsip-project.schema.json#/properties/designApproachDocumentSubmittedDate")                             |
| [matureOutlineControlDocument](#matureoutlinecontroldocument)                                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-matureoutlinecontroldocument.md "nsip-project.schema.json#/properties/matureOutlineControlDocument")                                           |
| [matureOutlineControlDocumentSubmittedDate](#matureoutlinecontroldocumentsubmitteddate)                 | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-matureoutlinecontroldocumentsubmitteddate.md "nsip-project.schema.json#/properties/matureOutlineControlDocumentSubmittedDate")                 |
| [caAndTpEvidence](#caandtpevidence)                                                                     | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-caandtpevidence.md "nsip-project.schema.json#/properties/caAndTpEvidence")                                                                     |
| [caAndTpEvidenceSubmittedDate](#caandtpevidencesubmitteddate)                                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-caandtpevidencesubmitteddate.md "nsip-project.schema.json#/properties/caAndTpEvidenceSubmittedDate")                                           |
| [publicSectorEqualityDuty](#publicsectorequalityduty)                                                   | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-publicsectorequalityduty.md "nsip-project.schema.json#/properties/publicSectorEqualityDuty")                                                   |
| [publicSectorEqualityDutySubmittedDate](#publicsectorequalitydutysubmitteddate)                         | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-publicsectorequalitydutysubmitteddate.md "nsip-project.schema.json#/properties/publicSectorEqualityDutySubmittedDate")                         |
| [fastTrackAdmissionDocument](#fasttrackadmissiondocument)                                               | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-fasttrackadmissiondocument.md "nsip-project.schema.json#/properties/fastTrackAdmissionDocument")                                               |
| [fastTrackAdmissionDocumentSubmittedDate](#fasttrackadmissiondocumentsubmitteddate)                     | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-fasttrackadmissiondocumentsubmitteddate.md "nsip-project.schema.json#/properties/fastTrackAdmissionDocumentSubmittedDate")                     |
| [multipartyApplicationCheckDocument](#multipartyapplicationcheckdocument)                               | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-multipartyapplicationcheckdocument.md "nsip-project.schema.json#/properties/multipartyApplicationCheckDocument")                               |
| [multipartyApplicationCheckDocumentSubmittedDate](#multipartyapplicationcheckdocumentsubmitteddate)     | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-multipartyapplicationcheckdocumentsubmitteddate.md "nsip-project.schema.json#/properties/multipartyApplicationCheckDocumentSubmittedDate")     |
| [programmeDocumentURI](#programmedocumenturi)                                                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-programmedocumenturi.md "nsip-project.schema.json#/properties/programmeDocumentURI")                                                           |
| [updatedProgrammeDocumentReceivedDate](#updatedprogrammedocumentreceiveddate)                           | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-updatedprogrammedocumentreceiveddate.md "nsip-project.schema.json#/properties/updatedProgrammeDocumentReceivedDate")                           |
| [programmeDocumentReviewedByEstDate](#programmedocumentreviewedbyestdate)                               | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-programmedocumentreviewedbyestdate.md "nsip-project.schema.json#/properties/programmeDocumentReviewedByEstDate")                               |
| [caseTeamIssuedCommentsDate](#caseteamissuedcommentsdate)                                               | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-caseteamissuedcommentsdate.md "nsip-project.schema.json#/properties/caseTeamIssuedCommentsDate")                                               |
| [subProjectType](#subprojecttype)                                                                       | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-subprojecttype.md "nsip-project.schema.json#/properties/subProjectType")                                                                       |
| [newMaturity](#newmaturity)                                                                             | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-newmaturity.md "nsip-project.schema.json#/properties/newMaturity")                                                                             |
| [statutoryConsultationPeriodEndDate](#statutoryconsultationperiodenddate)                               | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-statutoryconsultationperiodenddate.md "nsip-project.schema.json#/properties/statutoryConsultationPeriodEndDate")                               |
| [submissionOfDraftDocumentsDate](#submissionofdraftdocumentsdate)                                       | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-submissionofdraftdocumentsdate.md "nsip-project.schema.json#/properties/submissionOfDraftDocumentsDate")                                       |
| [numberBand2Inspectors](#numberband2inspectors)                                                         | `number`      | Optional | can be null    | [NSIP Project](nsip-project-properties-numberband2inspectors.md "nsip-project.schema.json#/properties/numberBand2Inspectors")                                                         |
| [numberBand3Inspectors](#numberband3inspectors)                                                         | `number`      | Optional | can be null    | [NSIP Project](nsip-project-properties-numberband3inspectors.md "nsip-project.schema.json#/properties/numberBand3Inspectors")                                                         |
| [memLastUpdated](#memlastupdated)                                                                       | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-memlastupdated.md "nsip-project.schema.json#/properties/memLastUpdated")                                                                       |
| [additionalComments](#additionalcomments)                                                               | `string`      | Optional | can be null    | [NSIP Project](nsip-project-properties-additionalcomments.md "nsip-project.schema.json#/properties/additionalComments")                                                               |
| [operationsLeadIds](#operationsleadids)                                                                 | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-operationsleadids.md "nsip-project.schema.json#/properties/operationsLeadIds")                                                                 |
| [operationsManagerIds](#operationsmanagerids)                                                           | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-operationsmanagerids.md "nsip-project.schema.json#/properties/operationsManagerIds")                                                           |
| [caseManagerIds](#casemanagerids)                                                                       | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-casemanagerids.md "nsip-project.schema.json#/properties/caseManagerIds")                                                                       |
| [leadInspectorIds](#leadinspectorids)                                                                   | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-leadinspectorids.md "nsip-project.schema.json#/properties/leadInspectorIds")                                                                   |
| [environmentalServicesOfficerIds](#environmentalservicesofficerids)                                     | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-environmentalservicesofficerids.md "nsip-project.schema.json#/properties/environmentalServicesOfficerIds")                                     |
| [legalOfficerIds](#legalofficerids)                                                                     | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-legalofficerids.md "nsip-project.schema.json#/properties/legalOfficerIds")                                                                     |
| [meetings](#meetings)                                                                                   | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-meetings.md "nsip-project.schema.json#/properties/meetings")                                                                                   |
| [invoices](#invoices)                                                                                   | `array`       | Optional | cannot be null | [NSIP Project](nsip-project-properties-invoices.md "nsip-project.schema.json#/properties/invoices")                                                                                   |
| Additional Properties                                                                                   | Any           | Optional | can be null    |                                                                                                                                                                                       |

## caseId

The unique identifier within the Back Office. This is not the same as the case reference

`caseId`

* is required

* Type: `integer`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-caseid.md "nsip-project.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1242
```

## caseReference



`caseReference`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-casereference.md "nsip-project.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"BC0510001"
```

## projectName

Name of project

`projectName`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectname.md "nsip-project.schema.json#/properties/projectName")

### projectName Type

`string`

### projectName Examples

```json
"A1 Birtley to Coal House Improvement Scheme"
```

## projectNameWelsh

Name of project in Welsh

`projectNameWelsh`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectnamewelsh.md "nsip-project.schema.json#/properties/projectNameWelsh")

### projectNameWelsh Type

`string`

## projectDescription



`projectDescription`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectdescription.md "nsip-project.schema.json#/properties/projectDescription")

### projectDescription Type

`string`

### projectDescription Examples

```json
"The scheme is 6.5 km in length and will consist of online widening of the A1 south of Gateshead to four lanes between junction 65"
```

## projectDescriptionWelsh



`projectDescriptionWelsh`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectdescriptionwelsh.md "nsip-project.schema.json#/properties/projectDescriptionWelsh")

### projectDescriptionWelsh Type

`string`

## decision

Decision outcome: approved/refused/split-decision/granted/partially\_consented/quashed/redetermination/withdrawn

`decision`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-decision.md "nsip-project.schema.json#/properties/decision")

### decision Type

`string`

### decision Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"approved"`            |             |
| `"refused"`             |             |
| `"split-decision"`      |             |
| `"granted"`             |             |
| `"partially_consented"` |             |
| `"quashed"`             |             |
| `"redetermination"`     |             |
| `"withdrawn"`           |             |
| `null`                  |             |

## publishStatus



`publishStatus`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-publishstatus.md "nsip-project.schema.json#/properties/publishStatus")

### publishStatus Type

`string`

### publishStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"published"`   |             |
| `"unpublished"` |             |
| `null`          |             |

## sector

{Sector Abbreviation} - {Sector Display Name}

`sector`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-sector.md "nsip-project.schema.json#/properties/sector")

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
| `null`                           |             |

## projectType

{SubSector Abbreviation} - {SubSector Display Name}

`projectType`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projecttype.md "nsip-project.schema.json#/properties/projectType")

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
| `null`                                                       |             |

## sourceSystem



`sourceSystem`

* is required

* Type: `string`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-sourcesystem.md "nsip-project.schema.json#/properties/sourceSystem")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-stage.md "nsip-project.schema.json#/properties/stage")

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
| `null`              |             |

## projectLocation

Description of site location

`projectLocation`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectlocation.md "nsip-project.schema.json#/properties/projectLocation")

### projectLocation Type

`string`

### projectLocation Examples

```json
"The scheme is located on the A1 Newcastle Gateshead Western Bypass, between junctions 65 and 67."
```

## projectLocationWelsh

Description of site location in Welsh

`projectLocationWelsh`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectlocationwelsh.md "nsip-project.schema.json#/properties/projectLocationWelsh")

### projectLocationWelsh Type

`string`

## projectEmailAddress

PINS Project email address pubished on website

`projectEmailAddress`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-projectemailaddress.md "nsip-project.schema.json#/properties/projectEmailAddress")

### projectEmailAddress Type

`string`

### projectEmailAddress Examples

```json
"NIEnquiries@planninginspectorate.gsi.gov.uk"
```

## regions



`regions`

* is required

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-regions.md "nsip-project.schema.json#/properties/regions")

### regions Type

`string[]`

## transboundary

Drives addition of Transboundary tab on website. \[TODO]

`transboundary`

* is required

* Type: `boolean`

* can be null

* defined in: [NSIP Project](nsip-project-properties-transboundary.md "nsip-project.schema.json#/properties/transboundary")

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

* is required

* Type: `integer`

* can be null

* defined in: [NSIP Project](nsip-project-properties-easting.md "nsip-project.schema.json#/properties/easting")

### easting Type

`integer`

### easting Examples

```json
345678
```

## northing

Project site Northing co-ordinate.

`northing`

* is required

* Type: `integer`

* can be null

* defined in: [NSIP Project](nsip-project-properties-northing.md "nsip-project.schema.json#/properties/northing")

### northing Type

`integer`

### northing Examples

```json
345678
```

## welshLanguage

Welsh Language translation required.

`welshLanguage`

* is required

* Type: `boolean`

* can be null

* defined in: [NSIP Project](nsip-project-properties-welshlanguage.md "nsip-project.schema.json#/properties/welshLanguage")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-mapzoomlevel.md "nsip-project.schema.json#/properties/mapZoomLevel")

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
| `null`       |             |

## secretaryOfState

Relevant Government Department. \[TODO]

`secretaryOfState`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-secretaryofstate.md "nsip-project.schema.json#/properties/secretaryOfState")

### secretaryOfState Type

`string`

## \_preApplicationDates



`_preApplicationDates`

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_preapplicationdates.md "nsip-project.schema.json#/properties/_preApplicationDates")

### \_preApplicationDates Type

unknown

## datePINSFirstNotifiedOfProject

Date at which applicant notify PINS of a project (pre-publishing)

`datePINSFirstNotifiedOfProject`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-datepinsfirstnotifiedofproject.md "nsip-project.schema.json#/properties/datePINSFirstNotifiedOfProject")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateprojectappearsonwebsite.md "nsip-project.schema.json#/properties/dateProjectAppearsOnWebsite")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-anticipatedsubmissiondatenonspecific.md "nsip-project.schema.json#/properties/anticipatedSubmissionDateNonSpecific")

### anticipatedSubmissionDateNonSpecific Type

`string`

### anticipatedSubmissionDateNonSpecific Examples

```json
"Q3 2023"
```

## anticipatedDateOfSubmission

Anticipated Submission Date Of Application

`anticipatedDateOfSubmission`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-anticipateddateofsubmission.md "nsip-project.schema.json#/properties/anticipatedDateOfSubmission")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-screeningopinionsought.md "nsip-project.schema.json#/properties/screeningOpinionSought")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-screeningopinionissued.md "nsip-project.schema.json#/properties/screeningOpinionIssued")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-scopingopinionsought.md "nsip-project.schema.json#/properties/scopingOpinionSought")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-scopingopinionissued.md "nsip-project.schema.json#/properties/scopingOpinionIssued")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-section46notification.md "nsip-project.schema.json#/properties/section46Notification")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_acceptancedates.md "nsip-project.schema.json#/properties/_acceptanceDates")

### \_acceptanceDates Type

unknown

## dateOfDCOSubmission

Date Applcation is submitted

`dateOfDCOSubmission`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofdcosubmission.md "nsip-project.schema.json#/properties/dateOfDCOSubmission")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-deadlineforacceptancedecision.md "nsip-project.schema.json#/properties/deadlineForAcceptanceDecision")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofdcoacceptance.md "nsip-project.schema.json#/properties/dateOfDCOAcceptance")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofnonacceptance.md "nsip-project.schema.json#/properties/dateOfNonAcceptance")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_preexaminationdates.md "nsip-project.schema.json#/properties/_preExaminationDates")

### \_preExaminationDates Type

unknown

## dateOfRepresentationPeriodOpen

Date at which point publish can submit relevant reps

`dateOfRepresentationPeriodOpen`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofrepresentationperiodopen.md "nsip-project.schema.json#/properties/dateOfRepresentationPeriodOpen")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofrelevantrepresentationclose.md "nsip-project.schema.json#/properties/dateOfRelevantRepresentationClose")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-extensiontodaterelevantrepresentationsclose.md "nsip-project.schema.json#/properties/extensionToDateRelevantRepresentationsClose")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-daterrepappearonwebsite.md "nsip-project.schema.json#/properties/dateRRepAppearOnWebsite")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateiapidue.md "nsip-project.schema.json#/properties/dateIAPIDue")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-rule6letterpublishdate.md "nsip-project.schema.json#/properties/rule6LetterPublishDate")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-preliminarymeetingstartdate.md "nsip-project.schema.json#/properties/preliminaryMeetingStartDate")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-notificationdateforpmandeventsdirectlyfollowingpm.md "nsip-project.schema.json#/properties/notificationDateForPMAndEventsDirectlyFollowingPM")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-notificationdateforeventsdeveloper.md "nsip-project.schema.json#/properties/notificationDateForEventsDeveloper")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_examinationdates.md "nsip-project.schema.json#/properties/_examinationDates")

### \_examinationDates Type

unknown

## dateSection58NoticeReceived

Applicant has notified all parties of application

`dateSection58NoticeReceived`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-datesection58noticereceived.md "nsip-project.schema.json#/properties/dateSection58NoticeReceived")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-confirmedstartofexamination.md "nsip-project.schema.json#/properties/confirmedStartOfExamination")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-rule8letterpublishdate.md "nsip-project.schema.json#/properties/rule8LetterPublishDate")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-deadlineforcloseofexamination.md "nsip-project.schema.json#/properties/deadlineForCloseOfExamination")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-datetimeexaminationends.md "nsip-project.schema.json#/properties/dateTimeExaminationEnds")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-stage4extensiontoexamclosedate.md "nsip-project.schema.json#/properties/stage4ExtensionToExamCloseDate")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_recommendationdates.md "nsip-project.schema.json#/properties/_recommendationDates")

### \_recommendationDates Type

unknown

## deadlineForSubmissionOfRecommendation

DeadlineForSubmissionOfRecommendation

`deadlineForSubmissionOfRecommendation`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-deadlineforsubmissionofrecommendation.md "nsip-project.schema.json#/properties/deadlineForSubmissionOfRecommendation")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofrecommendations.md "nsip-project.schema.json#/properties/dateOfRecommendations")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-stage5extensiontorecommendationdeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToRecommendationDeadline")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_decisiondates.md "nsip-project.schema.json#/properties/_decisionDates")

### \_decisionDates Type

unknown

## deadlineForDecision

DeadlineForDecision

`deadlineForDecision`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-deadlinefordecision.md "nsip-project.schema.json#/properties/deadlineForDecision")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-confirmeddateofdecision.md "nsip-project.schema.json#/properties/confirmedDateOfDecision")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-stage5extensiontodecisiondeadline.md "nsip-project.schema.json#/properties/stage5ExtensionToDecisionDeadline")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_postdecisiondates.md "nsip-project.schema.json#/properties/_postDecisionDates")

### \_postDecisionDates Type

unknown

## jRPeriodEndDate

Judicial Review

`jRPeriodEndDate`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-jrperiodenddate.md "nsip-project.schema.json#/properties/jRPeriodEndDate")

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

* is optional

* Type: unknown

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-_withdrawaldates.md "nsip-project.schema.json#/properties/_withdrawalDates")

### \_withdrawalDates Type

unknown

## dateProjectWithdrawn

DateProjectWithdrawn by applicant

`dateProjectWithdrawn`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateprojectwithdrawn.md "nsip-project.schema.json#/properties/dateProjectWithdrawn")

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

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-operationsleadid.md "nsip-project.schema.json#/properties/operationsLeadId")

### operationsLeadId Type

`string`

## operationsManagerId

New NSIP role, Maps to \[Employee].\[EmployeeID]

`operationsManagerId`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-operationsmanagerid.md "nsip-project.schema.json#/properties/operationsManagerId")

### operationsManagerId Type

`string`

## caseManagerId

Maps to \[Employee].\[EmployeeID]

`caseManagerId`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-casemanagerid.md "nsip-project.schema.json#/properties/caseManagerId")

### caseManagerId Type

`string`

## nsipOfficerIds



`nsipOfficerIds`

* is required

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-nsipofficerids.md "nsip-project.schema.json#/properties/nsipOfficerIds")

### nsipOfficerIds Type

`string[]`

## nsipAdministrationOfficerIds



`nsipAdministrationOfficerIds`

* is required

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-nsipadministrationofficerids.md "nsip-project.schema.json#/properties/nsipAdministrationOfficerIds")

### nsipAdministrationOfficerIds Type

`string[]`

## leadInspectorId

Maps to \[Employee].\[EmployeeID]

`leadInspectorId`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-leadinspectorid.md "nsip-project.schema.json#/properties/leadInspectorId")

### leadInspectorId Type

`string`

## inspectorIds



`inspectorIds`

* is required

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-inspectorids.md "nsip-project.schema.json#/properties/inspectorIds")

### inspectorIds Type

`string[]`

## environmentalServicesOfficerId

Maps to \[Employee].\[EmployeeID]

`environmentalServicesOfficerId`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-environmentalservicesofficerid.md "nsip-project.schema.json#/properties/environmentalServicesOfficerId")

### environmentalServicesOfficerId Type

`string`

## legalOfficerId

Maps to \[Employee].\[EmployeeID]

`legalOfficerId`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-legalofficerid.md "nsip-project.schema.json#/properties/legalOfficerId")

### legalOfficerId Type

`string`

## applicantId

Maps to \[ServiceUser].\[id] where the serviceUserType is Applicant

`applicantId`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-applicantid.md "nsip-project.schema.json#/properties/applicantId")

### applicantId Type

`string`

## migrationStatus

Has this case been migrated from the legacy system? True if so.

`migrationStatus`

* is required

* Type: `boolean`

* can be null

* defined in: [NSIP Project](nsip-project-properties-migrationstatus.md "nsip-project.schema.json#/properties/migrationStatus")

### migrationStatus Type

`boolean`

## dateOfReOpenRelevantRepresentationStart

Date at which relevant reps can be reopened

`dateOfReOpenRelevantRepresentationStart`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofreopenrelevantrepresentationstart.md "nsip-project.schema.json#/properties/dateOfReOpenRelevantRepresentationStart")

### dateOfReOpenRelevantRepresentationStart Type

`string`

### dateOfReOpenRelevantRepresentationStart Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfReOpenRelevantRepresentationStart Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateOfReOpenRelevantRepresentationClose

Date at which relevant reps can no longer be reopened

`dateOfReOpenRelevantRepresentationClose`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-dateofreopenrelevantrepresentationclose.md "nsip-project.schema.json#/properties/dateOfReOpenRelevantRepresentationClose")

### dateOfReOpenRelevantRepresentationClose Type

`string`

### dateOfReOpenRelevantRepresentationClose Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateOfReOpenRelevantRepresentationClose Examples

```json
"2023-07-27T20:30:00.000Z"
```

## isMaterialChange

Is this an application for a material change?

`isMaterialChange`

* is optional

* Type: `boolean`

* can be null

* defined in: [NSIP Project](nsip-project-properties-ismaterialchange.md "nsip-project.schema.json#/properties/isMaterialChange")

### isMaterialChange Type

`boolean`

### isMaterialChange Examples

```json
true
```

```json
false
```

## courtDecisionDate

Date of court decision

`courtDecisionDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-courtdecisiondate.md "nsip-project.schema.json#/properties/courtDecisionDate")

### courtDecisionDate Type

`string`

### courtDecisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### courtDecisionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## courtDecisionOutcomeText

Court decision outcome text; values include 'upheld','partially\_upheld','quashed','other:<Text>'

`courtDecisionOutcomeText`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-courtdecisionoutcometext.md "nsip-project.schema.json#/properties/courtDecisionOutcomeText")

### courtDecisionOutcomeText Type

`string`

### courtDecisionOutcomeText Examples

```json
"upheld"
```

## decisionChallengeSubmissionDate

Date of decision challenge submission

`decisionChallengeSubmissionDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-decisionchallengesubmissiondate.md "nsip-project.schema.json#/properties/decisionChallengeSubmissionDate")

### decisionChallengeSubmissionDate Type

`string`

### decisionChallengeSubmissionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### decisionChallengeSubmissionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## recommendation

Recommendation

`recommendation`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-recommendation.md "nsip-project.schema.json#/properties/recommendation")

### recommendation Type

`string`

### recommendation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"recommend_consent"`         |             |
| `"recommend_partial_consent"` |             |
| `"recommend_refusal"`         |             |
| `null`                        |             |

### recommendation Examples

```json
"recommend_consent"
```

## inceptionMeetingDate

Date of inception meeting

`inceptionMeetingDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-inceptionmeetingdate.md "nsip-project.schema.json#/properties/inceptionMeetingDate")

### inceptionMeetingDate Type

`string`

### inceptionMeetingDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### inceptionMeetingDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## draftDocumentSubmissionDate

Date for submission of draft documents

`draftDocumentSubmissionDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-draftdocumentsubmissiondate.md "nsip-project.schema.json#/properties/draftDocumentSubmissionDate")

### draftDocumentSubmissionDate Type

`string`

### draftDocumentSubmissionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### draftDocumentSubmissionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## programmeDocumentSubmissionDate

Programme document submission date

`programmeDocumentSubmissionDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-programmedocumentsubmissiondate.md "nsip-project.schema.json#/properties/programmeDocumentSubmissionDate")

### programmeDocumentSubmissionDate Type

`string`

### programmeDocumentSubmissionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### programmeDocumentSubmissionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## tier

Tier

`tier`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-tier.md "nsip-project.schema.json#/properties/tier")

### tier Type

`string`

### tier Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"basic"`    |             |
| `"standard"` |             |
| `"enhanced"` |             |
| `null`       |             |

### tier Examples

```json
"basic"
```

## s61SummaryURI

Link to s61 summary

`s61SummaryURI`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-s61summaryuri.md "nsip-project.schema.json#/properties/s61SummaryURI")

### s61SummaryURI Type

`string`

### s61SummaryURI Examples

```json
"s61.sharepoint.com/"
```

## estimatedScopingSubmissionDate

Estimated scoping submission date

`estimatedScopingSubmissionDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-estimatedscopingsubmissiondate.md "nsip-project.schema.json#/properties/estimatedScopingSubmissionDate")

### estimatedScopingSubmissionDate Type

`string`

### estimatedScopingSubmissionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### estimatedScopingSubmissionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## consultationMilestoneAdequacyDate

Adequacy of Consultation Milestone

`consultationMilestoneAdequacyDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-consultationmilestoneadequacydate.md "nsip-project.schema.json#/properties/consultationMilestoneAdequacyDate")

### consultationMilestoneAdequacyDate Type

`string`

### consultationMilestoneAdequacyDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### consultationMilestoneAdequacyDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## planProcessEvidence

Evidence plan process

`planProcessEvidence`

* is optional

* Type: `boolean`

* can be null

* defined in: [NSIP Project](nsip-project-properties-planprocessevidence.md "nsip-project.schema.json#/properties/planProcessEvidence")

### planProcessEvidence Type

`boolean`

### planProcessEvidence Examples

```json
true
```

## issuesTracker

Issues tracker

`issuesTracker`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-issuestracker.md "nsip-project.schema.json#/properties/issuesTracker")

### issuesTracker Type

`string`

### issuesTracker Examples

```json
"tracker.sharepoint.com/"
```

## essentialFastTrackComponents

Essential fast track components

`essentialFastTrackComponents`

* is optional

* Type: `boolean`

* can be null

* defined in: [NSIP Project](nsip-project-properties-essentialfasttrackcomponents.md "nsip-project.schema.json#/properties/essentialFastTrackComponents")

### essentialFastTrackComponents Type

`boolean`

### essentialFastTrackComponents Examples

```json
true
```

## principalAreaDisagreementSummaryStmt

Principal area disagreement summary statement (PADSS)

`principalAreaDisagreementSummaryStmt`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-principalareadisagreementsummarystmt.md "nsip-project.schema.json#/properties/principalAreaDisagreementSummaryStmt")

### principalAreaDisagreementSummaryStmt Type

`string`

### principalAreaDisagreementSummaryStmt Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### principalAreaDisagreementSummaryStmt Examples

```json
"submitted_by_applicant"
```

## principalAreaDisagreementSummaryStmtSubmittedDate

Principal area disagreement summary statement (PADSS) Submitted date

`principalAreaDisagreementSummaryStmtSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-principalareadisagreementsummarystmtsubmitteddate.md "nsip-project.schema.json#/properties/principalAreaDisagreementSummaryStmtSubmittedDate")

### principalAreaDisagreementSummaryStmtSubmittedDate Type

`string`

### principalAreaDisagreementSummaryStmtSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### principalAreaDisagreementSummaryStmtSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## policyComplianceDocument

Policy compliance document (PCD)

`policyComplianceDocument`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-policycompliancedocument.md "nsip-project.schema.json#/properties/policyComplianceDocument")

### policyComplianceDocument Type

`string`

### policyComplianceDocument Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### policyComplianceDocument Examples

```json
"submitted_by_applicant"
```

## policyComplianceDocumentSubmittedDate

Policy compliance document (PCD) Submitted Date

`policyComplianceDocumentSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-policycompliancedocumentsubmitteddate.md "nsip-project.schema.json#/properties/policyComplianceDocumentSubmittedDate")

### policyComplianceDocumentSubmittedDate Type

`string`

### policyComplianceDocumentSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### policyComplianceDocumentSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## designApproachDocument

Design approach document (DAD)

`designApproachDocument`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-designapproachdocument.md "nsip-project.schema.json#/properties/designApproachDocument")

### designApproachDocument Type

`string`

### designApproachDocument Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### designApproachDocument Examples

```json
"submitted_by_applicant"
```

## designApproachDocumentSubmittedDate

Design approach document (DAD) Submitted Date

`designApproachDocumentSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-designapproachdocumentsubmitteddate.md "nsip-project.schema.json#/properties/designApproachDocumentSubmittedDate")

### designApproachDocumentSubmittedDate Type

`string`

### designApproachDocumentSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### designApproachDocumentSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## matureOutlineControlDocument

Mature outline control documents

`matureOutlineControlDocument`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-matureoutlinecontroldocument.md "nsip-project.schema.json#/properties/matureOutlineControlDocument")

### matureOutlineControlDocument Type

`string`

### matureOutlineControlDocument Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### matureOutlineControlDocument Examples

```json
"submitted_by_applicant"
```

## matureOutlineControlDocumentSubmittedDate

Mature outline control documents Submitted Date

`matureOutlineControlDocumentSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-matureoutlinecontroldocumentsubmitteddate.md "nsip-project.schema.json#/properties/matureOutlineControlDocumentSubmittedDate")

### matureOutlineControlDocumentSubmittedDate Type

`string`

### matureOutlineControlDocumentSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### matureOutlineControlDocumentSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caAndTpEvidence

CA and TP evidence

`caAndTpEvidence`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-caandtpevidence.md "nsip-project.schema.json#/properties/caAndTpEvidence")

### caAndTpEvidence Type

`string`

### caAndTpEvidence Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### caAndTpEvidence Examples

```json
"submitted_by_applicant"
```

## caAndTpEvidenceSubmittedDate

CA and TP evidence Submitted Date

`caAndTpEvidenceSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-caandtpevidencesubmitteddate.md "nsip-project.schema.json#/properties/caAndTpEvidenceSubmittedDate")

### caAndTpEvidenceSubmittedDate Type

`string`

### caAndTpEvidenceSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caAndTpEvidenceSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## publicSectorEqualityDuty

Public sector equality duty (PSED)

`publicSectorEqualityDuty`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-publicsectorequalityduty.md "nsip-project.schema.json#/properties/publicSectorEqualityDuty")

### publicSectorEqualityDuty Type

`string`

### publicSectorEqualityDuty Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### publicSectorEqualityDuty Examples

```json
"submitted_by_applicant"
```

## publicSectorEqualityDutySubmittedDate

Public sector equality duty (PSED) Submitted Date

`publicSectorEqualityDutySubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-publicsectorequalitydutysubmitteddate.md "nsip-project.schema.json#/properties/publicSectorEqualityDutySubmittedDate")

### publicSectorEqualityDutySubmittedDate Type

`string`

### publicSectorEqualityDutySubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### publicSectorEqualityDutySubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## fastTrackAdmissionDocument

Fast track admission document

`fastTrackAdmissionDocument`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-fasttrackadmissiondocument.md "nsip-project.schema.json#/properties/fastTrackAdmissionDocument")

### fastTrackAdmissionDocument Type

`string`

### fastTrackAdmissionDocument Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### fastTrackAdmissionDocument Examples

```json
"submitted_by_applicant"
```

## fastTrackAdmissionDocumentSubmittedDate

Fast track admission document Submitted Date

`fastTrackAdmissionDocumentSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-fasttrackadmissiondocumentsubmitteddate.md "nsip-project.schema.json#/properties/fastTrackAdmissionDocumentSubmittedDate")

### fastTrackAdmissionDocumentSubmittedDate Type

`string`

### fastTrackAdmissionDocumentSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### fastTrackAdmissionDocumentSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## multipartyApplicationCheckDocument

Multiparty application readiness gate-check (trial)

`multipartyApplicationCheckDocument`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-multipartyapplicationcheckdocument.md "nsip-project.schema.json#/properties/multipartyApplicationCheckDocument")

### multipartyApplicationCheckDocument Type

`string`

### multipartyApplicationCheckDocument Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"submitted_by_applicant"` |             |
| `"awaiting_submission"`    |             |
| `"not_applicable"`         |             |
| `null`                     |             |

### multipartyApplicationCheckDocument Examples

```json
"submitted_by_applicant"
```

## multipartyApplicationCheckDocumentSubmittedDate

Multiparty application readiness gate-check Submitted Date (trial)

`multipartyApplicationCheckDocumentSubmittedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-multipartyapplicationcheckdocumentsubmitteddate.md "nsip-project.schema.json#/properties/multipartyApplicationCheckDocumentSubmittedDate")

### multipartyApplicationCheckDocumentSubmittedDate Type

`string`

### multipartyApplicationCheckDocumentSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### multipartyApplicationCheckDocumentSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## programmeDocumentURI

Link to programme document

`programmeDocumentURI`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-programmedocumenturi.md "nsip-project.schema.json#/properties/programmeDocumentURI")

### programmeDocumentURI Type

`string`

### programmeDocumentURI Examples

```json
"progdoc.sharepoint.com/"
```

## updatedProgrammeDocumentReceivedDate

Date updated programme document is received

`updatedProgrammeDocumentReceivedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-updatedprogrammedocumentreceiveddate.md "nsip-project.schema.json#/properties/updatedProgrammeDocumentReceivedDate")

### updatedProgrammeDocumentReceivedDate Type

`string`

### updatedProgrammeDocumentReceivedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### updatedProgrammeDocumentReceivedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## programmeDocumentReviewedByEstDate

Date programme document reviewed by EST

`programmeDocumentReviewedByEstDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-programmedocumentreviewedbyestdate.md "nsip-project.schema.json#/properties/programmeDocumentReviewedByEstDate")

### programmeDocumentReviewedByEstDate Type

`string`

### programmeDocumentReviewedByEstDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### programmeDocumentReviewedByEstDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## caseTeamIssuedCommentsDate

Date case team issued comments on programme document

`caseTeamIssuedCommentsDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-caseteamissuedcommentsdate.md "nsip-project.schema.json#/properties/caseTeamIssuedCommentsDate")

### caseTeamIssuedCommentsDate Type

`string`

### caseTeamIssuedCommentsDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### caseTeamIssuedCommentsDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## subProjectType

Project type

`subProjectType`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-subprojecttype.md "nsip-project.schema.json#/properties/subProjectType")

### subProjectType Type

`string`

### subProjectType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"energy_from_waste"`      |             |
| `"gas_power_station"`      |             |
| `"hydrogen_power_station"` |             |
| `"nuclear"`                |             |
| `"offshore_wind"`          |             |
| `"onshore_wind"`           |             |
| `"solar"`                  |             |
| `null`                     |             |

### subProjectType Examples

```json
"solar"
```

## newMaturity

New maturity

`newMaturity`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-newmaturity.md "nsip-project.schema.json#/properties/newMaturity")

### newMaturity Type

`string`

### newMaturity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"a"`  |             |
| `"b"`  |             |
| `"c"`  |             |
| `"d"`  |             |
| `"e"`  |             |
| `"f"`  |             |
| `"g"`  |             |
| `null` |             |

### newMaturity Examples

```json
"a"
```

## statutoryConsultationPeriodEndDate

Statutory consultation period end date

`statutoryConsultationPeriodEndDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-statutoryconsultationperiodenddate.md "nsip-project.schema.json#/properties/statutoryConsultationPeriodEndDate")

### statutoryConsultationPeriodEndDate Type

`string`

### statutoryConsultationPeriodEndDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### statutoryConsultationPeriodEndDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## submissionOfDraftDocumentsDate

Date for submission of draft documents

`submissionOfDraftDocumentsDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-submissionofdraftdocumentsdate.md "nsip-project.schema.json#/properties/submissionOfDraftDocumentsDate")

### submissionOfDraftDocumentsDate Type

`string`

### submissionOfDraftDocumentsDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### submissionOfDraftDocumentsDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## numberBand2Inspectors

Number of band 2 inspectors

`numberBand2Inspectors`

* is optional

* Type: `number`

* can be null

* defined in: [NSIP Project](nsip-project-properties-numberband2inspectors.md "nsip-project.schema.json#/properties/numberBand2Inspectors")

### numberBand2Inspectors Type

`number`

### numberBand2Inspectors Examples

```json
1
```

## numberBand3Inspectors

Number of band 3 inspectors

`numberBand3Inspectors`

* is optional

* Type: `number`

* can be null

* defined in: [NSIP Project](nsip-project-properties-numberband3inspectors.md "nsip-project.schema.json#/properties/numberBand3Inspectors")

### numberBand3Inspectors Type

`number`

### numberBand3Inspectors Examples

```json
2
```

## memLastUpdated

MEM (last updated)

`memLastUpdated`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-memlastupdated.md "nsip-project.schema.json#/properties/memLastUpdated")

### memLastUpdated Type

`string`

### memLastUpdated Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### memLastUpdated Examples

```json
"2023-07-27T20:30:00.000Z"
```

## additionalComments

Additional comments

`additionalComments`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-properties-additionalcomments.md "nsip-project.schema.json#/properties/additionalComments")

### additionalComments Type

`string`

### additionalComments Examples

```json
"Very likely to change tier from standard to basic after April 2025"
```

## operationsLeadIds

Maps to \[Employee].\[EmployeeID].

`operationsLeadIds`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-operationsleadids.md "nsip-project.schema.json#/properties/operationsLeadIds")

### operationsLeadIds Type

`string[]`

### operationsLeadIds Examples

```json
[
  "9bee96d2-00fe-4269-9d01-8c66",
  "9bee96d2-00fe-4269-9d01-8c22"
]
```

## operationsManagerIds

New NSIP role, Maps to \[Employee].\[EmployeeID]

`operationsManagerIds`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-operationsmanagerids.md "nsip-project.schema.json#/properties/operationsManagerIds")

### operationsManagerIds Type

`string[]`

### operationsManagerIds Examples

```json
[
  "9bee96d2-00fe-4269-9d01-8c66",
  "9bee96d2-00fe-4269-9d01-8c22"
]
```

## caseManagerIds

Maps to \[Employee].\[EmployeeID].

`caseManagerIds`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-casemanagerids.md "nsip-project.schema.json#/properties/caseManagerIds")

### caseManagerIds Type

`string[]`

### caseManagerIds Examples

```json
[
  "9bee96d2-00fe-4269-9d01-8c66",
  "9bee96d2-00fe-4269-9d01-8c22"
]
```

## leadInspectorIds

Maps to \[Employee].\[EmployeeID].

`leadInspectorIds`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-leadinspectorids.md "nsip-project.schema.json#/properties/leadInspectorIds")

### leadInspectorIds Type

`string[]`

### leadInspectorIds Examples

```json
[
  "9bee96d2-00fe-4269-9d01-8c66",
  "9bee96d2-00fe-4269-9d01-8c22"
]
```

## environmentalServicesOfficerIds

Maps to \[Employee].\[EmployeeID].

`environmentalServicesOfficerIds`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-environmentalservicesofficerids.md "nsip-project.schema.json#/properties/environmentalServicesOfficerIds")

### environmentalServicesOfficerIds Type

`string[]`

### environmentalServicesOfficerIds Examples

```json
[
  "9bee96d2-00fe-4269-9d01-8c66",
  "9bee96d2-00fe-4269-9d01-8c22"
]
```

## legalOfficerIds

Maps to \[Employee].\[EmployeeID].

`legalOfficerIds`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-legalofficerids.md "nsip-project.schema.json#/properties/legalOfficerIds")

### legalOfficerIds Type

`string[]`

### legalOfficerIds Examples

```json
[
  "9bee96d2-00fe-4269-9d01-8c66",
  "9bee96d2-00fe-4269-9d01-8c22"
]
```

## meetings

Collection of meetings associated with this project

`meetings`

* is optional

* Type: `object[]` ([Details](nsip-project-defs-meeting.md))

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-meetings.md "nsip-project.schema.json#/properties/meetings")

### meetings Type

`object[]` ([Details](nsip-project-defs-meeting.md))

## invoices

Collection of invoices associated with this project

`invoices`

* is optional

* Type: `object[]` ([Details](nsip-project-defs-invoice.md))

* cannot be null

* defined in: [NSIP Project](nsip-project-properties-invoices.md "nsip-project.schema.json#/properties/invoices")

### invoices Type

`object[]` ([Details](nsip-project-defs-invoice.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# NSIP Project Definitions

## Definitions group meeting

Reference this group by using

```json
{"$ref":"nsip-project.schema.json#/$defs/meeting"}
```

| Property                                              | Type     | Required | Nullable    | Defined by                                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [meetingAgenda](#meetingagenda)                       | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-meetingagenda.md "nsip-project.schema.json#/$defs/meeting/properties/meetingAgenda")                       |
| [planningInspectorateRole](#planninginspectoraterole) | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-planninginspectoraterole.md "nsip-project.schema.json#/$defs/meeting/properties/planningInspectorateRole") |
| [meetingDate](#meetingdate)                           | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-meetingdate.md "nsip-project.schema.json#/$defs/meeting/properties/meetingDate")                           |
| [meetingType](#meetingtype)                           | `string` | Optional | can be null | [NSIP Project](nsip-project-defs-meeting-properties-meetingtype.md "nsip-project.schema.json#/$defs/meeting/properties/meetingType")                           |
| Additional Properties                                 | Any      | Optional | can be null |                                                                                                                                                                |

### meetingAgenda

Meeting agenda

`meetingAgenda`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-meetingagenda.md "nsip-project.schema.json#/$defs/meeting/properties/meetingAgenda")

#### meetingAgenda Type

`string`

#### meetingAgenda Examples

```json
"Flood Risk Assessment (FRA)"
```

### planningInspectorateRole

Planning Inspectorate role

`planningInspectorateRole`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-planninginspectoraterole.md "nsip-project.schema.json#/$defs/meeting/properties/planningInspectorateRole")

#### planningInspectorateRole Type

`string`

#### planningInspectorateRole Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"facilitator"` |             |
| `"advisor"`     |             |
| `"observer"`    |             |
| `null`          |             |

#### planningInspectorateRole Examples

```json
"facilitator"
```

### meetingDate

Meeting date

`meetingDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-meetingdate.md "nsip-project.schema.json#/$defs/meeting/properties/meetingDate")

#### meetingDate Type

`string`

#### meetingDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### meetingDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

### meetingType

Type of Meeting

`meetingType`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-meeting-properties-meetingtype.md "nsip-project.schema.json#/$defs/meeting/properties/meetingType")

#### meetingType Type

`string`

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group invoice

Reference this group by using

```json
{"$ref":"nsip-project.schema.json#/$defs/invoice"}
```

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [invoiceStage](#invoicestage)                     | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-invoicestage.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceStage")                     |
| [invoiceNumber](#invoicenumber)                   | `string` | Required | cannot be null | [NSIP Project](nsip-project-defs-invoice-properties-invoicenumber.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceNumber")                   |
| [amountDue](#amountdue)                           | `number` | Required | cannot be null | [NSIP Project](nsip-project-defs-invoice-properties-amountdue.md "nsip-project.schema.json#/$defs/invoice/properties/amountDue")                           |
| [paymentDueDate](#paymentduedate)                 | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-paymentduedate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDueDate")                 |
| [invoicedDate](#invoiceddate)                     | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-invoiceddate.md "nsip-project.schema.json#/$defs/invoice/properties/invoicedDate")                     |
| [paymentDate](#paymentdate)                       | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-paymentdate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDate")                       |
| [refundCreditNoteNumber](#refundcreditnotenumber) | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-refundcreditnotenumber.md "nsip-project.schema.json#/$defs/invoice/properties/refundCreditNoteNumber") |
| [refundAmount](#refundamount)                     | `number` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-refundamount.md "nsip-project.schema.json#/$defs/invoice/properties/refundAmount")                     |
| [refundIssueDate](#refundissuedate)               | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-refundissuedate.md "nsip-project.schema.json#/$defs/invoice/properties/refundIssueDate")               |
| Additional Properties                             | Any      | Optional | can be null    |                                                                                                                                                            |

### invoiceStage

Invoice stage

`invoiceStage`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-invoicestage.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceStage")

#### invoiceStage Type

`string`

#### invoiceStage Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"pre_acceptance"`      |             |
| `"acceptance"`          |             |
| `"pre_examination"`     |             |
| `"initial_examination"` |             |
| `"final_examination"`   |             |
| `null`                  |             |

#### invoiceStage Examples

```json
"pre_acceptance"
```

### invoiceNumber

Invoice number

`invoiceNumber`

* is required

* Type: `string`

* cannot be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-invoicenumber.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceNumber")

#### invoiceNumber Type

`string`

#### invoiceNumber Examples

```json
"1800004419"
```

### amountDue

Amount due

`amountDue`

* is required

* Type: `number`

* cannot be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-amountdue.md "nsip-project.schema.json#/$defs/invoice/properties/amountDue")

#### amountDue Type

`number`

#### amountDue Examples

```json
500
```

### paymentDueDate

Payment due date

`paymentDueDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-paymentduedate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDueDate")

#### paymentDueDate Type

`string`

#### paymentDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### paymentDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

### invoicedDate

Invoiced date

`invoicedDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-invoiceddate.md "nsip-project.schema.json#/$defs/invoice/properties/invoicedDate")

#### invoicedDate Type

`string`

#### invoicedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### invoicedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

### paymentDate

Date of payment

`paymentDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-paymentdate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDate")

#### paymentDate Type

`string`

#### paymentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### paymentDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

### refundCreditNoteNumber

Refund credit note number

`refundCreditNoteNumber`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-refundcreditnotenumber.md "nsip-project.schema.json#/$defs/invoice/properties/refundCreditNoteNumber")

#### refundCreditNoteNumber Type

`string`

#### refundCreditNoteNumber Examples

```json
"1800004419"
```

### refundAmount

Amount refunded

`refundAmount`

* is optional

* Type: `number`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-refundamount.md "nsip-project.schema.json#/$defs/invoice/properties/refundAmount")

#### refundAmount Type

`number`

#### refundAmount Examples

```json
200
```

### refundIssueDate

Refund issue date

`refundIssueDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-refundissuedate.md "nsip-project.schema.json#/$defs/invoice/properties/refundIssueDate")

#### refundIssueDate Type

`string`

#### refundIssueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### refundIssueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema
