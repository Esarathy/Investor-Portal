const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  pageLoadTimeout: 70000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    test_url: 'https://investorportal.qa.ace-alternatives.com/dashboard',
  },
  retries: {
    runMode: 3,
  },
  e2e: {
    baseUrl: 'https://investorportal.qa.ace-alternatives.com/dashboard',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    "env":
    {
      "viewportWidthBreakpoint": 960,
      "qaurl": "https://investorportal.qa.ace-alternatives.com/dashboard",
      "baseurl": "https://api.investorportal.dev.ace-alternatives.com"
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});

