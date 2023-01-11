import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
const leftpanel = new Leftpanel()

        // Dashboard page
Given('The user landed on the Dashboard page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', 'dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partner logo is verified', () => {
    leftpanel.getpatnerlogo().should('be.visible')

})
Then('Verify Breadcrumbs - / Dashboard', () => {
    cy.wait(3000)   
     leftpanel.getmenuheading().should('contain', '/ Dashboard ')

})


        // Insight page 
When('The user clicks on the insights Page', () => {
    leftpanel.getinsight().click()

})
Then('Verify Breadcrumbs - / Insights / Fund Metrics', () => {
    cy.wait(3000)  
    leftpanel.getmenuheading().should('contain', '/ Insights')  
    cy.get('span.childMenuItem').should('contain','/ Fund Metrics')
    // leftpanel.getmenuheading().should('contain', '/ Insights / Fund Metrics')

})
And('The user clicks on the Portfolio Investments tab', () => {
    leftpanel.getportfolio().click()

})
Then('Verify Breadcrumbs - / Insights / Portfolio Investments', () => {
    cy.wait(10000)    
    leftpanel.getmenuheading().should('contain', '/ Insights / Portfolio Investments')

})




        // Capital Account page
When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()

})
Then('Verify Breadcrumbs - / Capital Account / Overview', () => {
    cy.wait(3000)  
      leftpanel.getmenuheading().should('contain', '/ Capital Account / Overview')

})
And('The user clicks on the Transaction tab', () => {
    leftpanel.gettransaction().click()

})
Then('Verify Breadcrumbs - / Capital Account / Transactions', () => {
    cy.wait(3000)   
     leftpanel.getmenuheading().should('contain', '/ Capital Account / Transactions')

})

        // Reports page
When('The user clicks on the Reports Page', () => {
    leftpanel.getreports().click()

})
Then('Verify Breadcrumbs - / Reports/ Quarterly / 2022 / Q4', () => {
    cy.wait(3000)   
     leftpanel.getmenuheading().should('contain', '/ Reports / Quarterly / 2022 / Q4')
})

And('The user clicks on the Annually tab', () => {
    leftpanel.getannually().click()
})
Then('Verify Breadcrumbs - / Reports / Annually /', () => {
    cy.wait(3000)   
     leftpanel.getmenuheading().should('contain', '/ Reports / Annually')
})

        // Documnets page
When('The user clicks on the Documents Page', () => {
    leftpanel.getdocuments().click()

})
Then('Verify Breadcrumbs - / Documents', () => {
    cy.wait(3000)   
     leftpanel.getmenuheading().should('contain', '/ Documents ')
})


        //Settings page
When('The user clicks on the Settings Page', () => {
    leftpanel.getsettings().click()

})
Then('Verify Breadcrumbs - / Settings / User', () => {
    cy.wait(3000)  
      leftpanel.getmenuheading().should('contain', '/ Settings / Users')
})
And('The user clicks on the Investor tab', () => {
    leftpanel.getinvestor().click()
})
Then('Verify Breadcrumbs - / Settings / Investor', () => {
    cy.wait(3000)   
     leftpanel.getmenuheading().should('contain', '/ Settings / Investor')
})