const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    
    },
    
      "env" :
      {
          "url" : "http://d12qy9shi7acla.cloudfront.net/dashboard"
      },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
