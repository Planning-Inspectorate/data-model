import { describe, it } from "node:test";
import assert from "node:assert";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { loadAllSchemasSync } from "../../../src/index.js"

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

const exampleS78SubmissionSchema = {
    "casedata": {
        "caseType": "W",
        "submissionId": "4b78fc58-fcb0-70d6-5dea-b9b774f802d6",
        "caseProcedure": "written",
        "lpaCode": "cupidatat",
        "caseSubmittedDate": "1890-12-28T22:49:47.0Z",
        "enforcementNotice": null,
        "applicationReference": "consectetur enim et",
        "applicationDate": "1920-04-07T20:23:53.0Z",
        "applicationDecision": "granted",
        "applicationDecisionDate": null,
        "caseSubmissionDueDate": null,
        "siteAddressLine1": "occaecat aliquip non pariatur consequat",
        "siteAddressLine2": null,
        "siteAddressTown": "et",
        "siteAddressCounty": "velit",
        "siteAddressPostcode": "nisi minim laboris sed",
        "siteAccessDetails": [
            "laborum",
            "aute velit quis",
            "dolor"
        ],
        "siteSafetyDetails": [
            "velit aliqua",
            "qui",
            "tempor Duis ut dolore",
            "anim Ut in ea",
            "eiusmod laborum"
        ],
        "neighbouringSiteAddresses": null,
        "nearbyCaseReferences": [
            "incididunt"
        ],
        "isGreenBelt": false,
        "siteAreaSquareMetres": null,
        "floorSpaceSquareMetres": -6341893.2219680995,
        "ownsAllLand": null,
        "ownsSomeLand": true,
        "knowsOtherOwners": "Some",
        "knowsAllOwners": "Some",
        "advertisedAppeal": null,
        "ownersInformed": null,
        "originalDevelopmentDescription": "in amet",
        "changedDevelopmentDescription": true,
        "appellantCostsAppliedFor": false,
        "agriculturalHolding": true,
        "tenantAgriculturalHolding": true,
        "otherTenantsAgriculturalHolding": null,
        "informedTenantsAgriculturalHolding": null,
        "appellantProcedurePreference": null,
        "appellantProcedurePreferenceDetails": "eiusmod ex exercitation",
        "appellantProcedurePreferenceDuration": 10816414.941069126,
        "inquiryHowManyWitnesses": -91300569.36444478,
        "planningObligation": false,
        "statusPlanningObligation": "proident aute",
        "developmentType": "change-of-use"
    },
    "documents": [ document ],
    "users": [ user ]
}

describe("S78 submission command schema", () => {
    const schemas = loadAllSchemasSync();
    const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
    const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
    addFormats(ajv);

    it('should allow valid S78 schema', () => {
        const validationResult = ajv.validate(schema, exampleS78SubmissionSchema);
        assert.strictEqual(validationResult, true);
    });

    it('should reject missing root property', () => {
        const test = structuredClone(exampleS78SubmissionSchema);
        delete test.casedata.caseType;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must have required property 'caseType'"), true);
    });


    it('should reject missing nested property', () => {
        const test = structuredClone(exampleS78SubmissionSchema);
        delete test.casedata.caseProcedure;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors.some((x) => x.message === "must have required property 'caseProcedure'"), true);
    });

    it('should allow additional props', () => {
        const test = structuredClone(exampleS78SubmissionSchema);
        test.test = 1;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });
});
