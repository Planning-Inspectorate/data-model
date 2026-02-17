import fs from 'fs/promises';
import path from 'path';
import { loadAllSchemas } from '../index.js';
import { loadSchema } from './load.js';
import { collectEnumProps, generateConstants, schemaPrefix } from './gen-enum-impl.js';

const __dirname = import.meta.dirname;

export const constPath = path.join(__dirname, '..', 'enums.js');
export const constTsPath = path.join(__dirname, '..', 'enums.d.ts');

const NEW_LINE = '\n';

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

	const staticEnums = await loadSchema(path.join(__dirname, 'enums-static.schema.json'));
	collectEnumProps(enumProps, staticEnums.properties, 'message');

	let output = '';
	let tsOutput = '';

	for (const name of Object.keys(enumProps).sort()) {
		output += generateConstants(name, enumProps[name]) + NEW_LINE.repeat(2);
		tsOutput += generateConstants(name, enumProps[name], { ts: true }) + NEW_LINE.repeat(2);
	}

	await fs.writeFile(constPath, output);
	await fs.writeFile(constTsPath, tsOutput);
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
