# Data Model

JSON Schemas for the Planning Inspectorate's Data Model.

All messages over the enterprise service bus are in Data Model compliant formats, the schema's in this repository defined those formats.

## Rules of engagement
* Schema names should use the singular form (for example, `service-user` rather than `service-users`).
* Messages broadcast over the service bus must be pre-validated against the schema.
* Each service bus topic corresponds to one schema. 
* Each message encompasses the complete state of an entity (as defined by [ECST](https://blogs.mulesoft.com/api-integration/strategy/event-carried-state-messages/)) and does not delineate specific changes (the delta). 
* Consumers must support processing related messages received through different topics regardless of the order in which they are sent.
* Values required by the Data Model cannot be null, while optional values must be null if they have no value. 

## Schema Changes

**Always consult a Data Architect about the proposed change - who will consider the change in terms of affect on other services and continuity with the overall data model.**

Since we are using these schemas across a distributed system we must ensure backwards and forwards compatibility. This enables systems to adopt new schema versions independently of one another. Also, consumers don't need to know the schema version of the messages they have received, as it should validate against any version.

Backwards compatibility ensures that messages using a newer schema version can be understood and processed by consumers that have not been updated to support the new version.

Forwards compatibility ensures that messages using an older schema version can be understood and processed by consumers that have been updated to support a newer schema version.

### Rules

To ensure compatibility, the following rules must be followed:

1. No fields can be removed from the schema
2. No fields can be removed from the `required` list
3. Optional fields must support the `null` type
4. Fields cannot be renamed
5. Any new fields must be optional
6. Any enum changes must only add options
7. `additionalProperties` must always be true

### Examples

Given a simple schema at v1:

```json
{
    "type": "object",
    "title": "Book",
    "required": ["id", "title"]
    "additionalProperties": true,
    "properties": {
        "id": {
            "type": "integer",
            "description": "The unique identifier"
        },
        "title": {
            "type": "string",
            "description": "The title or name of this book"
        },
        "blurb": {
            "type": ["string", "null"],
            "description": "The blurb"
        },
        "category": {
            "type": ["string", "null"],
            "description": "The top-level category",
            "enum": [
                "fiction",
                "non-fiction",
                null
            ]
        }
    }
}
```

An example valid message at v1 could be:

```json
{
    "id": 85347,
    "title": "Mastering the Rubik's Cube",
    "blurb": null,
    "category": "non-fiction"
}
```

Let's make a v2 schema:

```json
{
    "type": "object",
    "title": "Book",
    "required": ["id", "title"]
    "additionalProperties": true,
    "properties": {
        "id": {
            "type": "integer",
            "description": "The unique identifier"
        },
        "title": {
            "type": "string",
            "description": "The title or name of this book"
        },
        "blurb": {
            "type": ["string", "null"],
            "description": "The blurb"
        },
        "category": {
            "type": ["string", "null"],
            "description": "The top-level category",
            "enum": [
                "fiction",
                "non-fiction",
                "ai-generated",
                null
            ]
        },
        "subCategory": {
            "type": ["string", "null"],
            "description": "The sub category",
            "enum": [
                "manuals",
                "stories",
                null
            ]
        }
    }
}
```

Two changes have been made:
 1. a new enum valid for `category`
 2. a new field, `subCategory`

Now the original v1 message still validates against this schema. And a new v2 message, for example:

```json
{
    "id": 85347,
    "title": "Mastering the Rubik's Cube",
    "blurb": null,
    "category": "non-fiction",
    "subCategory": "manuals"
}
```

validates against the _old schema_ and the new schema!


## Structure

* `docs`: generated documentation from the JSON schemas
* `pins_data_model`: Python library code (inc. generated Pydantic models)
* `schemas`: JSON schemas
* `src`: Node.js library code

## Commands

There are some messages, primarily used from Front Office to Back Office systems that aren't strictly compliant to the model, since the Front Office doesn't author the data. These are known as _commands_ (or submissions) and are usually a combination or subset of Data Model entities in a single message.

## Schemas

The schemas in this repository are written in jsonc (JSON with comments), and can be parsed with [node-jsonc-parser](https://github.com/Microsoft/node-jsonc-parser), or [jsonc-parser](https://github.com/NickolaiBeloguzov/jsonc-parser) for Python.

>While we'd prefer to use something with a standard, such as JSON5, this has less support with our current workflows. The jsonc format is the same format that VSCode uses for settings.

## Node.js Usage

To use these schemas in a Node project, add this repo as a dependency (with a particular tag or commit as the version):

`npm i -s Planning-Inspectorate/data-model#some-tag-or-commit`

Then import as required:

```es6
import {loadAllSchemas} from 'pins-data-model';
```

or to import enum constants, for example:

```es6
import { APPEAL_CASE_STATUS } from 'pins-data-model';

if (someAppeal.status === APPEAL_CASE_STATUS.COMPLETE) {
    console.log(`we're done!`);
}
```

To upgrade to a different version, simply doing npm command does not seem to get the correct version, so we need to first uninstall and then reinstall. You can do this by running:

`npm uninstall pins-data-model && npm prune && npm i -s github:Planning-Inspectorate/data-model#some-tag-or-commit`

### Tests

We are starting to add js tests to the models using node test runner

These are run automatically by the pipeline and can be run locally with:

`node --test`

Please continue to expand this test suite going forward to help avoid breaking changes impacting consumers of the model

## Python usage

To use these schemas in a Python project, add this repo as a dependency (with a particular tag or commit as the version):

`pip install git+https://github.com/Planning-Inspectorate/data-model@task/python-setup#egg=pins_data_model`

install deps from requirements.txt: `pip install -r requirements.txt`

> you may want to run python in a virtual environment (handle python version/deps separately from system installed)

create a venv in a folder (.venv is git ignored): `python -m venv .venv` 

you can specify a python version with: `python3.13.2 -m venv .venv`

activate it before running any python script: `source .venv/bin/activate`

deactivate once finished: `deactivate`

```python
from pins_data_model.load_schemas import load_all_schemas

schemas = load_all_schemas()
print(schemas)
```

## Contributing

Once you have updated the schemas, before committing, ensure the generated code/documentation is up to date by running:

`npm run gen`

and

`python pins_data_model/gen_models.py`

Commits must follow conventional commits, and the commit types will be used by semantic-release to determine the next version number. For example `feat` commits will result in a minor version bump, while `fix` commits will result in a patch version bump.

The package will be released automatically using semantic-release, on merge to main. This will include a git tag for the release, and publishing to NPM.
