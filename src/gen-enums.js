import snakeCase from 'lodash.snakecase';

const SPACING = '  ';
const NEW_LINE = '\r\n';

/**
 * Generate JS code to define exported constants for the given enum values
 *
 * @param {string} name 
 * @param {string[]} values
 * @param {Object} opts
 * @param {boolean} [opts.ts] - whether to generate the TS type or JS code
 * @returns {string}
 */
export function generateConstants(name, values, {ts = false} = {}) {
    const freezeStart = ts ? '' : 'Object.freeze(';
    const freezeEnd = ts ? '' : ')';
    const exportPrefix = 'export ';
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
export function formatName(name) {
    return snakeCase(name).toUpperCase();
}

/**
 *
 * @param {Object<string, string[]>} map
 * @param {Object<string, {type?: string|string[], enum?: string[]}>} properties
 * @param {string} [prefix]
 */
export function collectEnumProps(map, properties = {}, prefix) {   
    for (const [key, prop] of Object.entries(properties)) {
        if (!prop.type || (prop.type !== 'string' && !prop.type.includes('string'))) {
            continue
        }
        if (!Array.isArray(prop.enum)) {
            continue;
        }
        const name = prefix ? (prefix + '_' + key) : key;
        if(map[name] && JSON.stringify(map[name]) !== JSON.stringify(prop.enum.filter(e => e !== null))) {
            throw new Error(`${name} already has an enum`);
        }
        map[name] = prop.enum.filter(e => e !== null);
    }
}

/**
 * Generate a prefix based on the schema name
 *
 * @param {string} schemaName 
 * @returns {string|undefined}
 */
export function schemaPrefix(schemaName) {
    if (schemaName.toLowerCase().includes('appeal')) {
        return 'appeal';
    }
    if (schemaName.toLowerCase().includes('nsip')) {
        return 'nsip';
    }
}
