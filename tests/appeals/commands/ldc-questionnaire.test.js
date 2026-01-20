import { describe, it } from 'node:test';
import assert from 'node:assert';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../../src/index.js';

const schema = 'lpa-questionnaire.schema.json';

const document = {
	documentId: 'deserunt sint aliqua adipisicing dolore',
	filename: 'ut dolore',
	originalFilename: 'Lorem amet fugiat adipisicing Excepteur',
	size: -90476934,
	mime: 'magna labore exercitation ut',
	documentURI: 'ut reprehenderit',
	dateCreated: '1933-04-03T03:24:38.0Z',
	documentType: 'plansDrawings'
};

const exampleHasQuestionnaireSchema = {
	casedata: {
		caseType: 'X',
		caseReference: 'nisi incididunt cillum',
		lpaQuestionnaireSubmittedDate: '2026-04-03T03:24:38.0Z',
		siteAccessDetails: ['test'],
		siteSafetyDetails: ['test 2'],
		isCorrectAppealType: true,
		nearbyCaseReferences: ['1234567', '7654321'],
		neighbouringSiteAddresses: [
			{
				neighbouringSiteAddressLine1: 'commodo dolore incididunt',
				neighbouringSiteAddressLine2: 'est voluptate irure aliqua elit',
				neighbouringSiteAddressTown: 'labore aliquip ex incididunt nulla',
				neighbouringSiteAddressCounty: 'enim ut Duis ut ex',
				neighbouringSiteAddressPostcode: 'pariatur',
				neighbouringSiteAccessDetails: 'aliqua irure mollit consequat nisi',
				neighbouringSiteSafetyDetails: null
			}
		],
		reasonForNeighbourVisits: 'adipisicing in voluptate',
		hasInfrastructureLevy: true,
		isInfrastructureLevyFormallyAdopted: true,
		infrastructureLevyAdoptedDate: '1913-06-14T10:40:33.0Z',
		infrastructureLevyExpectedDate: '1912-06-14T10:40:33.0Z',
		lpaProcedurePreference: 'inquiry',
		lpaProcedurePreferenceDetails: 'in reprehenderit',
		lpaProcedurePreferenceDuration: -34480053.16630782,
		appealUnderActSection: 'proposed-use-of-a-development',
		lpaConsiderAppealInvalid: true,
		lpaAppealInvalidReasons: 'Reason(s) why LPA consider the appeal invalid'
	},
	documents: [document]
};

describe('LDC questionnaire command schema', () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema for LDC', () => {
		const validationResult = ajv.validate(schema, exampleHasQuestionnaireSchema);
		assert.strictEqual(validationResult, true);
	});

	it('should reject missing caseReference', () => {
		const test = structuredClone(exampleHasQuestionnaireSchema);
		delete test.casedata.caseReference;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseReference'"),
			true
		);
	});

	it('should allow additional props', () => {
		const test = structuredClone(exampleHasQuestionnaireSchema);
		test.test = 1;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});
});
