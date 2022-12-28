import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Reports from "../../../../support/Pageobject/Reportspage";
const reports = new Reports()
const leftpanel = new Leftpanel()


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
    
})
Then('The user should get the following documents', () => {
   

})
And('User able to see the pdf', () => {
  
    
})
When('Clicking on the table of contents', () => {
   

})
Then('Respective pdf page is navigated', () => {
    
})








































Then('Page redirects successfully on Reports menu click', () => {
    navigation.getreports().click()
    cy.url().should('include', '.cloudfront.net/reports')
})

When('User clicks the Quarterly toggle button', () => {
    reports.getquarterly().click()
    reports.getmenutitle().should('include.text', ' Quarterly')

})
And('User selects the year and quarter drop down', () => {
    cy.get('#mat-select-4').click()
    cy.get('#mat-option-6').click()
    reports.getmenutitle().should('include.text', '2022')


    cy.get('#mat-select-6').click()
    cy.get('#mat-option-11').click()
    reports.getmenutitle().should('include.text', 'Q4')

})
Then('User should get the following documents', () => {
    cy.get('mat-selection-list > mat-list-option').click({ multiple: true })

})
And('User able to see the pdf', () => {
    cy.get('.pageContainer')
    

})
When('User clicks the Annually in the toggle button', () => {
    reports.getannual().click()
    reports.getmenutitle().should('include.text', ' Annually')

})
And('Selects the year', () => {
    reports.getyear().click()
    reports.getmenutitle().should('include.text', ' 2021')

    cy.get('.mat-list-text > div').then(($btn1) => {
        const txt1 = $btn1.text()
        cy.get('.mat-list-text > div').click()

    })
})
And('User should preview the pdf', () => {
    cy.get('.pageWidgetContainer1').click()
    

})