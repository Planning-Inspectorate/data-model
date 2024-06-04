import {
  EventSchemas,
  CommandSchemas,
  LoadedSchemas,
  Schemas,
} from './schemas';

export const schemasPath: string;
export const commandsPath: string;
export function loadAllSchemas(): Promise<LoadedSchemas>;

export { Schemas };
