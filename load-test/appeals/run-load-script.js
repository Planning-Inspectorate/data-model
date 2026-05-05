import { generateAppealsLoadTestMessages } from './generate-appeals-messages.js';
import { ServiceBusEventClient } from '../service-bus-client.js';
import { MESSAGE_EVENT_TYPE } from '../../src/enums.js';

/** @type {'HAS'|'S78'} */ //@ts-ignore
const caseType = process.env.APPEALS_LOAD_TEST_CASE_TYPE || 'HAS'; // 'HAS' or 'S78'
const caseCount = parseInt(process.env.APPEALS_LOAD_TEST_CASE_COUNT || '1', 10);
const documentsPerCase = parseInt(process.env.APPEALS_LOAD_TEST_DOCUMENTS_PER_CASE || '2', 10);

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
	for (let i = 0; i < caseCount; i += 1) {
		const messages = generateAppealsLoadTestMessages(caseType, documentsPerCase, i);

		await Promise.all([
			client.sendEvents(caseTypeTopicMap[caseType], [messages.case], MESSAGE_EVENT_TYPE.CREATE),
			client.sendEvents('appeal-service-user', messages.serviceUsers, MESSAGE_EVENT_TYPE.CREATE),
			client.sendEvents('appeal-document', messages.documents, MESSAGE_EVENT_TYPE.CREATE)
		]);

		casesCreated += 1;
		documentsCreated += messages.documents.length;
		serviceUsersCreated += messages.serviceUsers.length;
	}
} finally {
	await client.close();
}

console.log('Finished');
console.log({ casesCreated, documentsCreated, serviceUsersCreated });
