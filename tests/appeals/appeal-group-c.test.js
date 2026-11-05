import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { loadAllSchemasSync } from '../../src/index.js';

const schema = 'appeal-group-c.schema.json';

const baseAppealGroupC = {
	caseId: 600123,
	caseReference: '6000001',
	caseStatus: 'validation',
	caseType: 'W',
	caseProcedure: 'hearing',
	lpaCode: 'Q9999',
	caseOfficerId: 'officer-123',
	inspectorId: 'inspector-456',
	padsSapId: 'pads-789',
	allocationLevel: 'A',
	allocationBand: 1,
	caseSpecialisms: ['Environmental', 'SSSI'],
	caseCreatedDate: '2026-07-27T20:30:00.000Z',
	caseSubmittedDate: '2026-07-27T20:30:00.000Z',
	caseUpdatedDate: '2026-07-27T20:30:00.000Z',
	caseValidDate: '2026-07-27T20:30:00.000Z',
	caseValidationDate: '2026-07-27T20:30:00.000Z',
	caseValidationOutcome: 'valid',
	caseStartedDate: '2026-07-27T20:30:00.000Z',
	casePublishedDate: '2026-07-27T20:30:00.000Z',
	lpaQuestionnaireCreatedDate: '2026-07-27T20:30:00.000Z',
	lpaQuestionnaireSubmittedDate: '2026-07-27T20:30:00.000Z',
	lpaQuestionnaireValidationOutcome: 'complete',
	lpaQuestionnaireDueDate: '2026-07-27T20:30:00.000Z',
	caseWithdrawnDate: null,
	caseTransferredDate: null,
	caseDecisionOutcomeDate: null,
	caseDecisionOutcome: null,
	caseCompletedDate: null,
	siteAddressLine1: '1 High Street',
	siteAddressLine2: null,
	siteAddressTown: 'Bristol',
	siteAddressCounty: 'City of Bristol',
	siteAddressPostcode: 'BS1 6PN',
	caseManagementConferenceDate: null,
	statementDueDate: null,
	proofsOfEvidenceDueDate: null,
	finalCommentsDueDate: null,
	interestedPartyRepsDueDate: null,
	statementOfCommonGroundDueDate: null,
	planningObligationDueDate: null,
	typeOfPlanningApplication: 'environmental',
	caseSubType: 'environmental_permitting',
	environmentalPermitSubtypes: 'flood_risk_activity',
	enforcementNoticeReference: 'ENF-2026-01',
	applicationReference: 'APP-2026-99',
	linkedCaseStatus: 'lead',
	leadCaseReference: null
};

/**
 * Setup Ajv instance with all schemas
 *
 * @returns {Ajv}
 */
function setupAjv() {
	const ajv = new Ajv({ allErrors: true });
	addFormats(ajv);
	const allSchemas = loadAllSchemasSync();
	const schemas = Object.values(allSchemas).reduce((a, c) => ({ ...a, ...c }), {});
	for (const s of Object.values(schemas)) {
		ajv.addSchema(s);
	}
	return ajv;
}

