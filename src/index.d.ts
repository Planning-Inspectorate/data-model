import * as Schemas from './schemas.js';
export * from './enums.js';

export type LoadedSchemas = Schemas.SchemaMap;

export const schemasPath: string;
export const commandsPath: string;
export const appealsComponentsPath: string;
export function loadAllSchemas(): Promise<LoadedSchemas>;
export function loadAllSchemasSync(): LoadedSchemas;

export { Schemas };
