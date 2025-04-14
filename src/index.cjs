'use strict';

var path = require('path');
var url = require('url');
var promises = require('fs/promises');
var fs = require('fs');
var jsoncParser = require('jsonc-parser');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/**
 * Load all schemas from a directory and return a map of schema name to parsed schema object.
 *
 * @param {string} dirPath
 * @returns {Promise<Object<string,any>>}
 */
async function loadSchemas(dirPath) {
  const entries = await promises.readdir(dirPath);
  const schemaFiles = entries.filter(isSchemaFile);

  /** @type {Object<string,any>} */
  const schemaMap = {};
  await Promise.all(
    schemaFiles.map(async (filePath) => {
      schemaMap[path.basename(filePath)] = await loadSchema(
        path.join(dirPath, filePath)
      );
    })
  );
  return schemaMap;
}

/**
 * Load the schema file and parse it.
 *
 * @param {string} filePath
 * @returns {Promise<any>}
 */
async function loadSchema(filePath) {
  const content = await promises.readFile(filePath);
  return jsoncParser.parse(content.toString());
}

/**
 * Does this file path have a schema extension?
 *
 * @param {string} filePath
 * @returns {boolean}
 */
function isSchemaFile(filePath) {
  const fileName = path.basename(filePath);
  return fileName.endsWith('schema.jsonc') || fileName.endsWith('schema.json');
}

/**
 * Load all schemas from a directory and return a map of schema name to parsed schema object.
 *
 * @param {string} dirPath
 * @returns {Object<string,any>}
 */
function loadSchemasSync(dirPath) {
  const entries = fs.readdirSync(dirPath);
  const schemaFiles = entries.filter(isSchemaFile);

  /** @type {Object<string,any>} */
  const initialSchemaMap = {};

  return schemaFiles.reduce((acc, filePath) => {
    return {
      ...acc,
      [path.basename(filePath)]: loadSchemaSync(path.join(dirPath, filePath)),
    };
  }, initialSchemaMap);
}

/**
 * Load the schema file and parse it.
 *
 * @param {string} filePath
 * @returns {any}
 */
function loadSchemaSync(filePath) {
  const content = fs.readFileSync(filePath);
  return jsoncParser.parse(content.toString());
}

const APPEAL_ALLOCATION_LEVEL = Object.freeze({
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
});

const APPEAL_APPELLANT_PROCEDURE_PREFERENCE = Object.freeze({
  HEARING: 'hearing',
  INQUIRY: 'inquiry',
  WRITTEN: 'written',
});

const APPEAL_APPLICATION_DECISION = Object.freeze({
  GRANTED: 'granted',
  NOT_RECEIVED: 'not_received',
  REFUSED: 'refused',
});

const APPEAL_CASE_DECISION_OUTCOME = Object.freeze({
  ALLOWED: 'allowed',
  DISMISSED: 'dismissed',
  INVALID: 'invalid',
  SPLIT_DECISION: 'split_decision',
});

const APPEAL_CASE_PROCEDURE = Object.freeze({
  HEARING: 'hearing',
  INQUIRY: 'inquiry',
  WRITTEN: 'written',
});

const APPEAL_CASE_STAGE = Object.freeze({
  APPEAL_DECISION: 'appeal-decision',
  APPELLANT_CASE: 'appellant-case',
  COSTS: 'costs',
  EVIDENCE: 'evidence',
  FINAL_COMMENTS: 'final-comments',
  INTERNAL: 'internal',
  LPA_QUESTIONNAIRE: 'lpa-questionnaire',
  STATEMENTS: 'statements',
  THIRD_PARTY_COMMENTS: 'third-party-comments',
  WITNESSES: 'witnesses',
});

const APPEAL_CASE_STATUS = Object.freeze({
  ASSIGN_CASE_OFFICER: 'assign_case_officer',
  AWAITING_EVENT: 'awaiting_event',
  AWAITING_TRANSFER: 'awaiting_transfer',
  CLOSED: 'closed',
  COMPLETE: 'complete',
  EVENT: 'event',
  EVIDENCE: 'evidence',
  FINAL_COMMENTS: 'final_comments',
  INVALID: 'invalid',
  ISSUE_DETERMINATION: 'issue_determination',
  LPA_QUESTIONNAIRE: 'lpa_questionnaire',
  READY_TO_START: 'ready_to_start',
  STATEMENTS: 'statements',
  TRANSFERRED: 'transferred',
  VALIDATION: 'validation',
  WITHDRAWN: 'withdrawn',
  WITNESSES: 'witnesses',
});

