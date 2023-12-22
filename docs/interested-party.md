## interested-party Type

`object` ([interested-party](interested-party.md))

# interested-party Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                |
| :---------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                       | `number`  | Optional | cannot be null | [interested-party](interested-party-properties-id.md "interested-party.schema.json#/properties/id")                                       |
| [interestedPartyNumber](#interestedpartynumber) | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-interestedpartynumber.md "interested-party.schema.json#/properties/interestedPartyNumber") |
| [firstName](#firstname)                         | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-firstname.md "interested-party.schema.json#/properties/firstName")                         |
| [lastName](#lastname)                           | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-lastname.md "interested-party.schema.json#/properties/lastName")                           |
| [under18](#under18)                             | `boolean` | Optional | cannot be null | [interested-party](interested-party-properties-under18.md "interested-party.schema.json#/properties/under18")                             |
| [organisationName](#organisationname)           | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-name.md "interested-party.schema.json#/properties/organisationName")                       |
| [jobTitle](#jobtitle)                           | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-jobtitle.md "interested-party.schema.json#/properties/jobTitle")                           |
| [contactMethod](#contactmethod)                 | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-contactmethod.md "interested-party.schema.json#/properties/contactMethod")                 |
| [email](#email)                                 | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-email.md "interested-party.schema.json#/properties/email")                                 |
| [phoneNumber](#phonenumber)                     | `string`  | Optional | cannot be null | [interested-party](interested-party-properties-phonenumber.md "interested-party.schema.json#/properties/phoneNumber")                     |
| [address](#address)                             | `object`  | Optional | cannot be null | [interested-party](interested-party-properties-address.md "interested-party.schema.json#/properties/address")                             |

## id



`id`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-id.md "interested-party.schema.json#/properties/id")

### id Type

`number`

### id Examples

```json
18
```

## interestedPartyNumber



`interestedPartyNumber`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-interestedpartynumber.md "interested-party.schema.json#/properties/interestedPartyNumber")

### interestedPartyNumber Type

`string`

### interestedPartyNumber Examples

```json
"IP1234"
```

## firstName



`firstName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-firstname.md "interested-party.schema.json#/properties/firstName")

### firstName Type

`string`

### firstName Examples

```json
"Alan"
```

## lastName



`lastName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-lastname.md "interested-party.schema.json#/properties/lastName")

### lastName Type

`string`

### lastName Examples

```json
"Turing"
```

## under18



`under18`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-under18.md "interested-party.schema.json#/properties/under18")

### under18 Type

`boolean`

## organisationName



`organisationName`

*   is optional

*   Type: `string` ([Name](interested-party-properties-name.md))

*   cannot be null

*   defined in: [interested-party](interested-party-properties-name.md "interested-party.schema.json#/properties/organisationName")

### organisationName Type

`string` ([Name](interested-party-properties-name.md))

### organisationName Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^.*$
```

[try pattern](https://regexr.com/?expression=%5E.*%24 "try regular expression with regexr.com")

### organisationName Examples

```json
"National Highways"
```

## jobTitle



`jobTitle`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-jobtitle.md "interested-party.schema.json#/properties/jobTitle")

### jobTitle Type

`string`

### jobTitle Examples

```json
"Communications Manager"
```

## contactMethod



`contactMethod`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-contactmethod.md "interested-party.schema.json#/properties/contactMethod")

### contactMethod Type

`string`

### contactMethod Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"email"` |             |
| `"post"`  |             |

## email



`email`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-email.md "interested-party.schema.json#/properties/email")

### email Type

`string`

### email Examples

```json
"alan.turing@planninginspectorate.gov.uk"
```

## phoneNumber



`phoneNumber`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [interested-party](interested-party-properties-phonenumber.md "interested-party.schema.json#/properties/phoneNumber")

### phoneNumber Type

`string`

### phoneNumber Examples

```json
"0137732432"
```

## address



`address`

*   is optional

*   Type: `object` ([Address](interested-party-properties-address.md))

*   cannot be null

*   defined in: [interested-party](interested-party-properties-address.md "interested-party.schema.json#/properties/address")

### address Type

`object` ([Address](interested-party-properties-address.md))
