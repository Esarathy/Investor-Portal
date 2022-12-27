import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Navigation from "../../../../support/Pageobject/Naviagtion";
import Reports from "../../../../support/Pageobject/Reportspage";

const navigation = new Navigation()
const reports = new Reports()



Given('User lands on the Dashboard', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partners logo verified', () => {
    navigation.getpatnerlogo().should('be.visible')

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