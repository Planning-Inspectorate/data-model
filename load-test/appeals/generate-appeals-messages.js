import crypto from 'node:crypto';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../src/index.js';

const HAS_SCHEMA = 'appeal-has.schema.json';
const S78_SCHEMA = 'appeal-s78.schema.json';
const DOCUMENT_SCHEMA = 'appeal-document.schema.json';
const SERVICE_USER_SCHEMA = 'service-user.schema.json';

const BASE_HAS_CASE = {
	caseId: null,
	caseReference: 'mollit dolore dolor non culpa',
	submissionId: null,
	caseStatus: 'ready_to_start',
	caseType: 'ZP',
	caseProcedure: 'inquiry',
	lpaCode: 'nulla',
	caseOfficerId: null,
	inspectorId: 'mollit in ullamco Excepteur commodo',
	allocationLevel: 'D',
	allocationBand: 1,
	caseSpecialisms: ['et culpa elit labore', 'minim Lorem'],
	caseSubmittedDate: '1954-03-03T08:10:46.0Z',
	caseCreatedDate: '1945-04-11T07:49:09.0Z',
	caseUpdatedDate: '1943-02-10T21:16:10.0Z',
	caseValidDate: '1902-04-09T20:34:25.0Z',
	caseValidationDate: null,
	caseValidationOutcome: 'invalid',
	caseValidationInvalidDetails: null,
	caseValidationIncompleteDetails: [
		'occaecat dolor labore ut ipsum',
		'eiusmod ullamco pariatur aliqua esse',
		'eiusmod Ut officia',
		'aute',
		'do minim sint labore aliquip'
	],
	caseExtensionDate: null,
	caseStartedDate: null,
	casePublishedDate: null,
	linkedCaseStatus: null,
	leadCaseReference: null,
	lpaQuestionnaireDueDate: null,
	lpaQuestionnaireSubmittedDate: null,
	lpaQuestionnaireCreatedDate: '1916-11-15T14:22:37.0Z',
	lpaQuestionnairePublishedDate: '1895-10-01T01:14:29.0Z',
	lpaQuestionnaireValidationOutcome: 'incomplete',
	lpaQuestionnaireValidationOutcomeDate: '1927-05-30T20:34:18.0Z',
	lpaQuestionnaireValidationDetails: ['dolore cillum in anim adipisicing'],
	lpaStatement: 'Ut ipsum et',
	caseWithdrawnDate: '1926-02-11T13:40:53.0Z',
	caseTransferredDate: '1923-01-28T02:09:32.0Z',
	transferredCaseClosedDate: '1893-02-13T14:37:27.0Z',
	caseDecisionOutcomeDate: '1920-07-08T09:20:22.0Z',
	caseDecisionPublishedDate: null,
	caseDecisionOutcome: 'dismissed',
	caseCompletedDate: '1895-12-07T15:44:32.0Z',
	enforcementNotice: null,
	applicationReference: 'eu',
	applicationDate: '1949-08-25T15:11:02.0Z',
	applicationDecision: 'refused',
	applicationDecisionDate: '1952-08-09T01:03:51.0Z',
	applicationDecisionDueDate: null,
	caseSubmissionDueDate: '1942-02-09T21:03:07.0Z',
	siteAddressLine1: 'ullamco',
	siteAddressLine2: null,
	siteAddressTown: 'dolor reprehenderit ut',
	siteAddressCounty: 'dolore eu exercitation enim',
	siteAddressPostcode: 'est',
	siteAccessDetails: [
		'Ut',
		'eiusmod magna aliqua ipsum',
		'sit non ut amet aliqua',
		'id consectetur cupidatat',
		'incididunt ut Lorem eu'
	],
	siteSafetyDetails: null,
	siteAreaSquareMetres: 74995933.47978675,
	floorSpaceSquareMetres: null,
	isCorrectAppealType: null,
	isGreenBelt: true,
	inConservationArea: null,
	affectsScheduledMonument: true,
	hasProtectedSpecies: true,
	isAonbNationalLandscape: null,
	designatedSitesNames: null,
	hasInfrastructureLevy: false,
	isInfrastructureLevyFormallyAdopted: false,
	infrastructureLevyAdoptedDate: null,
	infrastructureLevyExpectedDate: null,
	lpaProcedurePreference: null,
	lpaProcedurePreferenceDetails: null,
	lpaProcedurePreferenceDuration: -42778389.82228377,
	caseworkReason: 'elit reprehenderit',
	importantInformation: null,
	jurisdiction: null,
	redeterminedIndicator: null,
	dateCostsReportDespatched: '1918-01-30T08:43:51.0Z',
	dateNotRecoveredOrDerecovered: '1950-02-18T19:15:57.0Z',
	dateRecovered: '1962-01-16T13:45:38.0Z',
	originalCaseDecisionDate: null,
	targetDate: null,
	ownsAllLand: true,
	ownsSomeLand: null,
	knowsOtherOwners: 'Some',
	knowsAllOwners: null,
	advertisedAppeal: null,
	notificationMethod: null,
	ownersInformed: null,
	originalDevelopmentDescription: null,
	changedDevelopmentDescription: null,
	newConditionDetails: 'tempor anim adipisicing',
	nearbyCaseReferences: null,
	neighbouringSiteAddresses: [
		{
			neighbouringSiteAddressLine1: 'eu veniam',
			neighbouringSiteAddressLine2: null,
			neighbouringSiteAddressTown: 'pariatur dolore',
			neighbouringSiteAddressCounty: 'fugiat minim anim aliqua aliquip',
			neighbouringSiteAddressPostcode: 'ex anim',
			neighbouringSiteAccessDetails: null,
			neighbouringSiteSafetyDetails: 'veniam in sunt'
		}
	],
	reasonForNeighbourVisits: null,
	affectedListedBuildingNumbers: ['Excepteur', 'in consequat sit', 'esse sunt velit culpa', 'voluptate esse'],
	appellantCostsAppliedFor: null,
	lpaCostsAppliedFor: null,
	typeOfPlanningApplication: 'householder-planning',
	siteGridReferenceEasting: '357144',
	siteGridReferenceNorthing: '400534',
	hasLandownersPermission: null,
	isSiteInAreaOfSpecialControlAdverts: false,
	wasApplicationRefusedDueToHighwayOrTraffic: null,
	didAppellantSubmitCompletePhotosAndPlans: null,
	advertDetails: [
		{
			isAdvertInPosition: false,
			isSiteOnHighwayLand: false,
			advertType: 'Other'
		}
	],
	padsSapId: null
};

