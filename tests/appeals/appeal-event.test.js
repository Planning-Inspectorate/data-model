import { describe, it } from 'node:test';
import assert from 'node:assert';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadAllSchemasSync } from '../../src/index.js';

const schema = 'appeal-event.schema.json';

const event = {
	eventId: 'ipsum ut proident Ut',
	caseReference: 'irure dolore in exercitation elit',
	eventType: 'site_visit_accompanied',
	eventName: 'minim anim',
	eventStatus: 'confirmed',
	isUrgent: true,
	eventPublished: false,
	eventStartDateTime: '1913-04-07T20:47:33.0Z',
	eventEndDateTime: '1961-01-01T16:05:12.0Z',
	notificationOfSiteVisit: '1957-10-24T08:38:08.0Z',
	addressLine1: 'test line 1',
	addressLine2: 'test line 2',
	addressTown: 'test town',
	addressCounty: 'test county',
	addressPostcode: 'test postcode'
};

describe(schema, () => {
	const schemas = loadAllSchemasSync();
	const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
	const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
	addFormats(ajv);

	it('should allow valid event schema', () => {
		const test = structuredClone(event);

		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should allow valid event schema with null values', () => {
		const test = structuredClone(event);
		test.eventName = null;
		test.eventPublished = null;
		test.eventEndDateTime = null;
		test.notificationOfSiteVisit = null;
		test.addressLine1 = null;
		test.addressLine2 = null;
		test.addressTown = null;
		test.addressCounty = null;
		test.addressPostcode = null;

		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});

	it('should allow additional props', () => {
		const test = structuredClone(event);
		test.test = 1; // additional unknown prop allowed
		const validationResult = ajv.validate(schema, test);
		assert.strictEqual(validationResult, true);
	});
});
