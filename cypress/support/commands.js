// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import 'cypress-ajv-schema-validator';


// MOCKING JAVASCRIPT LIBRARIES:
// - Mockoon (https://github.com/mockoon/mockoon)
// - Mock Service Worker (https://github.com/mswjs/msw)
// - MirageJS (https://github.com/miragejs/miragejs)
// - Nock (https://github.com/nock/nock)

Cypress.Commands.add('requestMock', (method = 'GET', url) => {
    const fixturePath = `${url}_${method.toUpperCase()}`

    cy.fixture(fixturePath).then((responseData) => {
        cy.log(`👽👽👽 *** MOCKING REQUEST WITH PROVIDED FIXTURE *** `,  responseData)
        return cy.wrap(responseData)
    })
})
