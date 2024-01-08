from typing import TypedDict
from jsonc_parser.parser import JsoncParser
from os import fsdecode, path, listdir

schemasDir = path.join(path.dirname(path.realpath(__file__)), "..", "schemas")
commandsDir = path.join(schemasDir, "commands")

LoadedSchemas = TypedDict('LoadedSchemas', {'schemas': dict[str, dict], 'commands': dict[str, dict]})

def load_all_schemas() -> LoadedSchemas:
    """
    Load all schemas

    Returns:
        LoadedSchemas: schemas & commands dictionarys
    """
    return {
        'schemas': load_schemas(schemasDir),
        'commands': load_schemas(commandsDir)
    }

def load_schemas(dirPath: str) -> dict[str, dict]:
    """
    Load schemas

    Args:
        dirPath (str): The directory to load schemas from

    Returns:
        dict[str, dict]: a dictionary of schema name to schema
    """

    schemasByName = {}

    for filename in listdir(dirPath):
        if filename.endswith(".schema.json") or filename.endswith(".schema.jsonc"): 
            schema = JsoncParser.parse_file(path.join(dirPath, filename))
            name = path.basename(filename)
            schemasByName[name] = schema

    return schemasByName
