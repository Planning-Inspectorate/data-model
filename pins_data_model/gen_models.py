import json
from os import path
from pathlib import Path
from datamodel_code_generator import InputFileType, PythonVersion, generate
from datamodel_code_generator import DataModelType

from load_schemas import load_all_schemas

modelsDir = path.join(path.dirname(path.realpath(__file__)), "models")

def gen_models():
    loaded = load_all_schemas()
    schemas = loaded['schemas']

    for name in schemas:
        schema = schemas[name]
        json_schema = json.dumps(schema)
        filename="model_"+name.replace("-", "_").replace(".schema.jsonc", "").replace(".schema.json", "")+".py"
        generate(
            json_schema,
            input_file_type=InputFileType.JsonSchema,
            input_filename=name,
            output=Path(path.join(modelsDir, filename)),
            output_model_type=DataModelType.PydanticV2BaseModel,
            use_double_quotes=True,
            use_standard_collections=True,
            use_union_operator=True,
            use_field_description=True,
            target_python_version=PythonVersion.PY_311,
            use_schema_description=True
        )

    return

gen_models()