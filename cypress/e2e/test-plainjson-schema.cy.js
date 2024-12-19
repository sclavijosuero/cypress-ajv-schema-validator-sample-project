/// <reference types="cypress" />

import schema from '../fixtures/schemas/plainjson-schema.json'

describe(`Plain JSON Schema Test Suite`, () => {

    it(`Test will PASS - Plain JSON Schema Validation`, () => {
        cy.requestMock('GET','/mock-data/plainjson/data-schema-pass') // Mock the request (SCHEMA VALIDATION WILL PASS)
            .validateSchema(schema)
    })

    it(`Test will FAIL - Plain JSON Schema Validation`, () => {
        cy.requestMock('GET','/mock-data/plainjson/data-schema-fail') // Mock the request (SCHEMA VALIDATION WILL FAIL)
            .validateSchema(schema)
    })
})
