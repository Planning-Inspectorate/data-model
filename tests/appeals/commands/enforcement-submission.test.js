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

const exampleEnforcementSubmissionSchema = {
	casedata: {
		caseType: 'C',
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
		writtenOrVerbalPermission: null,
		descriptionOfAllegedBreach: 'a new chimney',
		applicationMadeAndFeePaid: true,
		applicationDevelopmentAllOrPart: 'all-of-the-development',
		originalDevelopmentDescription: 'in amet',
		changedDevelopmentDescription: true,
		applicationReference: '43010/APP/1/290572',
		applicationDate: '1890-12-28T22:49:47.0Z',
		applicationDecision: 'granted',
		applicationDecisionAppealed: false,
		applicationDecisionDate: '1890-12-28T22:49:47.0Z',
		appealDecisionDate: null,
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
		contactGridReferenceEasting: null,
		contactGridReferenceNorthing: null,
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
				interestInLand: 'owner',
				writtenOrVerbalPermission: 'yes'
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

describe('enforcement submission command schema', () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema for enforcement', () => {
		const validationResult = ajv.validate(schema, exampleEnforcementSubmissionSchema);
		assert.strictEqual(validationResult, true);
	});

	it('should enforce eastings-northings pattern', () => {
		const invalidPatterns = [
			{ easting: 'abc123', northing: '400534', description: 'easting with letters' },
			{ easting: '1234567*', northing: '400534', description: 'easting too long' },
			{ easting: '12345', northing: '400534', description: 'easting too short' },
			{ easting: '357144', northing: 'xyz123', description: 'northing with letters' },
			{ easting: '357144', northing: '12345678', description: 'northing too long' },
			{ easting: '357144', northing: '12345', description: 'northing too short' },
			{ easting: '', northing: '400534', description: 'empty easting' },
			{ easting: '357144', northing: '', description: 'empty northing' }
		];

		for (const pattern of invalidPatterns) {
			const test = structuredClone(exampleEnforcementSubmissionSchema);
			test.casedata.siteGridReferenceEasting = pattern.easting;
			test.casedata.siteGridReferenceNorthing = pattern.northing;

			const validationResult = ajv.validate(schema, test);
			assert.strictEqual(validationResult, false, `Expected validation to fail for ${pattern.description}`);
		}
	});

	it('should allow only eastings-northings', () => {
		const test = structuredClone(exampleEnforcementSubmissionSchema);
		test.casedata.siteAddressPostcode = undefined;
		test.casedata.siteAddressLine1 = null;
		test.casedata.siteAddressTown = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should allow only site address', () => {
		const test = structuredClone(exampleEnforcementSubmissionSchema);
		test.casedata.siteGridReferenceEasting = undefined;
		test.casedata.siteGridReferenceNorthing = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should enforce either site address or easting-northing', () => {
		const test = structuredClone(exampleEnforcementSubmissionSchema);
		test.casedata.siteAddressPostcode = undefined;
		test.casedata.siteAddressLine1 = null;
		test.casedata.siteAddressTown = null;
		test.casedata.siteGridReferenceEasting = undefined;
		test.casedata.siteGridReferenceNorthing = null;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
	});

	it('should reject missing root property', () => {
		const test = structuredClone(exampleEnforcementSubmissionSchema);
		delete test.casedata.caseType;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseType'"),
			true
		);
	});

	it('should reject missing nested property', () => {
		const test = structuredClone(exampleEnforcementSubmissionSchema);
		delete test.casedata.caseProcedure;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseProcedure'"),
			true
		);
	});

	it('should allow additional props', () => {
		const test = structuredClone(exampleEnforcementSubmissionSchema);
		test.test = 1;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});
});
