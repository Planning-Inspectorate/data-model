import { ServiceBusClient } from '@azure/service-bus';
import { DefaultAzureCredential } from '@azure/identity';

/**
 * @typedef {object} ServiceBusEventClientOptions
 * @property {string | undefined} [connectionString]
 * @property {import('@azure/core-auth').TokenCredential | undefined} [credential]
 */

/**
 * Event client used to broadcast messages to service bus topics.
 * @class
 */
export class ServiceBusEventClient {
	constructor() {
		this.client = new ServiceBusClient(process.env.LOAD_TEST_SERVICE_BUS_NAMESPACE, new DefaultAzureCredential());
		this.simulateSending = process.env.LOAD_TEST_SIMULATE_SENDING === 'true'; // true logs to console, false sends to service bus
	}

	/**
	 * @param {string} topic
	 * @returns Instance of the service bus sender from the service bus client
	 */
	#createSender = (topic) => {
		return this.client.createSender(topic);
	};

	/**
	 * Returns unix timestamp representing the trace id
	 * @returns {number}
	 */
	#createTraceId = () => {
		return Date.now();
	};

	/**
	 * @param {object[]} events
	 * @param {number} traceId
	 * @param {import('../utils/event-type').EventType} type
	 * @returns {import('@azure/service-bus').ServiceBusMessage []}
	 */
	#transformMessagesToSend = (events, traceId, type) => {
		return events.map((body) => ({
			body,
			contentType: 'application/json',
			applicationProperties: {
				version: '0.1',
				traceId,
				type
			}
		}));
	};

	/**
	 * @param {string} topic
	 * @param {any[]} events
	 * @param {import('../utils/event-type').EventType} eventType
	 */
	sendEvents = async (topic, events, eventType) => {
		const sender = this.#createSender(topic);

		try {
			const traceId = this.#createTraceId();

			console.log(`Publishing ${events.length} events to topic ${topic} with trace id ${traceId}`);

			const messages = this.#transformMessagesToSend(events, traceId, eventType);

			if (this.simulateSending) {
				console.log(`Simulating sending messages: ${JSON.stringify(messages)}`);
			} else {
				await sender.sendMessages(messages);
			}

			return events;
		} catch (error) {
			console.error(`Error sending messages to topic ${topic}:`, error);
			throw error;
		} finally {
			if (!sender.isClosed) {
				await sender.close();
			}
		}
	};

	close = async () => {
		await this.client.close();
	};
}
