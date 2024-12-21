/// <reference types="cypress" />

// Load Plain JSON schema
import schema from '../fixtures/schemas/plainjson-schema.json'

describe(`First JSON Schema Test Suite`, () => {

    it(`Test will PASS - Plain JSON Schema Validation`, () => {
        // Expected Response body is:
        // {
        //     "post code": "33162",
        //     "country": "United States",
        //     "country abbreviation": "US",
        //     "places": [
        //       {
        //         "place name": "Miami",
        //         "longitude": "-80.183",
        //         "state": "Florida",
        //         "state abbreviation": "FL",
        //         "latitude": "25.9286"
        //       }
        //     ]
        // }

        cy.request('https://api.zippopotam.us/us/33162') // (SCHEMA VALIDATION WILL PASS)
            .validateSchema(schema)
    })

    it(`Test will FAIL - Plain JSON Schema Validation`, () => {
        cy.request('https://api.zippopotam.us/us/33162').then((response) => {
            // Modify 'country abbreviation' property  in the response body to be a number (expected a string)
            response.body["country abbreviation"] = 1 
        }).validateSchema(schema) // (SCHEMA VALIDATION WILL FAIL)
    })

})
