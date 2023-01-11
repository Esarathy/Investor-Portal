import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Insightpage from "../../../../support/Pageobject/Insightpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
const leftpanel = new Leftpanel()
const insightpage = new Insightpage()


// Fund Metrics - Net performance
Given('The user landed on the Dashboard page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partner logo is displayed', () => {
    leftpanel.getpatnerlogo().should('be.visible')
})

When('The user clicks on the Insights Page', () => {
    leftpanel.getinsight().click()
    cy.url().should('include', '/insights')
})

Then('Details on the TVPI widget are verified', () => {

    insightpage.getwidgetheading().contains('Net Performance').should('be.visible')
    insightpage.getwidgetheading().contains('TVPI').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'TVPI Gross')
    insightpage.getwidgetcontent().should('contain', 'TVPI Net')
    insightpage.getwidgetcontent().should('contain', 'RVPI')
    insightpage.getwidgetcontent().should('contain', 'DPI')

})

And('Details on the Capital deployed widget are verified', () => {
    insightpage.getwidgetheading().contains('Capital deployed').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Total Deployed')
    insightpage.getwidgetcontent().should('contain', 'Exit proceeds')
    insightpage.getwidgetcontent().should('contain', 'Remaining')
})

And('Details on the Portfolio Value widget are verified', () => {
    insightpage.getwidgetheading().contains('Portfolio value').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Total')
    insightpage.getwidgetcontent().should('contain', 'Realized')
    insightpage.getwidgetcontent().should('contain', 'Unrealized')
})

And('Details on the Net IRR widget are verified', () => {
    insightpage.getwidgetheading().contains('Net IRR').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Combined')
    insightpage.getwidgetcontent().should('contain', 'Realized')
    insightpage.getwidgetcontent().should('contain', 'Unrealized')
})

And('Details on the Cumulative net cash flow widget are verified', () => {
    insightpage.getwidgetheading().contains('Cumulative net cash flow (J Curve Analysis)').scrollIntoView().should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Actual')

})


// Fund Metrics - Gross performance
And('Scrolls to Gross performance section', () => {
    insightpage.getwidgetheading().contains('Gross Performance').scrollIntoView().should('be.visible')


})

Then('Details on the MOIC widget are verified', () => {
    insightpage.getwidgetheading().contains('MOIC').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Combined')
    insightpage.getwidgetcontent().should('contain', 'Realized')
    insightpage.getwidgetcontent().should('contain', 'Unrealized')

})
And('Details on the Capital deployed widget in Gross performance section are verified', () => {
    // insightpage.getwidgetheading().contains('Capital deployed').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Total Deployed')
    insightpage.getwidgetcontent().should('contain', 'Exit proceeds')
    insightpage.getwidgetcontent().should('contain', 'Remaining')
})
And('Details on the Portfolio Value widget in Gross performance section are verified', () => {
    // insightpage.getwidgetheading().contains('Portfolio Value').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Total')
    insightpage.getwidgetcontent().should('contain', 'Realized')
    insightpage.getwidgetcontent().should('contain', 'Unrealized')
})
And('Details on the Gross IRR widget are verified', () => {
    insightpage.getwidgetheading().contains('Gross IRR').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Combined')
    insightpage.getwidgetcontent().should('contain', 'Realized')
    insightpage.getwidgetcontent().should('contain', 'Unrealized')

})



// Fund Metrics - LP details
And('Scrolls to LP details section', () => {
    insightpage.getwidgetheading().contains('LP details').scrollIntoView().should('be.visible')


})

Then('Details on the Net LP proceeds widget are verified', () => {
    insightpage.getwidgetheading().contains('Net LP proceeds').should('be.visible')


})
And('Details on the Net LP proceeds over time widget are verified', () => {
    insightpage.getwidgetheading().contains(' Net LP proceeds over time').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Actual')
})
And('Details on the LP called capital widget are verified', () => {
    insightpage.getwidgetheading().contains('LP called capital').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Actual')
})
And('Details on the LP return of contributed capital widget are verified', () => {
    insightpage.getwidgetheading().contains('LP return of contributed capital').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Actual')

})
And('Details on the Proceeds to LPs - Hurdle rate widget are verified', () => {
    insightpage.getwidgetheading().contains('Proceeds to LPs - Hurdle rate').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Actual')

})
And('Details on the Proceeds to LPs - after catch-up and carried interest are verified', () => {
    insightpage.getwidgetheading().contains('Proceeds to LPs - after catch-up and carried interest').should('be.visible')
    insightpage.getwidgetcontent().should('contain', 'Actual')

})