const APPEAL_CASE_TYPE = Object.freeze({
  C: 'C',
  D: 'D',
  F: 'F',
  G: 'G',
  H: 'H',
  L: 'L',
  Q: 'Q',
  S: 'S',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: 'Z',
});

const APPEAL_CASE_VALIDATION_OUTCOME = Object.freeze({
  INCOMPLETE: 'incomplete',
  INVALID: 'invalid',
  VALID: 'valid',
});

const APPEAL_DEVELOPMENT_TYPE = Object.freeze({
  CHANGE_OF_USE: 'change-of-use',
  HOUSEHOLDER: 'householder',
  MAJOR_DWELLINGS: 'major-dwellings',
  MAJOR_INDUSTRY_STORAGE: 'major-industry-storage',
  MAJOR_OFFICES: 'major-offices',
  MAJOR_RETAIL_SERVICES: 'major-retail-services',
  MAJOR_TRAVELLER_CARAVAN: 'major-traveller-caravan',
  MINERAL_WORKINGS: 'mineral-workings',
  MINOR_DWELLINGS: 'minor-dwellings',
  MINOR_INDUSTRY_STORAGE: 'minor-industry-storage',
  MINOR_OFFICES: 'minor-offices',
  MINOR_RETAIL_SERVICES: 'minor-retail-services',
  MINOR_TRAVELLER_CARAVAN: 'minor-traveller-caravan',
  OTHER_MAJOR: 'other-major',
  OTHER_MINOR: 'other-minor',
});

const APPEAL_DOCUMENT_TYPE = Object.freeze({
  APPEAL_NOTIFICATION: 'appealNotification',
  APPELLANT_CASE_CORRESPONDENCE: 'appellantCaseCorrespondence',
  APPELLANT_CASE_WITHDRAWAL_LETTER: 'appellantCaseWithdrawalLetter',
  APPELLANT_COSTS_APPLICATION: 'appellantCostsApplication',
  APPELLANT_COSTS_CORRESPONDENCE: 'appellantCostsCorrespondence',
  APPELLANT_COSTS_WITHDRAWAL: 'appellantCostsWithdrawal',
  APPELLANT_FINAL_COMMENT: 'appellantFinalComment',
  APPELLANT_PROOF_OF_EVIDENCE: 'appellantProofOfEvidence',
  APPELLANT_STATEMENT: 'appellantStatement',
  APPELLANT_WITNESSES_EVIDENCE: 'appellantWitnessesEvidence',
  APPLICATION_DECISION_LETTER: 'applicationDecisionLetter',
  CASE_DECISION_LETTER: 'caseDecisionLetter',
  CHANGED_DESCRIPTION: 'changedDescription',
  COMMUNITY_INFRASTRUCTURE_LEVY: 'communityInfrastructureLevy',
  CONSERVATION_MAP: 'conservationMap',
  CONSULTATION_RESPONSES: 'consultationResponses',
  COSTS_DECISION_LETTER: 'costsDecisionLetter',
  CROSS_TEAM_CORRESPONDENCE: 'crossTeamCorrespondence',
  DEFINITIVE_MAP_STATEMENT: 'definitiveMapStatement',
  DESIGN_ACCESS_STATEMENT: 'designAccessStatement',
  DEVELOPMENT_PLAN_POLICIES: 'developmentPlanPolicies',
  EIA_ENVIRONMENTAL_STATEMENT: 'eiaEnvironmentalStatement',
  EIA_SCOPING_OPINION: 'eiaScopingOpinion',
  EIA_SCREENING_DIRECTION: 'eiaScreeningDirection',
  EIA_SCREENING_OPINION: 'eiaScreeningOpinion',
  EMERGING_PLAN: 'emergingPlan',
  ENVIRONMENTAL_ASSESSMENT: 'environmentalAssessment',
  INSPECTOR_CORRESPONDENCE: 'inspectorCorrespondence',
  INTERESTED_PARTY_COMMENT: 'interestedPartyComment',
  LPA_CASE_CORRESPONDENCE: 'lpaCaseCorrespondence',
  LPA_COSTS_APPLICATION: 'lpaCostsApplication',
  LPA_COSTS_CORRESPONDENCE: 'lpaCostsCorrespondence',
  LPA_COSTS_WITHDRAWAL: 'lpaCostsWithdrawal',
  LPA_FINAL_COMMENT: 'lpaFinalComment',
  LPA_PROOF_OF_EVIDENCE: 'lpaProofOfEvidence',
  LPA_STATEMENT: 'lpaStatement',
  LPA_WITNESSES_EVIDENCE: 'lpaWitnessesEvidence',
  NEW_PLANS_DRAWINGS: 'newPlansDrawings',
  ORIGINAL_APPLICATION_FORM: 'originalApplicationForm',
  OTHER_NEW_DOCUMENTS: 'otherNewDocuments',
  OTHER_PARTY_REPRESENTATIONS: 'otherPartyRepresentations',
  OTHER_RELEVANT_POLICIES: 'otherRelevantPolicies',
  OWNERSHIP_CERTIFICATE: 'ownershipCertificate',
  PLANNING_OBLIGATION: 'planningObligation',
  PLANNING_OFFICER_REPORT: 'planningOfficerReport',
  PLANS_DRAWINGS: 'plansDrawings',
  RULE_6_PROOF_OF_EVIDENCE: 'rule6ProofOfEvidence',
  RULE_6_STATEMENT: 'rule6Statement',
  RULE_6_WITNESSES_EVIDENCE: 'rule6WitnessesEvidence',
  STATEMENT_COMMON_GROUND: 'statementCommonGround',
  SUPPLEMENTARY_PLANNING: 'supplementaryPlanning',
  TREE_PRESERVATION_PLAN: 'treePreservationPlan',
  UNCATEGORISED: 'uncategorised',
  WHO_NOTIFIED: 'whoNotified',
  WHO_NOTIFIED_LETTER_TO_NEIGHBOURS: 'whoNotifiedLetterToNeighbours',
  WHO_NOTIFIED_PRESS_ADVERT: 'whoNotifiedPressAdvert',
  WHO_NOTIFIED_SITE_NOTICE: 'whoNotifiedSiteNotice',
});

