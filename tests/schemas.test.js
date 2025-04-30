import {describe, it} from 'node:test';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {loadAllSchemasSync} from '../src/index.js';

describe('schemas', () => {
    it('should only include valid JSON schemas', () => {
        // validate that all schemas are valid JSON schema documents
        // by default AJV uses draft-07 which is the same as the schemas
        // https://ajv.js.org/json-schema.html#json-schema-versions

        const ajv = new Ajv({ allErrors: true, strict: true });
        addFormats(ajv);

        const allSchemas = loadAllSchemasSync();
        const schemas = Object.values(allSchemas).reduce((a, c) => ({ ...a, ...c }), {});
        const errorsBySchema = {};
        for (const schema of Object.values(schemas)) {
            ajv.validateSchema(schema);
            if (ajv.errors) {
                errorsBySchema[schema.$id] = ajv.errors.map(e => {
                    let error = `${e.instancePath} ${e.message}`;
                    if (e.params) {
                        error += ` ${JSON.stringify(e.params)}`;
                    }
                    return error;
                });
            }
        }
        if (Object.keys(errorsBySchema).length) {
            console.log('*'.repeat(50));
            console.log('ERRORS:');
            for (const [schema, errors] of Object.entries(errorsBySchema)) {
                console.log(schema);
                for (const error of errors) {
                    console.log('  ', error);
                }
            }
            throw new Error(`${Object.keys(errorsBySchema).join(', ')} schemas are invalid (count: ${Object.keys(errorsBySchema).length}), see console output`);
        }
    });
    it('should have matching $id and filenames', () => {
        const allSchemas = loadAllSchemasSync();
        const errorsBySchema = {};
        for (let [name, schema] of Object.entries(allSchemas.schemas)) {
            if (name.includes('/')) {
                name = name.split('/').pop();
            }
            if (name !== schema.$id) {
                errorsBySchema[schema.$id] = name;
            }
        }
        for (let [name, schema] of Object.entries(allSchemas.commands)) {
            // ID includes the commands/ prefix
            if (('commands/' + name) !== schema.$id) {
                errorsBySchema[schema.$id] = name;
            }
        }
        if (Object.keys(errorsBySchema).length) {
            console.log('*'.repeat(50));
            console.log('ERRORS:');
            for (const [schema, filename] of Object.entries(errorsBySchema)) {
                console.log(schema, filename);
            }
            throw new Error(`${Object.keys(errorsBySchema).join(', ')} schemas have mismatched $id and filenames (count: ${Object.keys(errorsBySchema).length}), see console output`);
        }
    });
    it('should use the singular form for $id', () => {
        // very crude test to ensure schemas don't end in 's'...
        const suffixExceptions = [
            'has', // allow has suffix for appeals
            'listed-buildings' // allow this temporary schema, to remove when this schema copy is removed
        ];

        const allSchemas = loadAllSchemasSync();
        const schemas = Object.values(allSchemas).reduce((a, c) => ({ ...a, ...c }), {});
        const errors = [];
        for (const schema of Object.values(schemas)) {
            const name = schema.$id.replace('.schema.json', '');
            if (name.endsWith('s') && !suffixExceptions.some(suffix => name.endsWith(suffix))) {
                errors.push(schema.$id);
            }
        }
        if (errors.length > 0) {
            console.log('*'.repeat(50));
            console.log('ERRORS:');
            for (const error of errors) {
                console.log('  ' + error);
            }
            throw new Error(`${errors.join(', ')} schemas use plural names, see console output`);
        }
    });
});