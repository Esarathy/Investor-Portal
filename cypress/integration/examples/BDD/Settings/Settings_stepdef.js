import { Given, And } from "cypress-cucumber-preprocessor/steps";
import Navigation from "../../../../support/Pageobject/Naviagtion";
import Settings from "../../../../support/Pageobject/Settings";
const navigation = new Navigation()
const settings = new Settings()

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
Then('Page redirects successfully on Settings menu click', () => {
    navigation.getsettings().click()
    cy.url().should('include', '.cloudfront.net/settings')

})
When('User clicks Users in the toggle button', () => {
   settings.getUsers().click()
  
})
Then('Should successfully navigate to User page', () => {
   cy.contains('/ Users').should('be.visible')  

})
And('Should see list of user added and funds permited', () => {
    cy.get('.usersList > :nth-child(1)').click()
    cy.get('.usersList > :nth-child(2)').click()
    cy.get('.usersList > :nth-child(3)').click()

})
 Then('Should successfully navigate to Investor page', () => {
   cy.contains('/ Investor').should('be.visible')  

})
When('User enters {string} and {string} in the Address widget', (Company,Street) => {
   settings.getcompanyname().type(Company)
   settings.getstreetname().type(Street)
   
 })
 When('User clicks Investor in the toggle button', () => {
    settings.getinvestor().click()
   
 })
And('Should enter {string},{string},{string} in More widget', (VATnumber,CommercialRegisterNumber,IBAN) => {
   settings.getvatnum().type(VATnumber)
   settings.getcommregnum().type(CommercialRegisterNumber)
   settings.getiban().type(IBAN)

})