const APPEAL_EIA_DEVELOPMENT_DESCRIPTION = Object.freeze({
  AGRICULTURE_AQUACULTURE: 'agriculture-aquaculture',
  CHANGE_EXTENSIONS: 'change-extensions',
  CHEMICAL_INDUSTRY: 'chemical-industry',
  ENERGY_INDUSTRY: 'energy-industry',
  EXTRACTIVE_INDUSTRY: 'extractive-industry',
  FOOD_INDUSTRY: 'food-industry',
  INFRASTRUCTURE_PROJECTS: 'infrastructure-projects',
  MINERAL_INDUSTRY: 'mineral-industry',
  OTHER_PROJECTS: 'other-projects',
  PRODUCTION_PROCESSING_OF_METALS: 'production-processing-of-metals',
  RUBBER_INDUSTRY: 'rubber-industry',
  TEXTILE_INDUSTRIES: 'textile-industries',
  TOURISM_LEISURE: 'tourism-leisure',
});

const APPEAL_EIA_ENVIRONMENTAL_IMPACT_SCHEDULE = Object.freeze({
  SCHEDULE_1: 'schedule-1',
  SCHEDULE_2: 'schedule-2',
});

const APPEAL_EVENT_STATUS = Object.freeze({
  CHANGE_OF_PROCEDURE: 'change_of_procedure',
  CONFIRMED: 'confirmed',
  IN_ABEYANCE: 'in_abeyance',
  LINK_TO_ENFORCEMENT: 'link_to_enforcement',
  NEW_RESCHEDULED: 'new_rescheduled',
  OFFERED: 'offered',
  POSTPONED: 'postponed',
  WITHDRAWN: 'withdrawn',
});

const APPEAL_EVENT_TYPE = Object.freeze({
  HEARING: 'hearing',
  HEARING_VIRTUAL: 'hearing_virtual',
  IN_HOUSE: 'in_house',
  INQUIRY: 'inquiry',
  INQUIRY_VIRTUAL: 'inquiry_virtual',
  PRE_INQUIRY: 'pre_inquiry',
  PRE_INQUIRY_VIRTUAL: 'pre_inquiry_virtual',
  SITE_VISIT_ACCESS_REQUIRED: 'site_visit_access_required',
  SITE_VISIT_ACCOMPANIED: 'site_visit_accompanied',
  SITE_VISIT_UNACCOMPANIED: 'site_visit_unaccompanied',
});

