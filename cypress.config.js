const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  pageLoadTimeout:70000,
  viewportWidth: 1920,
  viewportHeight: 1080,

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

