import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { loadAllSchemas, schemasPath } from './index.js';
import { compile } from 'json-schema-to-typescript';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const typesPath = path.join(__dirname, 'schemas.d.ts');

/**
 * Load all schemas and generate TypeScript definitions
 */
async function run() {
  const s = await loadAllSchemas();

  let types = '';
  /** @type {(string | undefined)[][]} */
  const eventSchemas = [];
  /** @type {(string | undefined)[][]} */
  const commandSchemas = [];
  let first = true;

  for (const schemaName of Object.keys(s.schemas).sort()) {
    const schema = s.schemas[schemaName];
    const compiledTypeStr = await compile(
      schema,
      schema['$id'],
      options(first)
    );
    const typeName = compiledTypeStr.match(/^export interface (\w+) {$/im)?.[1];
    eventSchemas.push([schemaName, typeName]);
    types += compiledTypeStr;
    types += '\n';
    first = false;
  }

  for (const commandName of Object.keys(s.commands).sort()) {
    const schema = s.commands[commandName];
    const compiledTypeStr = await compile(
      schema,
      schema['$id'],
      options(first)
    );
    const typeName = compiledTypeStr.match(/^export interface (\w+) {$/im)?.[1];
    commandSchemas.push([commandName, typeName]);
    types += compiledTypeStr;
    types += '\n';
    first = false;
  }

  types += `export type EventSchemas =\n  | ${eventSchemas
    .map(([_, e]) => e)
    .filter(Boolean)
    .join('\n  | ')};\n\n`;
  types += `export type CommandSchemas =\n  | ${commandSchemas
    .map(([_, e]) => e)
    .filter(Boolean)
    .join('\n  | ')};\n\n`;
  types += 'export type Schemas = EventSchemas | CommandSchemas;\n\n';

  types += `export type LoadedSchemas = {
    schemas: {
      ${eventSchemas.flatMap(([a, b]) => `"${a}": ${b};`).join('\n      ')}
    };
    commands: {
      ${commandSchemas.flatMap(([a, b]) => `"${a}": ${b};`).join('\n      ')}
    };
  };\n`;

  await fs.writeFile(typesPath, types);
}

/**
 *
 * @param {boolean} first
 * @returns {Partial<import('json-schema-to-typescript').Options>}
 */
function options(first) {
  return {
    // don't allow additional properties if not explicit in the schema
    additionalProperties: false,
    // we're joining all the definitions into one, so just put the comment in once
    bannerComment: first ? undefined : '',
    // resolve $refs from the schemas folder
    cwd: schemasPath,
    declareExternallyReferenced: true,
    style: {
      singleQuote: true,
    },
  };
}

run().catch(console.error);
