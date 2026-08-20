# Cypress Automation Practice

This repository contains Cypress end-to-end automation practice tests.

The project demonstrates basic and intermediate Cypress concepts, including UI testing, login flow validation, network request interception, mocked API responses, API error response handling, and HTML reporting with Mochawesome.

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
│   │   └── network.cy.js
│   ├── fixtures/
│   │   └── example.json
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

Run only the login tests:

```powershell
npx.cmd cypress run --spec "cypress/e2e/login.cy.js"
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

## Example Successful Network Test Run

```text
Network Requests
  ✓ intercepts a real network request
  ✓ stubs a fake network response
  ✓ handles an API error response

3 passing
```

## What This Project Demonstrates

This repository shows practical Cypress automation skills, including:

- End-to-end UI testing
- Login flow validation
- Network request interception
- API response mocking
- Negative API response simulation
- Test reporting with Mochawesome
- Clean project structure for Cypress practice

## Notes

The following folders are excluded from Git using `.gitignore`:

```text
node_modules/
cypress/videos/
cypress/screenshots/
cypress/downloads/
cypress/reports/
.idea/
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