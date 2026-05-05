import crypto from 'node:crypto';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../src/index.js';

const HAS_SCHEMA = 'appeal-has.schema.json';
const S78_SCHEMA = 'appeal-s78.schema.json';
const DOCUMENT_SCHEMA = 'appeal-document.schema.json';
const SERVICE_USER_SCHEMA = 'service-user.schema.json';

const now = new Date().toISOString();

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
	caseSubmittedDate: now,
	caseCreatedDate: now,
	caseUpdatedDate: now,
	caseValidDate: now,
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
	lpaQuestionnaireCreatedDate: now,
	lpaQuestionnairePublishedDate: now,
	lpaQuestionnaireValidationOutcome: 'incomplete',
	lpaQuestionnaireValidationOutcomeDate: now,
	lpaQuestionnaireValidationDetails: ['dolore cillum in anim adipisicing'],
	lpaStatement: 'Ut ipsum et',
	caseWithdrawnDate: null,
	caseTransferredDate: null,
	transferredCaseClosedDate: null,
	caseDecisionOutcomeDate: null,
	caseDecisionPublishedDate: null,
	caseDecisionOutcome: null,
	caseCompletedDate: null,
	enforcementNotice: null,
	applicationReference: 'eu',
	applicationDate: now,
	applicationDecision: 'refused',
	applicationDecisionDate: now,
	applicationDecisionDueDate: null,
	caseSubmissionDueDate: now,
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
	siteAreaSquareMetres: 123,
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
	lpaProcedurePreferenceDuration: 1,
	caseworkReason: 'elit reprehenderit',
	importantInformation: null,
	jurisdiction: null,
	redeterminedIndicator: null,
	dateCostsReportDespatched: null,
	dateNotRecoveredOrDerecovered: null,
	dateRecovered: null,
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
	caseSubmittedDate: now,
	caseCreatedDate: now,
	caseUpdatedDate: now,
	caseValidDate: null,
	caseValidationDate: null,
	caseValidationOutcome: null,
	caseValidationInvalidDetails: null,
	caseValidationIncompleteDetails: null,
	caseExtensionDate: null,
	caseStartedDate: now,
	casePublishedDate: null,
	linkedCaseStatus: 'lead',
	leadCaseReference: null,
	lpaQuestionnaireDueDate: null,
	lpaQuestionnaireSubmittedDate: null,
	lpaQuestionnaireCreatedDate: null,
	lpaQuestionnairePublishedDate: null,
	lpaQuestionnaireValidationOutcome: null,
	lpaQuestionnaireValidationOutcomeDate: null,
	lpaQuestionnaireValidationDetails: ['cupidatat dolore in', 'officia in nostrud non', 'eu amet velit labore aute'],
	lpaStatement: 'ipsum consectetur labore pariatur',
	listOfDocumentsBeforeDecision: null,
	caseWithdrawnDate: null,
	caseTransferredDate: null,
	transferredCaseClosedDate: null,
	caseDecisionOutcomeDate: null,
	caseDecisionPublishedDate: null,
	caseDecisionOutcome: null,
	caseCompletedDate: null,
	enforcementNotice: null,
	applicationReference: 'consequat ullamco in aute amet',
	applicationDate: now,
	applicationDecision: 'not_received',
	applicationDecisionDate: null,
	applicationDecisionDueDate: now,
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
	lpaProcedurePreferenceDuration: 12,
	caseworkReason: 'sit ipsum',
	importantInformation: null,
	jurisdiction: null,
	redeterminedIndicator: null,
	dateCostsReportDespatched: null,
	dateNotRecoveredOrDerecovered: null,
	dateRecovered: null,
	originalCaseDecisionDate: null,
	targetDate: null,
	appellantCommentsSubmittedDate: null,
	appellantStatementSubmittedDate: null,
	appellantProofsSubmittedDate: null,
	finalCommentsDueDate: null,
	interestedPartyRepsDueDate: null,
	lpaCommentsSubmittedDate: null,
	lpaProofsSubmittedDate: null,
	lpaStatementSubmittedDate: null,
	proofsOfEvidenceDueDate: null,
	siteNoticesSentDate: null,
	statementDueDate: null,
	caseManagementConferenceDate: null,
	numberOfResidencesNetChange: 59800248.893144846,
	siteGridReferenceEasting: '357144',
	siteGridReferenceNorthing: '400534',
	siteViewableFromRoad: null,
	siteWithinSSSI: null,
	typeOfPlanningApplication: 'full-appeal',
	developmentType: 'other-minor',
	statementOfCommonGroundDueDate: null,
	planningObligationDueDate: null,
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
	entity.caseCreatedDate = now;
	entity.caseUpdatedDate = now;
	entity.caseSubmittedDate = now;
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
