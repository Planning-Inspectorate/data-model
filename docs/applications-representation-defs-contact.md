## contact Type

`object` ([Details](applications-representation-defs-contact.md))

# contact Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contactId](#contactid)                               | `string` | Required | cannot be null | [Casework Representation Schema](applications-representation-defs-contact-properties-contactid.md "applications-representation.schema.json#/$defs/contact/properties/contactId")                               |
| [contactPreference](#contactpreference)               | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-contact-properties-contactpreference.md "applications-representation.schema.json#/$defs/contact/properties/contactPreference")               |
| [writtenRepOrgName](#writtenreporgname)               | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-contact-properties-writtenreporgname.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepOrgName")               |
| [writtenRepJobTitleorRole](#writtenrepjobtitleorrole) | `string` | Optional | can be null    | [Casework Representation Schema](applications-representation-defs-contact-properties-writtenrepjobtitleorrole.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole") |

## contactId

Source PK for Contact

`contactId`

* is required

* Type: `string`

* cannot be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-contactid.md "applications-representation.schema.json#/$defs/contact/properties/contactId")

### contactId Type

`string`

## contactPreference



`contactPreference`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-contactpreference.md "applications-representation.schema.json#/$defs/contact/properties/contactPreference")

### contactPreference Type

`string`

### contactPreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"email"` |             |
| `"post"`  |             |

## writtenRepOrgName



`writtenRepOrgName`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-writtenreporgname.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepOrgName")

### writtenRepOrgName Type

`string`

## writtenRepJobTitleorRole



`writtenRepJobTitleorRole`

* is optional

* Type: `string`

* can be null

* defined in: [Casework Representation Schema](applications-representation-defs-contact-properties-writtenrepjobtitleorrole.md "applications-representation.schema.json#/$defs/contact/properties/writtenRepJobTitleorRole")

### writtenRepJobTitleorRole Type

`string`
