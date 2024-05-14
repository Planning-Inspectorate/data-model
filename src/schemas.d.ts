/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Schema defining the metadata for appeal documents
 */
export interface AppealDocument {
  /**
   * The unique identifier for the document
   */
  documentId: string;
  /**
   * Internal case identifier
   */
  caseId: number | null;
  /**
   * External case identifier
   */
  caseReference: string;
  /**
   * A document can have multiple versions, and this indicates the latest version
   */
  version: number;
  /**
   * Current stored name of the document
   */
  filename: string;
  /**
   * Original name of document
   */
  originalFilename: string;
  /**
   * The file size, in bytes
   */
  size: number;
  /**
   * The mime type for the current version of the file
   */
  mime: string;
  /**
   * The internal location of the document
   */
  documentURI: string;
  /**
   * The location of the published document, will be null if published status is false
   */
  publishedDocumentURI: string | null;
  /**
   * Indicates the virus check status for the current document
   */
  virusCheckStatus: 'not_scanned' | 'scanned' | 'affected' | null;
  /**
   * A MD5 hash to check the validity of the file
   */
  fileMD5: string | null;
  /**
   * The creation date for the document
   */
  dateCreated: string;
  /**
   * The date the document was received
   */
  dateReceived: string | null;
  /**
   * The date the document was published
   */
  datePublished?: string | null;
  /**
   * The last update date for the document
   */
  lastModified: string | null;
  /**
   * The internal code for an appeal type, e.g. Householder (D)
   */
  caseType: 'C' | 'D' | 'F' | 'G' | 'H' | 'L' | 'Q' | 'S' | 'V' | 'W' | 'X' | 'Y' | 'Z' | null;
  /**
   * Indicates the redaction status for the document
   */
  redactedStatus: 'not_redacted' | 'redacted' | 'no_redaction_required' | null;
  /**
   * The type of document, used for exchange, migrations and consumption from the appeal back-office system
   */
  documentType:
    | 'appellantCaseCorrespondence'
    | 'appellantCaseWithdrawalLetter'
    | 'appellantCostsApplication'
    | 'appellantCostsCorrespondence'
    | 'appellantCostsWithdrawal'
    | 'appellantStatement'
    | 'applicationDecisionLetter'
    | 'changedDescription'
    | 'originalApplicationForm'
    | 'whoNotified'
    | 'conservationMap'
    | 'lettersNeighbours'
    | 'lpaCaseCorrespondence'
    | 'lpaCostsApplication'
    | 'lpaCostsCorrespondence'
    | 'lpaCostsWithdrawal'
    | 'otherPartyRepresentations'
    | 'planningOfficerReport'
    | 'pressAdvert'
    | 'siteNotice'
    | 'costsDecisionLetter'
    | 'caseDecisionLetter'
    | 'crossTeamCorrespondence'
    | 'inspectorCorrespondence'
    | null;
  /**
   * The system mastering the metadata for the current document
   */
  sourceSystem: 'back-office-appeals' | 'horizon' | 'acp' | 'sharepoint' | null;
  /**
   * Indicates where the documents originates from
   */
  origin: 'pins' | 'citizen' | 'lpa' | 'ogd' | null;
  /**
   * Owner of the current document
   */
  owner: string | null;
  /**
   * Name of person who authored document
   */
  author: string | null;
  /**
   * A custom description for the document
   */
  description: string | null;
  /**
   * The stage in the appeal process that has created the document
   */
  caseStage:
    | 'appellant-case'
    | 'lpa-questionnaire'
    | 'statements'
    | 'third-party-comments'
    | 'final-comments'
    | 'appeal-decision'
    | 'costs'
    | null;
  /**
   * The folder ID containing the document in Horizon
   */
  horizonFolderId: string | null;
  [k: string]: unknown;
}

/**
 * Employee schema
 */
export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  [k: string]: unknown;
}

/**
 * Folders can have optional parents. All folders belong to a Case.
 */
