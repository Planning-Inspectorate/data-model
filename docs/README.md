# README

## Top-level Schemas

* [Appeal Document](./appeal-document.md "Schema defining the metadata for appeal documents") – `appeal-document.schema.json`

* [Appeal Event](./appeal-event.md "Schema defining the metadata for appeal events, such as site visits, inquiries, hearings") – `appeal-event.schema.json`

* [Appeal Event Estimate](./appeal-event-estimate.md "All event estimates belong to a case") – `appeal-event-estimate.schema.json`

* [Appeal HAS Case](./appeal-has.md "Schema defining the metadata for an appeal") – `appeal-has.schema.json`

* [Appeal Representation](./appeal-representation.md "Schema defining the metadata for appeal representations, such as statements, third-party comments and final comments") – `appeal-representation.schema.json`

* [Appeal S78 Case](./appeal-s78.md "Schema defining the metadata for an appeal (S78)") – `appeal-s78.schema.json`

* [DaRT API response](./dart-response.md "Schema defining the data returned by the DaRT API") – `dart-response.schema.json`

* [Entra ID User Objects](./entraid.md "A list of users from EntraID") – `entraid.schema.json`

* [Examination Timetable](./nsip-exam-timetable.md "Examination Timetable for an NSIP Project") – `nsip-exam-timetable.schema.json`

* [Folder](./folder.md "Folders can have optional parents") – `folder.schema.json`

* [Get Timesheets API response](./gettimesheets-response.md "Schema defining the data returned by the DaRT API") – `gettimesheets-response.schema.json`

* [Listed Building](./listed-building.md "Delta of listed building data pushed by the ODW") – `listed-building.schema.json`

* [Listed Buildings](./listed-buildings.md "Temporary copy of listed-building to ensure compatibility until ODW is updated") – `listed-buildings.schema.json`

* [NSIP Document](./nsip-document.md "NSIP document schema") – `nsip-document.schema.json`

* [NSIP Project](./nsip-project.md "Subset of Pins Data Model \[Case]") – `nsip-project.schema.json`

* [NSIP Project Update](./nsip-project-update.md "NSIP Project Update (formerly known as Banners)") – `nsip-project-update.schema.json`

* [PINS Inspector](./pins-inspector.md "Inspector attributes as per Horizon") – `pins-inspector.schema.json`

* [PINS LPA](./pins-lpa.md "Local Planning Authority (LPA) attributes as per Horizon") – `pins-lpa.schema.json`

* [Representation](./nsip-representation.md "NSIP Representation schema") – `nsip-representation.schema.json`

* [S51 Advice](./s51-advice.md "Section 51 Advice schema") – `s51-advice.schema.json`

* [Service User](./service-user.md "Service User of the planning inspectorate") – `service-user.schema.json`

* [nsip-subscription](./nsip-subscription.md "Subscribers are a subset of Service Users, part of the PINS Data Model") – `nsip-subscription.schema.json`

## Other Schemas

### Objects

* [Untitled object in Appeal HAS Case](./appeal-has-properties-neighbouringsiteaddresses-items.md) – `appeal-has.schema.json#/properties/neighbouringSiteAddresses/items`

* [Untitled object in Appeal S78 Case](./appeal-s78-properties-neighbouringsiteaddresses-items.md) – `appeal-s78.schema.json#/properties/neighbouringSiteAddresses/items`

* [Untitled object in DaRT API response](./dart-response-properties-neighbouringsiteaddresses-items.md) – `dart-response.schema.json#/properties/neighbouringSiteAddresses/items`

* [Untitled object in Examination Timetable](./nsip-exam-timetable-defs-event.md) – `nsip-exam-timetable.schema.json#/$defs/event`

* [Untitled object in Examination Timetable](./nsip-exam-timetable-defs-line-item.md) – `nsip-exam-timetable.schema.json#/$defs/line-item`

### Arrays

* [Untitled array in Appeal Representation](./appeal-representation-properties-documentids.md "An array of documentIds") – `appeal-representation.schema.json#/properties/documentIds`

* [Untitled array in Examination Timetable](./nsip-exam-timetable-properties-events.md) – `nsip-exam-timetable.schema.json#/properties/events`

* [Untitled array in Examination Timetable](./nsip-exam-timetable-defs-event-properties-eventlineitems.md) – `nsip-exam-timetable.schema.json#/$defs/event/properties/eventLineItems`

* [Untitled array in NSIP Project](./nsip-project-properties-regions.md) – `nsip-project.schema.json#/properties/regions`

* [Untitled array in NSIP Project](./nsip-project-properties-nsipofficerids.md) – `nsip-project.schema.json#/properties/nsipOfficerIds`

* [Untitled array in NSIP Project](./nsip-project-properties-nsipadministrationofficerids.md) – `nsip-project.schema.json#/properties/nsipAdministrationOfficerIds`

* [Untitled array in NSIP Project](./nsip-project-properties-inspectorids.md) – `nsip-project.schema.json#/properties/inspectorIds`

* [Untitled array in Representation](./nsip-representation-properties-attachmentids.md) – `nsip-representation.schema.json#/properties/attachmentIds`

* [Untitled array in S51 Advice](./s51-advice-properties-attachmentids.md) – `s51-advice.schema.json#/properties/attachmentIds`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
