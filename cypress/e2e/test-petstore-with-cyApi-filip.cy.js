/// <reference types="cypress" />

// npm install cypress-plugin-api

import 'cypress-plugin-api'

import petstoreSchema from '../fixtures/schemas/petstore-swagger2-schema-errors.json'

describe(`Petstore Swagger2 Test Suite - 'cypress-plugin-api' cy.api() `, () => {
    
    it(`Test will FAIL - Swagger2 Schema Validation - Use Case: "/pet/findByStatusstatus=pending" - "get" - 200`, () => {
        const findByStatusReq = {
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending',
            headers: { 'Content-Type': 'application/json' }
        }

        cy.api(findByStatusReq)
            .validateSchema(petstoreSchema, { endpoint: '/pet/findByStatus', method: 'get', status: 200 } )
    })

    it(`Test will FAIL - Swagger2 Schema Validation - Use Case: /store/inventory" - "get" - 200`, () => {
        const storeInventoryReq = {
            url: 'https://petstore.swagger.io/v2/store/inventory',
            headers: { 'Content-Type': 'application/json' }
        }

        cy.api(storeInventoryReq)
            .validateSchema(petstoreSchema, { endpoint: '/store/inventory', method: 'get', status: 200 })
    })
})