export interface Folder {
  /**
   * The unique identifier within the Back Office.
   */
  id: number;
  /**
   * The case reference this folder belongs to.
   */
  caseReference: string;
  /**
   * Folder display name in English.
   */
  displayNameEnglish: string;
  /**
   * Folder display name in Welsh.
   */
  displayNameWelsh: string | null;
  /**
   * Optional parent folder ID.
   */
  parentFolderId: number | null;
  caseStage:
    | 'draft'
    | 'pre-application'
    | 'acceptance'
    | 'pre-examination'
    | 'examination'
    | 'recommendation'
    | 'decision'
    | 'post_decision'
    | 'withdrawn'
    | 'developers_application'
    | 'correspondence'
    | '0'
    | null;
  [k: string]: unknown;
}

/**
 * NSIP document schema
 */
export interface NSIPDocument {
  /**
   * The unique identifier for the file. This will be different to documentReference
   */
  documentId: string;
  /**
   * Internal case identifier
   */
  caseId: number | null;
  caseRef: string | null;
  /**
   * Reference used throughout ODT <CaseRef>-<SequenceNo>
   */
  documentReference: string | null;
  version: number;
  examinationRefNo: string | null;
  /**
   * Current stored filename of the file
   */
  filename: string;
  /**
   * Original filename of file
   */
  originalFilename: string;
  size: number;
  mime: string | null;
  /**
   * The internal location of the document
   */
  documentURI: string;
  /**
   * The location of the published document. Only applicable to documents which are published.
   */
  publishedDocumentURI: string | null;
  path: string | null;
  virusCheckStatus: 'not_scanned' | 'scanned' | 'affected' | null;
  fileMD5: string | null;
  dateCreated: string;
  lastModified: string | null;
  caseType: 'nsip' | 'has' | null;
  redactedStatus: 'not_redacted' | 'redacted' | null;
  publishedStatus:
    | 'not_checked'
    | 'checked'
    | 'ready_to_publish'
    | 'do_not_publish'
    | 'publishing'
    | 'published'
    | 'archived'
    | 'unpublished'
    | 'unpublishing'
    | 'awaiting_upload'
    | null;
  datePublished: string | null;
  documentType: string | null;
  securityClassification: 'public' | 'official' | 'secret' | 'top-secret' | null;
  sourceSystem: 'back-office-appeals' | 'back-office-applications' | 'horizon' | 'ni_file' | 'sharepoint' | null;
  origin: 'pins' | 'citizen' | 'lpa' | 'ogd' | null;
  owner: string | null;
  /**
   * Name of person who authored document
   */
  author: string | null;
  /**
   * Welsh name of person who authored document
   */
  authorWelsh?: string | null;
  /**
   * The on behalf of or agent submitter of document
   */
  representative: string | null;
  description: string | null;
  descriptionWelsh?: string | null;
  documentCaseStage:
    | 'draft'
    | 'pre-application'
    | 'acceptance'
    | 'pre-examination'
    | 'examination'
    | 'recommendation'
    | 'decision'
    | 'post_decision'
    | 'withdrawn'
    | 'developers_application'
    | 'correspondence'
    | '0'
    | null;
  /**
   * Filter field to provide additional filtering
   */
  filter1: string | null;
  /**
   * Filter field in Welsh
   */
  filter1Welsh?: string | null;
  /**
   * Filter field to provide additional filtering
   */
  filter2: string | null;
  /**
   * The folder where the document exists
   */
  horizonFolderId: string | null;
  /**
   * The GUID of the transcript document (if one was provided).
   */
  transcriptId: string | null;
  [k: string]: unknown;
}

/**
 * Examination Timetable for an NSIP Project
 */
export interface ExaminationTimetable {
  /**
   * Unique string reference of the associated Case
   */
  caseReference: string;
  /**
   * whether the Examination Timetable has been published or not
   */
  published?: boolean | null;
  events: Event[];
  [k: string]: unknown;
}
export interface Event {
  /**
   * Event Identifier
   */
  eventId: number;
  /**
   * Compulsory Acquisition Hearing/Deadline/Issue Specific Hearing etc
   */
  type:
    | 'Accompanied Site Inspection'
    | 'Compulsory Acquisition Hearing'
    | 'Deadline'
    | 'Deadline For Close Of Examination'
    | 'Issued By'
    | 'Issue Specific Hearing'
    | 'Open Floor Hearing'
    | 'Other Meeting'
    | 'Preliminary Meeting'
    | 'Procedural Deadline (Pre-Examination)'
    | 'Procedural Decision'
    | 'Publication Of';
  /**
   * Title Of Examination Timetable Event
   */
  eventTitle: string;
  /**
   * Title Of Examination Timetable Event In Welsh
   */
  eventTitleWelsh?: string | null;
  description: string;
  descriptionWelsh?: string | null;
  /**
   * Optional start date for event window
   */
  eventDeadlineStartDate?: string | null;
  /**
   * Event Date = effective deadline (end) date
   */
  date: string;
  eventLineItems: LineItem[];
  [k: string]: unknown;
}
export interface LineItem {
  description: string;
  [k: string]: unknown;
}

