import { LoadedSchemas } from './schemas';

export const schemasPath: string;
export const commandsPath: string;
export function loadAllSchemas(): Promise<LoadedSchemas>;

export * from './schemas';
