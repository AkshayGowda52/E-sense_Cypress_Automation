const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    url:'https://cambridge.staging.topschool.co.in/' 
  },
  e2e: {
    url: 'https://cambridge.staging.topschool.co.in/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*cy.js'
  },
});