const APPEAL_INVALID_OR_INCOMPLETE_DETAILS = Object.freeze({
  CONTAINS_LINKS_TO_WEB_PAGES: 'Contains links to web pages',
  DUPLICATED_OR_REPEATED_COMMENT: 'Duplicated or repeated comment',
  INCLUDES_INFLAMMATORY_CONTENT: 'Includes inflammatory content',
  INCLUDES_PERSONAL_OR_MEDICAL_INFORMATION: 'Includes personal or medical information',
  NO_LIST_OF_SUGGESTED_CONDITIONS: 'No list of suggested conditions',
  NOT_RELEVANT_TO_THIS_APPEAL: 'Not relevant to this appeal',
  RECEIVED_AFTER_DEADLINE: 'Received after deadline',
  OTHER_REASON: 'other_reason',
});

const APPEAL_KNOWS_ALL_OWNERS = Object.freeze({
  NO: 'No',
  SOME: 'Some',
  YES: 'Yes',
});

const APPEAL_KNOWS_OTHER_OWNERS = Object.freeze({
  NO: 'No',
  SOME: 'Some',
  YES: 'Yes',
});

const APPEAL_LINKED_CASE_STATUS = Object.freeze({
  CHILD: 'child',
  LEAD: 'lead',
});

const APPEAL_LPA_PROCEDURE_PREFERENCE = Object.freeze({
  HEARING: 'hearing',
  INQUIRY: 'inquiry',
  WRITTEN: 'written',
});

const APPEAL_LPA_QUESTIONNAIRE_VALIDATION_OUTCOME = Object.freeze({
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
});

const APPEAL_NOTIFICATION_METHOD = Object.freeze({
  ADVERT: 'advert',
  LETTER: 'letter',
  NOTICE: 'notice',
});

const APPEAL_ORIGIN = Object.freeze({
  CITIZEN: 'citizen',
  LPA: 'lpa',
  OGD: 'ogd',
  PINS: 'pins',
});

const APPEAL_REDACTED_STATUS = Object.freeze({
  NO_REDACTION_REQUIRED: 'no_redaction_required',
  NOT_REDACTED: 'not_redacted',
  REDACTED: 'redacted',
});

const APPEAL_REPRESENTATION_STATUS = Object.freeze({
  ARCHIVED: 'archived',
  AWAITING_REVIEW: 'awaiting_review',
  DRAFT: 'draft',
  INVALID: 'invalid',
  INVALID_INCOMPLETE: 'invalid_incomplete',
  PUBLISHED: 'published',
  REFERRED: 'referred',
  VALID: 'valid',
  WITHDRAWN: 'withdrawn',
});

const APPEAL_REPRESENTATION_TYPE = Object.freeze({
  COMMENT: 'comment',
  FINAL_COMMENT: 'final_comment',
  PROOFS_EVIDENCE: 'proofs_evidence',
  STATEMENT: 'statement',
});

const APPEAL_SOURCE = Object.freeze({
  CITIZEN: 'citizen',
  LPA: 'lpa',
});

const APPEAL_SOURCE_SYSTEM = Object.freeze({
  ACP: 'acp',
  BACK_OFFICE_APPEALS: 'back-office-appeals',
  HORIZON: 'horizon',
  SHAREPOINT: 'sharepoint',
});

const APPEAL_TYPE_OF_PLANNING_APPLICATION = Object.freeze({
  FULL_APPEAL: 'full-appeal',
  HOUSEHOLDER_PLANNING: 'householder-planning',
  OUTLINE_PLANNING: 'outline-planning',
  PRIOR_APPROVAL: 'prior-approval',
  REMOVAL_OR_VARIATION_OF_CONDITIONS: 'removal-or-variation-of-conditions',
  RESERVED_MATTERS: 'reserved-matters',
});

const APPEAL_VIRUS_CHECK_STATUS = Object.freeze({
  AFFECTED: 'affected',
  NOT_SCANNED: 'not_scanned',
  SCANNED: 'scanned',
});

