## Service User Type

`object` ([Service User](service-user.md))

# Service User Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                          |
| :------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                             | `string` | Required | cannot be null | [Service User](service-user-properties-id.md "service-user.schema.json#/properties/id")                             |
| [salutation](#salutation)             | `string` | Optional | cannot be null | [Service User](service-user-properties-salutation.md "service-user.schema.json#/properties/salutation")             |
| [firstName](#firstname)               | `string` | Optional | cannot be null | [Service User](service-user-properties-firstname.md "service-user.schema.json#/properties/firstName")               |
| [lastName](#lastname)                 | `string` | Optional | cannot be null | [Service User](service-user-properties-lastname.md "service-user.schema.json#/properties/lastName")                 |
| [addressLine1](#addressline1)         | `string` | Optional | cannot be null | [Service User](service-user-properties-addressline1.md "service-user.schema.json#/properties/addressLine1")         |
| [addressLine2](#addressline2)         | `string` | Optional | cannot be null | [Service User](service-user-properties-addressline2.md "service-user.schema.json#/properties/addressLine2")         |
| [addressTown](#addresstown)           | `string` | Optional | cannot be null | [Service User](service-user-properties-addresstown.md "service-user.schema.json#/properties/addressTown")           |
| [addressCounty](#addresscounty)       | `string` | Optional | cannot be null | [Service User](service-user-properties-addresscounty.md "service-user.schema.json#/properties/addressCounty")       |
| [postcode](#postcode)                 | `string` | Optional | cannot be null | [Service User](service-user-properties-postcode.md "service-user.schema.json#/properties/postcode")                 |
| [addressCountry](#addresscountry)     | `string` | Optional | cannot be null | [Service User](service-user-properties-addresscountry.md "service-user.schema.json#/properties/addressCountry")     |
| [organisation](#organisation)         | `string` | Optional | cannot be null | [Service User](service-user-properties-organisation.md "service-user.schema.json#/properties/organisation")         |
| [organisationType](#organisationtype) | `string` | Optional | cannot be null | [Service User](service-user-properties-organisationtype.md "service-user.schema.json#/properties/organisationType") |
| [role](#role)                         | `string` | Optional | cannot be null | [Service User](service-user-properties-role.md "service-user.schema.json#/properties/role")                         |
| [telephoneNumber](#telephonenumber)   | `string` | Optional | cannot be null | [Service User](service-user-properties-telephonenumber.md "service-user.schema.json#/properties/telephoneNumber")   |
| [otherPhoneNumber](#otherphonenumber) | `string` | Optional | cannot be null | [Service User](service-user-properties-otherphonenumber.md "service-user.schema.json#/properties/otherPhoneNumber") |
| [faxNumber](#faxnumber)               | `string` | Optional | cannot be null | [Service User](service-user-properties-faxnumber.md "service-user.schema.json#/properties/faxNumber")               |
| [emailAddress](#emailaddress)         | `string` | Optional | cannot be null | [Service User](service-user-properties-emailaddress.md "service-user.schema.json#/properties/emailAddress")         |
| [webAddress](#webaddress)             | `string` | Optional | cannot be null | [Service User](service-user-properties-webaddress.md "service-user.schema.json#/properties/webAddress")             |
| [serviceUserType](#serviceusertype)   | `string` | Required | cannot be null | [Service User](service-user-properties-serviceusertype.md "service-user.schema.json#/properties/serviceUserType")   |
| [caseReference](#casereference)       | `string` | Required | cannot be null | [Service User](service-user-properties-casereference.md "service-user.schema.json#/properties/caseReference")       |
| [sourceSystem](#sourcesystem)         | `string` | Required | cannot be null | [Service User](service-user-properties-sourcesystem.md "service-user.schema.json#/properties/sourceSystem")         |
| [sourceSuid](#sourcesuid)             | `string` | Required | cannot be null | [Service User](service-user-properties-sourcesuid.md "service-user.schema.json#/properties/sourceSuid")             |

## id

A unique identifier for the entity.

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-id.md "service-user.schema.json#/properties/id")

### id Type

`string`

### id Examples

```json
"12345"
```

## salutation

A formal greeting, e.g., Mr, Mrs, Ms.

`salutation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-salutation.md "service-user.schema.json#/properties/salutation")

### salutation Type

`string`

### salutation Examples

```json
"Mr"
```

## firstName

The first name of the individual.

`firstName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-firstname.md "service-user.schema.json#/properties/firstName")

### firstName Type

`string`

### firstName Examples

```json
"John"
```

## lastName

The last name of the individual.

`lastName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-lastname.md "service-user.schema.json#/properties/lastName")

### lastName Type

`string`

### lastName Examples

```json
"Doe"
```

## addressLine1

The first line of the address.

`addressLine1`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-addressline1.md "service-user.schema.json#/properties/addressLine1")

### addressLine1 Type

`string`

### addressLine1 Examples

```json
"123 Elm Street"
```

## addressLine2

The second line of the address, usually includes suite or apartment number.

`addressLine2`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-addressline2.md "service-user.schema.json#/properties/addressLine2")

### addressLine2 Type

`string`

### addressLine2 Examples

```json
"Apt 4B"
```

## addressTown

The town or city of the address.

`addressTown`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-addresstown.md "service-user.schema.json#/properties/addressTown")

### addressTown Type

`string`

### addressTown Examples

```json
"Springfield"
```

## addressCounty

The county in which the town or city is located.

`addressCounty`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-addresscounty.md "service-user.schema.json#/properties/addressCounty")

### addressCounty Type

`string`

### addressCounty Examples

```json
"Hampshire"
```

## postcode

The postal code for the address.

`postcode`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-postcode.md "service-user.schema.json#/properties/postcode")

### postcode Type

`string`

### postcode Examples

```json
"M12 4AF"
```

## addressCountry

The country of the address.

`addressCountry`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-addresscountry.md "service-user.schema.json#/properties/addressCountry")

### addressCountry Type

`string`

### addressCountry Examples

```json
"United Kingdom"
```

## organisation

The name of the organisation associated with the individual.

`organisation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-organisation.md "service-user.schema.json#/properties/organisation")

### organisation Type

`string`

### organisation Examples

```json
"Tech Corp"
```

## organisationType

The type or nature of the organisation.

`organisationType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-organisationtype.md "service-user.schema.json#/properties/organisationType")

### organisationType Type

`string`

### organisationType Examples

```json
"Private Company"
```

## role

The individual's role or position within the organisation.

`role`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-role.md "service-user.schema.json#/properties/role")

### role Type

`string`

### role Examples

```json
"Agent"
```

## telephoneNumber

The primary telephone contact number.

`telephoneNumber`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-telephonenumber.md "service-user.schema.json#/properties/telephoneNumber")

### telephoneNumber Type

`string`

### telephoneNumber Examples

```json
"+447123456789"
```

## otherPhoneNumber

An alternate or secondary phone number.

`otherPhoneNumber`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-otherphonenumber.md "service-user.schema.json#/properties/otherPhoneNumber")

### otherPhoneNumber Type

`string`

### otherPhoneNumber Examples

```json
"+447123456789"
```

## faxNumber

A fax contact number.

`faxNumber`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-faxnumber.md "service-user.schema.json#/properties/faxNumber")

### faxNumber Type

`string`

### faxNumber Examples

```json
"+447123456789"
```

## emailAddress

The primary email address for contact.

`emailAddress`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-emailaddress.md "service-user.schema.json#/properties/emailAddress")

### emailAddress Type

`string`

### emailAddress Examples

```json
"john.doe@example.com"
```

## webAddress

Website address or URL.

`webAddress`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-webaddress.md "service-user.schema.json#/properties/webAddress")

### webAddress Type

`string`

### webAddress Examples

```json
"https://www.example.com"
```

## serviceUserType

Type or category of the service user.

`serviceUserType`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-serviceusertype.md "service-user.schema.json#/properties/serviceUserType")

### serviceUserType Type

`string`

### serviceUserType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"Applicant"`             |             |
| `"Appellant"`             |             |
| `"Agent"`                 |             |
| `"RepresentationContact"` |             |
| `"Subscriber"`            |             |

## caseReference

Reference number for a particular case or incident.

`caseReference`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-casereference.md "service-user.schema.json#/properties/caseReference")

### caseReference Type

`string`

### caseReference Examples

```json
"BC0510001"
```

## sourceSystem

The originating system from where the data was sourced.

`sourceSystem`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-sourcesystem.md "service-user.schema.json#/properties/sourceSystem")

### sourceSystem Type

`string`

### sourceSystem Examples

```json
"ODT"
```

```json
"Horizon"
```

## sourceSuid

Unique identifier from the source system.

`sourceSuid`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Service User](service-user-properties-sourcesuid.md "service-user.schema.json#/properties/sourceSuid")

### sourceSuid Type

`string`

### sourceSuid Examples

```json
"12345"
```
