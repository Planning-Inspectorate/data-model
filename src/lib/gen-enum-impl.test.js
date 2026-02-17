import { describe, it } from 'node:test';
import { collectEnumProps, generateConstants, generateEnumMap } from './gen-enum-impl.js';
import assert from 'node:assert';

describe('gen-enum-impl', () => {
	describe('generateConstants', () => {
		it('should generate constant definitions', () => {
			const output = generateConstants('some_EnumValue', ['value-1', 'other-value', 'a-third-value']);
			assert.strictEqual(
				output,
				`export const SOME_ENUM_VALUE = Object.freeze({\n  A_THIRD_VALUE: 'a-third-value',\n  OTHER_VALUE: 'other-value',\n  VALUE_1: 'value-1',\n});`
			);
		});
		it('should generate constant definitions as typescript', () => {
			const output = generateConstants('some_EnumValue', ['value-1', 'other-value', 'a-third-value'], { ts: true });
			assert.strictEqual(
				output,
				`export const SOME_ENUM_VALUE = {\n  A_THIRD_VALUE: 'a-third-value',\n  OTHER_VALUE: 'other-value',\n  VALUE_1: 'value-1',\n} as const;`
			);
		});
	});

	describe('generateEnumMap', () => {
		it('should add all enums to a map by key with prefix', () => {
			const enums = [
				{
					schemaName: 'schema-1',
					key: 'key3',
					values: ['enum-1', 'enum-2']
				},
				{
					schemaName: 'appeal-1.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5']
				},
				{
					schemaName: 'nsip-1.schema.json',
					key: 'key5',
					values: ['enum-6', 'enum-7']
				}
			];
			const map = generateEnumMap(enums);
			assert.deepStrictEqual(map, {
				appeal_key5: ['enum-4', 'enum-5'],
				nsip_key5: ['enum-6', 'enum-7'],
				key3: ['enum-1', 'enum-2']
			});
		});
		it('should ignore duplicates if the enums match', () => {
			const enums = [
				{
					schemaName: 'schema-1',
					key: 'key3',
					values: ['enum-1', 'enum-2']
				},
				{
					schemaName: 'appeal-1.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5']
				},
				{
					schemaName: 'appeal-2.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5']
				}
			];
			const map = generateEnumMap(enums);
			assert.deepStrictEqual(map, {
				appeal_key5: ['enum-4', 'enum-5'],
				key3: ['enum-1', 'enum-2']
			});
		});
		it('should add a more specific prefix if there is a duplicate key', () => {
			const enums = [
				{
					schemaName: 'schema-1',
					key: 'key3',
					values: ['enum-1', 'enum-2']
				},
				{
					schemaName: 'appeal-1.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5']
				},
				{
					schemaName: 'appeal-2.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5', 'enum-6']
				}
			];
			const map = generateEnumMap(enums);
			assert.deepStrictEqual(map, {
				appeal_key5: ['enum-4', 'enum-5', 'enum-6'],
				'appeal-1_key5': ['enum-4', 'enum-5'],
				key3: ['enum-1', 'enum-2']
			});
		});
		it('should error if duplicate key enums are not a superset', () => {
			const enums = [
				{
					schemaName: 'schema-1',
					key: 'key3',
					values: ['enum-1', 'enum-2']
				},
				{
					schemaName: 'appeal-1.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5']
				},
				{
					schemaName: 'appeal-2.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-6']
				}
			];
			assert.throws(() => generateEnumMap(enums), { message: /not a superset of the other/ });
		});
		it('should error if duplicate keys are present more than twice', () => {
			const enums = [
				{
					schemaName: 'schema-1',
					key: 'key3',
					values: ['enum-1', 'enum-2']
				},
				{
					schemaName: 'appeal-1.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5']
				},
				{
					schemaName: 'appeal-2.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5', 'enum-6']
				},
				{
					schemaName: 'appeal-2.schema.json',
					key: 'key5',
					values: ['enum-4', 'enum-5', 'enum-6', 'enum-7']
				}
			];
			assert.throws(() => generateEnumMap(enums), { message: /used by multiple schemas/ });
		});
	});

	describe('collectEnumProps', () => {
		it('should collect all enums', () => {
			const enums = [];
			collectEnumProps(
				enums,
				{
					key1: 'value-1',
					key2: 'other-value',
					key3: {
						type: 'string',
						enum: ['enum-1', 'enum-2']
					}
				},
				'schema-1'
			);
			collectEnumProps(
				enums,
				{
					key5: {
						type: 'string',
						enum: ['enum-4', 'enum-5']
					}
				},
				'appeal-1.schema.json'
			);
			assert.strictEqual(enums.length, 2);
			assert.deepStrictEqual(enums[0], {
				schemaName: 'schema-1',
				key: 'key3',
				values: ['enum-1', 'enum-2']
			});
			assert.deepStrictEqual(enums[1], {
				schemaName: 'appeal-1.schema.json',
				key: 'key5',
				values: ['enum-4', 'enum-5']
			});
		});
	});
});
