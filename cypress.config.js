const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 920,
  
  e2e: {

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

    },

    "env":
    {
      "viewportWidthBreakpoint": 960,
      "url": "http://d12qy9shi7acla.cloudfront.net/dashboard"
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});

