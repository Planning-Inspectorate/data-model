import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { commandsPath, loadAllSchemas, schemasPath } from '../index.js';
import { compile } from 'json-schema-to-typescript';
import { generateName } from 'json-schema-to-typescript/dist/src/utils.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const typesPath = path.join(__dirname, '..', 'schemas.d.ts');

const schemaTypeNames = new Map();

/**
 * Load all schemas and generate TypeScript definitions
 */
async function run() {
	const s = await loadAllSchemas();
	const schemaKeys = Object.keys(s.schemas).sort();
	const commandKeys = Object.keys(s.commands).sort();
	const appealsComponentKeys = Object.keys(s.appealsComponents).sort();

	/** @type {string[]} */
	const typeDefinitions = [];
	const typesMap = {
		schemas: {},
		commands: {},
		appealsComponents: {}
	};

	for (let i = 0; i < schemaKeys.length; i++) {
		const schemaKey = schemaKeys[i];
		const schema = s.schemas[schemaKey];
		typeDefinitions.push(await compile(schema, schema['$id'], options(i === 0)));
		typesMap.schemas[schemaKey] = schemaTypeName(schema, typeDefinitions);
	}

	for (const schemaKey of commandKeys) {
		const schema = s.commands[schemaKey];
		typeDefinitions.push(await commandSchemaToTypeString(schema, schemaKey));
		typesMap.commands[schemaKey] = schemaTypeName(schema, typeDefinitions);
	}

	for (const schemaKey of appealsComponentKeys) {
		const schema = s.appealsComponents[schemaKey];
		// no need to generate types, will be included by the schemas and commands
		typesMap.appealsComponents[schemaKey] = schemaTypeName(schema, typeDefinitions);
	}

	let types = typeDefinitions.join('\n');
	types += `\nexport type SchemaMap = {`;
	for (const [k, map] of Object.entries(typesMap)) {
		types += `\n  ${k}: {\n    `;
		types += Object.entries(map)
			.map(([a, b]) => `'${a}': ${b};`)
			.join('\n    ');
		types += `\n  }`;
	}
	types += `\n};\n`;

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
 * @param {any} schema
 * @param {string[]} types
 * @returns {string}
 */
function schemaTypeName(schema, types) {
	const name = generateName(schema.title || schema['$id'], new Set());
	if (schemaTypeNames.has(name)) {
		throw new Error(
			`Schema with type name ${name} already exists (schemas ${schema['$id']}, ${schemaTypeNames.get(name)})\nEnsure schema title fields are unique and match the ID`
		);
	}
	// check the type name is in the generated types
	if (
		types.some((typeStr) => typeStr.includes(`export interface ${name}`) || typeStr.includes(`export type ${name}`))
	) {
		schemaTypeNames.set(name, schema['$id']);
		return name;
	}
	throw new Error(`${name} not found in type definition`);
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