const BASE_S78_CASE = {
	caseId: 96989394,
	caseReference: 'exercitation dolore',
	submissionId: null,
	caseStatus: 'transferred',
	caseType: 'D',
	caseProcedure: 'inquiry',
	lpaCode: 'pariatur cillum non',
	caseOfficerId: null,
	inspectorId: 'amet magna dolor in labore',
	allocationLevel: null,
	allocationBand: null,
	caseSpecialisms: ['laboris est proident minim', 'qui sunt ut', 'consectetur Lorem do sunt aliquip'],
	caseSubmittedDate: '1907-08-17T13:18:33.0Z',
	caseCreatedDate: '1906-08-08T04:49:02.0Z',
	caseUpdatedDate: '1945-02-11T12:49:58.0Z',
	caseValidDate: null,
	caseValidationDate: null,
	caseValidationOutcome: 'invalid',
	caseValidationInvalidDetails: null,
	caseValidationIncompleteDetails: null,
	caseExtensionDate: null,
	caseStartedDate: '1905-07-12T15:31:22.0Z',
	casePublishedDate: null,
	linkedCaseStatus: 'lead',
	leadCaseReference: null,
	lpaQuestionnaireDueDate: null,
	lpaQuestionnaireSubmittedDate: null,
	lpaQuestionnaireCreatedDate: '1956-11-08T15:53:10.0Z',
	lpaQuestionnairePublishedDate: '1951-09-03T07:25:19.0Z',
	lpaQuestionnaireValidationOutcome: null,
	lpaQuestionnaireValidationOutcomeDate: null,
	lpaQuestionnaireValidationDetails: ['cupidatat dolore in', 'officia in nostrud non', 'eu amet velit labore aute'],
	lpaStatement: 'ipsum consectetur labore pariatur',
	listOfDocumentsBeforeDecision: null,
	caseWithdrawnDate: '1941-07-27T04:17:40.0Z',
	caseTransferredDate: null,
	transferredCaseClosedDate: null,
	caseDecisionOutcomeDate: '1916-07-25T07:02:27.0Z',
	caseDecisionPublishedDate: null,
	caseDecisionOutcome: 'invalid',
	caseCompletedDate: '1921-06-04T06:12:04.0Z',
	enforcementNotice: null,
	applicationReference: 'consequat ullamco in aute amet',
	applicationDate: '1910-07-16T04:24:14.0Z',
	applicationDecision: 'not_received',
	applicationDecisionDate: null,
	applicationDecisionDueDate: '1952-08-09T01:03:51.0Z',
	caseSubmissionDueDate: null,
	siteAddressLine1: 'dolore mollit',
	siteAddressLine2: null,
	siteAddressTown: 'in',
	siteAddressCounty: 'ut incididunt velit in',
	siteAddressPostcode: 'ut',
	siteAccessDetails: ['ullamco', 'elit in', 'velit officia pariatur mollit', 'nostrud ex culpa'],
	siteSafetyDetails: null,
	siteAreaSquareMetres: 69381079.34849802,
	floorSpaceSquareMetres: null,
	isCorrectAppealType: null,
	isGreenBelt: false,
	inConservationArea: null,
	ownsAllLand: null,
	ownsSomeLand: null,
	knowsOtherOwners: null,
	knowsAllOwners: null,
	advertisedAppeal: true,
	notificationMethod: ['notice'],
	ownersInformed: null,
	originalDevelopmentDescription: 'est',
	changedDevelopmentDescription: null,
	newConditionDetails: null,
	nearbyCaseReferences: ['veniam voluptate incididunt Excepteur'],
	neighbouringSiteAddresses: [
		{
			neighbouringSiteAddressLine1: 'laborum',
			neighbouringSiteAddressLine2: null,
			neighbouringSiteAddressTown: 'aute ipsum dolore',
			neighbouringSiteAddressCounty: null,
			neighbouringSiteAddressPostcode: 'dolor ipsum anim fugiat',
			neighbouringSiteAccessDetails: 'reprehenderit mollit Duis exercitation',
			neighbouringSiteSafetyDetails: null
		}
	],
	reasonForNeighbourVisits: null,
	affectedListedBuildingNumbers: ['tempor adipisicing in'],
	changedListedBuildingNumbers: null,
	preserveGrantLoan: true,
	consultHistoricEngland: false,
	appellantCostsAppliedFor: null,
	lpaCostsAppliedFor: null,
	agriculturalHolding: null,
	tenantAgriculturalHolding: null,
	otherTenantsAgriculturalHolding: null,
	informedTenantsAgriculturalHolding: true,
	appellantProcedurePreference: 'hearing',
	appellantProcedurePreferenceDetails: null,
	appellantProcedurePreferenceDuration: null,
	appellantProcedurePreferenceWitnessCount: null,
	statusPlanningObligation: 'cillum proident fugiat ex quis',
	affectsScheduledMonument: true,
	hasProtectedSpecies: true,
	isAonbNationalLandscape: null,
	designatedSitesNames: null,
	isGypsyOrTravellerSite: false,
	isPublicRightOfWay: true,
	eiaEnvironmentalImpactSchedule: 'schedule-1',
	eiaDevelopmentDescription: 'agriculture-aquaculture',
	eiaSensitiveAreaDetails: 'dolore non anim ut deserunt',
	eiaColumnTwoThreshold: null,
	eiaScreeningOpinion: true,
	eiaRequiresEnvironmentalStatement: null,
	eiaCompletedEnvironmentalStatement: null,
	hasStatutoryConsultees: true,
	consultedBodiesDetails: null,
	hasInfrastructureLevy: null,
	isInfrastructureLevyFormallyAdopted: null,
	infrastructureLevyAdoptedDate: null,
	infrastructureLevyExpectedDate: null,
	lpaProcedurePreference: null,
	lpaProcedurePreferenceDetails: null,
	lpaProcedurePreferenceDuration: 43495666.11228904,
	caseworkReason: 'sit ipsum',
	importantInformation: null,
	jurisdiction: null,
	redeterminedIndicator: null,
	dateCostsReportDespatched: '1951-10-17T06:20:56.0Z',
	dateNotRecoveredOrDerecovered: '1965-01-28T14:22:43.0Z',
	dateRecovered: null,
	originalCaseDecisionDate: '1969-03-09T16:29:08.0Z',
	targetDate: null,
	appellantCommentsSubmittedDate: '1907-11-20T13:42:48.0Z',
	appellantStatementSubmittedDate: null,
	appellantProofsSubmittedDate: '1940-11-26T21:04:12.0Z',
	finalCommentsDueDate: '1945-08-08T17:44:32.0Z',
	interestedPartyRepsDueDate: null,
	lpaCommentsSubmittedDate: '1941-03-28T08:08:45.0Z',
	lpaProofsSubmittedDate: '1949-02-17T05:01:26.0Z',
	lpaStatementSubmittedDate: null,
	proofsOfEvidenceDueDate: '1945-06-24T01:14:05.0Z',
	siteNoticesSentDate: '1904-03-09T08:52:39.0Z',
	statementDueDate: null,
	caseManagementConferenceDate: '1904-03-09T08:52:39.0Z',
	numberOfResidencesNetChange: 59800248.893144846,
	siteGridReferenceEasting: '357144',
	siteGridReferenceNorthing: '400534',
	siteViewableFromRoad: null,
	siteWithinSSSI: null,
	typeOfPlanningApplication: 'full-appeal',
	developmentType: 'other-minor',
	statementOfCommonGroundDueDate: '1919-10-16T12:35:55.0Z',
	planningObligationDueDate: '1899-04-25T22:23:18.0Z',
	advertDetails: [
		{
			isAdvertInPosition: false,
			isSiteOnHighwayLand: false,
			advertType: 'Other'
		}
	],
	padsSapId: null,
	applicationMadeUnderActSection: 'existing-development',
	siteUseAtTimeOfApplication: 'Site use at time of application',
	appealUnderActSection: 'proposed-use-of-a-development',
	lpaConsiderAppealInvalid: true,
	lpaAppealInvalidReasons: 'Reason(s) why LPA consider the appeal invalid'
};

