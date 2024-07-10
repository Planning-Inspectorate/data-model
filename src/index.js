import path from 'path';
import url from 'url';
import { loadSchemas, loadSchemasSync } from './lib/load.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export * from './enums.js';

export const schemasPath = path.join(__dirname, '..', 'schemas');
export const commandsPath = path.join(schemasPath, 'commands');

/**
 * Load all schemas from schemas and commands folders
 *
 * @returns {Promise<import('./schemas.js').LoadedSchemas>}
 */
export async function loadAllSchemas() {
  return {
    schemas: await loadSchemas(schemasPath),
    commands: await loadSchemas(commandsPath),
  };
}

/**
 * Load all schemas from schemas and commands folders
 *
 * @returns {import('./schemas.js').LoadedSchemas}
 */
export function loadAllSchemasSync() {
  return {
    schemas: loadSchemasSync(schemasPath),
    commands: loadSchemasSync(commandsPath),
  };
}
