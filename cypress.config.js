const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout:10000,
  viewportWidth: 1980,
  viewportHeight: 1000,

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    "env":
    {
      "viewportWidthBreakpoint": 960,
      "produrl": "https://lp.suite7.io/",
      "qaurl": "https://investorportal.qa.ace-alternatives.com/dashboard",
      "devurl": "https://investorportal.dev.ace-alternatives.com/dashboard",
      "baseurl": "https://api.investorportal.dev.ace-alternatives.com"
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});

