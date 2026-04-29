import { describe, it } from 'node:test';
import assert from 'node:assert';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../src/index.js';

const schema = 'appeal-s78.schema.json';

const expeditedAppealPayload = {
	caseId: 1001,
	caseReference: '7000001',
	submissionId: '7f45748c-2342-4b59-b934-ad6183e8d834',
	caseStatus: 'validation',
	caseType: 'S',
	caseProcedure: 'writtenPart1', // New procedure type
	lpaCode: 'Q9999',
	caseOfficerId: 'officer-1',
	inspectorId: 'inspector-1',
	allocationLevel: 'A',
	allocationBand: 1,
	caseSpecialisms: ['Access'],
	caseSubmittedDate: '2024-01-01T12:00:00.000Z',
	caseCreatedDate: '2024-01-01T12:00:00.000Z',
	caseUpdatedDate: '2024-01-01T12:00:00.000Z',
	caseValidDate: '2024-01-02T12:00:00.000Z',
	caseValidationDate: '2024-01-02T12:00:00.000Z',
	caseValidationOutcome: 'valid',
	caseValidationInvalidDetails: null,
	caseValidationIncompleteDetails: null,
	caseExtensionDate: null,
	caseStartedDate: '2024-01-03T12:00:00.000Z',
	casePublishedDate: null,
	linkedCaseStatus: null,
	leadCaseReference: null,
	lpaQuestionnaireDueDate: '2024-01-10T12:00:00.000Z',
	lpaQuestionnaireSubmittedDate: '2024-01-09T12:00:00.000Z',
	lpaQuestionnaireCreatedDate: '2024-01-09T12:00:00.000Z',
	lpaQuestionnairePublishedDate: '2024-01-10T12:00:00.000Z',
	lpaQuestionnaireValidationOutcome: 'complete',
	lpaQuestionnaireValidationOutcomeDate: '2024-01-10T12:00:00.000Z',
	lpaQuestionnaireValidationDetails: null,
	lpaStatement: 'LPA Statement content',
	listOfDocumentsBeforeDecision: null,
	caseWithdrawnDate: null,
	caseTransferredDate: null,
	transferredCaseClosedDate: null,
	caseDecisionOutcomeDate: null,
	caseDecisionPublishedDate: null,
	caseDecisionOutcome: null,
	caseCompletedDate: null,
	enforcementNotice: false,
	applicationReference: 'APP/2024/0001',
	applicationDate: '2023-12-01T12:00:00.000Z',
	applicationDecision: 'refused',
	applicationDecisionDate: '2023-12-20T12:00:00.000Z',
	caseSubmissionDueDate: '2024-06-20T12:00:00.000Z',
	siteAddressLine1: '123 Test Street',
	siteAddressTown: 'Test Town',
	siteAddressPostcode: 'TE1 1ST',
	siteAccessDetails: ['Standard access'],
	siteSafetyDetails: null,
	siteAreaSquareMetres: 100,
	floorSpaceSquareMetres: 50,
	isCorrectAppealType: true,
	isGreenBelt: false,
	inConservationArea: false,
	ownsAllLand: true,
	ownsSomeLand: false,
	knowsOtherOwners: 'No',
	knowsAllOwners: 'Yes',
	advertisedAppeal: false,
	notificationMethod: ['notice'],
	ownersInformed: true,
	originalDevelopmentDescription: 'Description of development',
	changedDevelopmentDescription: false,
	newConditionDetails: null,
	nearbyCaseReferences: [],
	neighbouringSiteAddresses: [],
	affectedListedBuildingNumbers: [],
	changedListedBuildingNumbers: [],
	appellantCostsAppliedFor: false,
	lpaCostsAppliedFor: false,
	agriculturalHolding: false,
	tenantAgriculturalHolding: false,
	otherTenantsAgriculturalHolding: false,
	informedTenantsAgriculturalHolding: false,
	appellantProcedurePreference: 'written',
	appellantProcedurePreferenceDetails: null,
	appellantProcedurePreferenceDuration: null,
	appellantProcedurePreferenceWitnessCount: null,
	statusPlanningObligation: 'Finalised',
	affectsScheduledMonument: false,
	hasProtectedSpecies: false,
	isAonbNationalLandscape: false,
	designatedSitesNames: [],
	isGypsyOrTravellerSite: false,
	isPublicRightOfWay: false,
	eiaEnvironmentalImpactSchedule: 'schedule-2',
	eiaDevelopmentDescription: 'infrastructure-projects',
	eiaSensitiveAreaDetails: null,
	eiaColumnTwoThreshold: false,
	eiaScreeningOpinion: false,
	eiaRequiresEnvironmentalStatement: false,
	eiaCompletedEnvironmentalStatement: false,
	hasStatutoryConsultees: false,
	consultedBodiesDetails: null,
	hasInfrastructureLevy: false,
	isInfrastructureLevyFormallyAdopted: false,
	infrastructureLevyAdoptedDate: null,
	infrastructureLevyExpectedDate: null,
	lpaProcedurePreference: 'written',
	lpaProcedurePreferenceDetails: null,
	lpaProcedurePreferenceDuration: null,
	caseworkReason: null,
	developmentType: 'minor-dwellings',
	importantInformation: null,
	jurisdiction: 'England',
	redeterminedIndicator: 'No',
	dateCostsReportDespatched: null,
	dateNotRecoveredOrDerecovered: null,
	dateRecovered: null,
	originalCaseDecisionDate: null,
	targetDate: '2024-04-01T12:00:00.000Z',
	reasonForAppealAppellant: 'This is an expedited appeal because...', // New attribute
	screeningOpinionIndicatesEiaRequired: false, // New attribute
	significantChangesAffectingApplicationAppellant: [
		// New multi-select
		{ value: 'adopted-a-new-local-plan', comment: 'Plan adopted last month' },
		{ value: 'other', comment: 'General policy shift' }
	],
	significantChangesAffectingApplicationLpa: null, // Optional
	appellantCommentsSubmittedDate: null,
	appellantStatementSubmittedDate: null,
	appellantProofsSubmittedDate: null,
	lpaCommentsSubmittedDate: '2024-01-15T12:00:00.000Z',
	lpaProofsSubmittedDate: '2024-01-15T12:00:00.000Z',
	lpaStatementSubmittedDate: '2024-01-15T12:00:00.000Z',
	siteNoticesSentDate: '2024-01-05T12:00:00.000Z',
	reasonForNeighbourVisits: 'To check impact on privacy',
	numberOfResidencesNetChange: 1,
	siteGridReferenceEasting: '357144',
	siteGridReferenceNorthing: '400534',
	siteViewableFromRoad: true,
	siteWithinSSSI: false,
	typeOfPlanningApplication: 'full-appeal'
	// statementDueDate, interestedPartyRepsDueDate, finalCommentsDueDate, proofsOfEvidenceDueDate omitted (now optional)
};

