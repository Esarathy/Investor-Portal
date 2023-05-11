import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
const loginpage = new Loginpage()
const dashboard = new Dashboard()
const capitalaccount = new Capitalaccount()
const leftpanel = new Leftpanel()






// Login
Given('The user lands on the authentication page', () => {
    cy.visit(Cypress.env('qaurl'))

})

When('User enter the user name or mailid and password', () => {
    loginpage.getusername().type(Credential.Test.username)
    loginpage.getpassword().type(Credential.Test.password)
})

And('Clicks on the sign in button', () => {
    loginpage.getsignin().click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

Then('Verify user should be successfully navigated to home page', () => {
    cy.url().should('include', '/dashboard')

})

When('User selects the Investor from LPS drop-down', () => {
    dashboard.getinvestordropdown().click()
    cy.contains(Investorandfund.lps).dblclick({ force: true })

})

And('User selects the fund from vehicle drop-down', () => {
    dashboard.getfunddropdown().click().click({ force: true })
    cy.contains(Investorandfund.vehicle).click({ force: true })

})


When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()
    cy.url().should('include', '/capital-account')
    
})
And('Choose the from quarter', () => {
    capitalaccount.getfromquater().click()
    // cy.get('#mat-option-6').click()

})
And('Choose the To quarter', () => {
    capitalaccount.gettoquater().click()
    // cy.get('#mat-option-10').click()

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

