# Appeals Load Test Script

This script is designed to allow load testing of service bus message consumers without the capacity of the sender being a limiting factor. The service bus client/strategy is hopefully resuable for other services in future

`load-test-appeals` sends a specified quantity of appeal case messages with service users and documents to service bus

This was written as a quick solution to provide ODW with the ability to run a load test without having to generate actual appeals within the Appeals Service, as generating them Appeals side proved too slow

## Requirements

- node
- Azure VPN
- Azure CLI interface
- Your user has the ability to send messages manually on the given service bus topic
- Unsure if this can be run in WSL currently as az login seems to fail

## Setup

`npm ci`

Create an .env file in the route of the project based on the example

- LOAD_TEST_SIMULATE_SENDING: (true|false) logs to console if true rather than sending, usful for checking data before sending
- LOAD_TEST_SERVICE_BUS_NAMESPACE: the fully qualified namespace of the service bus instance
- APPEALS_LOAD_TEST_CASE_TYPE: (HAS|S78) the case type topic to send on
- APPEALS_LOAD_TEST_CASE_COUNT: how many appeals to generate
- APPEALS_LOAD_TEST_DOCUMENTS_PER_CASE: how many documents to generate for each case
- APPEALS_LOAD_TEST_BATCH_SIZE: how many appeals are sent to service bus in one go, used to improve the speed in which messages can be sent to service bus

## Run

- set the env vars as needed, retrieve the correct Service Bus namespace from Azure
- connect to Azure VPN
- `az login` - login as yourself and connect to test env subscription
- `npm run load-test-appeals`