/**
 * NSIP Project Update (formerly known as Banners)
 */
export interface NSIPProjectUpdate {
  /**
   * The unique identifier within the Back Office.
   */
  id: number;
  /**
   * the case reference this update relates to
   */
  caseReference: string;
  /**
   * The date the update was published
   */
  updateDate: string | null;
  /**
   * Internal title or name of the update
   */
  updateName: string | null;
  /**
   * HTML content of the update in English. Can only include `<a> <b> <ul> <li>` tags.
   */
  updateContentEnglish: string;
  /**
   * HTML content of the update in Welsh. Can only include `<a> <b> <ul> <li>` tags.
   */
  updateContentWelsh: string | null;
  /**
   * The current status of this update
   */
  updateStatus: 'draft' | 'ready-to-publish' | 'published' | 'ready-to-unpublish' | 'unpublished' | 'archived';
  [k: string]: unknown;
}

/**
 * Subset of Pins Data Model [Case]
 */
export interface NSIPProject {
  /**
   * The unique identifier within the Back Office. This is not the same as the case reference
   */
  caseId: number;
  caseReference: string | null;
  /**
   * Name of project
   */
  projectName: string | null;
  /**
   * Name of project in Welsh
   */
  projectNameWelsh?: string | null;
  projectDescription: string | null;
  projectDescriptionWelsh?: string | null;
  /**
   * Decision: approved/refused/split-decision
   */
  decision: 'approved' | 'refused' | 'split-decision' | null;
  publishStatus: 'published' | 'unpublished' | null;
  /**
   * {Sector Abbreviation} - {Sector Display Name}
   */
  sector:
    | 'BC - Business and Commercial'
    | 'EN - Energy'
    | 'TR - Transport'
    | 'WA - Water'
    | 'WS - Waste'
    | 'WW - Waste Water'
    | null;
  /**
   * {SubSector Abbreviation} - {SubSector Display Name}
   */
  projectType:
    | 'BC01 - Office Use'
    | 'BC02 - Research and Development of Products or Processes'
    | 'BC03 - An Industrial Process or Processes'
    | 'BC04 - Storage or Distribution of Goods'
    | 'BC05 - Conferences'
    | 'BC06 - Exhibitions'
    | 'BC07 - Sport'
    | 'BC08 - Leisure'
    | 'BC09 - Tourism'
    | 'EN01 - Generating Stations'
    | 'EN02 - Electric Lines'
    | 'EN03 - Underground Gas Storage Facilities'
    | 'EN04 - LNG Facilities'
    | 'EN05 - Gas Reception Facilities'
    | 'EN06 - Gas Transporter Pipe-lines'
    | 'EN07 - Other Pipe-lines'
    | 'TR01 - Highways'
    | 'TR02 - Airports'
    | 'TR03 - Harbour Facilities'
    | 'TR04 - Railways'
    | 'TR05 - Rail Freight Interchanges'
    | 'WS01 - Hazardous Waste Facilities'
    | 'WW01 - Waste Water Treatment Plants'
    | 'WA01 - Dams and Reservoirs'
    | 'WA02 - Transfer of Water Resources'
    | null;
  sourceSystem: 'back-office-applications' | 'horizon';
  /**
   * Process stage identifier
   */
  stage:
    | 'draft'
    | 'pre_application'
    | 'acceptance'
    | 'pre_examination'
    | 'examination'
    | 'recommendation'
    | 'decision'
    | 'post_decision'
    | 'withdrawn'
    | null;
  /**
   * Description of site location
   */
  projectLocation: string | null;
  /**
   * Description of site location in Welsh
   */
  projectLocationWelsh?: string | null;
  /**
   * PINS Project email address pubished on website
   */
  projectEmailAddress: string | null;
  regions: (
    | 'east_midlands'
    | 'eastern'
    | 'london'
    | 'north_east'
    | 'north_west'
    | 'south_east'
    | 'south_west'
    | 'wales'
    | 'west_midlands'
    | 'yorkshire_and_the_humber'
  )[];
  /**
   * Drives addition of Transboundary tab on website. [TODO]
   */
  transboundary: boolean | null;
  /**
   * Project site Easting co-ordinate.
   */
  easting: number | null;
  /**
   * Project site Northing co-ordinate.
   */
  northing: number | null;
  /**
   * Welsh Language translation required.
   */
  welshLanguage: boolean | null;
  /**
   * Resolution of pinned map. Set when co-ordinates are created.
   */
  mapZoomLevel: 'country' | 'region' | 'county' | 'borough' | 'district' | 'city' | 'town' | 'junction' | 'none' | null;
  /**
   * Relevant Government Department. [TODO]
   */
  secretaryOfState: string | null;
  _preApplicationDates?: unknown;
  /**
   * Date at which applicant notify PINS of a project (pre-publishing)
   */
  datePINSFirstNotifiedOfProject: string | null;
  /**
   * Date Project Appears On Website
   */
  dateProjectAppearsOnWebsite: string | null;
  /**
   * Approximate Anticipated Submission Date Of Application, e.g. Q3 2023
   */
  anticipatedSubmissionDateNonSpecific: string | null;
  /**
   * Anticipated Submission Date Of Application
   */
  anticipatedDateOfSubmission: string | null;
  /**
   * (TBC by Env. Services Team)
   */
  screeningOpinionSought: string | null;
  /**
   * (TBC by Env. Services Team)
   */
  screeningOpinionIssued: string | null;
  /**
   * (TBC by Env. Services Team)
   */
  scopingOpinionSought: string | null;
  /**
   * (TBC by Env. Services Team)
   */
  scopingOpinionIssued: string | null;
  /**
   * Applicant must notify PINS of statutory consultation
   */
  section46Notification: string | null;
  _acceptanceDates?: unknown;
  /**
   * Date Applcation is submitted
   */
  dateOfDCOSubmission: string | null;
  /**
   * DeadlineForAcceptanceDecision
   */
  deadlineForAcceptanceDecision: string | null;
  /**
   * Date Application is Formerly Accepted by PINS
   */
  dateOfDCOAcceptance: string | null;
  /**
   * Date of Non Acceptance
   */
  dateOfNonAcceptance: string | null;
  _preExaminationDates?: unknown;
  /**
   * Date at which point publish can submit relevant reps
   */
  dateOfRepresentationPeriodOpen: string | null;
  /**
   * Date at which point publish can no longer submit relevant reps
   */
  dateOfRelevantRepresentationClose: string | null;
  /**
   * ExtensionToDateRelevantRepresentationsClose
   */
  extensionToDateRelevantRepresentationsClose: string | null;
  /**
   * Date at which relevant reps appear on the website
   */
  dateRRepAppearOnWebsite: string | null;
  dateIAPIDue: string | null;
  rule6LetterPublishDate: string | null;
  /**
   * Meeting between all parties inc public
   */
  preliminaryMeetingStartDate: string | null;
  notificationDateForPMAndEventsDirectlyFollowingPM: string | null;
  notificationDateForEventsDeveloper: string | null;
  _examinationDates?: unknown;
  /**
   * Applicant has notified all parties of application
   */
  dateSection58NoticeReceived: string | null;
  /**
   * ConfirmedStartOfExamination by panel
   */
  confirmedStartOfExamination: string | null;
  rule8LetterPublishDate: string | null;
  /**
   * DeadlineForCloseOfExamination
   */
  deadlineForCloseOfExamination: string | null;
  /**
   * ConfirmedSEndOfExamination by panel
   */
  dateTimeExaminationEnds: string | null;
  /**
   * Examination Period extended to this date
   */
  stage4ExtensionToExamCloseDate: string | null;
  _recommendationDates?: unknown;
  /**
   * DeadlineForSubmissionOfRecommendation
   */
  deadlineForSubmissionOfRecommendation: string | null;
  /**
   * Date recomm report sent to SoS
   */
  dateOfRecommendations: string | null;
  /**
   * Recommendation period extended to this date
   */
  stage5ExtensionToRecommendationDeadline: string | null;
  _decisionDates?: unknown;
  /**
   * DeadlineForDecision
   */
  deadlineForDecision: string | null;
  /**
   * Decision by SoS
   */
  confirmedDateOfDecision: string | null;
  /**
   * Decision period extended to this date
   */
  stage5ExtensionToDecisionDeadline: string | null;
  _postDecisionDates?: unknown;
  /**
   * Judicial Review
   */
  jRPeriodEndDate: string | null;
  _withdrawalDates?: unknown;
  /**
   * DateProjectWithdrawn by applicant
   */
  dateProjectWithdrawn: string | null;
  /**
   * Maps to [Employee].[EmployeeID].
   */
  operationsLeadId: string | null;
  /**
   * New NSIP role, Maps to [Employee].[EmployeeID]
   */
  operationsManagerId: string | null;
  /**
   * Maps to [Employee].[EmployeeID]
   */
  caseManagerId: string | null;
  nsipOfficerIds: string[];
  nsipAdministrationOfficerIds: string[];
  /**
   * Maps to [Employee].[EmployeeID]
   */
  leadInspectorId: string | null;
  inspectorIds: string[];
  /**
   * Maps to [Employee].[EmployeeID]
   */
  environmentalServicesOfficerId: string | null;
  /**
   * Maps to [Employee].[EmployeeID]
   */
  legalOfficerId: string | null;
  /**
   * Maps to [ServiceUser].[id] where the serviceUserType is Applicant
   */
  applicantId: string | null;
  /**
   * Has this case been migrated from the legacy system? True if so.
   */
  migrationStatus: boolean | null;
  /**
   * Date at which relevant reps can be reopened
   */
  dateOfReOpenRelevantRepresentationStart: string | null;
  /**
   * Date at which relevant reps can no longer be reopened
   */
  dateOfReOpenRelevantRepresentationClose: string | null;
  [k: string]: unknown;
}

