## Appeal S78 Case Type

`object` ([Appeal S78 Case](appeal-s78.md))

any of

* [Untitled undefined type in Appeal S78 Case](appeal-s78-anyof-0.md "check type definition")

* [Untitled undefined type in Appeal S78 Case](appeal-s78-anyof-1.md "check type definition")

# Appeal S78 Case Properties

| Property                                                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                             |
| :---------------------------------------------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [caseId](#caseid)                                                                         | `integer` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-caseid.md "appeal-s78.schema.json#/properties/caseId")                                                                         |
| [caseReference](#casereference)                                                           | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-casereference.md "appeal-s78.schema.json#/properties/caseReference")                                                           |
| [submissionId](#submissionid)                                                             | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-submissionid.md "appeal-s78.schema.json#/properties/submissionId")                                                             |
| [caseStatus](#casestatus)                                                                 | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-casestatus.md "appeal-s78.schema.json#/properties/caseStatus")                                                                 |
| [caseType](#casetype)                                                                     | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-casetype.md "appeal-s78.schema.json#/properties/caseType")                                                                     |
| [caseProcedure](#caseprocedure)                                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-caseprocedure.md "appeal-s78.schema.json#/properties/caseProcedure")                                                           |
| [lpaCode](#lpacode)                                                                       | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-lpacode.md "appeal-s78.schema.json#/properties/lpaCode")                                                                       |
| [caseOfficerId](#caseofficerid)                                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-caseofficerid.md "appeal-s78.schema.json#/properties/caseOfficerId")                                                           |
| [inspectorId](#inspectorid)                                                               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-inspectorid.md "appeal-s78.schema.json#/properties/inspectorId")                                                               |
| [allocationLevel](#allocationlevel)                                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-allocationlevel.md "appeal-s78.schema.json#/properties/allocationLevel")                                                       |
| [allocationBand](#allocationband)                                                         | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-allocationband.md "appeal-s78.schema.json#/properties/allocationBand")                                                         |
| [caseSpecialisms](#casespecialisms)                                                       | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casespecialisms.md "appeal-s78.schema.json#/properties/caseSpecialisms")                                                       |
| [caseSubmittedDate](#casesubmitteddate)                                                   | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-casesubmitteddate.md "appeal-s78.schema.json#/properties/caseSubmittedDate")                                                   |
| [caseCreatedDate](#casecreateddate)                                                       | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-casecreateddate.md "appeal-s78.schema.json#/properties/caseCreatedDate")                                                       |
| [caseUpdatedDate](#caseupdateddate)                                                       | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-caseupdateddate.md "appeal-s78.schema.json#/properties/caseUpdatedDate")                                                       |
| [caseValidDate](#casevaliddate)                                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casevaliddate.md "appeal-s78.schema.json#/properties/caseValidDate")                                                           |
| [caseValidationDate](#casevalidationdate)                                                 | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casevalidationdate.md "appeal-s78.schema.json#/properties/caseValidationDate")                                                 |
| [caseValidationOutcome](#casevalidationoutcome)                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casevalidationoutcome.md "appeal-s78.schema.json#/properties/caseValidationOutcome")                                           |
| [caseValidationInvalidDetails](#casevalidationinvaliddetails)                             | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casevalidationinvaliddetails.md "appeal-s78.schema.json#/properties/caseValidationInvalidDetails")                             |
| [caseValidationIncompleteDetails](#casevalidationincompletedetails)                       | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casevalidationincompletedetails.md "appeal-s78.schema.json#/properties/caseValidationIncompleteDetails")                       |
| [caseExtensionDate](#caseextensiondate)                                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-caseextensiondate.md "appeal-s78.schema.json#/properties/caseExtensionDate")                                                   |
| [caseStartedDate](#casestarteddate)                                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casestarteddate.md "appeal-s78.schema.json#/properties/caseStartedDate")                                                       |
| [casePublishedDate](#casepublisheddate)                                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casepublisheddate.md "appeal-s78.schema.json#/properties/casePublishedDate")                                                   |
| [linkedCaseStatus](#linkedcasestatus)                                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-linkedcasestatus.md "appeal-s78.schema.json#/properties/linkedCaseStatus")                                                     |
| [leadCaseReference](#leadcasereference)                                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-leadcasereference.md "appeal-s78.schema.json#/properties/leadCaseReference")                                                   |
| [lpaQuestionnaireDueDate](#lpaquestionnaireduedate)                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnaireduedate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireDueDate")                                       |
| [lpaQuestionnaireSubmittedDate](#lpaquestionnairesubmitteddate)                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnairesubmitteddate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireSubmittedDate")                           |
| [lpaQuestionnaireCreatedDate](#lpaquestionnairecreateddate)                               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnairecreateddate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireCreatedDate")                               |
| [lpaQuestionnairePublishedDate](#lpaquestionnairepublisheddate)                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnairepublisheddate.md "appeal-s78.schema.json#/properties/lpaQuestionnairePublishedDate")                           |
| [lpaQuestionnaireValidationOutcome](#lpaquestionnairevalidationoutcome)                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnairevalidationoutcome.md "appeal-s78.schema.json#/properties/lpaQuestionnaireValidationOutcome")                   |
| [lpaQuestionnaireValidationOutcomeDate](#lpaquestionnairevalidationoutcomedate)           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnairevalidationoutcomedate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireValidationOutcomeDate")           |
| [lpaQuestionnaireValidationDetails](#lpaquestionnairevalidationdetails)                   | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaquestionnairevalidationdetails.md "appeal-s78.schema.json#/properties/lpaQuestionnaireValidationDetails")                   |
| [lpaStatement](#lpastatement)                                                             | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpastatement.md "appeal-s78.schema.json#/properties/lpaStatement")                                                             |
| [caseWithdrawnDate](#casewithdrawndate)                                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casewithdrawndate.md "appeal-s78.schema.json#/properties/caseWithdrawnDate")                                                   |
| [caseTransferredDate](#casetransferreddate)                                               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casetransferreddate.md "appeal-s78.schema.json#/properties/caseTransferredDate")                                               |
| [transferredCaseClosedDate](#transferredcasecloseddate)                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-transferredcasecloseddate.md "appeal-s78.schema.json#/properties/transferredCaseClosedDate")                                   |
| [caseDecisionOutcomeDate](#casedecisionoutcomedate)                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casedecisionoutcomedate.md "appeal-s78.schema.json#/properties/caseDecisionOutcomeDate")                                       |
| [caseDecisionPublishedDate](#casedecisionpublisheddate)                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casedecisionpublisheddate.md "appeal-s78.schema.json#/properties/caseDecisionPublishedDate")                                   |
| [caseDecisionOutcome](#casedecisionoutcome)                                               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casedecisionoutcome.md "appeal-s78.schema.json#/properties/caseDecisionOutcome")                                               |
| [caseCompletedDate](#casecompleteddate)                                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casecompleteddate.md "appeal-s78.schema.json#/properties/caseCompletedDate")                                                   |
| [enforcementNotice](#enforcementnotice)                                                   | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-enforcementnotice.md "appeal-s78.schema.json#/properties/enforcementNotice")                                                   |
| [applicationReference](#applicationreference)                                             | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-applicationreference.md "appeal-s78.schema.json#/properties/applicationReference")                                             |
| [applicationDate](#applicationdate)                                                       | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-applicationdate.md "appeal-s78.schema.json#/properties/applicationDate")                                                       |
| [applicationDecision](#applicationdecision)                                               | `string`  | Required | cannot be null | [Appeal S78 Case](appeal-s78-properties-applicationdecision.md "appeal-s78.schema.json#/properties/applicationDecision")                                               |
| [applicationDecisionDate](#applicationdecisiondate)                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-applicationdecisiondate.md "appeal-s78.schema.json#/properties/applicationDecisionDate")                                       |
| [caseSubmissionDueDate](#casesubmissionduedate)                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-casesubmissionduedate.md "appeal-s78.schema.json#/properties/caseSubmissionDueDate")                                           |
| [siteAddressLine1](#siteaddressline1)                                                     | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-siteaddressline1.md "appeal-s78.schema.json#/properties/siteAddressLine1")                                                     |
| [siteAddressLine2](#siteaddressline2)                                                     | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-siteaddressline2.md "appeal-s78.schema.json#/properties/siteAddressLine2")                                                     |
| [siteAddressTown](#siteaddresstown)                                                       | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-siteaddresstown.md "appeal-s78.schema.json#/properties/siteAddressTown")                                                       |
| [siteAddressCounty](#siteaddresscounty)                                                   | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-siteaddresscounty.md "appeal-s78.schema.json#/properties/siteAddressCounty")                                                   |
| [siteAddressPostcode](#siteaddresspostcode)                                               | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-siteaddresspostcode.md "appeal-s78.schema.json#/properties/siteAddressPostcode")                                               |
| [siteAccessDetails](#siteaccessdetails)                                                   | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-siteaccessdetails.md "appeal-s78.schema.json#/properties/siteAccessDetails")                                                   |
| [siteSafetyDetails](#sitesafetydetails)                                                   | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-sitesafetydetails.md "appeal-s78.schema.json#/properties/siteSafetyDetails")                                                   |
| [siteAreaSquareMetres](#siteareasquaremetres)                                             | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-siteareasquaremetres.md "appeal-s78.schema.json#/properties/siteAreaSquareMetres")                                             |
| [floorSpaceSquareMetres](#floorspacesquaremetres)                                         | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-floorspacesquaremetres.md "appeal-s78.schema.json#/properties/floorSpaceSquareMetres")                                         |
| [isCorrectAppealType](#iscorrectappealtype)                                               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-iscorrectappealtype.md "appeal-s78.schema.json#/properties/isCorrectAppealType")                                               |
| [isGreenBelt](#isgreenbelt)                                                               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-isgreenbelt.md "appeal-s78.schema.json#/properties/isGreenBelt")                                                               |
| [inConservationArea](#inconservationarea)                                                 | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-inconservationarea.md "appeal-s78.schema.json#/properties/inConservationArea")                                                 |
| [ownsAllLand](#ownsallland)                                                               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-ownsallland.md "appeal-s78.schema.json#/properties/ownsAllLand")                                                               |
| [ownsSomeLand](#ownssomeland)                                                             | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-ownssomeland.md "appeal-s78.schema.json#/properties/ownsSomeLand")                                                             |
| [knowsOtherOwners](#knowsotherowners)                                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-knowsotherowners.md "appeal-s78.schema.json#/properties/knowsOtherOwners")                                                     |
| [knowsAllOwners](#knowsallowners)                                                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-knowsallowners.md "appeal-s78.schema.json#/properties/knowsAllOwners")                                                         |
| [advertisedAppeal](#advertisedappeal)                                                     | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-advertisedappeal.md "appeal-s78.schema.json#/properties/advertisedAppeal")                                                     |
| [notificationMethod](#notificationmethod)                                                 | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-notificationmethod.md "appeal-s78.schema.json#/properties/notificationMethod")                                                 |
| [ownersInformed](#ownersinformed)                                                         | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-ownersinformed.md "appeal-s78.schema.json#/properties/ownersInformed")                                                         |
| [originalDevelopmentDescription](#originaldevelopmentdescription)                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-originaldevelopmentdescription.md "appeal-s78.schema.json#/properties/originalDevelopmentDescription")                         |
| [changedDevelopmentDescription](#changeddevelopmentdescription)                           | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-changeddevelopmentdescription.md "appeal-s78.schema.json#/properties/changedDevelopmentDescription")                           |
| [newConditionDetails](#newconditiondetails)                                               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-newconditiondetails.md "appeal-s78.schema.json#/properties/newConditionDetails")                                               |
| [nearbyCaseReferences](#nearbycasereferences)                                             | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-nearbycasereferences.md "appeal-s78.schema.json#/properties/nearbyCaseReferences")                                             |
| [neighbouringSiteAddresses](#neighbouringsiteaddresses)                                   | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-neighbouringsiteaddresses.md "appeal-s78.schema.json#/properties/neighbouringSiteAddresses")                                   |
| [reasonForNeighbourVisits](#reasonforneighbourvisits)                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-reasonforneighbourvisits.md "appeal-s78.schema.json#/properties/reasonForNeighbourVisits")                                     |
| [affectedListedBuildingNumbers](#affectedlistedbuildingnumbers)                           | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-affectedlistedbuildingnumbers.md "appeal-s78.schema.json#/properties/affectedListedBuildingNumbers")                           |
| [changedListedBuildingNumbers](#changedlistedbuildingnumbers)                             | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-changedlistedbuildingnumbers.md "appeal-s78.schema.json#/properties/changedListedBuildingNumbers")                             |
| [preserveGrantLoan](#preservegrantloan)                                                   | `boolean` | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-preservegrantloan.md "appeal-s78.schema.json#/properties/preserveGrantLoan")                                                   |
| [consultHistoricEngland](#consulthistoricengland)                                         | `boolean` | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-consulthistoricengland.md "appeal-s78.schema.json#/properties/consultHistoricEngland")                                         |
| [appellantCostsAppliedFor](#appellantcostsappliedfor)                                     | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantcostsappliedfor.md "appeal-s78.schema.json#/properties/appellantCostsAppliedFor")                                     |
| [lpaCostsAppliedFor](#lpacostsappliedfor)                                                 | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpacostsappliedfor.md "appeal-s78.schema.json#/properties/lpaCostsAppliedFor")                                                 |
| [agriculturalHolding](#agriculturalholding)                                               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-agriculturalholding.md "appeal-s78.schema.json#/properties/agriculturalHolding")                                               |
| [tenantAgriculturalHolding](#tenantagriculturalholding)                                   | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-tenantagriculturalholding.md "appeal-s78.schema.json#/properties/tenantAgriculturalHolding")                                   |
| [otherTenantsAgriculturalHolding](#othertenantsagriculturalholding)                       | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-othertenantsagriculturalholding.md "appeal-s78.schema.json#/properties/otherTenantsAgriculturalHolding")                       |
| [informedTenantsAgriculturalHolding](#informedtenantsagriculturalholding)                 | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-informedtenantsagriculturalholding.md "appeal-s78.schema.json#/properties/informedTenantsAgriculturalHolding")                 |
| [appellantProcedurePreference](#appellantprocedurepreference)                             | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreference.md "appeal-s78.schema.json#/properties/appellantProcedurePreference")                             |
| [appellantProcedurePreferenceDetails](#appellantprocedurepreferencedetails)               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreferencedetails.md "appeal-s78.schema.json#/properties/appellantProcedurePreferenceDetails")               |
| [appellantProcedurePreferenceDuration](#appellantprocedurepreferenceduration)             | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreferenceduration.md "appeal-s78.schema.json#/properties/appellantProcedurePreferenceDuration")             |
| [appellantProcedurePreferenceWitnessCount](#appellantprocedurepreferencewitnesscount)     | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreferencewitnesscount.md "appeal-s78.schema.json#/properties/appellantProcedurePreferenceWitnessCount")     |
| [statusPlanningObligation](#statusplanningobligation)                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-statusplanningobligation.md "appeal-s78.schema.json#/properties/statusPlanningObligation")                                     |
| [affectsScheduledMonument](#affectsscheduledmonument)                                     | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-affectsscheduledmonument.md "appeal-s78.schema.json#/properties/affectsScheduledMonument")                                     |
| [hasProtectedSpecies](#hasprotectedspecies)                                               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-hasprotectedspecies.md "appeal-s78.schema.json#/properties/hasProtectedSpecies")                                               |
| [isAonbNationalLandscape](#isaonbnationallandscape)                                       | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-isaonbnationallandscape.md "appeal-s78.schema.json#/properties/isAonbNationalLandscape")                                       |
| [designatedSitesNames](#designatedsitesnames)                                             | `array`   | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-designatedsitesnames.md "appeal-s78.schema.json#/properties/designatedSitesNames")                                             |
| [isGypsyOrTravellerSite](#isgypsyortravellersite)                                         | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-isgypsyortravellersite.md "appeal-s78.schema.json#/properties/isGypsyOrTravellerSite")                                         |
| [isPublicRightOfWay](#ispublicrightofway)                                                 | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-ispublicrightofway.md "appeal-s78.schema.json#/properties/isPublicRightOfWay")                                                 |
| [eiaEnvironmentalImpactSchedule](#eiaenvironmentalimpactschedule)                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiaenvironmentalimpactschedule.md "appeal-s78.schema.json#/properties/eiaEnvironmentalImpactSchedule")                         |
| [eiaDevelopmentDescription](#eiadevelopmentdescription)                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiadevelopmentdescription.md "appeal-s78.schema.json#/properties/eiaDevelopmentDescription")                                   |
| [eiaSensitiveAreaDetails](#eiasensitiveareadetails)                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiasensitiveareadetails.md "appeal-s78.schema.json#/properties/eiaSensitiveAreaDetails")                                       |
| [eiaColumnTwoThreshold](#eiacolumntwothreshold)                                           | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiacolumntwothreshold.md "appeal-s78.schema.json#/properties/eiaColumnTwoThreshold")                                           |
| [eiaScreeningOpinion](#eiascreeningopinion)                                               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiascreeningopinion.md "appeal-s78.schema.json#/properties/eiaScreeningOpinion")                                               |
| [eiaRequiresEnvironmentalStatement](#eiarequiresenvironmentalstatement)                   | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiarequiresenvironmentalstatement.md "appeal-s78.schema.json#/properties/eiaRequiresEnvironmentalStatement")                   |
| [eiaCompletedEnvironmentalStatement](#eiacompletedenvironmentalstatement)                 | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-eiacompletedenvironmentalstatement.md "appeal-s78.schema.json#/properties/eiaCompletedEnvironmentalStatement")                 |
| [hasStatutoryConsultees](#hasstatutoryconsultees)                                         | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-hasstatutoryconsultees.md "appeal-s78.schema.json#/properties/hasStatutoryConsultees")                                         |
| [consultedBodiesDetails](#consultedbodiesdetails)                                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-consultedbodiesdetails.md "appeal-s78.schema.json#/properties/consultedBodiesDetails")                                         |
| [hasInfrastructureLevy](#hasinfrastructurelevy)                                           | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-hasinfrastructurelevy.md "appeal-s78.schema.json#/properties/hasInfrastructureLevy")                                           |
| [isInfrastructureLevyFormallyAdopted](#isinfrastructurelevyformallyadopted)               | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-isinfrastructurelevyformallyadopted.md "appeal-s78.schema.json#/properties/isInfrastructureLevyFormallyAdopted")               |
| [infrastructureLevyAdoptedDate](#infrastructurelevyadopteddate)                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-infrastructurelevyadopteddate.md "appeal-s78.schema.json#/properties/infrastructureLevyAdoptedDate")                           |
| [infrastructureLevyExpectedDate](#infrastructurelevyexpecteddate)                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-infrastructurelevyexpecteddate.md "appeal-s78.schema.json#/properties/infrastructureLevyExpectedDate")                         |
| [lpaProcedurePreference](#lpaprocedurepreference)                                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaprocedurepreference.md "appeal-s78.schema.json#/properties/lpaProcedurePreference")                                         |
| [lpaProcedurePreferenceDetails](#lpaprocedurepreferencedetails)                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaprocedurepreferencedetails.md "appeal-s78.schema.json#/properties/lpaProcedurePreferenceDetails")                           |
| [lpaProcedurePreferenceDuration](#lpaprocedurepreferenceduration)                         | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaprocedurepreferenceduration.md "appeal-s78.schema.json#/properties/lpaProcedurePreferenceDuration")                         |
| [caseworkReason](#caseworkreason)                                                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-caseworkreason.md "appeal-s78.schema.json#/properties/caseworkReason")                                                         |
| [importantInformation](#importantinformation)                                             | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-importantinformation.md "appeal-s78.schema.json#/properties/importantInformation")                                             |
| [jurisdiction](#jurisdiction)                                                             | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-jurisdiction.md "appeal-s78.schema.json#/properties/jurisdiction")                                                             |
| [redeterminedIndicator](#redeterminedindicator)                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-redeterminedindicator.md "appeal-s78.schema.json#/properties/redeterminedIndicator")                                           |
| [dateCostsReportDespatched](#datecostsreportdespatched)                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-datecostsreportdespatched.md "appeal-s78.schema.json#/properties/dateCostsReportDespatched")                                   |
| [dateNotRecoveredOrDerecovered](#datenotrecoveredorderecovered)                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-datenotrecoveredorderecovered.md "appeal-s78.schema.json#/properties/dateNotRecoveredOrDerecovered")                           |
| [dateRecovered](#daterecovered)                                                           | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-daterecovered.md "appeal-s78.schema.json#/properties/dateRecovered")                                                           |
| [originalCaseDecisionDate](#originalcasedecisiondate)                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-originalcasedecisiondate.md "appeal-s78.schema.json#/properties/originalCaseDecisionDate")                                     |
| [targetDate](#targetdate)                                                                 | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-targetdate.md "appeal-s78.schema.json#/properties/targetDate")                                                                 |
| [appellantCommentsSubmittedDate](#appellantcommentssubmitteddate)                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantcommentssubmitteddate.md "appeal-s78.schema.json#/properties/appellantCommentsSubmittedDate")                         |
| [appellantStatementSubmittedDate](#appellantstatementsubmitteddate)                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantstatementsubmitteddate.md "appeal-s78.schema.json#/properties/appellantStatementSubmittedDate")                       |
| [appellantProofsSubmittedDate](#appellantproofssubmitteddate)                             | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-appellantproofssubmitteddate.md "appeal-s78.schema.json#/properties/appellantProofsSubmittedDate")                             |
| [finalCommentsDueDate](#finalcommentsduedate)                                             | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-finalcommentsduedate.md "appeal-s78.schema.json#/properties/finalCommentsDueDate")                                             |
| [interestedPartyRepsDueDate](#interestedpartyrepsduedate)                                 | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-interestedpartyrepsduedate.md "appeal-s78.schema.json#/properties/interestedPartyRepsDueDate")                                 |
| [lpaCommentsSubmittedDate](#lpacommentssubmitteddate)                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpacommentssubmitteddate.md "appeal-s78.schema.json#/properties/lpaCommentsSubmittedDate")                                     |
| [lpaProofsSubmittedDate](#lpaproofssubmitteddate)                                         | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpaproofssubmitteddate.md "appeal-s78.schema.json#/properties/lpaProofsSubmittedDate")                                         |
| [lpaStatementSubmittedDate](#lpastatementsubmitteddate)                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-lpastatementsubmitteddate.md "appeal-s78.schema.json#/properties/lpaStatementSubmittedDate")                                   |
| [proofsOfEvidenceDueDate](#proofsofevidenceduedate)                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-proofsofevidenceduedate.md "appeal-s78.schema.json#/properties/proofsOfEvidenceDueDate")                                       |
| [siteNoticesSentDate](#sitenoticessentdate)                                               | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-sitenoticessentdate.md "appeal-s78.schema.json#/properties/siteNoticesSentDate")                                               |
| [statementDueDate](#statementduedate)                                                     | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-statementduedate.md "appeal-s78.schema.json#/properties/statementDueDate")                                                     |
| [numberOfResidencesNetChange](#numberofresidencesnetchange)                               | `number`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-numberofresidencesnetchange.md "appeal-s78.schema.json#/properties/numberOfResidencesNetChange")                               |
| [siteGridReferenceEasting](#sitegridreferenceeasting)                                     | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-sitegridreferenceeasting.md "appeal-s78.schema.json#/properties/siteGridReferenceEasting")                                     |
| [siteGridReferenceNorthing](#sitegridreferencenorthing)                                   | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-sitegridreferencenorthing.md "appeal-s78.schema.json#/properties/siteGridReferenceNorthing")                                   |
| [siteViewableFromRoad](#siteviewablefromroad)                                             | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-siteviewablefromroad.md "appeal-s78.schema.json#/properties/siteViewableFromRoad")                                             |
| [siteWithinSSSI](#sitewithinsssi)                                                         | `boolean` | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-sitewithinsssi.md "appeal-s78.schema.json#/properties/siteWithinSSSI")                                                         |
| [typeOfPlanningApplication](#typeofplanningapplication)                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-typeofplanningapplication.md "appeal-s78.schema.json#/properties/typeOfPlanningApplication")                                   |
| [developmentType](#developmenttype)                                                       | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-developmenttype.md "appeal-s78.schema.json#/properties/developmentType")                                                       |
| [statementOfCommonGroundDueDate](#statementofcommongroundduedate)                         | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-statementofcommongroundduedate.md "appeal-s78.schema.json#/properties/statementOfCommonGroundDueDate")                         |
| [planningObligationDueDate](#planningobligationduedate)                                   | `string`  | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-planningobligationduedate.md "appeal-s78.schema.json#/properties/planningObligationDueDate")                                   |
| [hasLandownersPermission](#haslandownerspermission)                                       | `boolean` | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-haslandownerspermission.md "appeal-s78.schema.json#/properties/hasLandownersPermission")                                       |
| [wasApplicationRefusedDueToHighwayOrTraffic](#wasapplicationrefusedduetohighwayortraffic) | `boolean` | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-wasapplicationrefusedduetohighwayortraffic.md "appeal-s78.schema.json#/properties/wasApplicationRefusedDueToHighwayOrTraffic") |
| [didAppellantSubmitCompletePhotosAndPlans](#didappellantsubmitcompletephotosandplans)     | `boolean` | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-didappellantsubmitcompletephotosandplans.md "appeal-s78.schema.json#/properties/didAppellantSubmitCompletePhotosAndPlans")     |
| [isSiteInAreaOfSpecialControlAdverts](#issiteinareaofspecialcontroladverts)               | `boolean` | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-issiteinareaofspecialcontroladverts.md "appeal-s78.schema.json#/properties/isSiteInAreaOfSpecialControlAdverts")               |
| [advertDetails](#advertdetails)                                                           | `array`   | Optional | can be null    | [Appeal S78 Case](appeal-s78-properties-advertdetails.md "appeal-s78.schema.json#/properties/advertDetails")                                                           |
| [padsSapId](#padssapid)                                                                   | `string`  | Required | can be null    | [Appeal S78 Case](appeal-s78-properties-padssapid.md "appeal-s78.schema.json#/properties/padsSapId")                                                                   |
| Additional Properties                                                                     | Any       | Optional | can be null    |                                                                                                                                                                        |

## caseId

Internal case identifier

> Also available on HAS cases

`caseId`

* is required

* Type: `integer`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-caseid.md "appeal-s78.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1200
```

## caseReference

External case identifier

> Also available on HAS cases

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casereference.md "appeal-s78.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"7002471"
```

## submissionId

Case submission id - link to draft submission created by appellant

> Also available on HAS cases

`submissionId`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-submissionid.md "appeal-s78.schema.json#/properties/submissionId")

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

> Also available on HAS cases

`caseStatus`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casestatus.md "appeal-s78.schema.json#/properties/caseStatus")

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
| `"statements"`          |             |
| `"evidence"`            |             |
| `"witnesses"`           |             |
| `"final_comments"`      |             |
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

> Also available on HAS cases

`caseType`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casetype.md "appeal-s78.schema.json#/properties/caseType")

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
| `"ZA"` |             |
| `"ZP"` |             |

## caseProcedure

The type of procedure for the appeal

> Also available on HAS cases

`caseProcedure`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-caseprocedure.md "appeal-s78.schema.json#/properties/caseProcedure")

### caseProcedure Type

`string`

### caseProcedure Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"written"` |             |
| `"hearing"` |             |
| `"inquiry"` |             |
| `null`      |             |

## lpaCode

A unique identifier for the Local Planning Authority

> Also available on HAS cases

`lpaCode`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpacode.md "appeal-s78.schema.json#/properties/lpaCode")

### lpaCode Type

`string`

### lpaCode Examples

```json
"Q9999"
```

## caseOfficerId

Unique identifier for the case officer assigned to the case

> Also available on HAS cases

`caseOfficerId`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-caseofficerid.md "appeal-s78.schema.json#/properties/caseOfficerId")

### caseOfficerId Type

`string`

## inspectorId

Unique identifier for the inspector assigned to the case

> Also available on HAS cases

`inspectorId`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-inspectorid.md "appeal-s78.schema.json#/properties/inspectorId")

### inspectorId Type

`string`

## allocationLevel

A level used for allocation purposes

> Also available on HAS cases

`allocationLevel`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-allocationlevel.md "appeal-s78.schema.json#/properties/allocationLevel")

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

> Also available on HAS cases

`allocationBand`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-allocationband.md "appeal-s78.schema.json#/properties/allocationBand")

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

> Also available on HAS cases

`caseSpecialisms`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casespecialisms.md "appeal-s78.schema.json#/properties/caseSpecialisms")

### caseSpecialisms Type

`string[]`

### caseSpecialisms Examples

```json
[
  "Access",
  "Listed building and enforcement"
]
```

```json
[
  "Schedule 1"
]
```

## caseSubmittedDate

The date the appeal was submitted by the appellant

> Also available on HAS cases

`caseSubmittedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casesubmitteddate.md "appeal-s78.schema.json#/properties/caseSubmittedDate")

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

> Also available on HAS cases

`caseCreatedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casecreateddate.md "appeal-s78.schema.json#/properties/caseCreatedDate")

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

> Also available on HAS cases

`caseUpdatedDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-caseupdateddate.md "appeal-s78.schema.json#/properties/caseUpdatedDate")

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

> Also available on HAS cases

`caseValidDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casevaliddate.md "appeal-s78.schema.json#/properties/caseValidDate")

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

> Also available on HAS cases

`caseValidationDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casevalidationdate.md "appeal-s78.schema.json#/properties/caseValidationDate")

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

> Also available on HAS cases

`caseValidationOutcome`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casevalidationoutcome.md "appeal-s78.schema.json#/properties/caseValidationOutcome")

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

> Also available on HAS cases

`caseValidationInvalidDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casevalidationinvaliddetails.md "appeal-s78.schema.json#/properties/caseValidationInvalidDetails")

### caseValidationInvalidDetails Type

`string[]`

## caseValidationIncompleteDetails

A list of reasons why the appeal is incomplete

> Also available on HAS cases

`caseValidationIncompleteDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casevalidationincompletedetails.md "appeal-s78.schema.json#/properties/caseValidationIncompleteDetails")

### caseValidationIncompleteDetails Type

`string[]`

## caseExtensionDate

When the validation outcome is incomplete, an extension may be granted to provide missing information

> Also available on HAS cases

`caseExtensionDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-caseextensiondate.md "appeal-s78.schema.json#/properties/caseExtensionDate")

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

> Also available on HAS cases

`caseStartedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casestarteddate.md "appeal-s78.schema.json#/properties/caseStartedDate")

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

> Also available on HAS cases

`casePublishedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casepublisheddate.md "appeal-s78.schema.json#/properties/casePublishedDate")

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

> Also available on HAS cases

`linkedCaseStatus`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-linkedcasestatus.md "appeal-s78.schema.json#/properties/linkedCaseStatus")

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

> Also available on HAS cases

`leadCaseReference`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-leadcasereference.md "appeal-s78.schema.json#/properties/leadCaseReference")

### leadCaseReference Type

`string`

### leadCaseReference Examples

```json
"7002471"
```

## lpaQuestionnaireDueDate

If the case is started and has a timetable, a deadline for the LPA to provide a response

> Also available on HAS cases

`lpaQuestionnaireDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnaireduedate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireDueDate")

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

> Also available on HAS cases

`lpaQuestionnaireSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnairesubmitteddate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireSubmittedDate")

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

> Also available on HAS cases

`lpaQuestionnaireCreatedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnairecreateddate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireCreatedDate")

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

> Also available on HAS cases

`lpaQuestionnairePublishedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnairepublisheddate.md "appeal-s78.schema.json#/properties/lpaQuestionnairePublishedDate")

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

> Also available on HAS cases

`lpaQuestionnaireValidationOutcome`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnairevalidationoutcome.md "appeal-s78.schema.json#/properties/lpaQuestionnaireValidationOutcome")

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

> Also available on HAS cases

`lpaQuestionnaireValidationOutcomeDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnairevalidationoutcomedate.md "appeal-s78.schema.json#/properties/lpaQuestionnaireValidationOutcomeDate")

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

> Also available on HAS cases

`lpaQuestionnaireValidationDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaquestionnairevalidationdetails.md "appeal-s78.schema.json#/properties/lpaQuestionnaireValidationDetails")

### lpaQuestionnaireValidationDetails Type

`string[]`

## lpaStatement

A statement provided by the LPA

> Also available on HAS cases

`lpaStatement`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpastatement.md "appeal-s78.schema.json#/properties/lpaStatement")

### lpaStatement Type

`string`

### lpaStatement Examples

```json
"We refused the application because of ..."
```

## caseWithdrawnDate

The date the appeal was withdrawn by the appellant

> Also available on HAS cases

`caseWithdrawnDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casewithdrawndate.md "appeal-s78.schema.json#/properties/caseWithdrawnDate")

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

> Also available on HAS cases

`caseTransferredDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casetransferreddate.md "appeal-s78.schema.json#/properties/caseTransferredDate")

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

> Also available on HAS cases

`transferredCaseClosedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-transferredcasecloseddate.md "appeal-s78.schema.json#/properties/transferredCaseClosedDate")

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

> Also available on HAS cases

`caseDecisionOutcomeDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casedecisionoutcomedate.md "appeal-s78.schema.json#/properties/caseDecisionOutcomeDate")

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

> Also available on HAS cases

`caseDecisionPublishedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casedecisionpublisheddate.md "appeal-s78.schema.json#/properties/caseDecisionPublishedDate")

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

> Also available on HAS cases

`caseDecisionOutcome`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casedecisionoutcome.md "appeal-s78.schema.json#/properties/caseDecisionOutcome")

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

> Also available on HAS cases

`caseCompletedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casecompleteddate.md "appeal-s78.schema.json#/properties/caseCompletedDate")

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

> Also available on HAS cases

`enforcementNotice`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-enforcementnotice.md "appeal-s78.schema.json#/properties/enforcementNotice")

### enforcementNotice Type

`boolean`

## applicationReference

The unique identifier of the LPA application

> Also available on HAS cases

`applicationReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-applicationreference.md "appeal-s78.schema.json#/properties/applicationReference")

### applicationReference Type

`string`

### applicationReference Examples

```json
"43010/APP/1/290572"
```

## applicationDate

The date of the original LPA application

> Also available on HAS cases

`applicationDate`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-applicationdate.md "appeal-s78.schema.json#/properties/applicationDate")

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

> Also available on HAS cases

`applicationDecision`

* is required

* Type: `string`

* cannot be null

* defined in: [Appeal S78 Case](appeal-s78-properties-applicationdecision.md "appeal-s78.schema.json#/properties/applicationDecision")

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

> Also available on HAS cases

`applicationDecisionDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-applicationdecisiondate.md "appeal-s78.schema.json#/properties/applicationDecisionDate")

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

> Also available on HAS cases

`caseSubmissionDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-casesubmissionduedate.md "appeal-s78.schema.json#/properties/caseSubmissionDueDate")

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

> Also available on HAS cases

`siteAddressLine1`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteaddressline1.md "appeal-s78.schema.json#/properties/siteAddressLine1")

### siteAddressLine1 Type

`string`

### siteAddressLine1 Examples

```json
"96 The Avenue"
```

## siteAddressLine2

Second line of address for the appeal site

> Also available on HAS cases

`siteAddressLine2`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteaddressline2.md "appeal-s78.schema.json#/properties/siteAddressLine2")

### siteAddressLine2 Type

`string`

## siteAddressTown

Town / City of the site address

> Also available on HAS cases

`siteAddressTown`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteaddresstown.md "appeal-s78.schema.json#/properties/siteAddressTown")

### siteAddressTown Type

`string`

### siteAddressTown Examples

```json
"Maidstone"
```

## siteAddressCounty

County of the site address

> Also available on HAS cases

`siteAddressCounty`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteaddresscounty.md "appeal-s78.schema.json#/properties/siteAddressCounty")

### siteAddressCounty Type

`string`

### siteAddressCounty Examples

```json
"Kent"
```

## siteAddressPostcode

Postal code of the site address

> Also available on HAS cases

`siteAddressPostcode`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteaddresspostcode.md "appeal-s78.schema.json#/properties/siteAddressPostcode")

### siteAddressPostcode Type

`string`

### siteAddressPostcode Examples

```json
"MD21 5XY"
```

## siteAccessDetails

Provided information on site accessibility

> Also available on HAS cases

`siteAccessDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteaccessdetails.md "appeal-s78.schema.json#/properties/siteAccessDetails")

### siteAccessDetails Type

`string[]`

## siteSafetyDetails

Provided information on site health and safety

> Also available on HAS cases

`siteSafetyDetails`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-sitesafetydetails.md "appeal-s78.schema.json#/properties/siteSafetyDetails")

### siteSafetyDetails Type

`string[]`

## siteAreaSquareMetres

The site area, in square meters

> Also available on HAS cases

`siteAreaSquareMetres`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteareasquaremetres.md "appeal-s78.schema.json#/properties/siteAreaSquareMetres")

### siteAreaSquareMetres Type

`number`

### siteAreaSquareMetres Examples

```json
45.7
```

## floorSpaceSquareMetres

The floor space, in square meters

> Also available on HAS cases

`floorSpaceSquareMetres`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-floorspacesquaremetres.md "appeal-s78.schema.json#/properties/floorSpaceSquareMetres")

### floorSpaceSquareMetres Type

`number`

### floorSpaceSquareMetres Examples

```json
3.5
```

## isCorrectAppealType

Indicates if the LPA considers the appeal type appropriate

> Also available on HAS cases

`isCorrectAppealType`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-iscorrectappealtype.md "appeal-s78.schema.json#/properties/isCorrectAppealType")

### isCorrectAppealType Type

`boolean`

## isGreenBelt

Indicates if the site is in a green belt

> Also available on HAS cases

`isGreenBelt`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-isgreenbelt.md "appeal-s78.schema.json#/properties/isGreenBelt")

### isGreenBelt Type

`boolean`

## inConservationArea

Indicates if the site is in a conservation area

> Also available on HAS cases

`inConservationArea`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-inconservationarea.md "appeal-s78.schema.json#/properties/inConservationArea")

### inConservationArea Type

`boolean`

## ownsAllLand

Indicates if the appellant has complete ownership of the site

> Also available on HAS cases

`ownsAllLand`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-ownsallland.md "appeal-s78.schema.json#/properties/ownsAllLand")

### ownsAllLand Type

`boolean`

## ownsSomeLand

Indicates if the appellant has partial ownership of the site

> Also available on HAS cases

`ownsSomeLand`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-ownssomeland.md "appeal-s78.schema.json#/properties/ownsSomeLand")

### ownsSomeLand Type

`boolean`

## knowsOtherOwners

Indicates if the appellant knows other owners of the site

> Also available on HAS cases

`knowsOtherOwners`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-knowsotherowners.md "appeal-s78.schema.json#/properties/knowsOtherOwners")

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

> Also available on HAS cases

`knowsAllOwners`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-knowsallowners.md "appeal-s78.schema.json#/properties/knowsAllOwners")

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

> Also available on HAS cases

`advertisedAppeal`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-advertisedappeal.md "appeal-s78.schema.json#/properties/advertisedAppeal")

### advertisedAppeal Type

`boolean`

## notificationMethod

The methods used to notify relevant parties

> Also available on HAS cases

`notificationMethod`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-notificationmethod.md "appeal-s78.schema.json#/properties/notificationMethod")

### notificationMethod Type

`string[]`

### notificationMethod Examples

```json
[
  "notice",
  "letter"
]
```

```json
[
  "advert"
]
```

## ownersInformed

Indicates if the appellant has informed other owners of the site

> Also available on HAS cases

`ownersInformed`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-ownersinformed.md "appeal-s78.schema.json#/properties/ownersInformed")

### ownersInformed Type

`boolean`

## originalDevelopmentDescription

The original description of the development, as provided by the appellant

> Also available on HAS cases

`originalDevelopmentDescription`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-originaldevelopmentdescription.md "appeal-s78.schema.json#/properties/originalDevelopmentDescription")

### originalDevelopmentDescription Type

`string`

### originalDevelopmentDescription Examples

```json
"Replacement of an existing gate to access the property"
```

## changedDevelopmentDescription

Indicates that the LPA has changed the development description

> Also available on HAS cases

`changedDevelopmentDescription`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-changeddevelopmentdescription.md "appeal-s78.schema.json#/properties/changedDevelopmentDescription")

### changedDevelopmentDescription Type

`boolean`

## newConditionDetails

New conditions details provided by the LPA

> Also available on HAS cases

`newConditionDetails`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-newconditiondetails.md "appeal-s78.schema.json#/properties/newConditionDetails")

### newConditionDetails Type

`string`

### newConditionDetails Examples

```json
"Since the original application, a number of things have changed..."
```

## nearbyCaseReferences

A list of related case references known to the appellant and the LPA

> Also available on HAS cases

`nearbyCaseReferences`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-nearbycasereferences.md "appeal-s78.schema.json#/properties/nearbyCaseReferences")

### nearbyCaseReferences Type

`string[]`

## neighbouringSiteAddresses

A list of neighbouring site addresses

> Also available on HAS cases

`neighbouringSiteAddresses`

* is required

* Type: `object[]` ([Details](appeal-s78-properties-neighbouringsiteaddresses-items.md))

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-neighbouringsiteaddresses.md "appeal-s78.schema.json#/properties/neighbouringSiteAddresses")

### neighbouringSiteAddresses Type

`object[]` ([Details](appeal-s78-properties-neighbouringsiteaddresses-items.md))

## reasonForNeighbourVisits

A general reason given for the need to visit any neighbours

`reasonForNeighbourVisits`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-reasonforneighbourvisits.md "appeal-s78.schema.json#/properties/reasonForNeighbourVisits")

### reasonForNeighbourVisits Type

`string`

## affectedListedBuildingNumbers

A list of affected listed building IDs from Historic England

> Also available on HAS cases

`affectedListedBuildingNumbers`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-affectedlistedbuildingnumbers.md "appeal-s78.schema.json#/properties/affectedListedBuildingNumbers")

### affectedListedBuildingNumbers Type

`string[]`

## changedListedBuildingNumbers

A list of changed listed building IDs from Historic England

`changedListedBuildingNumbers`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-changedlistedbuildingnumbers.md "appeal-s78.schema.json#/properties/changedListedBuildingNumbers")

### changedListedBuildingNumbers Type

`string[]`

## preserveGrantLoan

A grant or loan has been made to preserve the listed building

> Only available in S20 cases

`preserveGrantLoan`

* is optional

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-preservegrantloan.md "appeal-s78.schema.json#/properties/preserveGrantLoan")

### preserveGrantLoan Type

`boolean`

## consultHistoricEngland

Are Historic England to be consulted?

> Only available in S20 cases

`consultHistoricEngland`

* is optional

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-consulthistoricengland.md "appeal-s78.schema.json#/properties/consultHistoricEngland")

### consultHistoricEngland Type

`boolean`

## appellantCostsAppliedFor

Indicates if the appellant has applied for costs

> Also available on HAS cases

`appellantCostsAppliedFor`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantcostsappliedfor.md "appeal-s78.schema.json#/properties/appellantCostsAppliedFor")

### appellantCostsAppliedFor Type

`boolean`

## lpaCostsAppliedFor

Indicates if the appellant has applied for costs

> Also available on HAS cases

`lpaCostsAppliedFor`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpacostsappliedfor.md "appeal-s78.schema.json#/properties/lpaCostsAppliedFor")

### lpaCostsAppliedFor Type

`boolean`

## agriculturalHolding

Indicates if the site is an agricultural holding

`agriculturalHolding`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-agriculturalholding.md "appeal-s78.schema.json#/properties/agriculturalHolding")

### agriculturalHolding Type

`boolean`

## tenantAgriculturalHolding

Indicates if the site is a tenant agricultural holding

`tenantAgriculturalHolding`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-tenantagriculturalholding.md "appeal-s78.schema.json#/properties/tenantAgriculturalHolding")

### tenantAgriculturalHolding Type

`boolean`

## otherTenantsAgriculturalHolding

Indicates if the site is an agricultural holding with other tenants

`otherTenantsAgriculturalHolding`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-othertenantsagriculturalholding.md "appeal-s78.schema.json#/properties/otherTenantsAgriculturalHolding")

### otherTenantsAgriculturalHolding Type

`boolean`

## informedTenantsAgriculturalHolding

If the site is an agricultural holding, indicates tenants are informed

`informedTenantsAgriculturalHolding`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-informedtenantsagriculturalholding.md "appeal-s78.schema.json#/properties/informedTenantsAgriculturalHolding")

### informedTenantsAgriculturalHolding Type

`boolean`

## appellantProcedurePreference

The procedure preference indicated by the appellant

`appellantProcedurePreference`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreference.md "appeal-s78.schema.json#/properties/appellantProcedurePreference")

### appellantProcedurePreference Type

`string`

### appellantProcedurePreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"written"` |             |
| `"hearing"` |             |
| `"inquiry"` |             |
| `null`      |             |

## appellantProcedurePreferenceDetails

The procedure details preference indicated by the appellant

`appellantProcedurePreferenceDetails`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreferencedetails.md "appeal-s78.schema.json#/properties/appellantProcedurePreferenceDetails")

### appellantProcedurePreferenceDetails Type

`string`

## appellantProcedurePreferenceDuration

The duration of the procedure indicated by the appellant

`appellantProcedurePreferenceDuration`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreferenceduration.md "appeal-s78.schema.json#/properties/appellantProcedurePreferenceDuration")

### appellantProcedurePreferenceDuration Type

`number`

## appellantProcedurePreferenceWitnessCount

The number of witnesses appellant has suggested for inquiries preference

`appellantProcedurePreferenceWitnessCount`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantprocedurepreferencewitnesscount.md "appeal-s78.schema.json#/properties/appellantProcedurePreferenceWitnessCount")

### appellantProcedurePreferenceWitnessCount Type

`number`

## statusPlanningObligation

The planning obligation information, if available

`statusPlanningObligation`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-statusplanningobligation.md "appeal-s78.schema.json#/properties/statusPlanningObligation")

### statusPlanningObligation Type

`string`

## affectsScheduledMonument

Indicates that a scheduled monument is affected

`affectsScheduledMonument`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-affectsscheduledmonument.md "appeal-s78.schema.json#/properties/affectsScheduledMonument")

### affectsScheduledMonument Type

`boolean`

## hasProtectedSpecies

Indicates the existence of protected species

`hasProtectedSpecies`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-hasprotectedspecies.md "appeal-s78.schema.json#/properties/hasProtectedSpecies")

### hasProtectedSpecies Type

`boolean`

## isAonbNationalLandscape

Indicates an area of outstanding beauty (National Landscape)

`isAonbNationalLandscape`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-isaonbnationallandscape.md "appeal-s78.schema.json#/properties/isAonbNationalLandscape")

### isAonbNationalLandscape Type

`boolean`

## designatedSitesNames

The designated site names

`designatedSitesNames`

* is required

* Type: `string[]`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-designatedsitesnames.md "appeal-s78.schema.json#/properties/designatedSitesNames")

### designatedSitesNames Type

`string[]`

## isGypsyOrTravellerSite

Indicates a traveller site

`isGypsyOrTravellerSite`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-isgypsyortravellersite.md "appeal-s78.schema.json#/properties/isGypsyOrTravellerSite")

### isGypsyOrTravellerSite Type

`boolean`

## isPublicRightOfWay

Indicates a PROW (public right of way)

`isPublicRightOfWay`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-ispublicrightofway.md "appeal-s78.schema.json#/properties/isPublicRightOfWay")

### isPublicRightOfWay Type

`boolean`

## eiaEnvironmentalImpactSchedule

The impact schedule from EIA

`eiaEnvironmentalImpactSchedule`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiaenvironmentalimpactschedule.md "appeal-s78.schema.json#/properties/eiaEnvironmentalImpactSchedule")

### eiaEnvironmentalImpactSchedule Type

`string`

### eiaEnvironmentalImpactSchedule Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"schedule-1"` |             |
| `"schedule-2"` |             |
| `null`         |             |

## eiaDevelopmentDescription

The development description from EIA

`eiaDevelopmentDescription`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiadevelopmentdescription.md "appeal-s78.schema.json#/properties/eiaDevelopmentDescription")

### eiaDevelopmentDescription Type

`string`

### eiaDevelopmentDescription Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"agriculture-aquaculture"`         |             |
| `"change-extensions"`               |             |
| `"chemical-industry"`               |             |
| `"energy-industry"`                 |             |
| `"extractive-industry"`             |             |
| `"food-industry"`                   |             |
| `"infrastructure-projects"`         |             |
| `"mineral-industry"`                |             |
| `"other-projects"`                  |             |
| `"production-processing-of-metals"` |             |
| `"rubber-industry"`                 |             |
| `"textile-industries"`              |             |
| `"tourism-leisure"`                 |             |
| `null`                              |             |

## eiaSensitiveAreaDetails

The sensitive area details from EIA

`eiaSensitiveAreaDetails`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiasensitiveareadetails.md "appeal-s78.schema.json#/properties/eiaSensitiveAreaDetails")

### eiaSensitiveAreaDetails Type

`string`

## eiaColumnTwoThreshold

EIA specific threshold

`eiaColumnTwoThreshold`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiacolumntwothreshold.md "appeal-s78.schema.json#/properties/eiaColumnTwoThreshold")

### eiaColumnTwoThreshold Type

`boolean`

## eiaScreeningOpinion

EIA screening opinion

`eiaScreeningOpinion`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiascreeningopinion.md "appeal-s78.schema.json#/properties/eiaScreeningOpinion")

### eiaScreeningOpinion Type

`boolean`

## eiaRequiresEnvironmentalStatement

EIA environmental statement required

`eiaRequiresEnvironmentalStatement`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiarequiresenvironmentalstatement.md "appeal-s78.schema.json#/properties/eiaRequiresEnvironmentalStatement")

### eiaRequiresEnvironmentalStatement Type

`boolean`

## eiaCompletedEnvironmentalStatement

EIA completed environmental statement required

`eiaCompletedEnvironmentalStatement`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-eiacompletedenvironmentalstatement.md "appeal-s78.schema.json#/properties/eiaCompletedEnvironmentalStatement")

### eiaCompletedEnvironmentalStatement Type

`boolean`

## hasStatutoryConsultees

Indicates statutory consultees

`hasStatutoryConsultees`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-hasstatutoryconsultees.md "appeal-s78.schema.json#/properties/hasStatutoryConsultees")

### hasStatutoryConsultees Type

`boolean`

## consultedBodiesDetails

The details of the bodies consulted

`consultedBodiesDetails`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-consultedbodiesdetails.md "appeal-s78.schema.json#/properties/consultedBodiesDetails")

### consultedBodiesDetails Type

`string`

## hasInfrastructureLevy

Indicates the existence of an infrastructure levy

`hasInfrastructureLevy`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-hasinfrastructurelevy.md "appeal-s78.schema.json#/properties/hasInfrastructureLevy")

### hasInfrastructureLevy Type

`boolean`

## isInfrastructureLevyFormallyAdopted

Indicates if the infrastructure levy is formally adopted

`isInfrastructureLevyFormallyAdopted`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-isinfrastructurelevyformallyadopted.md "appeal-s78.schema.json#/properties/isInfrastructureLevyFormallyAdopted")

### isInfrastructureLevyFormallyAdopted Type

`boolean`

## infrastructureLevyAdoptedDate

The date of the infrastructure levy adoption

`infrastructureLevyAdoptedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-infrastructurelevyadopteddate.md "appeal-s78.schema.json#/properties/infrastructureLevyAdoptedDate")

### infrastructureLevyAdoptedDate Type

`string`

### infrastructureLevyAdoptedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### infrastructureLevyAdoptedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## infrastructureLevyExpectedDate

The expected date of the infrastructure levy

`infrastructureLevyExpectedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-infrastructurelevyexpecteddate.md "appeal-s78.schema.json#/properties/infrastructureLevyExpectedDate")

### infrastructureLevyExpectedDate Type

`string`

### infrastructureLevyExpectedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### infrastructureLevyExpectedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaProcedurePreference

The procedure preference indicated by the LPA

`lpaProcedurePreference`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaprocedurepreference.md "appeal-s78.schema.json#/properties/lpaProcedurePreference")

### lpaProcedurePreference Type

`string`

### lpaProcedurePreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"written"` |             |
| `"hearing"` |             |
| `"inquiry"` |             |
| `null`      |             |

## lpaProcedurePreferenceDetails

The procedure details preference indicated by the LPA

`lpaProcedurePreferenceDetails`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaprocedurepreferencedetails.md "appeal-s78.schema.json#/properties/lpaProcedurePreferenceDetails")

### lpaProcedurePreferenceDetails Type

`string`

## lpaProcedurePreferenceDuration

The duration of enquiry indicated by the LPA

`lpaProcedurePreferenceDuration`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaprocedurepreferenceduration.md "appeal-s78.schema.json#/properties/lpaProcedurePreferenceDuration")

### lpaProcedurePreferenceDuration Type

`number`

## caseworkReason



`caseworkReason`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-caseworkreason.md "appeal-s78.schema.json#/properties/caseworkReason")

### caseworkReason Type

`string`

## importantInformation



`importantInformation`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-importantinformation.md "appeal-s78.schema.json#/properties/importantInformation")

### importantInformation Type

`string`

## jurisdiction



`jurisdiction`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-jurisdiction.md "appeal-s78.schema.json#/properties/jurisdiction")

### jurisdiction Type

`string`

## redeterminedIndicator



`redeterminedIndicator`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-redeterminedindicator.md "appeal-s78.schema.json#/properties/redeterminedIndicator")

### redeterminedIndicator Type

`string`

## dateCostsReportDespatched

The date of the cost report

`dateCostsReportDespatched`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-datecostsreportdespatched.md "appeal-s78.schema.json#/properties/dateCostsReportDespatched")

### dateCostsReportDespatched Type

`string`

### dateCostsReportDespatched Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateCostsReportDespatched Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateNotRecoveredOrDerecovered



`dateNotRecoveredOrDerecovered`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-datenotrecoveredorderecovered.md "appeal-s78.schema.json#/properties/dateNotRecoveredOrDerecovered")

### dateNotRecoveredOrDerecovered Type

`string`

### dateNotRecoveredOrDerecovered Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateNotRecoveredOrDerecovered Examples

```json
"2023-07-27T20:30:00.000Z"
```

## dateRecovered



`dateRecovered`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-daterecovered.md "appeal-s78.schema.json#/properties/dateRecovered")

### dateRecovered Type

`string`

### dateRecovered Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### dateRecovered Examples

```json
"2023-07-27T20:30:00.000Z"
```

## originalCaseDecisionDate



`originalCaseDecisionDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-originalcasedecisiondate.md "appeal-s78.schema.json#/properties/originalCaseDecisionDate")

### originalCaseDecisionDate Type

`string`

### originalCaseDecisionDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### originalCaseDecisionDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## targetDate



`targetDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-targetdate.md "appeal-s78.schema.json#/properties/targetDate")

### targetDate Type

`string`

### targetDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### targetDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## appellantCommentsSubmittedDate



`appellantCommentsSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantcommentssubmitteddate.md "appeal-s78.schema.json#/properties/appellantCommentsSubmittedDate")

### appellantCommentsSubmittedDate Type

`string`

### appellantCommentsSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### appellantCommentsSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## appellantStatementSubmittedDate



`appellantStatementSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantstatementsubmitteddate.md "appeal-s78.schema.json#/properties/appellantStatementSubmittedDate")

### appellantStatementSubmittedDate Type

`string`

### appellantStatementSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### appellantStatementSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## appellantProofsSubmittedDate



`appellantProofsSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-appellantproofssubmitteddate.md "appeal-s78.schema.json#/properties/appellantProofsSubmittedDate")

### appellantProofsSubmittedDate Type

`string`

### appellantProofsSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### appellantProofsSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## finalCommentsDueDate



`finalCommentsDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-finalcommentsduedate.md "appeal-s78.schema.json#/properties/finalCommentsDueDate")

### finalCommentsDueDate Type

`string`

### finalCommentsDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### finalCommentsDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## interestedPartyRepsDueDate



`interestedPartyRepsDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-interestedpartyrepsduedate.md "appeal-s78.schema.json#/properties/interestedPartyRepsDueDate")

### interestedPartyRepsDueDate Type

`string`

### interestedPartyRepsDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### interestedPartyRepsDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaCommentsSubmittedDate



`lpaCommentsSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpacommentssubmitteddate.md "appeal-s78.schema.json#/properties/lpaCommentsSubmittedDate")

### lpaCommentsSubmittedDate Type

`string`

### lpaCommentsSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaCommentsSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaProofsSubmittedDate



`lpaProofsSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpaproofssubmitteddate.md "appeal-s78.schema.json#/properties/lpaProofsSubmittedDate")

### lpaProofsSubmittedDate Type

`string`

### lpaProofsSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaProofsSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## lpaStatementSubmittedDate



`lpaStatementSubmittedDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-lpastatementsubmitteddate.md "appeal-s78.schema.json#/properties/lpaStatementSubmittedDate")

### lpaStatementSubmittedDate Type

`string`

### lpaStatementSubmittedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### lpaStatementSubmittedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## proofsOfEvidenceDueDate



`proofsOfEvidenceDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-proofsofevidenceduedate.md "appeal-s78.schema.json#/properties/proofsOfEvidenceDueDate")

### proofsOfEvidenceDueDate Type

`string`

### proofsOfEvidenceDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### proofsOfEvidenceDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## siteNoticesSentDate



`siteNoticesSentDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-sitenoticessentdate.md "appeal-s78.schema.json#/properties/siteNoticesSentDate")

### siteNoticesSentDate Type

`string`

### siteNoticesSentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### siteNoticesSentDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## statementDueDate



`statementDueDate`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-statementduedate.md "appeal-s78.schema.json#/properties/statementDueDate")

### statementDueDate Type

`string`

### statementDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### statementDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## numberOfResidencesNetChange

The net gain in residences of the proposed development

`numberOfResidencesNetChange`

* is required

* Type: `number`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-numberofresidencesnetchange.md "appeal-s78.schema.json#/properties/numberOfResidencesNetChange")

### numberOfResidencesNetChange Type

`number`

## siteGridReferenceEasting



`siteGridReferenceEasting`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-sitegridreferenceeasting.md "appeal-s78.schema.json#/properties/siteGridReferenceEasting")

### siteGridReferenceEasting Type

`string`

### siteGridReferenceEasting Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^\d{6,7}$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B6%2C7%7D%24 "try regular expression with regexr.com")

### siteGridReferenceEasting Examples

```json
"357144"
```

## siteGridReferenceNorthing



`siteGridReferenceNorthing`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-sitegridreferencenorthing.md "appeal-s78.schema.json#/properties/siteGridReferenceNorthing")

### siteGridReferenceNorthing Type

`string`

### siteGridReferenceNorthing Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^\d{6,7}$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B6%2C7%7D%24 "try regular expression with regexr.com")

### siteGridReferenceNorthing Examples

```json
"400534"
```

## siteViewableFromRoad



`siteViewableFromRoad`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-siteviewablefromroad.md "appeal-s78.schema.json#/properties/siteViewableFromRoad")

### siteViewableFromRoad Type

`boolean`

## siteWithinSSSI



`siteWithinSSSI`

* is required

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-sitewithinsssi.md "appeal-s78.schema.json#/properties/siteWithinSSSI")

### siteWithinSSSI Type

`boolean`

## typeOfPlanningApplication



`typeOfPlanningApplication`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-typeofplanningapplication.md "appeal-s78.schema.json#/properties/typeOfPlanningApplication")

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
| `"advertisement"`                      |             |
| `null`                                 |             |

## developmentType



`developmentType`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-developmenttype.md "appeal-s78.schema.json#/properties/developmentType")

### developmentType Type

`string`

### developmentType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                       | Explanation |
| :-------------------------- | :---------- |
| `"householder"`             |             |
| `"change-of-use"`           |             |
| `"major-dwellings"`         |             |
| `"major-industry-storage"`  |             |
| `"major-offices"`           |             |
| `"major-retail-services"`   |             |
| `"major-traveller-caravan"` |             |
| `"mineral-workings"`        |             |
| `"minor-dwellings"`         |             |
| `"minor-industry-storage"`  |             |
| `"minor-offices"`           |             |
| `"minor-retail-services"`   |             |
| `"minor-traveller-caravan"` |             |
| `"other-major"`             |             |
| `"other-minor"`             |             |
| `null`                      |             |

## statementOfCommonGroundDueDate



`statementOfCommonGroundDueDate`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-statementofcommongroundduedate.md "appeal-s78.schema.json#/properties/statementOfCommonGroundDueDate")

### statementOfCommonGroundDueDate Type

`string`

### statementOfCommonGroundDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### statementOfCommonGroundDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## planningObligationDueDate



`planningObligationDueDate`

* is optional

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-planningobligationduedate.md "appeal-s78.schema.json#/properties/planningObligationDueDate")

### planningObligationDueDate Type

`string`

### planningObligationDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### planningObligationDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## hasLandownersPermission

Does the appellant have the landowners permission

`hasLandownersPermission`

* is optional

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-haslandownerspermission.md "appeal-s78.schema.json#/properties/hasLandownersPermission")

### hasLandownersPermission Type

`boolean`

## wasApplicationRefusedDueToHighwayOrTraffic

Did the LPA refuse the application because of highway or traffic public safety?

`wasApplicationRefusedDueToHighwayOrTraffic`

* is optional

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-wasapplicationrefusedduetohighwayortraffic.md "appeal-s78.schema.json#/properties/wasApplicationRefusedDueToHighwayOrTraffic")

### wasApplicationRefusedDueToHighwayOrTraffic Type

`boolean`

## didAppellantSubmitCompletePhotosAndPlans

Did the appellant submit complete photos and plans?

`didAppellantSubmitCompletePhotosAndPlans`

* is optional

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-didappellantsubmitcompletephotosandplans.md "appeal-s78.schema.json#/properties/didAppellantSubmitCompletePhotosAndPlans")

### didAppellantSubmitCompletePhotosAndPlans Type

`boolean`

## isSiteInAreaOfSpecialControlAdverts

Is the site in an area of special control of advertisements?

`isSiteInAreaOfSpecialControlAdverts`

* is optional

* Type: `boolean`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-issiteinareaofspecialcontroladverts.md "appeal-s78.schema.json#/properties/isSiteInAreaOfSpecialControlAdverts")

### isSiteInAreaOfSpecialControlAdverts Type

`boolean`

## advertDetails

A list of advertisements for the appeal

> Also available on CAS Adverts (ZA) cases

`advertDetails`

* is optional

* Type: `object[]` ([Details](appeal-s78-properties-advertdetails-items.md))

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-advertdetails.md "appeal-s78.schema.json#/properties/advertDetails")

### advertDetails Type

`object[]` ([Details](appeal-s78-properties-advertdetails-items.md))

## padsSapId

padsSapId for PADS inspectors

`padsSapId`

* is required

* Type: `string`

* can be null

* defined in: [Appeal S78 Case](appeal-s78-properties-padssapid.md "appeal-s78.schema.json#/properties/padsSapId")

### padsSapId Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
