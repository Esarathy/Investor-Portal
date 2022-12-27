import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Navigation from "../../../../support/Pageobject/Naviagtion";
const dashboard = new Dashboard()
const navigation = new Navigation()
const capitalaccount = new Capitalaccount()

Given('User lands on the Dashboard', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partners logo verified', () => {
    navigation.getpatnerlogo().should('be.visible')
     
})

Then('Page redirects successfully on Documents menu click', () => {
    navigation.getdocuments().click()
    dashboard.getmenuheading().should('contain', '/ Documents ')
})  

When('User click on Sub-folder or Documents', () => {
   cy.get('.folderList > div ').eq(0).click() 
}) 

Then('User should successfully navigate to the subfolder page', () => {
    capitalaccount.getchidlmenu().should('have.text','/ Subfolder 1') 
     
 })
 When('User selects any documents', () => {
    cy.get('mat-selection-list').click({multiple:true}) 
})    

Then('User should view the pdf', () => {
    cy.get('#pageWidgetContainer1').should('be.visible')
})