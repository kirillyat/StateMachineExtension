# flake8: noqa
import codecs
import os

from setuptools import find_packages, setup

PACKAGE_NAME = "tx-statemachine"
VERSION = "0.1.0"
AUTHOR = "Kirill Yatsenko"
AUTHOR_EMAIL = "kirillyat@gmail.com"
DESCRIPTION = "State Machine extension"
KEYWORDS = "textX DSL python domain specific languages (State Machine)"
LICENSE = "MIT"
URL = "https://github.com/kirillyat"

setup(
    name=PACKAGE_NAME,
    version=VERSION,
    description=DESCRIPTION,
    url=URL,
    author=AUTHOR,
    author_email=AUTHOR_EMAIL,
    keywords=KEYWORDS,
    license=LICENSE,
    packages=find_packages(),
    include_package_data=True,
    package_data={"": ["*.tx"]},
    install_requires=["textX"],
    entry_points={"textx_languages": ["statemachine = tx_StateMachine:StateMachineLang"]},
    classifiers=[
        "Development Status :: 2 - Pre-Alpha",
        "Intended Audience :: Developers",
        "Intended Audience :: Information Technology",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
    ],
)