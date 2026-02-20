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

const exampleEnforcementListedQuestionnaireSchema = {
	casedata: {
		caseType: 'F',
		caseReference: 'est ea elit in nulla',
		lpaQuestionnaireSubmittedDate: null,
		siteAccessDetails: ['velit adipisicing fugiat dolor ullamco'],
		siteSafetyDetails: ['ut', 'dolore ut sint Duis', 'magna consequat quis laboris officia'],
		nearbyCaseReferences: ['nulla', 'incididunt eu nostrud eiusmod', 'exercitation', 'Ut nostrud', 'eiusmod cillum eu'],
		neighbouringSiteAddresses: null,
		isCorrectAppealType: true,
		affectedListedBuildingNumbers: null,
		isGreenBelt: null,
		inConservationArea: null,
		newConditionDetails: null,
		notificationMethod: ['irure', 'cillum tempor incididunt labore in'],
		lpaCostsAppliedFor: true,
		lpaStatement: 'ex laborum cupidatat',
		changedListedBuildingNumbers: null,
		affectsScheduledMonument: true,
		hasProtectedSpecies: false,
		isAonbNationalLandscape: true,
		designatedSitesNames: ['quis nulla eu officia exercitation'],
		hasTreePreservationOrder: null,
		isGypsyOrTravellerSite: true,
		isPublicRightOfWay: null,
		eiaEnvironmentalImpactSchedule: 'schedule-2',
		eiaDevelopmentDescription: 'production-processing-of-metals',
		eiaSensitiveAreaDetails: null,
		eiaColumnTwoThreshold: false,
		eiaScreeningOpinion: false,
		eiaRequiresEnvironmentalStatement: null,
		eiaCompletedEnvironmentalStatement: true,
		hasStatutoryConsultees: true,
		consultedBodiesDetails: 'in in labore irure nostrud',
		hasConsultationResponses: null,
		hasEmergingPlan: null,
		hasSupplementaryPlanningDocs: null,
		hasInfrastructureLevy: true,
		isInfrastructureLevyFormallyAdopted: false,
		infrastructureLevyAdoptedDate: '1913-06-14T10:40:33.0Z',
		infrastructureLevyExpectedDate: '1912-06-14T10:40:33.0Z',
		lpaProcedurePreference: null,
		lpaProcedurePreferenceDetails: 'in reprehenderit',
		lpaProcedurePreferenceDuration: -34480053.16630782,
		noticeRelatesToBuildingEngineeringMiningOther: null,
		siteAreaSquareMetres: null,
		areaOfAllegedBreachInSquareMetres: null,
		floorSpaceCreatedByBreachInSquareMetres: null,
		relatesToErectionOfBuildingOrBuildings: null,
		relatesToBuildingWithAgriculturalPurpose: null,
		relatesToBuildingSingleDwellingHouse: null,
		preserveGrantLoan: null,
		consultHistoricEngland: null
	},
	documents: [document]
};

describe('Enforcement listed building questionnaire command schema', () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid schema for Enforcement listed building', () => {
		const validationResult = ajv.validate(schema, exampleEnforcementListedQuestionnaireSchema);
		assert.strictEqual(validationResult, true);
	});

	it('should reject missing caseReference', () => {
		const test = structuredClone(exampleEnforcementListedQuestionnaireSchema);
		delete test.casedata.caseReference;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, false);
		assert.strictEqual(
			ajv.errors.some((x) => x.message === "must have required property 'caseReference'"),
			true
		);
	});

	it('should allow additional props', () => {
		const test = structuredClone(exampleEnforcementListedQuestionnaireSchema);
		test.test = 1;
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});
});
