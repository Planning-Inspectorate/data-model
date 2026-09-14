## Email Notification Record Schema Type

`object` ([Email Notification Record Schema](applications-notify-email.md))

# Email Notification Record Schema Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                      |
| :---------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                           | `string`  | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-id.md "applications-notify-email.schema.json#/properties/id")                           |
| [notifyId](#notifyid)               | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-notifyid.md "applications-notify-email.schema.json#/properties/notifyId")               |
| [reference](#reference)             | `string`  | Optional | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-reference.md "applications-notify-email.schema.json#/properties/reference")             |
| [caseReference](#casereference)     | `string`  | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-casereference.md "applications-notify-email.schema.json#/properties/caseReference")     |
| [caseId](#caseid)                   | `string`  | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-caseid.md "applications-notify-email.schema.json#/properties/caseId")                   |
| [caseType](#casetype)               | `string`  | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-casetype.md "applications-notify-email.schema.json#/properties/caseType")               |
| [createdDate](#createddate)         | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-createddate.md "applications-notify-email.schema.json#/properties/createdDate")         |
| [createdBy](#createdby)             | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-createdby.md "applications-notify-email.schema.json#/properties/createdBy")             |
| [completedDate](#completeddate)     | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-completeddate.md "applications-notify-email.schema.json#/properties/completedDate")     |
| [email](#email)                     | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-email.md "applications-notify-email.schema.json#/properties/email")                     |
| [contact](#contact)                 | `array`   | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-contact.md "applications-notify-email.schema.json#/properties/contact")                 |
| [lpaCode](#lpacode)                 | `string`  | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-lpacode.md "applications-notify-email.schema.json#/properties/lpaCode")                 |
| [emailStatus](#emailstatus)         | `string`  | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-properties-emailstatus.md "applications-notify-email.schema.json#/properties/emailStatus")         |
| [templateId](#templateid)           | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-templateid.md "applications-notify-email.schema.json#/properties/templateId")           |
| [templateVersion](#templateversion) | `integer` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-templateversion.md "applications-notify-email.schema.json#/properties/templateVersion") |
| [body](#body)                       | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-body.md "applications-notify-email.schema.json#/properties/body")                       |
| [subject](#subject)                 | `string`  | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-properties-subject.md "applications-notify-email.schema.json#/properties/subject")                 |
| Additional Properties               | Any       | Optional | can be null    |                                                                                                                                                                 |

## id

Internal Identifier UUID

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-id.md "applications-notify-email.schema.json#/properties/id")

### id Type

`string`

## notifyId

Id used by Notify

`notifyId`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-notifyid.md "applications-notify-email.schema.json#/properties/notifyId")

### notifyId Type

`string`

## reference

Reference passed to notify (used to identify the case or representation it relates to)

`reference`

* is optional

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-reference.md "applications-notify-email.schema.json#/properties/reference")

### reference Type

`string`

## caseReference

Business Key for the related case

`caseReference`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-casereference.md "applications-notify-email.schema.json#/properties/caseReference")

### caseReference Type

`string`

## caseId

The unique ID for the case this notification belongs to.

`caseId`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-caseid.md "applications-notify-email.schema.json#/properties/caseId")

### caseId Type

`string`

## caseType

The type of case this notification is for.

`caseType`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-casetype.md "applications-notify-email.schema.json#/properties/caseType")

### caseType Type

`string`

## createdDate

Date the email was created

`createdDate`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-createddate.md "applications-notify-email.schema.json#/properties/createdDate")

### createdDate Type

`string`

### createdDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## createdBy

Name of the person that triggered the email (only applies when done manually)

`createdBy`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-createdby.md "applications-notify-email.schema.json#/properties/createdBy")

### createdBy Type

`string`

## completedDate

When the email completed (succeeded or failed)

`completedDate`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-completeddate.md "applications-notify-email.schema.json#/properties/completedDate")

### completedDate Type

`string`

### completedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## email

Email address sent to if unable to be linked to an LPA or Contact

`email`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-email.md "applications-notify-email.schema.json#/properties/email")

### email Type

`string`

### email Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

## contact

Contact(s) the email was sent to

`contact`

* is optional

* Type: `object[]` ([Details](applications-notify-email-defs-contact.md))

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-contact.md "applications-notify-email.schema.json#/properties/contact")

### contact Type

`object[]` ([Details](applications-notify-email-defs-contact.md))

## lpaCode

Planning Body code

`lpaCode`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-lpacode.md "applications-notify-email.schema.json#/properties/lpaCode")

### lpaCode Type

`string`

## emailStatus

Outcome of the email (status)

`emailStatus`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-emailstatus.md "applications-notify-email.schema.json#/properties/emailStatus")

### emailStatus Type

`string`

### emailStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"Sending"`           |             |
| `"Delivered"`         |             |
| `"Permanent failure"` |             |
| `"Temporary failure"` |             |
| `"Technical failure"` |             |

## templateId

The id of the template sent in Notify

`templateId`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-templateid.md "applications-notify-email.schema.json#/properties/templateId")

### templateId Type

`string`

## templateVersion

The version of the template sent

`templateVersion`

* is optional

* Type: `integer`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-templateversion.md "applications-notify-email.schema.json#/properties/templateVersion")

### templateVersion Type

`integer`

## body

The full HTML/plain text body of the email

`body`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-body.md "applications-notify-email.schema.json#/properties/body")

### body Type

`string`

## subject

The full HTML/plain text subject of the email

`subject`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-properties-subject.md "applications-notify-email.schema.json#/properties/subject")

### subject Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# Email Notification Record Schema Definitions

## Definitions group Contact

Reference this group by using

```json
{"$ref":"applications-notify-email.schema.json#/$defs/Contact"}
```

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :---------------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contactId](#contactid)                               | `string` | Required | cannot be null | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactid.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactId")                               |
| [contactPreference](#contactpreference)               | `string` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactpreference.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactPreference")               |
| [writtenRepOrgName](#writtenreporgname)               | `string` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenreporgname.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepOrgName")               |
| [writtenRepJobTitleorRole](#writtenrepjobtitleorrole) | `string` | Optional | can be null    | [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenrepjobtitleorrole.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepJobTitleorRole") |

### contactId

Source PK for Contact

`contactId`

* is required

* Type: `string`

* cannot be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactid.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactId")

#### contactId Type

`string`

### contactPreference

Preferred contact method

`contactPreference`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-contactpreference.md "applications-notify-email.schema.json#/$defs/Contact/properties/contactPreference")

#### contactPreference Type

`string`

#### contactPreference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"email"` |             |
| `"post"`  |             |

### writtenRepOrgName



`writtenRepOrgName`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenreporgname.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepOrgName")

#### writtenRepOrgName Type

`string`

### writtenRepJobTitleorRole



`writtenRepJobTitleorRole`

* is optional

* Type: `string`

* can be null

* defined in: [Email Notification Record Schema](applications-notify-email-defs-contact-properties-writtenrepjobtitleorrole.md "applications-notify-email.schema.json#/$defs/Contact/properties/writtenRepJobTitleorRole")

#### writtenRepJobTitleorRole Type

`string`
