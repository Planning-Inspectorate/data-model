import { EventSchemas, CommandSchemas, Schemas } from './schemas';

export interface LoadedSchemas {
  schemas: {
    [name: string]: EventSchemas;
  };
  commands: {
    [name: string]: CommandSchemas;
  };
}

export const schemasPath: string;
export const commandsPath: string;
export function loadAllSchemas(): Promise<LoadedSchemas>;

export { Schemas };
