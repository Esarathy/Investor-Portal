import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Navigation from "../../../../support/Pageobject/Naviagtion";
const navigation = new Navigation()

Given('User lands on the Dashboard', () => {
    cy.viewport(1400, 1093)
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partners logo verified', () => {
    navigation.getpatnerlogo().should('be.visible')

})
When('User click on the insight menu', () => {
    navigation.getinsight().click()
})
Then('User should be successfully redirected to the page', () => {
    
    cy.url().should('include', '.cloudfront.net/insights')
})


Then('All the joinfund & investor should able to be selected successfully', () => {
    cy.get('#mat-select-value-1').click()
    cy.get('#mat-option-0').click()
   

    cy.get('#mat-select-value-3').click()
    cy.get('#mat-option-3').click()
    
    
})