const CASE_STAGE = Object.freeze({
  0: '0',
  ACCEPTANCE: 'acceptance',
  CORRESPONDENCE: 'correspondence',
  DECISION: 'decision',
  DEVELOPERS_APPLICATION: 'developers_application',
  DRAFT: 'draft',
  EXAMINATION: 'examination',
  POST_DECISION: 'post_decision',
  PRE_APPLICATION: 'pre-application',
  PRE_EXAMINATION: 'pre-examination',
  RECOMMENDATION: 'recommendation',
  WITHDRAWN: 'withdrawn',
});

const METHOD = Object.freeze({
  EMAIL: 'email',
  FAX: 'fax',
  MEETING: 'meeting',
  PHONE: 'phone',
  POST: 'post',
});

const NSIP_CASE_TYPE = Object.freeze({
  HAS: 'has',
  NSIP: 'nsip',
});

const NSIP_DECISION = Object.freeze({
  APPROVED: 'approved',
  REFUSED: 'refused',
  SPLIT_DECISION: 'split-decision',
});

const NSIP_DOCUMENT_CASE_STAGE = Object.freeze({
  0: '0',
  ACCEPTANCE: 'acceptance',
  CORRESPONDENCE: 'correspondence',
  DECISION: 'decision',
  DEVELOPERS_APPLICATION: 'developers_application',
  DRAFT: 'draft',
  EXAMINATION: 'examination',
  POST_DECISION: 'post_decision',
  PRE_APPLICATION: 'pre-application',
  PRE_EXAMINATION: 'pre-examination',
  RECOMMENDATION: 'recommendation',
  WITHDRAWN: 'withdrawn',
});

const NSIP_LANGUAGE = Object.freeze({
  ENGLISH: 'English',
  WELSH: 'Welsh',
});

const NSIP_MAP_ZOOM_LEVEL = Object.freeze({
  BOROUGH: 'borough',
  CITY: 'city',
  COUNTRY: 'country',
  COUNTY: 'county',
  DISTRICT: 'district',
  JUNCTION: 'junction',
  NONE: 'none',
  REGION: 'region',
  TOWN: 'town',
});

const NSIP_ORIGIN = Object.freeze({
  CITIZEN: 'citizen',
  LPA: 'lpa',
  OGD: 'ogd',
  PINS: 'pins',
});

const NSIP_PROJECT_TYPE = Object.freeze({
  BC_01_OFFICE_USE: 'BC01 - Office Use',
  BC_02_RESEARCH_AND_DEVELOPMENT_OF_PRODUCTS_OR_PROCESSES: 'BC02 - Research and Development of Products or Processes',
  BC_03_AN_INDUSTRIAL_PROCESS_OR_PROCESSES: 'BC03 - An Industrial Process or Processes',
  BC_04_STORAGE_OR_DISTRIBUTION_OF_GOODS: 'BC04 - Storage or Distribution of Goods',
  BC_05_CONFERENCES: 'BC05 - Conferences',
  BC_06_EXHIBITIONS: 'BC06 - Exhibitions',
  BC_07_SPORT: 'BC07 - Sport',
  BC_08_LEISURE: 'BC08 - Leisure',
  BC_09_TOURISM: 'BC09 - Tourism',
  EN_01_GENERATING_STATIONS: 'EN01 - Generating Stations',
  EN_02_ELECTRIC_LINES: 'EN02 - Electric Lines',
  EN_03_UNDERGROUND_GAS_STORAGE_FACILITIES: 'EN03 - Underground Gas Storage Facilities',
  EN_04_LNG_FACILITIES: 'EN04 - LNG Facilities',
  EN_05_GAS_RECEPTION_FACILITIES: 'EN05 - Gas Reception Facilities',
  EN_06_GAS_TRANSPORTER_PIPE_LINES: 'EN06 - Gas Transporter Pipe-lines',
  EN_07_OTHER_PIPE_LINES: 'EN07 - Other Pipe-lines',
  TR_01_HIGHWAYS: 'TR01 - Highways',
  TR_02_AIRPORTS: 'TR02 - Airports',
  TR_03_HARBOUR_FACILITIES: 'TR03 - Harbour Facilities',
  TR_04_RAILWAYS: 'TR04 - Railways',
  TR_05_RAIL_FREIGHT_INTERCHANGES: 'TR05 - Rail Freight Interchanges',
  WA_01_DAMS_AND_RESERVOIRS: 'WA01 - Dams and Reservoirs',
  WA_02_TRANSFER_OF_WATER_RESOURCES: 'WA02 - Transfer of Water Resources',
  WS_01_HAZARDOUS_WASTE_FACILITIES: 'WS01 - Hazardous Waste Facilities',
  WW_01_WASTE_WATER_TREATMENT_PLANTS: 'WW01 - Waste Water Treatment Plants',
});

