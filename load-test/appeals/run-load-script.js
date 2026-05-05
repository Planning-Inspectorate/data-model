import { generateAppealsLoadTestMessages } from './generate-appeals-messages.js';
import { ServiceBusEventClient } from '../service-bus-client.js';
import { MESSAGE_EVENT_TYPE } from '../../src/enums.js';

/** @type {'HAS'|'S78'} */ //@ts-ignore
const caseType = process.env.APPEALS_LOAD_TEST_CASE_TYPE || 'HAS'; // 'HAS' or 'S78'
const caseCount = parseInt(process.env.APPEALS_LOAD_TEST_CASE_COUNT || '1', 10);
const documentsPerCase = parseInt(process.env.APPEALS_LOAD_TEST_DOCUMENTS_PER_CASE || '2', 10);
const batchSize = parseInt(process.env.APPEALS_LOAD_TEST_BATCH_SIZE || '50', 10);

if (batchSize < 1) {
	throw new Error('Batch size must be at least 1');
}

const caseTypeTopicMap = {
	HAS: 'appeal-has',
	S78: 'appeal-s78'
};

if (!caseTypeTopicMap[caseType]) {
	throw new Error(`Unsupported case type: ${caseType}`);
}

const client = new ServiceBusEventClient();

let casesCreated = 0;
let documentsCreated = 0;
let serviceUsersCreated = 0;

try {
	for (let batchIndex = 0; batchIndex < caseCount; batchIndex += batchSize) {
		const batch = [];
		const batchEnd = Math.min(batchIndex + batchSize, caseCount);

		for (let index = batchIndex; index < batchEnd; index += 1) {
			batch.push(generateAppealsLoadTestMessages(caseType, documentsPerCase, index));
		}

		const batchCases = batch.map((m) => m.case);
		const batchServiceUsers = batch.flatMap((m) => m.serviceUsers);
		const batchDocuments = batch.flatMap((m) => m.documents);

		await Promise.all([
			client.sendEvents(caseTypeTopicMap[caseType], batchCases, MESSAGE_EVENT_TYPE.CREATE),
			client.sendEvents('appeal-service-user', batchServiceUsers, MESSAGE_EVENT_TYPE.CREATE),
			client.sendEvents('appeal-document', batchDocuments, MESSAGE_EVENT_TYPE.CREATE)
		]);

		casesCreated += batch.length;
		documentsCreated += batchDocuments.length;
		serviceUsersCreated += batchServiceUsers.length;
	}
} finally {
	await client.close();
}

console.log('Finished');
console.log({ casesCreated, documentsCreated, serviceUsersCreated });
