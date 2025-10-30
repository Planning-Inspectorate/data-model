import path from 'path';
import url from 'url';
import { loadSchemas, loadSchemasSync } from './lib/load.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export * from './enums.js';

export const schemasPath = path.join(__dirname, '..', 'schemas');
export const commandsPath = path.join(schemasPath, 'commands');
export const appealsCommandsComponentsPath = path.join(commandsPath, 'appeals-components');

/**
 * Load all schemas from schemas and commands folders
 *
 * @returns {Promise<import('./index.js').LoadedSchemas>}
 */
export async function loadAllSchemas() {
	return {
		schemas: await loadSchemas(schemasPath),
		commands: await loadSchemas(commandsPath),
		appealsComponents: await loadSchemas(appealsCommandsComponentsPath)
	};
}

/**
 * Load all schemas from schemas and commands folders
 *
 * @returns {import('./index.js').LoadedSchemas}
 */
export function loadAllSchemasSync() {
	return {
		schemas: loadSchemasSync(schemasPath),
		commands: loadSchemasSync(commandsPath),
		appealsComponents: loadSchemasSync(appealsCommandsComponentsPath)
	};
}
