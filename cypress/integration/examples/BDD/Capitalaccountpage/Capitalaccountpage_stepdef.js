import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";

const capitalaccount = new Capitalaccount()
const leftpanel = new Leftpanel()

Given('The user landed on the Dashboard page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partner logo is displayed', () => {
    leftpanel.getpatnerlogo().should('be.visible')
})
When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()
    cy.url().should('include', '/capital-account')
    
})
And('Choose the from quarter', () => {
    capitalaccount.getfromquater().click()
    cy.get('#mat-option-6').click()

})
And('Choose the To quarter', () => {
    capitalaccount.gettoquater().click()
    cy.get('#mat-option-10').click()

})
Then('Verify the IFRS option is chosen from the drop-down', () => {
    capitalaccount.getdropdown().click()
    capitalaccount.getoptions().contains(' IFRS Vertical ').click()
    capitalaccount.getdropdown().should('have.text','IFRS Vertical')
})


// Overview KFW
Then('Verify the KFW capital account option is chosen from the drop-down', () => {
    capitalaccount.getdropdown().click()
    capitalaccount.getoptions().contains(' KfW Capital Account ').click()
    capitalaccount.getdropdown().should('have.text','KfW Capital Account')
})



// display format
And('Click on the Download link', () => {
    capitalaccount.getdownloadlink().click()


})
Then('Verify the display format and file format text', () => {
    capitalaccount.gettitle().contains('Display Format:')
    capitalaccount.gettitle().contains('File Format:')
})
When('Clicking on the Display format', () => {
    // capitalaccount.getdisplayformat().click()

})
Then('Verify the display format option from the display format drop-down', () => {
    // capitalaccount.getlistbox().should('have.text', ' IFRS Vertical  IFRS Horizontal  ----------------  ILPA Short  ILPA Extended  ----------------  GER GAAP Horizontal  ----------------  KfW Capital Account ')
    // cy.get('div > mat-option').should('have.length', 9)

})

When('Clicking on the file format', () => {
    leftpanel.getcapitalaccount().click()
    capitalaccount.getfileformat().click()

})
Then('Verify the file format  option from the file format drop-down', () => {
    cy.get('div > mat-option').should('have.length', 2)
    capitalaccount.getlistbox().should('have.text', ' Excel  PDF ')
})




// Transaction - capital cell - all status
And('The user clicks on the Transaction tab', () => {
    capitalaccount.gettransaction().click()

})
And('Choose the From Date', () => {
    capitalaccount.getfromdate().type('15 dec 2022')

})
And('Choose the To Date', () => {
    capitalaccount.gettodate().type('20 jan 2023')
})
And('Choose the capital cell type', () => {
    capitalaccount.getcelltype().click()
    capitalaccount.getcapitalcall().click()
})
And('Choose the All statuses', () => {
    capitalaccount.getstatus().click()
    capitalaccount.getallstatus().click()

})
Then('Check the transaction text', () => {
    capitalaccount.gettransactioncount().contains('23 Transactions')
})



// Transaction - capital cell - Paid status
And('Choose the Paid status', () => {
    capitalaccount.getstatus().click()
    capitalaccount.getpaidstatus().click()

})


// Transaction - capital cell - Open status
And('Choose the open status', () => {
    capitalaccount.getstatus().click()
    capitalaccount.getopenstatus().click()

})

// Transaction - Distribution - All status
And('Choose the Distribution type', () => {
    capitalaccount.getcelltype().click()
    capitalaccount.getdistribution().click()

})