const NSIP_PUBLISH_STATUS = Object.freeze({
  PUBLISHED: 'published',
  UNPUBLISHED: 'unpublished',
});

const NSIP_PUBLISHED_STATUS = Object.freeze({
  ARCHIVED: 'archived',
  AWAITING_UPLOAD: 'awaiting_upload',
  CHECKED: 'checked',
  DO_NOT_PUBLISH: 'do_not_publish',
  NOT_CHECKED: 'not_checked',
  PUBLISHED: 'published',
  PUBLISHING: 'publishing',
  READY_TO_PUBLISH: 'ready_to_publish',
  UNPUBLISHED: 'unpublished',
  UNPUBLISHING: 'unpublishing',
});

const NSIP_REDACTED_STATUS = Object.freeze({
  NOT_REDACTED: 'not_redacted',
  REDACTED: 'redacted',
});

const NSIP_REGIONS = Object.freeze({
  EAST_MIDLANDS: 'east_midlands',
  EASTERN: 'eastern',
  LONDON: 'london',
  NORTH_EAST: 'north_east',
  NORTH_WEST: 'north_west',
  SOUTH_EAST: 'south_east',
  SOUTH_WEST: 'south_west',
  WALES: 'wales',
  WEST_MIDLANDS: 'west_midlands',
  YORKSHIRE_AND_THE_HUMBER: 'yorkshire_and_the_humber',
});

const NSIP_REGISTER_FOR = Object.freeze({
  FAMILY_GROUP: 'FAMILY_GROUP',
  ORGANISATION: 'ORGANISATION',
  PERSON: 'PERSON',
});

const NSIP_REPRESENTATION_FROM = Object.freeze({
  AGENT: 'AGENT',
  ORGANISATION: 'ORGANISATION',
  PERSON: 'PERSON',
});

const NSIP_REPRESENTATION_TYPE = Object.freeze({
  ANOTHER_INDIVIDUAL: 'Another Individual',
  LOCAL_AUTHORITIES: 'Local Authorities',
  MEMBERS_OF_THE_PUBLIC_BUSINESSES: 'Members of the Public/Businesses',
  NON_STATUTORY_ORGANISATIONS: 'Non-Statutory Organisations',
  PARISH_COUNCILS: 'Parish Councils',
  PUBLIC_BUSINESSES: 'Public & Businesses',
  STATUTORY_CONSULTEES: 'Statutory Consultees',
});

const NSIP_SECTOR = Object.freeze({
  BC_BUSINESS_AND_COMMERCIAL: 'BC - Business and Commercial',
  EN_ENERGY: 'EN - Energy',
  TR_TRANSPORT: 'TR - Transport',
  WA_WATER: 'WA - Water',
  WS_WASTE: 'WS - Waste',
  WW_WASTE_WATER: 'WW - Waste Water',
});

const NSIP_SECURITY_CLASSIFICATION = Object.freeze({
  OFFICIAL: 'official',
  PUBLIC: 'public',
  SECRET: 'secret',
  TOP_SECRET: 'top-secret',
});

const NSIP_SOURCE_SYSTEM = Object.freeze({
  BACK_OFFICE_APPLICATIONS: 'back-office-applications',
  HORIZON: 'horizon',
});

const NSIP_STAGE = Object.freeze({
  ACCEPTANCE: 'acceptance',
  DECISION: 'decision',
  DRAFT: 'draft',
  EXAMINATION: 'examination',
  POST_DECISION: 'post_decision',
  PRE_APPLICATION: 'pre_application',
  PRE_EXAMINATION: 'pre_examination',
  RECOMMENDATION: 'recommendation',
  WITHDRAWN: 'withdrawn',
});

const NSIP_STATUS = Object.freeze({
  ARCHIVED: 'archived',
  AWAITING_REVIEW: 'awaiting_review',
  DRAFT: 'draft',
  INVALID: 'invalid',
  PUBLISHED: 'published',
  REFERRED: 'referred',
  VALID: 'valid',
  WITHDRAWN: 'withdrawn',
});