describe('Expedited S78 Appeals', () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid expedited appeal payload with new attributes and missing optional due dates', () => {
		const test = structuredClone(expeditedAppealPayload);
		const validationResult = ajv.validate(schema, test);
		if (!validationResult) {
			console.error(ajv.errors);
		}
		assert.strictEqual(validationResult, true);
	});

	it('should allow writtenPart2 procedure type', () => {
		const test = structuredClone(expeditedAppealPayload);
		test.caseProcedure = 'writtenPart2';
		const validationResult = ajv.validate(schema, test);
		if (!validationResult) {
			console.error(ajv.errors);
		}
		assert.strictEqual(validationResult, true);
	});

	it('should allow null for new attributes', () => {
		const test = structuredClone(expeditedAppealPayload);
		test.reasonForAppealAppellant = null;
		test.screeningOpinionIndicatesEiaRequired = null;
		test.significantChangesAffectingApplicationAppellant = null;
		test.significantChangesAffectingApplicationLpa = null;
		const validationResult = ajv.validate(schema, test);
		if (!validationResult) {
			console.error(ajv.errors);
		}
		assert.strictEqual(validationResult, true);
	});

	it('should enforce enum for significantChangesAffectingApplication', () => {
		const test = structuredClone(expeditedAppealPayload);
		test.significantChangesAffectingApplicationAppellant = [{ value: 'invalid-enum-value', comment: 'some comment' }];
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	it('should allow new document types in appeal-document schema', () => {
		const docSchema = 'appeal-document.schema.json';
		const testDoc = {
			documentId: 'doc-1',
			caseId: 1001,
			caseReference: '7000001',
			version: 1,
			filename: 'test.pdf',
			originalFilename: 'test.pdf',
			size: 1024,
			mime: 'application/pdf',
			documentURI: 'http://example.com/test.pdf',
			publishedDocumentURI: null,
			virusCheckStatus: 'scanned',
			fileMD5: 'hash',
			dateCreated: '2024-01-01T12:00:00.000Z',
			dateReceived: '2024-01-01T12:00:00.000Z',
			datePublished: null,
			lastModified: '2024-01-01T12:00:00.000Z',
			caseType: 'S',
			redactedStatus: 'not_redacted',
			documentType: 'eiaEnvironmentalStatementAppellant', // New type
			sourceSystem: 'back-office-appeals',
			origin: 'citizen',
			owner: 'appellant',
			author: 'appellant',
			description: 'Other supporting info',
			caseStage: 'appellant-case',
			horizonFolderId: null
		};

		const validationResult1 = ajv.validate(docSchema, testDoc);
		assert.strictEqual(validationResult1, true);
	});
});
