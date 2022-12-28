import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Documents from "../../../../support/Pageobject/Documents";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
const documnetspage = new Documents()
const leftpanel = new Leftpanel()
const capitalaccount = new Capitalaccount()

Given('The user landed on the Dashboard page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partner logo is displayed', () => {
    leftpanel.getpatnerlogo().should('be.visible')
})

When('The user clicks on the Documents Page', () => {
    leftpanel.getdocuments().click()
    cy.url().should('include', '.cloudfront.net/documents')
 }) 
 And('Click on the Sub-folder', () => {
    documnetspage.getsubfolderlist().eq(0).click()
})
Then('The user should successfully navigate to the subfolder page', () => {
    capitalaccount.getchidlmenu().should('have.text','/ Subfolder 1') 
})
When('The User selects any documents', () => {
    documnetspage.getdocuments().click({multiple:true}) 
})
Then('The user should view the pdf', () => {
    console.log("Able to view the pdf")
})