import { Given, When, And} from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
const dashboard = new Dashboard()

Given('Verify the user is landed on the Dashboard', () => {
    cy.viewport('macbook-11')
    cy.visit('http://d12qy9shi7acla.cloudfront.net/dashboard')
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage();
})
When('User is on the dashborad Verify the following menu is displayed in the left panel', ()=>{
    cy.get('.navList>div').should('have.length',5)
    cy.get('.navList').contains('Dashboard').should('be.visible')
    cy.get('.navList').contains('Insights').should('be.visible')
    cy.get('.navList').contains('Capital account').should('be.visible')
    cy.get('.navList').contains('Reports').should('be.visible')
    cy.get('.navList').contains('Documents').should('be.visible')
})
And('Verify the Partner logo is displayed in the left top of the page', ()=>{
    cy.get('.mat-toolbar > img').should('be.visible')
})