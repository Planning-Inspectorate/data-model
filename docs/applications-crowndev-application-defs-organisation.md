## organisation Type

`object` ([Details](applications-crowndev-application-defs-organisation.md))

# organisation Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                |
| :------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [contactRoleType](#contactroletype)         | `string` | Required | cannot be null | [Crown Development Application](applications-crowndev-application-defs-organisation-properties-contactroletype.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/contactRoleType")         |
| [organisationId](#organisationid)           | `string` | Required | cannot be null | [Crown Development Application](applications-crowndev-application-defs-organisation-properties-organisationid.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/organisationId")           |
| [organisationName](#organisationname)       | `string` | Optional | can be null    | [Crown Development Application](applications-crowndev-application-defs-organisation-properties-organisationname.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/organisationName")       |
| [organisationAddress](#organisationaddress) | `array`  | Optional | can be null    | [Crown Development Application](applications-crowndev-application-defs-organisation-properties-organisationaddress.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/organisationAddress") |
| [contacts](#contacts)                       | `array`  | Optional | can be null    | [Crown Development Application](applications-crowndev-application-defs-organisation-properties-contacts.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/contacts")                       |
| Additional Properties                       | Any      | Optional | can be null    |                                                                                                                                                                                                                           |

## contactRoleType

Agent or Applicant details

`contactRoleType`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-crowndev-application-defs-organisation-properties-contactroletype.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/contactRoleType")

### contactRoleType Type

`string`

### contactRoleType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"agent"`     |             |
| `"applicant"` |             |

## organisationId

Source PK for Organisation

`organisationId`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-crowndev-application-defs-organisation-properties-organisationid.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/organisationId")

### organisationId Type

`string`

## organisationName



`organisationName`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-crowndev-application-defs-organisation-properties-organisationname.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/organisationName")

### organisationName Type

`string`

## organisationAddress



`organisationAddress`

* is optional

* Type: `object[]` ([Details](applications-crowndev-application-defs-address.md))

* can be null

* defined in: [Crown Development Application](applications-crowndev-application-defs-organisation-properties-organisationaddress.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/organisationAddress")

### organisationAddress Type

`object[]` ([Details](applications-crowndev-application-defs-address.md))

## contacts

An Organisation may be linked to one or more Contacts

`contacts`

* is optional

* Type: `object[]` ([Details](applications-crowndev-application-defs-contact.md))

* can be null

* defined in: [Crown Development Application](applications-crowndev-application-defs-organisation-properties-contacts.md "applications-crowndev-application.schema.json#/$defs/organisation/properties/contacts")

### contacts Type

`object[]` ([Details](applications-crowndev-application-defs-contact.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
