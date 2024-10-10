import { describe, it } from "node:test";
import assert from "node:assert";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { loadAllSchemasSync } from "../../src/index.js"

const schema = "lpa-questionnaire.schema.json";

const document = {
    "documentId": "deserunt sint aliqua adipisicing dolore",
    "filename": "ut dolore",
    "originalFilename": "Lorem amet fugiat adipisicing Excepteur",
    "size": -90476934,
    "mime": "magna labore exercitation ut",
    "documentURI": "ut reprehenderit",
    "dateCreated": "1933-04-03T03:24:38.0Z",
    "documentType": "plansDrawings"
}

const exampleHasQuestionnaireSchema = {
    "casedata": {
        "caseReference": "nisi incididunt cillum",
        "lpaQuestionnaireSubmittedDate": null,
        "lpaStatement": "consequat ex",
        "siteAccessDetails": null,
        "siteSafetyDetails": null,
        "isCorrectAppealType": null,
        "isGreenBelt": null,
        "inConservationArea": null,
        "newConditionDetails": "anim sint ut aute",
        "notificationMethod": null,
        "nearbyCaseReferences": null,
        "neighbouringSiteAddresses": [
            {
                "neighbouringSiteAddressLine1": "commodo dolore incididunt",
                "neighbouringSiteAddressLine2": "est voluptate irure aliqua elit",
                "neighbouringSiteAddressTown": "labore aliquip ex incididunt nulla",
                "neighbouringSiteAddressCounty": "enim ut Duis ut ex",
                "neighbouringSiteAddressPostcode": "pariatur",
                "neighbouringSiteAccessDetails": "aliqua irure mollit consequat nisi",
                "neighbouringSiteSafetyDetails": null
            }
        ],
        "affectedListedBuildingNumbers": [
            "occaecat id aliquip dolore",
            "magna",
            "minim laboris fugiat id aliqua",
            "ullamco quis",
            "voluptate quis"
        ],
        "lpaCostsAppliedFor": null
    },
    "documents": [ document ]
};

describe("HAS questionnaire command schema", () => {
    const schemas = loadAllSchemasSync();
    const flatSchemas = Object.values(schemas).reduce((a, c) => ({ ...a, ...c }), {});
    const ajv = new Ajv({ schemas: flatSchemas, allErrors: true });
    addFormats(ajv);

    it('should allow valid HAS schema', () => {
        const validationResult = ajv.validate(schema, exampleHasQuestionnaireSchema);
        assert.strictEqual(validationResult, true);
    });

    it('should reject missing caseReference', () => {
        const test = structuredClone(exampleHasQuestionnaireSchema);
        delete test.casedata.caseReference;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, false);
        assert.strictEqual(ajv.errors[0].message, "must have required property 'caseReference'");
    });

    it('should allow additional props', () => {
        const test = structuredClone(exampleHasQuestionnaireSchema);
        test.test = 1;
        const validationResult = ajv.validate(schema, test);
        assert.strictEqual(validationResult, true);
    });
});
