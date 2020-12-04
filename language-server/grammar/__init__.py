from inspect import getfile
from os.path import dirname, join
from textx import LanguageDesc, metamodel_from_file
# from textx_ls_core.languages import LanguageTemplate

NAME = "StateMachine"
PATTERN = '*.sm'
DESCRIPTION = 'A language for describing State Machines'
METAMODEL = metamodel_from_file(join(dirname(__file__), 'StateMachine.tx'))

StateMachineLang = LanguageDesc(
    name=NAME,
    pattern=PATTERN,
    description=DESCRIPTION,
    metamodel=METAMODEL)
    