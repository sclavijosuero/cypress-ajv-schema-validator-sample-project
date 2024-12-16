const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 800,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://petstore.swagger.io/v2',
  },
});
