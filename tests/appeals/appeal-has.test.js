import { describe, it } from 'node:test';
import assert from 'node:assert';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../src/index.js';

const schema = 'appeal-has.schema.json';

const appealHas = {
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
		},
		{
			neighbouringSiteAddressLine1: 'et adipisicing dolore',
			neighbouringSiteAddressLine2: null,
			neighbouringSiteAddressTown: 'cupidatat dolore',
			neighbouringSiteAddressCounty: null,
			neighbouringSiteAddressPostcode: 'cupidatat voluptate esse ad amet',
			neighbouringSiteAccessDetails: 'labore',
			neighbouringSiteSafetyDetails: 'deserunt fugiat'
		},
		{
			neighbouringSiteAddressLine1: 'esse in pariatur mollit',
			neighbouringSiteAddressLine2: 'ad aliquip in',
			neighbouringSiteAddressTown: 'ullamco',
			neighbouringSiteAddressCounty: 'ut aute',
			neighbouringSiteAddressPostcode: 'Lorem nostrud ipsum aliquip',
			neighbouringSiteAccessDetails: 'dolore irure nisi',
			neighbouringSiteSafetyDetails: 'ex'
		},
		{
			neighbouringSiteAddressLine1: 'est pariatur Lorem minim in',
			neighbouringSiteAddressLine2: 'Ut',
			neighbouringSiteAddressTown: 'eiusmod minim nostrud Excepteur nulla',
			neighbouringSiteAddressCounty: 'officia',
			neighbouringSiteAddressPostcode: 'non deserunt',
			neighbouringSiteAccessDetails: null,
			neighbouringSiteSafetyDetails: 'culpa occaecat'
		},
		{
			neighbouringSiteAddressLine1: 'minim cillum eu tempor et',
			neighbouringSiteAddressLine2: 'non adipisicing nisi in dolore',
			neighbouringSiteAddressTown: 'irure in',
			neighbouringSiteAddressCounty: null,
			neighbouringSiteAddressPostcode: 'commodo in et Excepteur',
			neighbouringSiteAccessDetails: null,
			neighbouringSiteSafetyDetails: 'ex pariatur enim ipsum voluptate'
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

describe(schema, () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema', () => {
		const test = structuredClone(appealHas);

		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should enforce eastings-northings pattern', () => {
		const invalidPatterns = [
			{ easting: 'abc123', northing: '400534', description: 'easting with letters' },
			{ easting: '12345678', northing: '400534', description: 'easting too long' },
			{ easting: '12345', northing: '400534', description: 'easting too short' },
			{ easting: '357144', northing: 'xyz123', description: 'northing with letters' },
			{ easting: '357144', northing: '12345678', description: 'northing too long' },
			{ easting: '357144', northing: '12345', description: 'northing too short' },
			{ easting: '', northing: '400534', description: 'empty easting' },
			{ easting: '357144', northing: '', description: 'empty northing' }
		];

		for (const pattern of invalidPatterns) {
			const test = structuredClone(appealHas);
			test.siteGridReferenceEasting = pattern.easting;
			test.siteGridReferenceNorthing = pattern.northing;

			const validationResult = ajv.validate(schema, test);
			assert.strictEqual(validationResult, false, `Expected validation to fail for ${pattern.description}`);
		}
	});

	it('should allow only eastings-northings', () => {
		const test = structuredClone(appealHas);
		test.siteAddressPostcode = undefined;
		test.siteAddressLine1 = null;
		test.siteAddressTown = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should allow only site address', () => {
		const test = structuredClone(appealHas);
		test.siteGridReferenceEasting = undefined;
		test.siteGridReferenceNorthing = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should enforce either site address or easting-northing', () => {
		const test = structuredClone(appealHas);
		test.siteAddressPostcode = undefined;
		test.siteAddressLine1 = null;
		test.siteAddressTown = null;
		test.siteGridReferenceEasting = undefined;
		test.siteGridReferenceNorthing = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	it('should allow additional props', () => {
		const test = structuredClone(appealHas);
		test.test = 1; // additional unknown prop allowed
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should not allow custom advertType', () => {
		const test = structuredClone(appealHas);
		test.advertDetails[0].advertType = 'something';
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	it('should not allow custom lpaProcedurePreference', () => {
		const test = structuredClone(appealHas);
		test.lpaProcedurePreference = 'something';
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	it('should enforce required props', () => {
		const test = structuredClone(appealHas);
		delete test.lpaCostsAppliedFor;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});
});
