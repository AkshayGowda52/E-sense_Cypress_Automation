const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  failOnStatusCode: false,
  allureResultsPath: 'allure-results',
  waitForAnimations: true,

  env: {
    url:'https://malco.staging.topschool.co.in/' ,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*cy.js'
  },
});
