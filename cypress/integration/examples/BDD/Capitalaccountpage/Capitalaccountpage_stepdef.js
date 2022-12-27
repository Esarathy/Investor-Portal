import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";

const capitalaccount = new Capitalaccount()
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
When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()

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
    capitalaccount.getoptions().contains(' IFRS Vertical ').click().should('be.visible')
})


// Overview KFW
Then('Verify the KFW capital account option is chosen from the drop-down', () => {
    capitalaccount.getdropdown().click()
    capitalaccount.getoptions().contains(' KfW Capital Account ').click()
})



// display format
And('Click on the Download link', () => {
   capitalaccount.getdesc().click()
    
})
Then('Verify the display format and file format text', () => {
    capitalaccount.getdownloadformat().contains('Display Format:').should('be.visible')
   capitalaccount.getdownloadformat().contains('File Format:').should('be.visible')
})
When('Clicking on the Display format', () => {
   capitalaccount.getdisplayformat().click()

})
Then('Verify the display format option from the display format drop-down', () => {
   cy.get('div > mat-option').should('have.length',9)
})
When('Clicking on the file format', () => {
    leftpanel.getcapitalaccount().click()
   capitalaccount.getfileformat().click()

})
Then('Verify the file format  option from the file format drop-down', () => {
    cy.get('div > mat-option').should('have.length',2)
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
    cy.get('#mat-option-17').click()
})
And('Choose the All statuses', () => {
    capitalaccount.getstatus().click()
   capitalaccount.getallstatus().click()
    
})
Then('Check the transaction text', () => {
   capitalaccount.getdesc().contains('23 transactions')
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
    cy.get('#mat-option-18').click()
    
})























































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