/**
 * NSIP Representation schema
 */
export interface Representation {
  representationId: number;
  referenceId: string | null;
  examinationLibraryRef: string | null;
  caseRef: string;
  /**
   * The unique identifier within the Back Office. This is not the same as the case reference
   */
  caseId: number | null;
  status:
    | 'awaiting_review'
    | 'referred'
    | 'valid'
    | 'invalid'
    | 'published'
    | 'archived'
    | 'draft'
    | 'withdrawn'
    | null;
  originalRepresentation: string;
  redacted: boolean | null;
  redactedRepresentation: string | null;
  redactedBy: string | null;
  redactedNotes: string | null;
  representationFrom: 'PERSON' | 'ORGANISATION' | 'AGENT' | null;
  /**
   * ServiceUser Id of the person or organisation being represented
   */
  representedId: string;
  /**
   * ServiceUser Id of the person or organisation submitting representation in the case of Agent representationFrom
   */
  representativeId: string | null;
  registerFor: 'PERSON' | 'ORGANISATION' | 'FAMILY_GROUP' | null;
  representationType:
    | 'Local Authorities'
    | 'Parish Councils'
    | 'Members of the Public/Businesses'
    | 'Public & Businesses'
    | 'Statutory Consultees'
    | 'Non-Statutory Organisations'
    | 'Another Individual'
    | null;
  dateReceived: string;
  attachmentIds: string[];
  [k: string]: unknown;
}

