## NSIP Invoice Type

`object` ([NSIP Invoice](nsip-invoice.md))

# NSIP Invoice Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                      |
| :------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| [caseId](#caseid)                                 | `integer` | Required | cannot be null | [NSIP Invoice](nsip-invoice-properties-caseid.md "nsip-invoice.schema.json#/properties/caseId")                                 |
| [caseReference](#casereference)                   | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-casereference.md "nsip-invoice.schema.json#/properties/caseReference")                   |
| [invoiceStage](#invoicestage)                     | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-invoicestage.md "nsip-invoice.schema.json#/properties/invoiceStage")                     |
| [invoiceNumber](#invoicenumber)                   | `string`  | Required | cannot be null | [NSIP Invoice](nsip-invoice-properties-invoicenumber.md "nsip-invoice.schema.json#/properties/invoiceNumber")                   |
| [amountDue](#amountdue)                           | `number`  | Required | cannot be null | [NSIP Invoice](nsip-invoice-properties-amountdue.md "nsip-invoice.schema.json#/properties/amountDue")                           |
| [paymentDueDate](#paymentduedate)                 | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-paymentduedate.md "nsip-invoice.schema.json#/properties/paymentDueDate")                 |
| [invoicedDate](#invoiceddate)                     | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-invoiceddate.md "nsip-invoice.schema.json#/properties/invoicedDate")                     |
| [paymentDate](#paymentdate)                       | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-paymentdate.md "nsip-invoice.schema.json#/properties/paymentDate")                       |
| [refundCreditNoteNumber](#refundcreditnotenumber) | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-refundcreditnotenumber.md "nsip-invoice.schema.json#/properties/refundCreditNoteNumber") |
| [refundAmount](#refundamount)                     | `number`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-refundamount.md "nsip-invoice.schema.json#/properties/refundAmount")                     |
| [refundIssueDate](#refundissuedate)               | `string`  | Required | can be null    | [NSIP Invoice](nsip-invoice-properties-refundissuedate.md "nsip-invoice.schema.json#/properties/refundIssueDate")               |
| Additional Properties                             | Any       | Optional | can be null    |                                                                                                                                 |

## caseId

The unique identifier within the Back Office. This is not the same as the case reference

`caseId`

* is required

* Type: `integer`

* cannot be null

* defined in: [NSIP Invoice](nsip-invoice-properties-caseid.md "nsip-invoice.schema.json#/properties/caseId")

### caseId Type

`integer`

### caseId Examples

```json
1242
```

## caseReference



`caseReference`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-casereference.md "nsip-invoice.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"BC0510001"
```

## invoiceStage

Invoice stage

`invoiceStage`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-invoicestage.md "nsip-invoice.schema.json#/properties/invoiceStage")

### invoiceStage Type

`string`

### invoiceStage Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"pre_acceptance"`      |             |
| `"acceptance"`          |             |
| `"pre_examination"`     |             |
| `"initial_examination"` |             |
| `"final_examination"`   |             |
| `null`                  |             |

### invoiceStage Examples

```json
"pre_acceptance"
```

## invoiceNumber

Invoice number

`invoiceNumber`

* is required

* Type: `string`

* cannot be null

* defined in: [NSIP Invoice](nsip-invoice-properties-invoicenumber.md "nsip-invoice.schema.json#/properties/invoiceNumber")

### invoiceNumber Type

`string`

### invoiceNumber Examples

```json
"1800004419"
```

## amountDue

Amount due

`amountDue`

* is required

* Type: `number`

* cannot be null

* defined in: [NSIP Invoice](nsip-invoice-properties-amountdue.md "nsip-invoice.schema.json#/properties/amountDue")

### amountDue Type

`number`

### amountDue Examples

```json
500
```

## paymentDueDate

Payment due date

`paymentDueDate`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-paymentduedate.md "nsip-invoice.schema.json#/properties/paymentDueDate")

### paymentDueDate Type

`string`

### paymentDueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### paymentDueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## invoicedDate

Invoiced date

`invoicedDate`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-invoiceddate.md "nsip-invoice.schema.json#/properties/invoicedDate")

### invoicedDate Type

`string`

### invoicedDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### invoicedDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## paymentDate

Date of payment

`paymentDate`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-paymentdate.md "nsip-invoice.schema.json#/properties/paymentDate")

### paymentDate Type

`string`

### paymentDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### paymentDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## refundCreditNoteNumber

Refund credit note number

`refundCreditNoteNumber`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-refundcreditnotenumber.md "nsip-invoice.schema.json#/properties/refundCreditNoteNumber")

### refundCreditNoteNumber Type

`string`

### refundCreditNoteNumber Examples

```json
"1800004419"
```

## refundAmount

Amount refunded

`refundAmount`

* is required

* Type: `number`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-refundamount.md "nsip-invoice.schema.json#/properties/refundAmount")

### refundAmount Type

`number`

### refundAmount Examples

```json
200
```

## refundIssueDate

Refund issue date

`refundIssueDate`

* is required

* Type: `string`

* can be null

* defined in: [NSIP Invoice](nsip-invoice-properties-refundissuedate.md "nsip-invoice.schema.json#/properties/refundIssueDate")

### refundIssueDate Type

`string`

### refundIssueDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### refundIssueDate Examples

```json
"2023-07-27T20:30:00.000Z"
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
