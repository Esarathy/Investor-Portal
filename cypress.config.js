const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 930,
  
  e2e: {

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

    },

    "env":
    {
      "viewportWidthBreakpoint": 960,
      "url": "https://investorportal.dev.ace-alternatives.com/dashboard"
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});

