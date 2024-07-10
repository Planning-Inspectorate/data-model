import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import { loadAllSchemas } from './index.js';
import snakeCase from 'lodash.snakecase';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const constPath = path.join(__dirname, 'enums.js');
export const constTsPath = path.join(__dirname, 'enums.d.ts');
export const constCsjPath = path.join(__dirname, 'enums.cjs');

const SPACING = '  ';
const NEW_LINE = '\r\n';

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

    let output = '';
    let csjOutput = '';
    let tsOutput = '';

    for (const name of Object.keys(enumProps).sort()) {
        output += generateConstants(name, enumProps[name]) + NEW_LINE.repeat(2);
        csjOutput += generateConstants(name, enumProps[name], {csj: true}) + NEW_LINE.repeat(2);
        tsOutput += generateConstants(name, enumProps[name], {ts: true}) + NEW_LINE.repeat(2);
    }

    csjOutput += `module.exports = {` + NEW_LINE;
    for (const name of Object.keys(enumProps).sort()) {
        csjOutput += `${SPACING}${formatName(name)},` + NEW_LINE;
    }
    csjOutput += `};` + NEW_LINE;

    await fs.writeFile(constPath, output);
    await fs.writeFile(constCsjPath, csjOutput);
    await fs.writeFile(constTsPath, tsOutput);
}

/**
 * Generate JS code to define exported constants for the given enum values
 *
 * @param {string} name 
 * @param {string[]} values
 * @param {Object} opts
 * @param {boolean} [opts.ts] - whether to generate the TS type or JS code
 * @param {boolean} [opts.csj] - whether to generate the CSJ code or ES6 code
 * @returns {string}
 */
function generateConstants(name, values, {ts = false, csj = false} = {}) {
    const freezeStart = ts ? '' : 'Object.freeze(';
    const freezeEnd = ts ? '' : ')';
    const exportPrefix = csj ? '' : 'export ';
    const lines = [
        `${exportPrefix}const ${formatName(name)} = ${freezeStart}{`
    ];
    /**
     * @param {string} line
     * @param {number} spacing
     */
    const addWithSpace = (line, spacing = 0) => lines.push(SPACING.repeat(spacing) + line);

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
        if (!prop.type || (prop.type !== 'string' && !prop.type.includes('string'))) {
            continue
        }
        if (!Array.isArray(prop.enum)) {
            continue;
        }
        const name = prefix ? (prefix + '_' + key) : key;
        map[name] = prop.enum.filter(e => e !== null);
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