describe('appeal-group-c.schema.json', () => {
	it('should allow valid Group C appeal schema', () => {
		const ajv = setupAjv();
		const valid = ajv.validate(schema, structuredClone(baseAppealGroupC));
		assert.strictEqual(valid, true, JSON.stringify(ajv.errors));
	});

	it('should enforce caseReference 7-digit pattern starting with 6', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		// Valid references
		testCase.caseReference = '6000000';
		assert.strictEqual(ajv.validate(schema, testCase), true);
		testCase.caseReference = '6999999';
		assert.strictEqual(ajv.validate(schema, testCase), true);

		// Invalid references
		testCase.caseReference = '7000001';
		assert.strictEqual(ajv.validate(schema, testCase), false);
		testCase.caseReference = '60001';
		assert.strictEqual(ajv.validate(schema, testCase), false);
		testCase.caseReference = '60000001';
		assert.strictEqual(ajv.validate(schema, testCase), false);
		testCase.caseReference = 'abcdefg';
		assert.strictEqual(ajv.validate(schema, testCase), false);
	});

	it('should allow null for nullable required fields', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		testCase.caseId = null;
		testCase.caseProcedure = null;
		testCase.caseSubmittedDate = null;
		testCase.caseUpdatedDate = null;
		testCase.caseValidDate = null;
		testCase.caseValidationDate = null;
		testCase.caseValidationOutcome = null;
		testCase.caseStartedDate = null;
		testCase.casePublishedDate = null;
		testCase.lpaQuestionnaireCreatedDate = null;
		testCase.lpaQuestionnaireSubmittedDate = null;
		testCase.lpaQuestionnaireValidationOutcome = null;
		testCase.lpaQuestionnaireDueDate = null;
		testCase.lpaCode = null;
		testCase.caseOfficerId = null;
		testCase.inspectorId = null;
		testCase.padsSapId = null;
		testCase.allocationLevel = null;
		testCase.allocationBand = null;
		testCase.caseSpecialisms = null;
		testCase.siteAddressLine1 = null;
		testCase.siteAddressLine2 = null;
		testCase.siteAddressTown = null;
		testCase.siteAddressCounty = null;
		testCase.siteAddressPostcode = null;

		assert.strictEqual(ajv.validate(schema, testCase), true, JSON.stringify(ajv.errors));
	});

	it('should enforce required fields cannot be missing', () => {
		const ajv = setupAjv();
		const requiredFields = [
			'caseId',
			'caseReference',
			'caseStatus',
			'caseType',
			'caseProcedure',
			'lpaCode',
			'caseOfficerId',
			'inspectorId',
			'caseCreatedDate'
		];

		for (const field of requiredFields) {
			const testCase = structuredClone(baseAppealGroupC);
			delete testCase[field];
			assert.strictEqual(ajv.validate(schema, testCase), false, `Expected missing ${field} to fail`);
		}
	});

	it('should allow optional fields to be omitted', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		delete testCase.caseManagementConferenceDate;
		delete testCase.statementDueDate;
		delete testCase.proofsOfEvidenceDueDate;
		delete testCase.finalCommentsDueDate;
		delete testCase.interestedPartyRepsDueDate;
		delete testCase.statementOfCommonGroundDueDate;
		delete testCase.planningObligationDueDate;
		delete testCase.typeOfPlanningApplication;
		delete testCase.caseSubType;
		delete testCase.environmentalPermitSubtypes;
		delete testCase.enforcementNoticeReference;
		delete testCase.applicationReference;
		delete testCase.linkedCaseStatus;
		delete testCase.leadCaseReference;

		assert.strictEqual(ajv.validate(schema, testCase), true, JSON.stringify(ajv.errors));
	});

	it('should validate decision outcomes including new Group C outcomes', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		const validOutcomes = [
			'allowed',
			'split_decision',
			'dismissed',
			'invalid',
			'notice_upheld',
			'planning_permission_granted',
			'quashed_on_legal_grounds',
			'notice_varied_and_upheld',
			'notice_quashed',
			null
		];

		for (const outcome of validOutcomes) {
			testCase.caseDecisionOutcome = outcome;
			assert.strictEqual(ajv.validate(schema, testCase), true, `Outcome ${outcome} should be valid`);
		}

		testCase.caseDecisionOutcome = 'unknown_outcome';
		assert.strictEqual(ajv.validate(schema, testCase), false);
	});

	it('should validate typeOfPlanningApplication enums', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		const validTypes = [
			'full-appeal',
			'householder-planning',
			'outline-planning',
			'prior-approval',
			'reserved-matters',
			'removal-or-variation-of-conditions',
			'listed-building',
			'minor-commercial-development',
			'advertisement',
			'lawful-development-certificate',
			'discontinuance-notice',
			'permission-in-principle',
			'tree-preservation-order',
			'tree-replacement-notice',
			'high-hedge-appeal',
			'hedgerows-appeal',
			'community-infrastructure-levy',
			'planning-obligation',
			'environmental',
			null
		];

		for (const type of validTypes) {
			testCase.typeOfPlanningApplication = type;
			assert.strictEqual(ajv.validate(schema, testCase), true, `typeOfPlanningApplication ${type} should be valid`);
		}

		testCase.typeOfPlanningApplication = 'invalid_planning_app_type';
		assert.strictEqual(ajv.validate(schema, testCase), false);
	});

	it('should validate caseSubType enums', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		const validSubTypes = [
			'anti_pollution_works_notice',
			'contaminated_land',
			'marine_licensing',
			'waste_carriers',
			'water_abstraction',
			'environmental_liability',
			'environmental_permitting',
			'hazardous_substances',
			'silage_and_slurry',
			'sssi',
			'affordable_housing',
			null
		];

		for (const subType of validSubTypes) {
			testCase.caseSubType = subType;
			assert.strictEqual(ajv.validate(schema, testCase), true, `SubType ${subType} should be valid`);
		}

		testCase.caseSubType = 'invalid_sub_type';
		assert.strictEqual(ajv.validate(schema, testCase), false);
	});

	it('should validate environmentalPermitSubtypes enums', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		const validPermitSubtypes = [
			'refusal_of_a_permit',
			'deemed_refusal',
			'conditions_attached_to_a_permit',
			'decision_to_impose_conditions_by_regulator',
			'deemed_withdrawal',
			'enforcement_notice',
			'suspension_notice',
			'closure_notice',
			'flood_risk_activity',
			'revocation_notice',
			'prohibition_notice',
			null
		];

		for (const permitType of validPermitSubtypes) {
			testCase.environmentalPermitSubtypes = permitType;
			assert.strictEqual(ajv.validate(schema, testCase), true, `Permit subtype ${permitType} should be valid`);
		}

		testCase.environmentalPermitSubtypes = 'invalid_permit';
		assert.strictEqual(ajv.validate(schema, testCase), false);
	});

	it('should allow additional properties', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);
		testCase.customExtraProperty = 'extraValue';
		assert.strictEqual(ajv.validate(schema, testCase), true);
	});

	it('should allow appellantCase and lpaQuestionnaire in appeal-document schema', () => {
		const ajv = setupAjv();
		const docSchema = 'appeal-document.schema.json';

		const baseDoc = {
			documentId: 'doc-1',
			caseId: 600123,
			caseReference: '6000001',
			version: 1,
			filename: 'appeal-form.pdf',
			originalFilename: 'appeal-form.pdf',
			size: 1024,
			mime: 'application/pdf',
			documentURI: 'https://example.com/doc.pdf',
			publishedDocumentURI: null,
			virusCheckStatus: 'scanned',
			fileMD5: 'hash123',
			dateCreated: '2026-07-27T20:30:00.000Z',
			dateReceived: '2026-07-27T20:30:00.000Z',
			datePublished: null,
			lastModified: '2026-07-27T20:30:00.000Z',
			caseType: 'W',
			redactedStatus: 'not_redacted',
			sourceSystem: 'back-office-appeals',
			origin: 'citizen',
			owner: 'appellant',
			author: 'appellant',
			description: 'Appeal submission document',
			caseStage: 'appellant-case',
			horizonFolderId: null,
			documentType: 'appellantCase'
		};

		assert.strictEqual(ajv.validate(docSchema, baseDoc), true, JSON.stringify(ajv.errors));
		baseDoc.documentType = 'lpaQuestionnaire';
		assert.strictEqual(ajv.validate(docSchema, baseDoc), true, JSON.stringify(ajv.errors));
	});

	it('should validate caseType enums including new letter codes', () => {
		const ajv = setupAjv();
		const testCase = structuredClone(baseAppealGroupC);

		const validCaseTypes = [
			'C',
			'D',
			'F',
			'G',
			'H',
			'L',
			'Q',
			'S',
			'V',
			'W',
			'X',
			'Y',
			'Z',
			'ZA',
			'ZP',
			'TPO',
			'TRN',
			'HH',
			'HR',
			'ENV'
		];

		for (const caseType of validCaseTypes) {
			testCase.caseType = caseType;
			assert.strictEqual(ajv.validate(schema, testCase), true, `caseType ${caseType} should be valid`);
		}

		testCase.caseType = 'INVALID_CODE';
		assert.strictEqual(ajv.validate(schema, testCase), false);
	});
});
