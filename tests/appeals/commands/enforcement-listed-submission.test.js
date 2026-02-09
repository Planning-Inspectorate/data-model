import { describe, it } from 'node:test';
import assert from 'node:assert';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../../src/index.js';

const schema = 'appellant-submission.schema.json';

const user = {
	salutation: 'nisi aute tempor Ut',
	firstName: null,
	lastName: null,
	emailAddress: null,
	telephoneNumber: 'irure',
	organisation: null,
	serviceUserType: 'Appellant'
};

const document = {
	documentId: 'Lorem',
	filename: 'sunt',
	originalFilename: 'dolore fugiat',
	size: 663667,
	mime: 'consequat veniam ipsum ullamco sint',
	documentURI: 'reprehenderit',
	dateCreated: '1904-04-10T14:53:32.0Z',
	documentType: 'priorCorrespondenceWithPINS'
};

const exampleEnforcementListedSubmissionSchema = {
	casedata: {
		caseType: 'F',
		submissionId: '4b78fc58-fcb0-70d6-5dea-b9b774f802d6',
		caseProcedure: 'written',
		lpaCode: 'cupidatat',
		caseSubmittedDate: '1890-12-28T22:49:47.0Z',
		enforcementNotice: true,
		enforcementReference: '12345',
		enforcementIssueDate: '1890-12-28T22:49:47.0Z',
		enforcementEffectiveDate: '1890-12-28T22:49:47.0Z',
		contactPlanningInspectorateDate: null,
		interestInLand: 'owner',
		caseSubmissionDueDate: null,
		siteAddressLine1: 'occaecat aliquip non pariatur consequat',
		siteAddressLine2: null,
		siteAddressTown: 'et',
		siteAddressCounty: 'velit',
		siteAddressPostcode: 'nisi minim laboris sed',
		siteGridReferenceEasting: '357144',
		siteGridReferenceNorthing: '400534',
		contactAddressLine1: null,
		contactAddressLine2: null,
		contactAddressTown: null,
		contactAddressCounty: null,
		contactAddressPostcode: null,
		siteAccessDetails: ['laborum', 'aute velit quis', 'dolor'],
		siteSafetyDetails: ['velit aliqua', 'qui', 'tempor Duis ut dolore', 'anim Ut in ea', 'eiusmod laborum'],
		appellantCostsAppliedFor: false,
		appellantProcedurePreference: null,
		appellantProcedurePreferenceDetails: 'eiusmod ex exercitation',
		appellantProcedurePreferenceDuration: 10816414.941069126,
		appellantProcedurePreferenceWitnessCount: -91300569.36444478,
		statusPlanningObligation: 'proident aute',
		nearbyCaseReferences: ['incididunt'],
		namedIndividuals: [
			{
				firstName: 'Bob',
				lastName: 'Bobberson',
				interestInLand: 'owner'
			}
		],
		appealGrounds: [
			{
				groundRef: 'a',
				factsForGround: 'I like Christmas'
			}
		]
	},
	documents: [document],
	users: [user]
};

describe(' listed building submission command schema', () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema for enforcement listed building', () => {
		const validationResult = ajv.validate(schema, exampleEnforcementListedSubmissionSchema);
		assert.strictEqual(validationResult, true);
	});

	it('should allow only site address', () => {
		const test = structuredClone(exampleEnforcementListedSubmissionSchema);
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should reject missing root property', () => {
		const test = structuredClone(exampleEnforcementListedSubmissionSchema);
		delete test.casedata.caseType;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseType'"),
			true
		);
	});

	it('should reject missing nested property', () => {
		const test = structuredClone(exampleEnforcementListedSubmissionSchema);
		delete test.casedata.caseProcedure;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseProcedure'"),
			true
		);
	});

	it('should allow additional props', () => {
		const test = structuredClone(exampleEnforcementListedSubmissionSchema);
		test.test = 1;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});
});
