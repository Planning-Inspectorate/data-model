import { describe, it } from "node:test";
import assert from "node:assert";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { loadAllSchemasSync } from "../../src/index.js"

const schema = "appeal-representation-submission.schema.json";

const baseExample = {
    "representation": {
      "caseReference": "1234567",
      "representation": "elit ad deserunt labore velit",
      "submittedDate": "1958-06-05T14:31:12.0Z"
    },
    "documents": [
      {
        "documentId": "reprehenderit cupidatat",
        "filename": "elit laboris",
        "originalFilename": "est occaecat culpa exercitation qui",
        "size": 77541245,
        "mime": "aliqua et laboris ex nisi",
        "documentURI": "anim occaecat do dolor",
        "dateCreated": "1943-09-05T09:59:24.0Z",
        "documentType": "appealStatement"
      },
      {
        "documentId": "et",
        "filename": "Lorem occaecat",
        "originalFilename": "velit amet",
        "size": 71321158,
        "mime": "Lorem veniam",
        "documentURI": "nisi Ut laborum ipsum",
        "dateCreated": "1926-10-29T20:19:07.0Z",
        "documentType": null
      },
    ]
};

const buildExample = (type, { serviceUserId = null, lpaCode = null, newUser = null }) => {
    const test = structuredClone(baseExample);
    test.representation.representationType = type;

    if (serviceUserId) test.representation.serviceUserId = serviceUserId;
    if (lpaCode) test.representation.lpaCode = lpaCode;
    if (newUser) test.representation.newUser = newUser;

    return test;
}

describe("representation submission command schema", () => {
    const schemas = loadAllSchemasSync();
    const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
    const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
    addFormats(ajv);

    
    const testCases = [
        { type: 'statement', user: { serviceUserId: '1'}, expectedOutput: true },
        { type: 'statement', user: { lpaCode: '2'}, expectedOutput: true },
        { type: 'statement', user: { newUser: { firstName:'a', lastName: 'b', emailAddress: 'c'}}, expectedOutput: true },
        { type: 'statement', user: { noUser: 'fails' }, expectedOutput: false },
        { type: 'comment', user: { serviceUserId: '1'}, expectedOutput: true },
        { type: 'comment', user: { lpaCode: '2'}, expectedOutput: true },
        { type: 'comment', user: { newUser: { firstName:'a', lastName: 'b', emailAddress: 'c'}}, expectedOutput: true },
        { type: 'comment', user: { noUser: 'fails' }, expectedOutput: false },
        { type: 'final_comment', user: { serviceUserId: '1'}, expectedOutput: true },
        { type: 'final_comment', user: { lpaCode: '2'}, expectedOutput: true },
        { type: 'final_comment', user: { newUser: { firstName:'a', lastName: 'b', emailAddress: 'c'}}, expectedOutput: true },
        { type: 'final_comment', user: { noUser: 'fails' }, expectedOutput: false },
        { type: 'proofs_evidence', user: { serviceUserId: '1'}, expectedOutput: true },
        { type: 'proofs_evidence', user: { lpaCode: '2'}, expectedOutput: true },
        { type: 'proofs_evidence', user: { newUser: { firstName:'a', lastName: 'b', emailAddress: 'c'}}, expectedOutput: true },
        { type: 'proofs_evidence', user: { noUser: 'fails' }, expectedOutput: false }
    ];

    testCases.forEach(testCase => {
        it(`should validate ${testCase.type} rep for ${Object.keys(testCase.user)[0]}`, () => {
            const validationResult = ajv.validate(schema, buildExample(testCase.type, testCase.user));
            assert.strictEqual(validationResult, testCase.expectedOutput);
        });
    });

    it('should reject missing root property', () => {
        const validationResult = ajv.validate(schema, {});
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must have required property 'representation'"), true);
    });

    it('should allow additional props', () => {
        const testCase = buildExample('statement', { serviceUserId: '1'});
        testCase.test = 1;
        testCase.representation.test = 1;
        testCase.documents[0].test = 1;

        const validationResult = ajv.validate(schema, testCase);
        assert.strictEqual(validationResult, true);
    });
});
