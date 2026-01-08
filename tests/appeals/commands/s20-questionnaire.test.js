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

const exampleS20QuestionnaireSchema = {
	casedata: {
		caseType: 'Y',
		caseReference: 'est ea elit in nulla',
		lpaQuestionnaireSubmittedDate: '2026-01-01T12:00:00.000Z',
		siteAccessDetails: ['velit adipisicing fugiat dolor ullamco'],
		siteSafetyDetails: ['ut', 'dolore ut sint Duis', 'magna consequat quis laboris officia'],
		nearbyCaseReferences: ['nulla', 'incididunt eu nostrud eiusmod', 'exercitation', 'Ut nostrud', 'eiusmod cillum eu'],
		neighbouringSiteAddresses: [
			{
				neighbouringSiteAddressLine1: '123 High Street',
				neighbouringSiteAddressLine2: 'Second line of address of the site',
				neighbouringSiteAddressTown: 'Maidstone',
				neighbouringSiteAddressCounty: 'Kent',
				neighbouringSiteAddressPostcode: 'MD21 5XY',
				neighbouringSiteAccessDetails: 'Ongoing road works at this address',
				neighbouringSiteSafetyDetails: 'Ongoing road works at this address'
			}
		],
		isCorrectAppealType: true,
		affectedListedBuildingNumbers: ['12345', '67890'],
		isGreenBelt: true,
		inConservationArea: true,
		newConditionDetails: 'Test',
		notificationMethod: ['irure', 'cillum tempor incididunt labore in'],
		lpaCostsAppliedFor: true,
		lpaStatement: 'ex laborum cupidatat',
		changedListedBuildingNumbers: ['54321', '09876'],
		affectsScheduledMonument: true,
		hasProtectedSpecies: true,
		isAonbNationalLandscape: true,
		designatedSitesNames: ['quis nulla eu officia exercitation'],
		hasTreePreservationOrder: true,
		isGypsyOrTravellerSite: true,
		isPublicRightOfWay: true,
		eiaEnvironmentalImpactSchedule: 'schedule-2',
		eiaDevelopmentDescription: 'production-processing-of-metals',
		eiaSensitiveAreaDetails: 'test',
		eiaColumnTwoThreshold: true,
		eiaScreeningOpinion: true,
		eiaRequiresEnvironmentalStatement: true,
		eiaCompletedEnvironmentalStatement: true,
		hasStatutoryConsultees: true,
		consultedBodiesDetails: 'in in labore irure nostrud',
		hasConsultationResponses: true,
		hasEmergingPlan: true,
		hasSupplementaryPlanningDocs: true,
		hasInfrastructureLevy: true,
		isInfrastructureLevyFormallyAdopted: true,
		infrastructureLevyAdoptedDate: '1913-06-14T10:40:33.0Z',
		infrastructureLevyExpectedDate: '1912-06-14T10:40:33.0Z',
		lpaProcedurePreference: 'written',
		lpaProcedurePreferenceDetails: 'in reprehenderit',
		lpaProcedurePreferenceDuration: -34480053.16630782,
		preserveGrantLoan: true,
		consultHistoricEngland: true
	},
	documents: [document]
};

describe('S20 questionnaire command schema', () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema for S20', () => {
		const validationResult = ajv.validate(schema, exampleS20QuestionnaireSchema);
		assert.strictEqual(validationResult, true);
	});

	it('should reject missing caseReference', () => {
		const test = structuredClone(exampleS20QuestionnaireSchema);
		delete test.casedata.caseReference;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseReference'"),
			true
		);
	});

	it('should allow additional props', () => {
		const test = structuredClone(exampleS20QuestionnaireSchema);
		test.test = 1;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});
});