function isoNowPlusMinutes(minutesOffset) {
	return new Date(Date.now() + minutesOffset * 60 * 1000).toISOString();
}

function randomCaseReference(prefix, index) {
	const suffix = String(index + 1).padStart(7, '0');
	return `${prefix}${suffix}`;
}

function randomHex(length) {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString('hex')
		.slice(0, length);
}

function createCase(caseType, index) {
	const template = caseType === 'HAS' ? BASE_HAS_CASE : BASE_S78_CASE;
	const entity = structuredClone(template);
	const referencePrefix = caseType === 'HAS' ? 'HAS' : 'S78';

	entity.caseId = 500000 + index;
	entity.caseReference = randomCaseReference(referencePrefix, index);
	entity.caseCreatedDate = isoNowPlusMinutes(index);
	entity.caseUpdatedDate = isoNowPlusMinutes(index + 1);
	entity.caseSubmittedDate = isoNowPlusMinutes(index - 10);
	entity.applicationReference = `LOAD-${referencePrefix}-${index + 1}`;
	entity.lpaCode = 'LOAD';

	return entity;
}

function createServiceUser(casePayload, serviceUserType, index) {
	const typeName = serviceUserType === 'Agent' ? 'Agent' : 'Appellant';
	return {
		id: crypto.randomUUID(),
		salutation: 'Ms',
		firstName: `Load-Test`,
		lastName: `${typeName}${index + 1}`,
		addressLine1: '1 Test Street',
		addressLine2: null,
		addressTown: 'Testville',
		addressCounty: 'Testshire',
		postcode: 'TE1 1ST',
		addressCountry: 'United Kingdom',
		organisation: 'Load Test Org',
		organisationType: 'Private Company',
		role: typeName,
		telephoneNumber: '+447123456789',
		otherPhoneNumber: null,
		faxNumber: null,
		emailAddress: `${typeName.toLowerCase()}${index + 1}@example.com`,
		webAddress: 'https://example.com',
		serviceUserType: typeName,
		caseReference: casePayload.caseReference,
		sourceSystem: 'back-office-appeals',
		sourceSuid: crypto.randomUUID()
	};
}

