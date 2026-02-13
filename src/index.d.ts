import * as Schemas from './schemas.js';
export * from './enums.js';

export interface LoadedSchemas {
	schemas: {
		[name: string]: any;
	};
	commands: {
		[name: string]: any;
	};
	appealsComponents: {
		[name: string]: any;
	};
}

export const schemasPath: string;
export const commandsPath: string;
export const appealsComponentsPath: string;
export function loadAllSchemas(): Promise<LoadedSchemas>;
export function loadAllSchemasSync(): LoadedSchemas;

export { Schemas };
