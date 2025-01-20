import { describe, it } from 'node:test';
import assert from 'node:assert';

import { collectEnumProps, formatName, generateConstants, schemaPrefix } from '../../src/lib/gen-enums.js';

const normalizeWhitespace = (str) => str.replace(/\s+/g, '').trim();

describe('gen-enums.js', () => {
	describe('generateConstants', () => {
		it('should generate JS code for exported constants', () => {
			const name = 'TestEnum';
			const values = ['value1', 'value2'];
			const expectedOutput = `export const TEST_ENUM = Object.freeze({ VALUE_1: 'value1', VALUE_2: 'value2', });`;

			const result = generateConstants(name, values);
			assert.strictEqual(normalizeWhitespace(result), normalizeWhitespace(expectedOutput));
		});

		it('should generate TS code for exported constants', () => {
			const name = 'TestEnum';
			const values = ['value1', 'value2'];
			const expectedOutput = `export const TEST_ENUM = { VALUE_1: 'value1', VALUE_2: 'value2', } as const;`;

			const result = generateConstants(name, values, { ts: true });
			assert.strictEqual(normalizeWhitespace(result), normalizeWhitespace(expectedOutput));
		});

		it('should handle empty values array', () => {
			const name = 'EmptyEnum';
			const values = [];
			const expectedOutput = `export const EMPTY_ENUM = Object.freeze({});`;

			const result = generateConstants(name, values);
			assert.strictEqual(normalizeWhitespace(result), normalizeWhitespace(expectedOutput));
		});

		it('should sort values before generating constants', () => {
			const name = 'UnsortedEnum';
			const values = ['value2', 'value1'];
			const expectedOutput = `export const UNSORTED_ENUM = Object.freeze({VALUE_1: 'value1', VALUE_2: 'value2',});`;

			const result = generateConstants(name, values);
			assert.strictEqual(normalizeWhitespace(result), normalizeWhitespace(expectedOutput));
		});

		it('should handle single value in the array', () => {
			const name = 'SingleEnum';
			const values = ['value1'];
			const expectedOutput = `export const SINGLE_ENUM = Object.freeze({ VALUE_1: 'value1',});`;

			const result = generateConstants(name, values);
			assert.strictEqual(normalizeWhitespace(result), normalizeWhitespace(expectedOutput));
		});
	});

	describe('formatName', () => {
		it('should convert camelCase to UPPER_SNAKE_CASE', () => {
			const result = formatName('camelCaseName');
			assert.strictEqual(result, 'CAMEL_CASE_NAME');
		});

		it('should convert PascalCase to UPPER_SNAKE_CASE', () => {
			const result = formatName('PascalCaseName');
			assert.strictEqual(result, 'PASCAL_CASE_NAME');
		});

		it('should convert kebab-case to UPPER_SNAKE_CASE', () => {
			const result = formatName('kebab-case-name');
			assert.strictEqual(result, 'KEBAB_CASE_NAME');
		});

		it('should convert space separated words to UPPER_SNAKE_CASE', () => {
			const result = formatName('space separated words');
			assert.strictEqual(result, 'SPACE_SEPARATED_WORDS');
		});

		it('should handle single word input correctly', () => {
			const result = formatName('word');
			assert.strictEqual(result, 'WORD');
		});

		it('should handle empty string input correctly', () => {
			const result = formatName('');
			assert.strictEqual(result, '');
		});

		it('should handle already UPPER_SNAKE_CASE input correctly', () => {
			const result = formatName('UPPER_SNAKE_CASE');
			assert.strictEqual(result, 'UPPER_SNAKE_CASE');
		});
	});

	describe('collectEnumProps', () => {
		it('builds enums', () => {
			const map = {};
			collectEnumProps(map, { testSchema: { type: 'string', enum: ['test'] } }, 'testPrefix');
			assert.deepStrictEqual(map, { testPrefix_testSchema: ['test'] });
			collectEnumProps(map, { testSchema2: { type: 'string', enum: ['test2'] } }, 'testPrefix');
			assert.deepStrictEqual(map, { testPrefix_testSchema: ['test'], testPrefix_testSchema2: ['test2'] });
		});

		it('reduces duplicate enums', () => {
			const map = {};
			collectEnumProps(map, { testSchema: { type: 'string', enum: ['test'] } }, 'testPrefix');
			assert.deepStrictEqual(map, { testPrefix_testSchema: ['test'] });
			collectEnumProps(map, { testSchema: { type: 'string', enum: ['test'] } }, 'testPrefix');
			assert.deepStrictEqual(map, { testPrefix_testSchema: ['test'] });
		});

		it('errors for mismatched enums', () => {
			const map = {};
			collectEnumProps(map, { testSchema: { type: 'string', enum: ['test'] } }, 'testPrefix');
			assert.throws(
				() => collectEnumProps(map, { testSchema: { type: 'string', enum: ['test', 'test2'] } }, 'testPrefix'),
				{
					message: 'testPrefix_testSchema already has an enum'
				}
			);
		});
	});

	describe('schemaPrefix', () => {
		it('should return "appeal" when schemaName contains "appeal"', () => {
			const result = schemaPrefix('AppealCase');
			assert.strictEqual(result, 'appeal');
		});

		it('should return "nsip" when schemaName contains "nsip"', () => {
			const result = schemaPrefix('NsipProject');
			assert.strictEqual(result, 'nsip');
		});

		it('should return undefined when schemaName does not contain "appeal" or "nsip"', () => {
			const result = schemaPrefix('OtherSchema');
			assert.strictEqual(result, undefined);
		});

		it('should handle mixed case schema names correctly', () => {
			const result = schemaPrefix('ApPeAlCase');
			assert.strictEqual(result, 'appeal');
		});

		it('should return undefined for an empty string', () => {
			const result = schemaPrefix('');
			assert.strictEqual(result, undefined);
		});

		it('should return undefined for random string', () => {
			const result = schemaPrefix('randomString');
			assert.strictEqual(result, undefined);
		});
	});
});
