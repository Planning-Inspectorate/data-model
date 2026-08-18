## contact Type

`object` ([Details](applications-application-defs-contact.md))

# contact Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [contactId](#contactid)                               | `string` | Required | cannot be null | [Crown Development Application](applications-application-defs-contact-properties-contactid.md "applications-application.schema.json#/$defs/contact/properties/contactId")                               |
| [contactPreference](#contactpreference)               | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-contact-properties-contactpreference.md "applications-application.schema.json#/$defs/contact/properties/contactPreference")               |
| [writtenRepOrgName](#writtenreporgname)               | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-contact-properties-writtenreporgname.md "applications-application.schema.json#/$defs/contact/properties/writtenRepOrgName")               |
| [writtenRepJobTitleorRole](#writtenrepjobtitleorrole) | `string` | Optional | can be null    | [Crown Development Application](applications-application-defs-contact-properties-writtenrepjobtitleorrole.md "applications-application.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole") |
| Additional Properties                                 | Any      | Optional | can be null    |                                                                                                                                                                                                         |

## contactId

Source PK for Contact

`contactId`

* is required

* Type: `string`

* cannot be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-contactid.md "applications-application.schema.json#/$defs/contact/properties/contactId")

### contactId Type

`string`

## contactPreference



`contactPreference`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-contactpreference.md "applications-application.schema.json#/$defs/contact/properties/contactPreference")

### contactPreference Type

`string`

### contactPreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"email"` |             |
| `"post"`  |             |

## writtenRepOrgName

Organisation Name used for written-representation on behalf of an organisation

`writtenRepOrgName`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-writtenreporgname.md "applications-application.schema.json#/$defs/contact/properties/writtenRepOrgName")

### writtenRepOrgName Type

`string`

## writtenRepJobTitleorRole

Job Title or Role used for written-representation on behalf of an organisation

`writtenRepJobTitleorRole`

* is optional

* Type: `string`

* can be null

* defined in: [Crown Development Application](applications-application-defs-contact-properties-writtenrepjobtitleorrole.md "applications-application.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole")

### writtenRepJobTitleorRole Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