/**
 * Subscribers are a subset of Service Users, part of the PINS Data Model
 */
export interface NsipSubscription {
  /**
   * The unique identifier within the Back Office. Ignored as part of register-nsip-subscription.
   */
  subscriptionId: number | null;
  /**
   * the case reference the subscription relates to
   */
  caseReference: string;
  emailAddress: string;
  /**
   * which update does the subscriber want to get notified of. For multiple types, use multiple messages.
   */
  subscriptionType: 'allUpdates' | 'applicationSubmitted' | 'applicationDecided' | 'registrationOpen';
  /**
   * The date to start getting updates
   */
  startDate: string | null;
  /**
   * The date to stop getting updates
   */
  endDate: string | null;
  language: 'English' | 'Welsh' | null;
  [k: string]: unknown;
}

/**
 * Section 51 Advice schema
 */
export interface S51Advice {
  adviceId: number;
  adviceReference: string;
  caseId: number | null;
  caseReference: string | null;
  /**
   * Title of the advice
   */
  title: string;
  /**
   * Title of the advice in Welsh
   */
  titleWelsh?: string | null;
  /**
   * Who the enquiry is from
   */
  from: string | null;
  /**
   * Who the enquiry is on behalf of
   */
  agent: string | null;
  /**
   * How the enquiry was made
   */
  method: 'phone' | 'email' | 'meeting' | 'post' | null;
  /**
   * Date the enquiry was made
   */
  enquiryDate: string | null;
  /**
   * Details of the enquiry
   */
  enquiryDetails: string | null;
  /**
   * Details of the enquiry in Welsh
   */
  enquiryDetailsWelsh?: string | null;
  /**
   * Who issued the advice
   */
  adviceGivenBy: string | null;
  /**
   * Date the advice was given
   */
  adviceDate: string | null;
  /**
   * Details of the advice
   */
  adviceDetails: string | null;
  /**
   * Details of the advice in Welsh
   */
  adviceDetailsWelsh?: string | null;
  status: 'checked' | 'unchecked' | 'readytopublish' | 'published' | 'donotpublish' | null;
  redactionStatus: 'unredacted' | 'redacted' | null;
  attachmentIds: string[];
  [k: string]: unknown;
}

