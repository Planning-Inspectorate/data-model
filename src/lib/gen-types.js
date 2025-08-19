import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { loadAllSchemas } from '../index.js';
import { compile } from 'json-schema-to-typescript';
import { schemasPath, commandsPath } from '../index.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const typesPath = path.join(__dirname, '..', 'schemas.d.ts');

/**
 * Load all schemas and generate TypeScript definitions
 */
async function run() {
	const s = await loadAllSchemas();

	let types = '';
	let first = true;

	for (const schemaName of Object.keys(s.schemas).sort()) {
		const schema = s.schemas[schemaName];
		types += await compile(schema, schema['$id'], options(first));
		types += '\n';
		first = false;
	}

	for (const commandName of Object.keys(s.commands).sort()) {
		const schema = s.commands[commandName];

		if (
			commandName.startsWith('appeal') ||
			commandName.startsWith('appellant') ||
			commandName.startsWith('lpa-questionnaire')
		) {
			// hack to allow nested $ref links to function in tests and gen types,
			// can we leverage a better means to resolve $refs that aligns with how tests/appeals references this
			types += await compile(schema, schema['$id'], options(first, commandsPath));
		} else {
			types += await compile(schema, schema['$id'], options(first));
		}

		types += '\n';
		first = false;
	}

	await fs.writeFile(typesPath, types);
}

/**
 *
 * @param {boolean} first
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
