import { describe, it } from "node:test";
import assert from "node:assert";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { loadAllSchemasSync } from "../../../src/index.js"

const schema = "commands/appeal-representation-submission.schema.json";

const document = {
    "documentId": "Lorem",
    "filename": "sunt",
    "originalFilename": "dolore fugiat",
    "size": 663667,
    "mime": "consequat veniam ipsum ullamco sint",
    "documentURI": "reprehenderit",
    "dateCreated": "1904-04-10T14:53:32.0Z",
    "documentType": "lpaStatement"
};

const newUser = {
    "salutation": null,
    "firstName": null,
    "lastName": null,
    "emailAddress": null,
    "telephoneNumber": null,
    "organisation": null,
    "serviceUserType": "InterestedParty"
};

const representation = {
    "caseReference": "123",
    "representationSubmittedDate": "1990-12-28T22:49:47.0Z",
    "representation": "This is a text based representation",
    "representationType": "comment"
};

describe("appeal-representation-submission.schema", () => {
    const schemas = loadAllSchemasSync();
    const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
    const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
    addFormats(ajv);

    it('should allow valid representation schema with new user', () => {
        const test = structuredClone(representation);
        test.documents = [document];
        test.newUser = newUser;

        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });

    it('should allow valid representation schema with serviceUserId', () => {
        const test = structuredClone(representation);
        test.documents = [document];
        test.serviceUserId = 'a';

        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });

    it('should allow valid representation schema with lpa', () => {
        const test = structuredClone(representation);
        test.documents = [document];
        test.lpaCode = 'a';

        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });

    it('should reject missing user from one of', () => {
        const test = structuredClone(representation);
        test.documents = [document];
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must match exactly one schema in oneOf"), true);
    });

    it('should reject missing root property', () => {
        const test = structuredClone(representation);
        test.documents = [document];
        test.newUser = newUser;
        delete test.representation;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must have required property 'representation'"), true);
    });

    it('should allow additional props', () => {
        const test = structuredClone(representation);
        test.test = 1; // additional unknown prop allowed

        test.documents = [document];
        test.documents[0].test = 1;// additional unknown prop allowed

        test.newUser = newUser;
        test.newUser.test = 1; // additional unknown prop allowed

        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });
});