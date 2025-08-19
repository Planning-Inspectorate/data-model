import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { loadAllSchemas } from '../index.js';
import snakeCase from 'lodash.snakecase';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const constPath = path.join(__dirname, '..', 'enums.js');
export const constTsPath = path.join(__dirname, '..', 'enums.d.ts');

const SPACING = '  ';
const NEW_LINE = '\r\n';

/**
 * Load all schemas and generate JS constant definitions
 */
async function run() {
	const s = await loadAllSchemas();

	/** @type {Object<string, string[]>} */
	const enumProps = {};

	for (const schemaName of Object.keys(s.schemas).sort()) {
		const schema = s.schemas[schemaName];
		collectEnumProps(enumProps, schema.properties, schemaPrefix(schemaName));
	}

	let output = '';
	let tsOutput = '';

	for (const name of Object.keys(enumProps).sort()) {
		output += generateConstants(name, enumProps[name]) + NEW_LINE.repeat(2);
		tsOutput += generateConstants(name, enumProps[name], { ts: true }) + NEW_LINE.repeat(2);
	}

	await fs.writeFile(constPath, output);
	await fs.writeFile(constTsPath, tsOutput);
}

/**
 * Generate JS code to define exported constants for the given enum values
 *
 * @param {string} name
 * @param {string[]} values
 * @param {Object} opts
 * @param {boolean} [opts.ts] - whether to generate the TS type or JS code
 * @returns {string}
 */
function generateConstants(name, values, { ts = false } = {}) {
	const freezeStart = ts ? '' : 'Object.freeze(';
	const freezeEnd = ts ? '' : ')';
	const exportPrefix = 'export ';
	const lines = [`${exportPrefix}const ${formatName(name)} = ${freezeStart}{`];
	/**
	 * @param {string} line
	 * @param {number} spacing
	 */
	const addWithSpace = (line, spacing = 0) => lines.push(SPACING.repeat(spacing) + line);

	for (const value of values.sort()) {
		addWithSpace(`${formatName(value)}: '${value}',`, 1);
	}

	lines.push(`}${freezeEnd};`);

	return lines.join(NEW_LINE);
}

/**
 * Format a name for use as a constant value: UPPER_SNAKE_CASE
 *
 * @param {string} name
 * @returns {string}
 */
function formatName(name) {
	return snakeCase(name).toUpperCase();
}

/**
 *
 * @param {Object<string, string[]>} map
 * @param {Object<string, {type?: string|string[], enum?: string[]}>} properties
 * @param {string} [prefix]
 */
function collectEnumProps(map, properties = {}, prefix) {
	for (const [key, prop] of Object.entries(properties)) {
		const name = prefix ? prefix + '_' + key : key;

		const hasStringEnum = (p) =>
			p && p.enum && Array.isArray(p.enum) && p.type && (p.type === 'string' || p.type.includes('string'));
		const getEnumValues = (p) => p.filter((e) => e !== null);
		const collectEnumFromProp = (p) => {
			if (hasStringEnum(p)) {
				map[name] = getEnumValues(p.enum);
			}
		};

		collectEnumFromProp(prop);
		collectEnumFromProp(prop.items);
	}
}

/**
 * Generate a prefix based on the schema name
 *
 * @param {string} schemaName
 * @returns {string|undefined}
 */
function schemaPrefix(schemaName) {
	if (schemaName.toLowerCase().includes('appeal')) {
		return 'appeal';
	}
	if (schemaName.toLowerCase().includes('nsip')) {
		return 'nsip';
	}
}

run().catch(console.error);
