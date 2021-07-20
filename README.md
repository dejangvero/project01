# Introduction

Automated testing using Cypress.io

## Installation

Make sure you have the following installed:
- **Visual Studio Code** - https://code.visualstudio.com/
- **Nodejs** - https://nodejs.org/en/download/
- **Java 8** - https://www.java.com/download/ie_manual.jsp
- **Git** - https://git-scm.com/downloads

When you installed all the above, open the VS code terminal and clone the repository with the following command:
```git
git clone git@github.com:dejangvero/project01.git
```
When the cloning is done, run the following command to install all the necessary packages to to run cypress and all its plugins:
```node
npm install
```
This will install these plugins:
```json
"@shelex/cypress-allure-plugin"
"allure-commandline"
"cypress"
"dayjs"
"moment"
```
## Usage
Replace ```email``` and ```password``` on line 9 of the /cypress/integration/tests/create-contract-tests.js file with valid credentials.

To run the tests enter and confirm the following command.
```node
npm test
```
This command will also generate and open an Allure report at the end.

## Licence
MIT
