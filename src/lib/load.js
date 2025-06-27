import { readFile, readdir } from 'fs/promises';
import { readFileSync, readdirSync } from 'fs';
import { parse } from 'jsonc-parser';
import path from 'path';

/**
 * Load all schemas from a directory and return a map of schema name to parsed schema object.
 *
 * @param {string} dirPath
 * @returns {Promise<Object<string,any>>}
 */
export async function loadSchemas(dirPath) {
	const entries = await readdir(dirPath);
	const schemaFiles = entries.filter(isSchemaFile);

	/** @type {Object<string,any>} */
	const schemaMap = {};
	await Promise.all(
		schemaFiles.map(async (filePath) => {
			schemaMap[path.basename(filePath)] = await loadSchema(path.join(dirPath, filePath));
		})
	);
	return schemaMap;
}

/**
 * Load the schema file and parse it.
 *
 * @param {string} filePath
 * @returns {Promise<any>}
 */
async function loadSchema(filePath) {
	const content = await readFile(filePath);
	return parse(content.toString());
}

/**
 * Does this file path have a schema extension?
 *
 * @param {string} filePath
 * @returns {boolean}
 */
function isSchemaFile(filePath) {
	const fileName = path.basename(filePath);
	return fileName.endsWith('schema.jsonc') || fileName.endsWith('schema.json');
}

/**
 * Load all schemas from a directory and return a map of schema name to parsed schema object.
 *
 * @param {string} dirPath
 * @returns {Object<string,any>}
 */
export function loadSchemasSync(dirPath) {
	const entries = readdirSync(dirPath);
	const schemaFiles = entries.filter(isSchemaFile);

	/** @type {Object<string,any>} */
	const initialSchemaMap = {};

	return schemaFiles.reduce((acc, filePath) => {
		return {
			...acc,
			[path.basename(filePath)]: loadSchemaSync(path.join(dirPath, filePath))
		};
	}, initialSchemaMap);
}

/**
 * Load the schema file and parse it.
 *
 * @param {string} filePath
 * @returns {any}
 */
function loadSchemaSync(filePath) {
	const content = readFileSync(filePath);
	return parse(content.toString());
}
