import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { commandsPath, loadAllSchemas, schemasPath } from '../index.js';
import { compile } from 'json-schema-to-typescript';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const typesPath = path.join(__dirname, '..', 'schemas.d.ts');

/**
 * Load all schemas and generate TypeScript definitions
 */
async function run() {
	const s = await loadAllSchemas();
	const schemaKeys = Object.keys(s.schemas).sort();
	const commandKeys = Object.keys(s.commands).sort();

	/** @type {string[]} */
	const typeDefinitions = [];
	for (let i = 0; i < schemaKeys.length; i++) {
		const schemaKey = schemaKeys[i];
		const schema = s.schemas[schemaKey];
		typeDefinitions.push(await compile(schema, schema['$id'], options(i === 0)));
	}

	for (const schemaKey of commandKeys) {
		const schema = s.commands[schemaKey];
		typeDefinitions.push(await commandSchemaToTypeString(schema, schemaKey));
	}

	const types = typeDefinitions.join('\n');

	await fs.writeFile(typesPath, types);
}

function commandSchemaToTypeString(schema, name) {
	let refPath;
	// hack to allow nested $ref links to function in tests and gen types,
	// can we leverage a better means to resolve $refs that aligns with how tests/appeals references this
	if (['appeal', 'appellant', 'lpa-questionnaire'].some((prefix) => name.startsWith(prefix))) {
		refPath = commandsPath;
	}
	return compile(schema, schema['$id'], options(false, refPath));
}

/**
 * @param {boolean} first
 * @param {string} [refPath]
 * @returns {Partial<import('json-schema-to-typescript').Options>}
 */
function options(first, refPath = schemasPath) {
	return {
		// don't allow additional properties if not explicit in the schema
		additionalProperties: false,
		// we're joining all the definitions into one, so just put the comment in once
		bannerComment: first ? undefined : '',
		// resolve $refs from the schemas folder
		cwd: refPath,
		declareExternallyReferenced: true,
		style: {
			singleQuote: true
		}
	};
}

run().catch(console.error);
