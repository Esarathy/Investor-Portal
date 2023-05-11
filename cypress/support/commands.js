// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import "cypress-cucumber-attach-screenshots-to-failed-steps";
import "cypress-iframe";
import 'cypress-if'
require('cypress-xpath');
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//cy.get('  ').each(($el, index, $list)=>{


// -- This will overwrite an existing command --