function createDocument(casePayload, caseIndex, documentIndex) {
	const documentId = crypto.randomUUID();
	const filename = `LOAD-${casePayload.caseReference}-doc-${documentIndex + 1}.pdf`;
	const caseType = typeof casePayload.caseType === 'string' ? casePayload.caseType : null;
	const now = isoNowPlusMinutes(caseIndex + documentIndex);
	const documentUri = `https://example.local/appeal/${casePayload.caseReference}/${documentId}/v1/${filename}`;

	return {
		documentId,
		caseId: casePayload.caseId,
		caseReference: casePayload.caseReference,
		version: 1,
		filename,
		originalFilename: filename,
		size: 1000 + documentIndex,
		mime: 'application/pdf',
		documentURI: documentUri,
		publishedDocumentURI: documentUri,
		virusCheckStatus: 'scanned',
		fileMD5: randomHex(32),
		dateCreated: now,
		dateReceived: now,
		datePublished: now,
		lastModified: now,
		caseType,
		redactedStatus: 'no_redaction_required',
		documentType: 'plansDrawings',
		sourceSystem: 'back-office-appeals',
		origin: 'pins',
		owner: 'Load Test Team',
		author: 'Load Test Team',
		description: `Load test document ${documentIndex + 1}`,
		caseStage: 'appellant-case',
		horizonFolderId: null
	};
}

