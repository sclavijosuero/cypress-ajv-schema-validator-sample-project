/// <reference types="cypress" />

import schema from '../fixtures/schemas/openapi3-schema.json'


describe(`OpenAPI3 Document Test Suite`, () => {

    it(`Test will FAIL - OpenAPI3 Schema Validation - Use Case: "/service1" - "get" - 200`, () => {
        cy.requestMock('GET', '/mock-data/openapi3/service1-schema-fail') // Mock the request (WILL FAIL)
            .validateSchema(schema, { endpoint: "/service1", method: "get", status: 200 })
    })

    it(`Test will FAIL - OpenAPI3 Schema Validation - Use Case: "/service1" - "post" - 401`, () => {
        cy.requestMock('POST', '/mock-data/openapi3/service1-schema-fail') // Mock the request (WILL FAIL)
            .validateSchema(schema, { endpoint: "/service1", method: "post", status: 401 })
    })
})
