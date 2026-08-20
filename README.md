# Cypress Automation Practice

This repository contains Cypress end-to-end automation practice tests.

The project was created as a practice project while learning Cypress basics, UI testing, network testing, simple data-driven testing, custom commands, and HTML reporting.

## Technologies Used

- Cypress
- JavaScript
- Node.js
- Mochawesome Reporter

## Project Structure

```text
cypress_automation_practice/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── login-data.cy.js
│   │   └── network.cy.js
│   ├── fixtures/
│   │   ├── example.json
│   │   └── login-users.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Test Coverage

### Login Tests

The login test covers a successful login flow using the public test website:

```text
https://the-internet.herokuapp.com/login
```

Covered actions:

- Visit the login page
- Enter a valid username
- Enter a valid password
- Submit the login form
- Verify the success message
- Verify that the user is redirected to the secure page

### Data-Driven Login Tests

The data-driven login test uses fixture data from:

```text
cypress/fixtures/login-users.json
```

Covered scenarios:

- Valid login
- Invalid username
- Invalid password

The test uses a custom Cypress command:

```javascript
cy.login(username, password);
```

This keeps the login steps reusable and avoids repeating the same commands in every test.

### Network Tests

The network test file demonstrates Cypress network testing using `cy.intercept()`.

Covered scenarios:

- Intercepting a real network request
- Waiting for a request using an alias
- Validating the response status code
- Stubbing a fake API response
- Verifying mocked response data in the UI
- Simulating an API error response with status code `500`

## Cypress Concepts Practiced

This project includes practice with:

- `cy.visit()`
- `cy.get()`
- `cy.contains()`
- `cy.intercept()`
- `cy.wait()`
- Request aliases
- Response status assertions
- Mocked API responses
- Error response simulation
- Cypress custom commands
- Fixture-based test data
- Simple data-driven testing
- Mochawesome HTML reporting

## How to Install

Install project dependencies:

```bash
npm install
```

## How to Open Cypress Test Runner

```bash
npx cypress open
```

On Windows PowerShell, use:

```powershell
npx.cmd cypress open
```

## How to Run All Tests Headlessly

```bash
npx cypress run
```

On Windows PowerShell, use:

```powershell
npx.cmd cypress run
```

## How to Run a Specific Test File

Run only the login test:

```powershell
npx.cmd cypress run --spec "cypress/e2e/login.cy.js"
```

Run only the data-driven login test:

```powershell
npx.cmd cypress run --spec "cypress/e2e/login-data.cy.js"
```

Run only the network tests:

```powershell
npx.cmd cypress run --spec "cypress/e2e/network.cy.js"
```

## Test Report

This project uses Mochawesome to generate an HTML report.

After running the tests, the report is generated locally here:

```text
cypress/reports/html/index.html
```

The report folder is ignored by Git because it is generated automatically after test execution.

## Example Successful Test Run

```text
login-data.cy.js    1 passing
login.cy.js         1 passing
network.cy.js       3 passing

All specs passed
5 passing
```

## What This Project Demonstrates

This repository shows practice with Cypress automation concepts, including:

- Basic end-to-end UI testing
- Login flow validation
- Simple reusable custom commands
- Fixture-based test data
- Basic data-driven testing
- Network request interception
- API response mocking
- Negative API response simulation
- Test reporting with Mochawesome

## Notes

The following folders are excluded from Git using `.gitignore`:

```text
node_modules/
cypress/videos/
cypress/screenshots/
cypress/downloads/
cypress/reports/
.idea/
*.log
.DS_Store
```

To run this project on another machine:

```bash
npm install
npx cypress run
```

On Windows PowerShell:

```powershell
npm install
npx.cmd cypress run
```