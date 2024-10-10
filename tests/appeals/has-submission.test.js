import { describe, it } from "node:test";
import assert from "node:assert";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { loadAllSchemasSync } from "../../src/index.js"

const schema = "appellant-submission.schema.json";

const user = {
    "salutation": "nisi aute tempor Ut",
    "firstName": null,
    "lastName": null,
    "emailAddress": null,
    "telephoneNumber": "irure",
    "organisation": null,
    "serviceUserType": "Appellant"
};

const document = {
    "documentId": "Lorem",
    "filename": "sunt",
    "originalFilename": "dolore fugiat",
    "size": 663667,
    "mime": "consequat veniam ipsum ullamco sint",
    "documentURI": "reprehenderit",
    "dateCreated": "1904-04-10T14:53:32.0Z",
    "documentType": "appellantCaseWithdrawalLetter"
};

const exampleHasSubmissionSchema = {
    "casedata": {
        "submissionId": "072a9b08-0266-a291-ecd0-bb0ded9d7350",
        "caseType": "D",
        "caseProcedure": "written",
        "lpaCode": "in laborum pariatur cupidatat",
        "caseSubmittedDate": "1920-12-06T17:37:12.0Z",
        "enforcementNotice": false,
        "applicationReference": "voluptate esse Excepteur veniam sunt",
        "applicationDate": "1921-01-26T02:05:56.0Z",
        "applicationDecision": "not_received",
        "applicationDecisionDate": "1890-12-26T17:09:36.0Z",
        "caseSubmissionDueDate": null,
        "siteAddressLine1": "exercitation incididunt laborum",
        "siteAddressLine2": "in Ut voluptate ea",
        "siteAddressTown": "Lorem amet consectetur",
        "siteAddressCounty": null,
        "siteAddressPostcode": "sunt nulla aliquip labore",
        "siteAccessDetails": null,
        "siteSafetyDetails": [
            "Duis laboris ex",
            "sint Lorem cupidatat commodo"
        ],
        "isGreenBelt": null,
        "siteAreaSquareMetres": -11383801.18983768,
        "floorSpaceSquareMetres": -69227017.16474937,
        "ownsAllLand": null,
        "ownsSomeLand": null,
        "knowsOtherOwners": null,
        "knowsAllOwners": null,
        "advertisedAppeal": true,
        "ownersInformed": null,
        "originalDevelopmentDescription": null,
        "changedDevelopmentDescription": false,
        "nearbyCaseReferences": [
            "enim consectetur irure ad",
            "irure ut",
            "irure eiusmod minim Excepteur id",
            "aliqua pariatur consectetur eiusmod"
        ],
        "neighbouringSiteAddresses": null,
        "appellantCostsAppliedFor": true
    },
    "documents": [ document ],
    "users": [ user ]
};

describe("HAS submission command schema", () => {
    const schemas = loadAllSchemasSync();
    const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
    const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
    addFormats(ajv);

    it('should allow valid HAS schema', () => {
        const validationResult = ajv.validate(schema, exampleHasSubmissionSchema);
        assert.strictEqual(validationResult, true);
    });

    it('should reject missing root property', () => {
        const test = structuredClone(exampleHasSubmissionSchema);
        delete test.casedata.caseType;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must have required property 'caseType'"), true);
    });

    it('should reject missing nested property', () => {
        const test = structuredClone(exampleHasSubmissionSchema);
        delete test.casedata.caseProcedure;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must have required property 'caseProcedure'"), true);
    });

    it('should allow additional props', () => {
        const test = structuredClone(exampleHasSubmissionSchema);
        test.test = 1;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });
});