const NSIP_SUBSCRIPTION_TYPE = Object.freeze({
  ALL_UPDATES: 'allUpdates',
  APPLICATION_DECIDED: 'applicationDecided',
  APPLICATION_SUBMITTED: 'applicationSubmitted',
  REGISTRATION_OPEN: 'registrationOpen',
});

const NSIP_UPDATE_STATUS = Object.freeze({
  ARCHIVED: 'archived',
  DRAFT: 'draft',
  PUBLISHED: 'published',
  READY_TO_PUBLISH: 'ready-to-publish',
  READY_TO_UNPUBLISH: 'ready-to-unpublish',
  UNPUBLISHED: 'unpublished',
});

const NSIP_VIRUS_CHECK_STATUS = Object.freeze({
  AFFECTED: 'affected',
  NOT_SCANNED: 'not_scanned',
  SCANNED: 'scanned',
});

const REDACTION_STATUS = Object.freeze({
  REDACTED: 'redacted',
  UNREDACTED: 'unredacted',
});

const SERVICE_USER_TYPE = Object.freeze({
  AGENT: 'Agent',
  APPELLANT: 'Appellant',
  APPLICANT: 'Applicant',
  INTERESTED_PARTY: 'InterestedParty',
  REPRESENTATION_CONTACT: 'RepresentationContact',
  RULE_6_PARTY: 'Rule6Party',
  SUBSCRIBER: 'Subscriber',
});

const STATUS = Object.freeze({
  CHECKED: 'checked',
  DONOTPUBLISH: 'donotpublish',
  PUBLISHED: 'published',
  READYTOPUBLISH: 'readytopublish',
  UNCHECKED: 'unchecked',
});

const __dirname$1 = path.dirname(url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('index.cjs', document.baseURI).href))));

const schemasPath = path.join(__dirname$1, '..', 'schemas');
const commandsPath = path.join(schemasPath, 'commands');

/**
 * Load all schemas from schemas and commands folders
 *
 * @returns {Promise<import('./index.js').LoadedSchemas>}
 */
async function loadAllSchemas() {
  return {
    schemas: await loadSchemas(schemasPath),
    commands: await loadSchemas(commandsPath),
  };
}

/**
 * Load all schemas from schemas and commands folders
 *
 * @returns {import('./index.js').LoadedSchemas}
 */
function loadAllSchemasSync() {
  return {
    schemas: loadSchemasSync(schemasPath),
    commands: loadSchemasSync(commandsPath),
  };
}

