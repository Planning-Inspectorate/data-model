import {jsonschema2md} from '@adobe/jsonschema2md';
import { loadAllSchemas } from './index.js';
import fs from 'fs/promises';

/**
 * @typedef {import('@adobe/jsonschema2md').SchemaFiles} SchemaFiles
 */

async function genDocs() {
    const s = await loadAllSchemas();

    /** @type {SchemaFiles} */
    const schemaList = [];
    for (const [k, v] of Object.entries(s.schemas)) {
        schemaList.push({
            fileName: k,
            content: v
        });
    }
    
    const out = jsonschema2md(schemaList, {
        outDir: 'docs',
        includeReadme: true
    });
    // remove all the "-properties-" files that aren't needed
    for (const md of out.markdown) {
        if (md.fileName.includes('-properties-')) {
            await fs.rm(md.fullPath);
        }
    }
    console.log('generated markdown docs');
}

genDocs().catch(console.error);