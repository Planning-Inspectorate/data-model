import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { loadAllSchemas } from './index.js';
import snakeCase from 'lodash.snakecase';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const constPath = path.join(__dirname, 'enums.js');
export const constTsPath = path.join(__dirname, 'enums.d.ts');
export const constCsjPath = path.join(__dirname, 'enums.cjs');

/** @typedef {'js' | 'cjs' | 'ts'} OutputModes */

const SPACING = '  ';
const NEW_LINE = '\r\n';
/** @type {{path: string, mode: OutputModes}[]} */
const OUTPUTS = [
  { path: constPath, mode: 'js' },
  { path: constCsjPath, mode: 'cjs' },
  { path: constTsPath, mode: 'ts' },
];

/**
 * Load all schemas and generate JS constant definitions
 */
async function run() {
  const s = await loadAllSchemas();

  /** @type {Object<string, string[]>} */
  const enumProps = {};

  for (const schemaName of Object.keys(s.schemas).sort()) {
    const schema = s.schemas[schemaName];
    collectEnumProps(enumProps, schema.properties, schemaPrefix(schemaName));
  }

  const outputs = OUTPUTS.map((o) => ({ ...o, output: '' }));

  for (const name of Object.keys(enumProps).sort()) {
    for (let ii in outputs) {
      outputs[ii].output +=
        generateConstants(name, enumProps[name], { mode: outputs[ii].mode }) +
        NEW_LINE.repeat(2);
    }
  }

  const schemaNames = Object.keys(s)
    .map((k) => Object.keys(s[k]))
    .flat()
    .map((n) => n.split('.')[0]);

  for (let ii in outputs) {
    outputs[ii].output +=
      generateConstants('SCHEMA_NAMES', schemaNames, {
        mode: outputs[ii].mode,
      }) + NEW_LINE.repeat(2);
  }

  for (let { path, output } of outputs) {
    await fs.writeFile(path, output);
  }
}

/**
 * Generate JS code to define exported constants for the given enum values
 *
 * @param {string} name
 * @param {string[]} values
 * @param {{ mode: 'js' | 'cjs' | 'ts' }} [opts]
 * @returns {string}
 */
function generateConstants(name, values, { mode } = { mode: 'js' }) {
  const freezeStart = mode === 'ts' ? '' : 'Object.freeze(';
  const freezeEnd = mode === 'ts' ? '' : ')';
  const exportPrefix = mode === 'cjs' ? 'exports.' : 'export const ';
  const lines = [`${exportPrefix}${formatName(name)} = ${freezeStart}{`];
  /**
   * @param {string} line
   * @param {number} spacing
   */
  const addWithSpace = (line, spacing = 0) =>
    lines.push(SPACING.repeat(spacing) + line);

  for (const value of values.sort()) {
    addWithSpace(`${formatName(value)}: '${value}',`, 1);
  }

  lines.push(`}${freezeEnd};`);

  return lines.join(NEW_LINE);
}

/**
 * Format a name for use as a constant value: UPPER_SNAKE_CASE
 *
 * @param {string} name
 * @returns {string}
 */
function formatName(name) {
  return snakeCase(name).toUpperCase();
}

/**
 *
 * @param {Object<string, string[]>} map
 * @param {Object<string, {type?: string|string[], enum?: string[]}>} properties
 * @param {string} [prefix]
 */
function collectEnumProps(map, properties = {}, prefix) {
  for (const [key, prop] of Object.entries(properties)) {
    if (
      !prop.type ||
      (prop.type !== 'string' && !prop.type.includes('string'))
    ) {
      continue;
    }
    if (!Array.isArray(prop.enum)) {
      continue;
    }
    const name = prefix ? prefix + '_' + key : key;
    map[name] = prop.enum.filter((e) => e !== null);
  }
}

/**
 * Generate a prefix based on the schema name
 *
 * @param {string} schemaName
 * @returns {string|undefined}
 */
function schemaPrefix(schemaName) {
  if (schemaName.toLowerCase().includes('appeal')) {
    return 'appeal';
  }
  if (schemaName.toLowerCase().includes('nsip')) {
    return 'nsip';
  }
}

run().catch(console.error);
