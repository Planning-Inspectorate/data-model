## invoice Type

`object` ([Details](nsip-project-defs-invoice.md))

# invoice Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [invoiceStage](#invoicestage)                     | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-invoicestage.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceStage")                     |
| [invoiceNumber](#invoicenumber)                   | `string` | Required | cannot be null | [NSIP Project](nsip-project-defs-invoice-properties-invoicenumber.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceNumber")                   |
| [amountDue](#amountdue)                           | `number` | Required | cannot be null | [NSIP Project](nsip-project-defs-invoice-properties-amountdue.md "nsip-project.schema.json#/$defs/invoice/properties/amountDue")                           |
| [paymentDueDate](#paymentduedate)                 | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-paymentduedate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDueDate")                 |
| [invoicedDate](#invoiceddate)                     | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-invoiceddate.md "nsip-project.schema.json#/$defs/invoice/properties/invoicedDate")                     |
| [paymentDate](#paymentdate)                       | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-paymentdate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDate")                       |
| [refundCreditNoteNumber](#refundcreditnotenumber) | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-refundcreditnotenumber.md "nsip-project.schema.json#/$defs/invoice/properties/refundCreditNoteNumber") |
| [refundAmount](#refundamount)                     | `number` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-refundamount.md "nsip-project.schema.json#/$defs/invoice/properties/refundAmount")                     |
| [refundIssueDate](#refundissuedate)               | `string` | Optional | can be null    | [NSIP Project](nsip-project-defs-invoice-properties-refundissuedate.md "nsip-project.schema.json#/$defs/invoice/properties/refundIssueDate")               |
| Additional Properties                             | Any      | Optional | can be null    |                                                                                                                                                            |

## invoiceStage

Invoice stage

`invoiceStage`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-invoicestage.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceStage")

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

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-invoicenumber.md "nsip-project.schema.json#/$defs/invoice/properties/invoiceNumber")

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

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-amountdue.md "nsip-project.schema.json#/$defs/invoice/properties/amountDue")

### amountDue Type

`number`

### amountDue Examples

```json
500
```

## paymentDueDate

Payment due date

`paymentDueDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-paymentduedate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDueDate")

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

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-invoiceddate.md "nsip-project.schema.json#/$defs/invoice/properties/invoicedDate")

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

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-paymentdate.md "nsip-project.schema.json#/$defs/invoice/properties/paymentDate")

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

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-refundcreditnotenumber.md "nsip-project.schema.json#/$defs/invoice/properties/refundCreditNoteNumber")

### refundCreditNoteNumber Type

`string`

### refundCreditNoteNumber Examples

```json
"1800004419"
```

## refundAmount

Amount refunded

`refundAmount`

* is optional

* Type: `number`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-refundamount.md "nsip-project.schema.json#/$defs/invoice/properties/refundAmount")

### refundAmount Type

`number`

### refundAmount Examples

```json
200
```

## refundIssueDate

Refund issue date

`refundIssueDate`

* is optional

* Type: `string`

* can be null

* defined in: [NSIP Project](nsip-project-defs-invoice-properties-refundissuedate.md "nsip-project.schema.json#/$defs/invoice/properties/refundIssueDate")

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