function buildAjvValidator() {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((acc, current) => ({ ...acc, ...current }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);
	return ajv;
}

function validateOrThrow(ajv, schemaName, payload, label) {
	const valid = ajv.validate(schemaName, payload);
	if (!valid) {
		const errors = ajv.errorsText(ajv.errors, { separator: '\n' });
		throw new Error(`${label} failed schema ${schemaName}:\n${errors}`);
	}
}

/**
 * @param {'HAS'|'S78'} [caseType]
 * @param {number} [documentsPerCase]
 * @param {number} [caseIndex]
 * @returns {{case: any, serviceUsers: any[], documents: any[]}}
 */
export const generateAppealsLoadTestMessages = (caseType = 'HAS', documentsPerCase = 2, caseIndex = 1) => {
	const caseSchema = caseType === 'HAS' ? HAS_SCHEMA : S78_SCHEMA;
	const ajv = buildAjvValidator();

	const casePayload = createCase(caseType, caseIndex);
	validateOrThrow(ajv, caseSchema, casePayload, `case[${caseIndex}]`);

	const serviceUsers = [
		createServiceUser(casePayload, 'Agent', caseIndex),
		createServiceUser(casePayload, 'Appellant', caseIndex)
	];

	for (const serviceUser of serviceUsers) {
		validateOrThrow(ajv, SERVICE_USER_SCHEMA, serviceUser, `${caseIndex} serviceUser[${serviceUser.role}]`);
	}

	const documents = [];
	for (let docIndex = 0; docIndex < documentsPerCase; docIndex += 1) {
		const document = createDocument(casePayload, caseIndex, docIndex);
		validateOrThrow(ajv, DOCUMENT_SCHEMA, document, `document[${caseIndex}][${docIndex}]`);
		documents.push(document);
	}

	return {
		case: casePayload,
		serviceUsers,
		documents
	};
};