exports.APPEAL_ALLOCATION_LEVEL = APPEAL_ALLOCATION_LEVEL;
exports.APPEAL_APPELLANT_PROCEDURE_PREFERENCE = APPEAL_APPELLANT_PROCEDURE_PREFERENCE;
exports.APPEAL_APPLICATION_DECISION = APPEAL_APPLICATION_DECISION;
exports.APPEAL_CASE_DECISION_OUTCOME = APPEAL_CASE_DECISION_OUTCOME;
exports.APPEAL_CASE_PROCEDURE = APPEAL_CASE_PROCEDURE;
exports.APPEAL_CASE_STAGE = APPEAL_CASE_STAGE;
exports.APPEAL_CASE_STATUS = APPEAL_CASE_STATUS;
exports.APPEAL_CASE_TYPE = APPEAL_CASE_TYPE;
exports.APPEAL_CASE_VALIDATION_OUTCOME = APPEAL_CASE_VALIDATION_OUTCOME;
exports.APPEAL_DEVELOPMENT_TYPE = APPEAL_DEVELOPMENT_TYPE;
exports.APPEAL_DOCUMENT_TYPE = APPEAL_DOCUMENT_TYPE;
exports.APPEAL_EIA_DEVELOPMENT_DESCRIPTION = APPEAL_EIA_DEVELOPMENT_DESCRIPTION;
exports.APPEAL_EIA_ENVIRONMENTAL_IMPACT_SCHEDULE = APPEAL_EIA_ENVIRONMENTAL_IMPACT_SCHEDULE;
exports.APPEAL_EVENT_STATUS = APPEAL_EVENT_STATUS;
exports.APPEAL_EVENT_TYPE = APPEAL_EVENT_TYPE;
exports.APPEAL_INVALID_OR_INCOMPLETE_DETAILS = APPEAL_INVALID_OR_INCOMPLETE_DETAILS;
exports.APPEAL_KNOWS_ALL_OWNERS = APPEAL_KNOWS_ALL_OWNERS;
exports.APPEAL_KNOWS_OTHER_OWNERS = APPEAL_KNOWS_OTHER_OWNERS;
exports.APPEAL_LINKED_CASE_STATUS = APPEAL_LINKED_CASE_STATUS;
exports.APPEAL_LPA_PROCEDURE_PREFERENCE = APPEAL_LPA_PROCEDURE_PREFERENCE;
exports.APPEAL_LPA_QUESTIONNAIRE_VALIDATION_OUTCOME = APPEAL_LPA_QUESTIONNAIRE_VALIDATION_OUTCOME;
exports.APPEAL_NOTIFICATION_METHOD = APPEAL_NOTIFICATION_METHOD;
exports.APPEAL_ORIGIN = APPEAL_ORIGIN;
exports.APPEAL_REDACTED_STATUS = APPEAL_REDACTED_STATUS;
exports.APPEAL_REPRESENTATION_STATUS = APPEAL_REPRESENTATION_STATUS;
exports.APPEAL_REPRESENTATION_TYPE = APPEAL_REPRESENTATION_TYPE;
exports.APPEAL_SOURCE = APPEAL_SOURCE;
exports.APPEAL_SOURCE_SYSTEM = APPEAL_SOURCE_SYSTEM;
exports.APPEAL_TYPE_OF_PLANNING_APPLICATION = APPEAL_TYPE_OF_PLANNING_APPLICATION;
exports.APPEAL_VIRUS_CHECK_STATUS = APPEAL_VIRUS_CHECK_STATUS;
exports.CASE_STAGE = CASE_STAGE;
exports.METHOD = METHOD;
exports.NSIP_CASE_TYPE = NSIP_CASE_TYPE;
exports.NSIP_DECISION = NSIP_DECISION;
exports.NSIP_DOCUMENT_CASE_STAGE = NSIP_DOCUMENT_CASE_STAGE;
exports.NSIP_LANGUAGE = NSIP_LANGUAGE;
exports.NSIP_MAP_ZOOM_LEVEL = NSIP_MAP_ZOOM_LEVEL;
exports.NSIP_ORIGIN = NSIP_ORIGIN;
exports.NSIP_PROJECT_TYPE = NSIP_PROJECT_TYPE;
exports.NSIP_PUBLISHED_STATUS = NSIP_PUBLISHED_STATUS;
exports.NSIP_PUBLISH_STATUS = NSIP_PUBLISH_STATUS;
exports.NSIP_REDACTED_STATUS = NSIP_REDACTED_STATUS;
exports.NSIP_REGIONS = NSIP_REGIONS;
exports.NSIP_REGISTER_FOR = NSIP_REGISTER_FOR;
exports.NSIP_REPRESENTATION_FROM = NSIP_REPRESENTATION_FROM;
exports.NSIP_REPRESENTATION_TYPE = NSIP_REPRESENTATION_TYPE;
exports.NSIP_SECTOR = NSIP_SECTOR;
exports.NSIP_SECURITY_CLASSIFICATION = NSIP_SECURITY_CLASSIFICATION;
exports.NSIP_SOURCE_SYSTEM = NSIP_SOURCE_SYSTEM;
exports.NSIP_STAGE = NSIP_STAGE;
exports.NSIP_STATUS = NSIP_STATUS;
exports.NSIP_SUBSCRIPTION_TYPE = NSIP_SUBSCRIPTION_TYPE;
exports.NSIP_UPDATE_STATUS = NSIP_UPDATE_STATUS;
exports.NSIP_VIRUS_CHECK_STATUS = NSIP_VIRUS_CHECK_STATUS;
exports.REDACTION_STATUS = REDACTION_STATUS;
exports.SERVICE_USER_TYPE = SERVICE_USER_TYPE;
exports.STATUS = STATUS;
exports.commandsPath = commandsPath;
exports.loadAllSchemas = loadAllSchemas;
exports.loadAllSchemasSync = loadAllSchemasSync;
exports.schemasPath = schemasPath;
