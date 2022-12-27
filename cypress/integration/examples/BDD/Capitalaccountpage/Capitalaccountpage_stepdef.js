import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Navigation from "../../../../support/Pageobject/Naviagtion";
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

Then('Page redirects successfully on Capitalaccount click', () => {
    navigation.getcapitalaccount().click()
    cy.url().should('include', '.cloudfront.net/capital-account')
})

When('User clicks the Overview toggle button', () => {
    capitalaccount.getoverview().click()

})

Then('User navigates to the overview page successfully', () => {
     capitalaccount.getchidlmenu().should('include.text', '/ Overview')
})

When('User selects the quater drop down', () => {
    capitalaccount.getfromquater().click()
    cy.get('#mat-option-6').click()
   
    capitalaccount.gettoquater().click()
    cy.get('#mat-option-10').click()
    
})
And('User selects IFRS in the dropdown', () => {
    capitalaccount.getdropdown().click()
    capitalaccount.getoptions().contains(' IFRS Vertical ').click()
    cy.get('tr > th')

    // capitalaccount.gettableheader().contains(' I. Commitment Status ').should('be.visible')
    // capitalaccount.gettableheader().contains(' II. Capital Account since inception ').should('be.visible')
    // capitalaccount.gettableheader().contains(' III. Capital Account for current quarter ').should('be.visible')


})

And('User selects KFW in the dropdown', () => {
    capitalaccount.getdropdown().click()
    capitalaccount.getoptions().contains(' KfW Capital Account ').click()
    cy.get('tr > th')
    // capitalaccount.gettableheader().contains(' I. Capital Account since inception ').should('be.visible')
    // capitalaccount.gettableheader().contains(' II. Capital Account for current quarter ').should('be.visible')
})
Then('User should successfully able to download the details', () => {
    cy.get('.desc').click()
    cy.get('#mat-select-14').click()
    cy.get('#mat-option-23').click()

    cy.get('#mat-select-value-17').click()
    cy.get('#mat-option-32').click()
    cy.get('.download-button > button').click()


})
When('User clicks the Transaction toggle button', () => {
    capitalaccount.gettransaction().click()

})

Then('User navigates to the transaction page successfully', () => {
    capitalaccount.getchidlmenu().should('include.text', '/ Transactions')
})


When('User enters the transaction dates', () => {
    cy.get('#mat-input-0').type('15 dec 2022')
    cy.get('#mat-input-1').type('20 jan 2023')

})
And('Select the drop down', () => {
    cy.get('#mat-select-10').click()
    cy.get('#mat-option-16').click()
   
    cy.get('#mat-select-12').click()
    cy.get('#mat-option-19').click()
   
})
Then('User should get the following datas', () => {
    cy.get('tr > th')

})
When('User clicks on paid button', () => {
    cy.get('td > span').contains(' Paid ').eq(0).click()

})
Then('A pdf must be previewed at the bottom', () => {
    
    cy.get('iframe')
    // cy.get('webviewer-1')
    // cy.get('#virtualListBody').should('be.visible')
    
})