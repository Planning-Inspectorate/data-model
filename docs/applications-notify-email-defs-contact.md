## Contact Type

`object` ([Details](applications-notify-email-defs-contact.md))

# Contact Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :---------------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contactId](#contactid)                               | `string` | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactid.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactId")                               |
| [contactPreference](#contactpreference)               | `string` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactpreference.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactPreference")               |
| [writtenRepOrgName](#writtenreporgname)               | `string` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenreporgname.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepOrgName")               |
| [writtenRepJobTitleorRole](#writtenrepjobtitleorrole) | `string` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenrepjobtitleorrole.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepJobTitleorRole") |

## contactId

Source PK for Contact

`contactId`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactid.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactId")

### contactId Type

`string`

## contactPreference

Preferred contact method

`contactPreference`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactpreference.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactPreference")

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

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenreporgname.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepOrgName")

### writtenRepOrgName Type

`string`

## writtenRepJobTitleorRole



`writtenRepJobTitleorRole`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenrepjobtitleorrole.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepJobTitleorRole")

### writtenRepJobTitleorRole Type

`string`