/**
 * Service User of the planning inspectorate. Also contains role information by combining serviceUserType and caseReference.
 */
export interface ServiceUser {
  /**
   * A unique identifier for the entity.
   */
  id: string;
  /**
   * A formal greeting, e.g., Mr, Mrs, Ms.
   */
  salutation: string | null;
  /**
   * The first name of the individual.
   */
  firstName: string | null;
  /**
   * The last name of the individual.
   */
  lastName: string | null;
  /**
   * The first line of the address.
   */
  addressLine1: string | null;
  /**
   * The second line of the address, usually includes suite or apartment number.
   */
  addressLine2: string | null;
  /**
   * The town or city of the address.
   */
  addressTown: string | null;
  /**
   * The county in which the town or city is located.
   */
  addressCounty: string | null;
  /**
   * The postal code for the address.
   */
  postcode: string | null;
  /**
   * The country of the address.
   */
  addressCountry: string | null;
  /**
   * The name of the organisation associated with the individual.
   */
  organisation: string | null;
  /**
   * The type or nature of the organisation.
   */
  organisationType: string | null;
  /**
   * The individual's role or position within the organisation.
   */
  role: string | null;
  /**
   * The primary telephone contact number.
   */
  telephoneNumber: string | null;
  /**
   * An alternate or secondary phone number.
   */
  otherPhoneNumber: string | null;
  /**
   * A fax contact number.
   */
  faxNumber: string | null;
  /**
   * The primary email address for contact.
   */
  emailAddress: string | null;
  /**
   * Website address or URL.
   */
  webAddress: string | null;
  /**
   * Type or category of the service user.
   */
  serviceUserType: 'Applicant' | 'Appellant' | 'Agent' | 'RepresentationContact' | 'Subscriber';
  /**
   * Reference number for a particular case or incident.
   */
  caseReference: string;
  /**
   * The originating system from where the data was sourced.
   */
  sourceSystem: string;
  /**
   * Unique identifier from the source system.
   */
  sourceSuid: string;
  [k: string]: unknown;
}

export type Name = string;

/**
 * Subset of Pins Data Model [Service User]
 */
export interface InterestedParty {
  id?: number;
  interestedPartyNumber?: string;
  firstName?: string;
  lastName?: string;
  under18?: boolean;
  organisationName?: Name;
  jobTitle?: string;
  contactMethod?: 'email' | 'post';
  email?: string;
  phoneNumber?: string;
  address?: Address;
  [k: string]: unknown;
}
export interface Address {
  addressLine1: string;
  addressLine2?: string;
  town: string;
  postcode: string;
  country?: string;
}

/**
 * A command to deliver metadata about a new document submission added to a deadline
 */
