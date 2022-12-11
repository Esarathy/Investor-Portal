import { Given, When, And} from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
const dashboard = new Dashboard()

Given('Verify the user is landed on the Dashboard', () => {
    cy.viewport(1400,1093)
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})

When('User is on the dashborad Verify the following menu is displayed on the side bar', ()=>{
    cy.get('.navList>div').should('have.length',5)
    cy.get('.navList').contains('Dashboard').should('be.visible')
    cy.get('.navList').contains('Insights').should('be.visible')
    cy.get('.navList').contains('Capital Account').should('be.visible')
    cy.get('.navList').contains('Reports').should('be.visible')
    cy.get('.navList').contains('Documents').should('be.visible')
})
And('Verify the Partner logo is displayed in the left top of the page', ()=>{
    cy.get('.mat-toolbar > img').should('be.visible')
})