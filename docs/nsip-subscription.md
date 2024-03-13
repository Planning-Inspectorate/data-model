## nsip-subscription Type

`object` ([nsip-subscription](nsip-subscription.md))

# nsip-subscription Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                         |
| :------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [subscriptionId](#subscriptionid)     | `integer` | Required | can be null    | [nsip-subscription](nsip-subscription-properties-subscriptionid.md "nsip-subscription.schema.json#/properties/subscriptionId")     |
| [caseReference](#casereference)       | `string`  | Required | cannot be null | [nsip-subscription](nsip-subscription-properties-casereference.md "nsip-subscription.schema.json#/properties/caseReference")       |
| [emailAddress](#emailaddress)         | `string`  | Required | cannot be null | [nsip-subscription](nsip-subscription-properties-emailaddress.md "nsip-subscription.schema.json#/properties/emailAddress")         |
| [subscriptionType](#subscriptiontype) | `string`  | Required | cannot be null | [nsip-subscription](nsip-subscription-properties-subscriptiontype.md "nsip-subscription.schema.json#/properties/subscriptionType") |
| [startDate](#startdate)               | `string`  | Required | can be null    | [nsip-subscription](nsip-subscription-properties-startdate.md "nsip-subscription.schema.json#/properties/startDate")               |
| [endDate](#enddate)                   | `string`  | Required | can be null    | [nsip-subscription](nsip-subscription-properties-enddate.md "nsip-subscription.schema.json#/properties/endDate")                   |
| [language](#language)                 | `string`  | Required | can be null    | [nsip-subscription](nsip-subscription-properties-language.md "nsip-subscription.schema.json#/properties/language")                 |

## subscriptionId

The unique identifier within the Back Office. Ignored as part of register-nsip-subscription.

`subscriptionId`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [nsip-subscription](nsip-subscription-properties-subscriptionid.md "nsip-subscription.schema.json#/properties/subscriptionId")

### subscriptionId Type

`integer`

## caseReference

the case reference the subscription relates to

`caseReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-subscription](nsip-subscription-properties-casereference.md "nsip-subscription.schema.json#/properties/caseReference")

### caseReference Type

`string`

## emailAddress



`emailAddress`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-subscription](nsip-subscription-properties-emailaddress.md "nsip-subscription.schema.json#/properties/emailAddress")

### emailAddress Type

`string`

### emailAddress Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

### emailAddress Examples

```json
"alan.turing@planninginspectorate.gov.uk"
```

## subscriptionType

which update does the subscriber want to get notified of. For multiple types, use multiple messages.

`subscriptionType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nsip-subscription](nsip-subscription-properties-subscriptiontype.md "nsip-subscription.schema.json#/properties/subscriptionType")

### subscriptionType Type

`string`

### subscriptionType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"allUpdates"`           |             |
| `"applicationSubmitted"` |             |
| `"applicationDecided"`   |             |
| `"registrationOpen"`     |             |

## startDate

The date to start getting updates

`startDate`

*   is required

*   Type: `string`

*   can be null

*   defined in: [nsip-subscription](nsip-subscription-properties-startdate.md "nsip-subscription.schema.json#/properties/startDate")

### startDate Type

`string`

### startDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## endDate

The date to stop getting updates

`endDate`

*   is required

*   Type: `string`

*   can be null

*   defined in: [nsip-subscription](nsip-subscription-properties-enddate.md "nsip-subscription.schema.json#/properties/endDate")

### endDate Type

`string`

### endDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## language



`language`

*   is required

*   Type: `string`

*   can be null

*   defined in: [nsip-subscription](nsip-subscription-properties-language.md "nsip-subscription.schema.json#/properties/language")

### language Type

`string`

### language Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"English"` |             |
| `"Welsh"`   |             |
| `null`      |             |

### language Default Value

The default value is:

```json
"English"
```
