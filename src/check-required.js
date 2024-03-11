import { loadAllSchemas } from './index.js';

async function checkAllRequired() {
    const s = await loadAllSchemas();

    /** @type {Object<string, string[]>} */
    const issues = {};

    /**
     * @param {string} k 
     * @param {string} prop 
     */
    function addIssue(k, prop) {
        if (!issues[k]) {
            issues[k] = [];
        }
        issues[k].push(prop);
    }

    for (const [k, v] of Object.entries(s.schemas)) {
        const required = v.required || [];
        const properties = v.properties || {};

        for (const prop of Object.keys(properties)) {
            if (prop.startsWith('_')) {
                if (required.includes(prop)) {
                    addIssue(k, prop);
                }
            } else if (!required.includes(prop)) {
                addIssue(k, prop);
            }
        }
    }

    if (Object.keys(issues).length > 0) {
        console.error('issues found', issues);
        process.exitCode = -1;
    } else {
        console.log('all properties required');
    }
}

checkAllRequired().catch(console.error);