import * as Schemas from './schemas';
export * from './enums';

export interface LoadedSchemas {
	schemas: {
		[name: string]: any;
	};
	commands: {
		[name: string]: any;
	};
}

export const schemasPath: string;
export const commandsPath: string;
export function loadAllSchemas(): Promise<LoadedSchemas>;
export function loadAllSchemasSync(): LoadedSchemas;

export { Schemas };
