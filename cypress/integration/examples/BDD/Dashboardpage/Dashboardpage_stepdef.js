import {  When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
const dashboard = new Dashboard()

Then('User must be navigated to the account page when clicked on user profile icon', () => {
    cy.get('.profile').click()
    cy.url().should('include', '.cloudfront.net/account')
})

When('User clicks on Join fond icon a drop down must be enabled', () => {
    dashboard.getjoinfond().click()

})

And('Should be able to switch between the join fund', () => {
    dashboard.getoptiontext().contains(' Join Fund 1 - XYZ ').should('be.visible').click()
    dashboard.getjoinfond().click()
    dashboard.getoptiontext().contains(' Join Fund 2 - XYZ ').should('be.visible').click()
    dashboard.getjoinfond().click()
    dashboard.getoptiontext().contains(' Join Fund 3 - XYZ ').should('be.visible').click()

})
And('Assert the grids avilable on the dashboard page', () => {
    cy.get('div').contains(' Timeline ')
    cy.get('div').contains(' Performance ')
    cy.get('div').contains(' Capital in USD ')
    cy.get('div').contains(' Upcoming events ')
    cy.get('div').contains(' Updates ')
})
When('User clicks on investor icon a drop down must be enabled', () => {
    dashboard.getinvestor().click()
})
And('Should be able to switch between the investor', () => {
    dashboard.getoptiontext().contains(' Investor 1 ').should('be.visible').click()
    dashboard.getinvestor().click()
    dashboard.getoptiontext().contains(' Investor 2 ').should('be.visible').click()
    dashboard.getinvestor().click()
    dashboard.getoptiontext().contains(' Investor 3 ').should('be.visible').click()

})
Then('User must be navigated to the account page when clicked on user profile icon ', () => {
    cy.get('.profile').click()
    cy.url().should('include', '.cloudfront.net/account')
})

Then('Verify the banner is dispalyed on the right top corner', () => {
   cy.get('a > img').should('be.visible')
})
And('On clicking the banner widget should navigate to external url', ()=>{
    cy.get('a > img').click()
    cy.get('a').then(function($e1) {
    const url = $e1.prop('href')
    cy.visit(url)
    // cy.url().should('include','.youtube.com/')

    })
})