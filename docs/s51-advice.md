## S51 Advice Type

`object` ([S51 Advice](s51-advice.md))

# S51 Advice Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                  |
| :---------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------- |
| [adviceId](#adviceid)               | `integer` | Required | cannot be null | [S51 Advice](s51-advice-properties-adviceid.md "s51-advice.schema.json#/properties/adviceId")               |
| [adviceReference](#advicereference) | `string`  | Required | cannot be null | [S51 Advice](s51-advice-properties-advicereference.md "s51-advice.schema.json#/properties/adviceReference") |
| [caseId](#caseid)                   | `integer` | Required | can be null    | [S51 Advice](s51-advice-properties-caseid.md "s51-advice.schema.json#/properties/caseId")                   |
| [caseReference](#casereference)     | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-casereference.md "s51-advice.schema.json#/properties/caseReference")     |
| [title](#title)                     | `string`  | Required | cannot be null | [S51 Advice](s51-advice-properties-title.md "s51-advice.schema.json#/properties/title")                     |
| [from](#from)                       | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-from.md "s51-advice.schema.json#/properties/from")                       |
| [agent](#agent)                     | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-agent.md "s51-advice.schema.json#/properties/agent")                     |
| [method](#method)                   | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-method.md "s51-advice.schema.json#/properties/method")                   |
| [enquiryDate](#enquirydate)         | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-enquirydate.md "s51-advice.schema.json#/properties/enquiryDate")         |
| [enquiryDetails](#enquirydetails)   | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-enquirydetails.md "s51-advice.schema.json#/properties/enquiryDetails")   |
| [adviceGivenBy](#advicegivenby)     | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-advicegivenby.md "s51-advice.schema.json#/properties/adviceGivenBy")     |
| [adviceDate](#advicedate)           | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-advicedate.md "s51-advice.schema.json#/properties/adviceDate")           |
| [adviceDetails](#advicedetails)     | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-advicedetails.md "s51-advice.schema.json#/properties/adviceDetails")     |
| [status](#status)                   | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-status.md "s51-advice.schema.json#/properties/status")                   |
| [redactionStatus](#redactionstatus) | `string`  | Required | can be null    | [S51 Advice](s51-advice-properties-redactionstatus.md "s51-advice.schema.json#/properties/redactionStatus") |
| [attachmentIds](#attachmentids)     | `array`   | Required | cannot be null | [S51 Advice](s51-advice-properties-attachmentids.md "s51-advice.schema.json#/properties/attachmentIds")     |

## adviceId



`adviceId`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [S51 Advice](s51-advice-properties-adviceid.md "s51-advice.schema.json#/properties/adviceId")

### adviceId Type

`integer`

### adviceId Examples

```json
1234
```

## adviceReference



`adviceReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [S51 Advice](s51-advice-properties-advicereference.md "s51-advice.schema.json#/properties/adviceReference")

### adviceReference Type

`string`

### adviceReference Examples

```json
"TR0200007-0005"
```

## caseId



`caseId`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-caseid.md "s51-advice.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1234
```

## caseReference



`caseReference`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-casereference.md "s51-advice.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"BC0110002"
```

## title

Title of the advice

`title`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [S51 Advice](s51-advice-properties-title.md "s51-advice.schema.json#/properties/title")

### title Type

`string`

### title Examples

```json
"Advice following issue of decision to accept the application for examination"
```

## from

Who the enquiry is from

`from`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-from.md "s51-advice.schema.json#/properties/from")

### from Type

`string`

## agent

Who the enquiry is on behalf of

`agent`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-agent.md "s51-advice.schema.json#/properties/agent")

### agent Type

`string`

## method

How the enquiry was made

`method`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-method.md "s51-advice.schema.json#/properties/method")

### method Type

`string`

### method Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"phone"`   |             |
| `"email"`   |             |
| `"meeting"` |             |
| `"post"`    |             |
| `null`      |             |

## enquiryDate

Date the enquiry was made

`enquiryDate`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-enquirydate.md "s51-advice.schema.json#/properties/enquiryDate")

### enquiryDate Type

`string`

### enquiryDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### enquiryDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## enquiryDetails

Details of the enquiry

`enquiryDetails`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-enquirydetails.md "s51-advice.schema.json#/properties/enquiryDetails")

### enquiryDetails Type

`string`

## adviceGivenBy

Who issued the advice

`adviceGivenBy`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-advicegivenby.md "s51-advice.schema.json#/properties/adviceGivenBy")

### adviceGivenBy Type

`string`

## adviceDate

Date the advice was given

`adviceDate`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-advicedate.md "s51-advice.schema.json#/properties/adviceDate")

### adviceDate Type

`string`

### adviceDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### adviceDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## adviceDetails

Details of the advice

`adviceDetails`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-advicedetails.md "s51-advice.schema.json#/properties/adviceDetails")

### adviceDetails Type

`string`

## status



`status`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-status.md "s51-advice.schema.json#/properties/status")

### status Type

`string`

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"checked"`        |             |
| `"unchecked"`      |             |
| `"readytopublish"` |             |
| `"published"`      |             |
| `"donotpublish"`   |             |
| `null`             |             |

## redactionStatus



`redactionStatus`

*   is required

*   Type: `string`

*   can be null

*   defined in: [S51 Advice](s51-advice-properties-redactionstatus.md "s51-advice.schema.json#/properties/redactionStatus")

### redactionStatus Type

`string`

### redactionStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"unredacted"` |             |
| `"redacted"`   |             |
| `null`         |             |

## attachmentIds



`attachmentIds`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [S51 Advice](s51-advice-properties-attachmentids.md "s51-advice.schema.json#/properties/attachmentIds")

### attachmentIds Type

`string[]`
