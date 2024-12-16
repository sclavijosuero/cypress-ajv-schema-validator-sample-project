/// <reference types="cypress" />

import schema from '../fixtures/schemas/openapi3-schema.json'


describe(`OpenAPI3 Document Test Suite`, () => {

    it(`Test will PASS - OpenAPI3 Schema Validation - Use Case: "/service1" - "get" - 200`, () => {
        cy.requestMock('/mock-data/openapi3/service1-get-200-pass.json') // Mock the request (WILL PASS)
            .validateSchema(schema, { endpoint: "/service1", method: "get", status: 200 })
    })

    it(`Test will FAIL - OpenAPI3 Schema Validation - Use Case: "/service1" - "get" - 200`, () => {
        cy.requestMock('/mock-data/openapi3/service1-get-200-fail.json') // Mock the request (WILL FAIL)
            .validateSchema(schema, { endpoint: "/service1", method: "get", status: 200 })
    })

    it(`Test will PASS - OpenAPI3 Schema Validation - Use Case: "/service1" - "post" - 401`, () => {
        cy.requestMock('/mock-data/openapi3/service1-post-401-pass.json') // Mock the request (WILL PASS)
            .validateSchema(schema, { endpoint: "/service1", method: "post", status: 401 })
    })

    it(`Test will FAIL - OpenAPI3 Schema Validation - Use Case: "/service1" - "post" - 401`, () => {
        cy.requestMock('/mock-data/openapi3/service1-post-401-fail.json') // Mock the request (WILL FAIL)
            .validateSchema(schema, { endpoint: "/service1", method: "post", status: 401 })
    })
})
