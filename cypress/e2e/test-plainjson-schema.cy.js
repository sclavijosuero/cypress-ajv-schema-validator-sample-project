/// <reference types="cypress" />

import schema from '../fixtures/schemas/plainjson-schema.json'

describe(`Plain JSON Schema Test Suite`, () => {

    it(`Test will PASS - Plain JSON Schema Validation`, () => {
        cy.requestMock('/mock-data/plainjson/data-pass.json') // Mock the request (WILL PASS)
            .validateSchema(schema)
    })

    it(`Test will FAIL - Plain JSON Schema Validation`, () => {
        cy.requestMock('/mock-data/plainjson/data-fail.json') // Mock the request (WILL FAIL)
            .validateSchema(schema)
    })
})
