import { describe, it } from 'node:test';
import assert from 'node:assert';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../src/index.js';

const schema = 'appeal-s78.schema.json';

const appealS78 = {
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

describe(schema, () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema', () => {
		const test = structuredClone(appealS78);
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
			const test = structuredClone(appealS78);
			test.siteGridReferenceEasting = pattern.easting;
			test.siteGridReferenceNorthing = pattern.northing;

			const validationResult = ajv.validate(schema, test);
			assert.strictEqual(validationResult, false, `Expected validation to fail for ${pattern.description}`);
		}
	});

	it('should allow only eastings-northings', () => {
		const test = structuredClone(appealS78);
		test.siteAddressPostcode = undefined;
		test.siteAddressLine1 = null;
		test.siteAddressTown = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should allow only site address', () => {
		const test = structuredClone(appealS78);
		test.siteGridReferenceEasting = undefined;
		test.siteGridReferenceNorthing = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should enforce either site address or easting-northing', () => {
		const test = structuredClone(appealS78);
		test.siteAddressPostcode = undefined;
		test.siteAddressLine1 = null;
		test.siteAddressTown = null;
		test.siteGridReferenceEasting = undefined;
		test.siteGridReferenceNorthing = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	it('should allow additional props', () => {
		const test = structuredClone(appealS78);
		test.test = 1; // additional unknown prop allowed
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should not allow custom advertType', () => {
		const test = structuredClone(appealS78);
		test.advertDetails[0].advertType = 'something';
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	const groupBAppealTypes = ['C', 'F', 'H', 'W', 'X', 'Y', 'Z'];
	groupBAppealTypes.forEach((appealType) => {
		it(`should support group B appeal type ${appealType}`, () => {
			const test = structuredClone(appealS78);
			test.caseType = appealType;
			const validationResult = ajv.validate(schema, test);
			assert.strictEqual(validationResult, true);
		});
	});
});
