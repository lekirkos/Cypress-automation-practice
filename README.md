# Cypress Automation Practice

This repository contains Cypress automation practice tests.

## Topics Covered

- Cypress setup
- Login flow testing
- CSS selectors
- Assertions
- Network interception with `cy.intercept()`
- HTML test reporting with Mochawesome

## Project Structure

```text
cypress/
  e2e/
    login.cy.js
    network.cy.js
  support/
cypress.config.js
package.json

Install Dependencies: npm install

Open Cypress Test Runner: npx cypress open

Run Tests Headlessly: npx cypress run

Generate HTML Report: npx.cmd cypress run

Tests
Login Flow

Tests successful login on:  https://the-internet.herokuapp.com/login

Network Request

Tests Cypress network interception using: https://example.cypress.io/commands/network-requests