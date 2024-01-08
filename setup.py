from setuptools import find_packages, setup

setup(
    name='pins_data_model',
    packages=find_packages(),
    include_package_data=True,
    package_data={
        "schemas": ["*"],
        "schemas.commands": ["*"],
    },
    version='1.0.0',
    description='JSON Schemas for the Planning Inspectorate\'s Data Model',
    install_requires=['jsonc-parser==1.1.0'],
    setup_requires=[]
)
