import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Reports from "../../../../support/Pageobject/Reportspage";
const reports = new Reports()
const leftpanel = new Leftpanel()


// Quarterly tab
Given('The user landed on the Dashboard page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partner logo is displayed', () => {
    leftpanel.getpatnerlogo().should('be.visible')

})
When('The user clicks on the Reports Page', () => {
    leftpanel.getreports().click()
    cy.url().should('include', '.cloudfront.net/reports')
})
And('User selects the year and quarter dropdown', () => {
  reports.getyearandquater().eq(0).click()
  reports.getoptions().contains('2022').click()
  reports.getyearandquater().eq(1).click()
  reports.getoptions().contains('Q4').click()

})
Then('The user should get the following documents in quarterly tab', () => {
    reports.getredocumentlist().should('include.text','Fund Overview')

})
And('User able to see the pdf', () => {
  console.log("able to view the pdf")
    
})
When('Clicking on the table of contents', () => {
    cy.get('mat-selection-list > mat-list-option').click({ multiple: true })

})
Then('Respective pdf page is navigated', () => {
    console.log("able to view the pdf")
})



// Annually tab
And('The user clicks on the Annually tab', () => {
    leftpanel.getannual().click()

})
And('Select the year folder', () => {
    reports.getyear().click()

})
And('Choose the pdf', () => {
    console.log("able to view the pdf")

})
Then('The user should get the following documents in annually tab', () => {
  reports.getredocumentlist().should('include.text',' JCF1-0061_Tax_Report_2021 ')

})



