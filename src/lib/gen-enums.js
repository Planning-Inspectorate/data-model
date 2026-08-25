import fs from 'fs/promises';
import path from 'path';
import { loadAllSchemas } from '../index.js';
import { collectEnumProps, generateConstants, generateEnumMap } from './gen-enum-impl.js';
import { loadSchema } from './load.js';

const __dirname = import.meta.dirname;

export const constPath = path.join(__dirname, '..', 'enums.js');
export const constTsPath = path.join(__dirname, '..', 'enums.d.ts');

const NEW_LINE = '\n';

/**
 * Load all schemas and generate JS constant definitions
 */
async function run() {
	const s = await loadAllSchemas();

	const allEnums = [];

	for (const schemaName of Object.keys(s.schemas).sort()) {
		const schema = s.schemas[schemaName];
		collectEnumProps(allEnums, schema.properties, schemaName);
	}

	const staticEnums = await loadSchema(path.join(__dirname, 'enums-static.schema.json'));
	collectEnumProps(allEnums, staticEnums.properties, 'message');

	const enumProps = generateEnumMap(allEnums);

	let output = '';
	let tsOutput = '';

	for (const name of Object.keys(enumProps).sort()) {
		output += generateConstants(name, enumProps[name]) + NEW_LINE.repeat(2);
		tsOutput += generateConstants(name, enumProps[name], { ts: true }) + NEW_LINE.repeat(2);
	}

	// for backwards compatibility, to remove once APPEAL_APPEAL_UNDER_ACT_SECTION isn't referenced
	const forCompatibility = `/** @deprecated use APPEAL_UNDER_ACT_SECTION **/${NEW_LINE}export const APPEAL_APPEAL_UNDER_ACT_SECTION = APPEAL_UNDER_ACT_SECTION;`;
	output += forCompatibility;
	tsOutput += forCompatibility;

	await fs.writeFile(constPath, output);
	await fs.writeFile(constTsPath, tsOutput);
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
