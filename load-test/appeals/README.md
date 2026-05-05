# Appeals Load Test Script

Sends a specified quantity of appeal cases with service users and documents on service bus

## Requirements

- node
- Azure VPN
- Azure CLI interface
- Your user has the ability to send messages manually on the given service bus topic
- For PINs unsure if that can be done in WSL currently as az login seems to fail

## Setup

`npm ci`

Create an .env file in the route of the project based on the example

- LOAD_TEST_SIMULATE_SENDING: logs to console if true rather than sending, usful for checking data before sending
- LOAD_TEST_SERVICE_BUS_NAMESPACE: the fully qualified namespace of the service bus to send to
- APPEALS_LOAD_TEST_CASE_TYPE: the case type topic to send on
- APPEALS_LOAD_TEST_CASE_COUNT: how many appeals to generate
- APPEALS_LOAD_TEST_DOCUMENTS_PER_CASE: how many documents to generate for each case

## Run

- set the env vars as needed, retrieve the correct Service Bus namespace from Azure
- connect to Azure VPN
- `az login` - connect to test subscription
- `npm run load-test-appeals`
