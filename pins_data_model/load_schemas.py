"""
Module with two functions:

load_all_schemas
load_schemas

They are used to generate a dictionary of schemas and commands
"""

from typing import TypedDict
from jsonc_parser.parser import JsoncParser
from os import path, listdir

schemasDir = path.join(path.dirname(path.realpath(__file__)), "..", "schemas")
commandsDir = path.join(schemasDir, "commands")

LoadedSchemas = TypedDict(
    "LoadedSchemas", {"schemas": dict[str, dict], "commands": dict[str, dict]}
)


def load_all_schemas() -> LoadedSchemas:
    """
    Load all schemas

    Returns:
        LoadedSchemas: schemas & commands dictionaries
    """
    return {"schemas": load_schemas(schemasDir), "commands": load_schemas(commandsDir)}


def load_schemas(dir_path: str) -> dict[str, dict]:
    """
    Load schemas

    Args:
        dir_path (str): The directory to load schemas from

    Returns:
        dict[str, dict]: a dictionary of schema name to schema
    """

    schemas_by_name = {}

    for filename in listdir(dir_path):
        if filename.endswith(".schema.json") or filename.endswith(".schema.jsonc"):
            schema = JsoncParser.parse_file(path.join(dir_path, filename))
            name = path.basename(filename)
            schemas_by_name[name] = schema

    return schemas_by_name
