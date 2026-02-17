import snakeCase from 'lodash.snakecase';

const SPACING = '  ';
const NEW_LINE = '\n';

/**
 * Generate JS code to define exported constants for the given enum values
 *
 * @param {string} name
 * @param {string[]} values
 * @param {Object} opts
 * @param {boolean} [opts.ts] - whether to generate the TS type or JS code
 * @returns {string}
 */
export function generateConstants(name, values, { ts = false } = {}) {
	const freezeStart = ts ? '' : 'Object.freeze(';
	const freezeEnd = ts ? ' as const' : ')';
	const exportPrefix = 'export ';
	const lines = [`${exportPrefix}const ${formatName(name)} = ${freezeStart}{`];
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
 * @param {{schemaName: string, key: string, values: string[]}[]} enums
 * @returns {Record<string, string[]>} map of enum name to values
 */
export function generateEnumMap(enums) {
	/** @type {Object<string, string[]>} */
	const enumProps = {};

	// only allow one duplicate - else the superset logic gets complex
	const duplicateKeys = new Set();
	const warnings = [];
	const infos = [];

	for (const e of enums) {
		const prefix = schemaPrefix(e.schemaName);
		const key = prefix ? prefix + '_' + e.key : e.key;

		const existingEnum = enumProps[key];
		const thisEnum = e.values;
		if (!existingEnum) {
			enumProps[key] = e.values;
		} else if (!enumsMatch(existingEnum, thisEnum)) {
			const existingEnumProps = enums.find((e) => e.values === existingEnum);
			const setIndex = indexOfSuperset(existingEnum, thisEnum);
			// handle duplicate enums - but one must be a superset of the other
			if (setIndex === -1) {
				throw new Error(
					`Enums ${existingEnumProps.key} from ${existingEnumProps.schemaName} and ${e.key} from ${e.schemaName} have the same name but one is not a superset of the other`
				);
			}
			// and only allow one duplicate
			if (duplicateKeys.has(key)) {
				throw new Error(
					`enum ${e.key} is used by multiple schemas, including ${existingEnumProps.schemaName} and ${e.schemaName}`
				);
			}
			duplicateKeys.add(key);
			warnings.push([
				'⚠️ enum key',
				key,
				'is used with different values in',
				existingEnumProps.schemaName,
				'and',
				e.schemaName
			]);

			if (setIndex === 1) {
				// existing enum is the superset
				// so this enum goes with a specific name
				enumProps[e.schemaName.replace('.schema.json', '') + '_' + e.key] = e.values;
			} else if (setIndex === 2) {
				// this enum is the superset
				// so 'swap in' this enum
				enumProps[key] = e.values;
				enumProps[existingEnumProps.schemaName.replace('.schema.json', '') + '_' + existingEnumProps.key] =
					existingEnumProps.values;
			}
		} else {
			// if the enums do match, nothing to change
			infos.push(['ℹ️ enum key', key, 'is used multiple times but uses the same values']);
		}
	}
	for (const info of infos) {
		console.log(...info);
	}
	for (const warning of warnings) {
		console.log(...warning);
	}
	return enumProps;
}

/**
 * Do list1 and list2 match?
 *
 * @param {string[]} list1
 * @param {string[]} list2
 */
export function enumsMatch(list1, list2) {
	const set1 = new Set(list1);
	const set2 = new Set(list2);
	// get all elements that are in set1 or set2 but not in both
	// if there are none, they match
	return set1.symmetricDifference(set2).size === 0;
}

/**
 * Is list1 a superset of list2, or vice versa?
 *
 * @param {string[]} list1
 * @param {string[]} list2
 * @returns {1 | 2 | -1} -1 if neither list is a superset of the other
 */
export function indexOfSuperset(list1, list2) {
	const set1 = new Set(list1);
	const set2 = new Set(list2);
	if (set1.isSupersetOf(set2)) {
		return 1;
	}
	if (set2.isSupersetOf(set1)) {
		return 2;
	}
	return -1;
}

/**
 *
 * @param {{schemaName: string, key: string, values: string[]}[]} enums
 * @param {Object<string, {type?: string|string[], enum?: string[]}>} properties
 * @param {string} schemaName
 */
export function collectEnumProps(enums, properties = {}, schemaName) {
	for (const [key, prop] of Object.entries(properties)) {
		const hasStringEnum = (p) =>
			p && p.enum && Array.isArray(p.enum) && p.type && (p.type === 'string' || p.type.includes('string'));
		const getEnumValues = (p) => p.filter((e) => e !== null);
		const collectEnumFromProp = (p) => {
			if (hasStringEnum(p)) {
				const values = getEnumValues(p.enum);
				const asSet = new Set(values);
				if (values.length > asSet.size) {
					throw new Error(`enum ${key} from ${schemaName} has duplicate elements`);
				}
				enums.push({
					schemaName,
					key,
					values: values
				});
			}
		};

		collectEnumFromProp(prop);
		collectEnumFromProp(prop.items);
	}
}

/**
 * Generate a prefix based on the schema name
 *
 * @param {string} schemaName
 * @returns {string|undefined}
 */
export function schemaPrefix(schemaName) {
	if (schemaName === 'message') {
		return 'message';
	}
	if (schemaName.toLowerCase().includes('appeal')) {
		return 'appeal';
	}
	if (schemaName.toLowerCase().includes('nsip')) {
		return 'nsip';
	}
}
