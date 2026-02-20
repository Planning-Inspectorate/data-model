import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { loadAllSchemas } from '../index.js';
import { compile } from 'json-schema-to-typescript';
import { schemasPath, commandsPath } from '../index.js';
import { generateName } from 'json-schema-to-typescript/dist/src/utils.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const typesPath = path.join(__dirname, '..', 'schemas.d.ts');

/**
 * Load all schemas and generate TypeScript definitions
 */
async function run() {
	const s = await loadAllSchemas();
	const schemaKeys = Object.keys(s.schemas).sort();
	const commandKeys = Object.keys(s.commands).sort();

	const eventSchemasTypes = await Promise.all(schemaKeys.map(eventSchemaToTypeString(s.schemas)));
	const commandSchemasTypes = await Promise.all(commandKeys.map(commandSchemaToTypeString(s.commands)));

	const eventSchemaTypesList = schemaKeys.map(toTypeName(s.schemas, eventSchemasTypes));
	const commandSchemaTypesList = commandKeys.map(toTypeName(s.commands, commandSchemasTypes));
	const eventSchemaTypesMap = schemaKeys.reduce((acc, schemaKey, currentIndex) => {
		acc[schemaKey] = eventSchemaTypesList[currentIndex];
		return acc;
	}, {});
	const commandSchemaTypesMap = commandKeys.reduce((acc, schemaKey, currentIndex) => {
		acc[schemaKey] = commandSchemaTypesList[currentIndex];
		return acc;
	}, {});

	let types = [...eventSchemasTypes, ...commandSchemasTypes].map((schemaTypes) => schemaTypes + '\n').join('');
	types += `type EventSchemas = ${eventSchemaTypesList.join(' |\n  ')}\n\n`;
	types += `type CommandSchemas = ${commandSchemaTypesList.join(' |\n  ')}\n\n`;
	types += `type Schemas = EventSchemas | CommandSchemas\n\n`;
	types += `export type LoadedSchemas = {\n  schemas: {\n    `;
	types += Object.entries(eventSchemaTypesMap)
		.map(([a, b]) => `'${a}': ${b};`)
		.join('\n    ');
	types += `\n  }\n  commands: {\n    `;
	types += Object.entries(commandSchemaTypesMap)
		.map(([a, b]) => `'${a}': ${b};`)
		.join('\n    ');
	types += `\n  }\n};\n`;

	await fs.writeFile(typesPath, types);
}

function eventSchemaToTypeString(schemas) {
	return (name, index) => compile(schemas[name], schemas[name]['$id'], options(index === 0));
}

function commandSchemaToTypeString(schemas) {
	return (name) => {
		const schema = schemas[name];
		let refPath;
		if (['appeal', 'appellant', 'lpa-questionnaire'].some((prefix) => name.startsWith(prefix))) {
			refPath = commandsPath;
		}
		return compile(schema, schema['$id'], options(false, refPath));
	};
}

function toTypeName(schemas, types) {
	return (key, index) => {
		const typeStr = types[index];
		const schema = schemas[key];
		const name = generateName(schema.title || schema['$id'], new Set());
		if (!(typeStr.includes(`export interface ${name}`) || typeStr.includes(`export type ${name}`))) {
			throw new Error(`${name} not found in type definition`);
		}
		return name;
	};
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