export interface NewDeadlineSubmission {
  /**
   * The unique reference of the case
   */
  caseReference?: string;
  /**
   * The name of the FO user who made the submission
   */
  name: string;
  /**
   * The email address of the FO user who made the submission
   */
  email: string;
  /**
   * Was the submission made by an interested party on behalf of someone else?
   */
  interestedParty?: boolean;
  /**
   * Only necessary if `interestedParty` is true
   */
  interestedPartyReference?: string;
  /**
   * The name of the deadline which the submission was made against
   */
  deadline: string;
  /**
   * The name of the deadline line item the submission was made against
   */
  submissionType: string;
  /**
   * Does the submission contain sensitive data?
   */
  sensitiveData?: boolean;
  lateSubmission?: boolean;
  /**
   * ID of the submission in the database
   */
  submissionId?: string;
  /**
   * The GUID of the blob in storage
   */
  blobGuid: string;
  /**
   * The file name of the document in blob storage
   */
  documentName: string;
  [k: string]: unknown;
}

/**
 * Result of processing a new exam timetable submission
 */
export interface NsipExamTimetableSubmission {
  status: 'SUCCESS' | 'VIRUS_DETECTED' | 'FAILURE';
  deadline: string;
  submissionType: string;
  blobGuid: string;
  documentName: string;
  [k: string]: unknown;
}

/**
 * A command to register an NSIP subscription with the back office
 */
export interface RegisterNsipSubscription {
  /**
   * Properties in additionalProperties in the Service Bus message. Not present in the message body.
   */
  __additionalProperties__?: {
    type?: 'Create' | 'Delete';
  };
  nsipSubscription?: NsipSubscription;
  /**
   * Which update(s) does the subscriber want to get notified of. Note nsipSubscription.subscriptionType is ignored.
   */
  subscriptionTypes?: ('allUpdates' | 'applicationSubmitted' | 'applicationDecided' | 'registrationOpen')[];
  [k: string]: unknown;
}
/**
 * Subscribers are a subset of Service Users, part of the PINS Data Model
 */
export interface NsipSubscription {
  /**
   * The unique identifier within the Back Office. Ignored as part of register-nsip-subscription.
   */
  subscriptionId: number | null;
  /**
   * the case reference the subscription relates to
   */
  caseReference: string;
  emailAddress: string;
  /**
   * which update does the subscriber want to get notified of. For multiple types, use multiple messages.
   */
  subscriptionType: 'allUpdates' | 'applicationSubmitted' | 'applicationDecided' | 'registrationOpen';
  /**
   * The date to start getting updates
   */
  startDate: string | null;
  /**
   * The date to stop getting updates
   */
  endDate: string | null;
  language: 'English' | 'Welsh' | null;
  [k: string]: unknown;
}

export type Name = string;

export interface RegisterRepresentation {
  /**
   * registration identification number
   */
  referenceId: string;
  /**
   * The unique reference of the case
   */
  caseReference: string;
  /**
   * Type of representation
   */
  representationType?: string;
  originalRepresentation: string;
  representationFrom: 'PERSON' | 'ORGANISATION' | 'AGENT';
  registerFor: 'PERSON' | 'ORGANISATION' | 'FAMILY_GROUP';
  represented: InterestedParty;
  representative?: InterestedParty1;
  dateReceived?: string;
  [k: string]: unknown;
}
/**
 * Person or organisation being represented
 */
export interface InterestedParty {
  id?: number;
  interestedPartyNumber?: string;
  firstName?: string;
  lastName?: string;
  under18?: boolean;
  organisationName?: Name;
  jobTitle?: string;
  contactMethod?: 'email' | 'post';
  email?: string;
  phoneNumber?: string;
  address?: Address;
  [k: string]: unknown;
}
export interface Address {
  addressLine1: string;
  addressLine2?: string;
  town: string;
  postcode: string;
  country?: string;
}
/**
 * Person or organisation submitting representation in the case of Agent representationFrom
 */
export interface InterestedParty1 {
  id?: number;
  interestedPartyNumber?: string;
  firstName?: string;
  lastName?: string;
  under18?: boolean;
  organisationName?: Name;
  jobTitle?: string;
  contactMethod?: 'email' | 'post';
  email?: string;
  phoneNumber?: string;
  address?: Address;
  [k: string]: unknown;
}

