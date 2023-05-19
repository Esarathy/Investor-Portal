/// <reference types  = "Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Credential from "../../../../fixtures/Credential.json";
import Apiurl from "../../../../fixtures/Apiurl.json";
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Common from "../../../Common/Common";

const common = new Common()
const loginpage = new Loginpage()
const dashboard = new Dashboard()
const capitalaccount = new Capitalaccount()
const leftpanel = new Leftpanel()
let resbody = "";





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
    cy.contains(Investorandfund.lps).click({ force: true })

})
And('User selects the fund from vehicle drop-down', () => {
    dashboard.getfunddropdown().click().click({ force: true })
    cy.contains(Investorandfund.vehicle).click({ force: true })

})



// IFRS vertical
And("User hits the api request for the capital account overview", () => {
    const token = localStorage.getItem("access_token");
    const authorization = `Bearer ${token}`;
    cy.request({
        method: "GET",
        url: Cypress.env("baseurl") + (Apiurl.capitalaccount.overview["ifrs"]),
        headers: {
            authorization,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        resbody = response;
    });

});
When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()
    cy.url().should('include', '/capital-account')

})
And('Choose the year', () => {
    capitalaccount.getyear().click()
    // cy.get('span.mat-option-text').contains('2022').click()
})
And('Choose the quarter', () => {
    capitalaccount.getquarter().click()
    // cy.get ('span.mat-option-text').contains('Q4').click()


})
When('User select IFRS vertical from the drop down as the file format', () => {
    capitalaccount.getfileformat().click()
    capitalaccount.getifrs().click()


})
Then('Verify if the datas for selected year and quarter are been displayed for IFRS vertical', () => {
    const table = cy.get('table')
    cy.log(table)
})



// Overview KFW
When('User select KFW capital account from the drop down as the file format', () => {
    capitalaccount.getfileformat().click()
    capitalaccount.getkfw().click()



})
Then('Verify if the datas for selected year and quarter are been displayed for KFW capital account', () => {
    const table = cy.get('table')
    cy.log(table)

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
    capitalaccount.gettransactiontype().click()

})
Then('Verify the file format  option from the file format drop-down', () => {
    cy.get('div > mat-option').should('have.length', 2)
    capitalaccount.getlistbox().should('have.text', ' Excel  PDF ')
})




// Transaction details for the selected dates are displayed
And("User hits the api request for the capital account transaction", () => {
    const token = localStorage.getItem("access_token");
    const authorization = `Bearer ${token}`;
    cy.request({
        method: "GET",
        url: Cypress.env("baseurl") + (Apiurl.capitalaccount["transaction"]),
        headers: {
            authorization,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        resbody = response;
    });

});
And('The user clicks on the Transaction tab', () => {
    capitalaccount.gettransaction().click()

})
When('User choose the From Date', () => {
    capitalaccount.getfromdate().click()
    common.setdate("2015", "FEB", "12")

})
And('User choose the To Date', () => {
    capitalaccount.gettodate().click()
    common.setdate("2023", "MAY", "15")
})
Then('Verify if the list of transaction are displayed for the selected dates', () => {
    const filteredData = resbody.body.data.filter(item => {
        const sendDate = new Date(item.sendDate);
        const startDate = new Date("2018-12-19");
        const endDate = new Date("2019-11-12");
        return sendDate >= startDate && sendDate <= endDate;
    });
    cy.log(filteredData);

})
And('Verify if total no. of transaction are been displayed in the right corner of the header tab', () => {
    cy.get('.transaction-count>div').contains('23' + ' Transactions')
})
When('User clicks on clear filter button', () => {
    capitalaccount.getclearbutton().click()

})
Then('Verify all the transactions are displayed', () => {
    cy.get('.transaction-count>div').contains(resbody.body.data.length + ' Transactions')

})


// No transaction message is shown for the selected dates
When('User choose the From Date in the date picker', () => {
    capitalaccount.getfromdate().click()
    common.setdate('2023', 'JAN', '10')
})
And('User choose the To Date in the date picker', () => {
    capitalaccount.gettodate().click()
    common.setdate("2023", "MAY", "15")
})
Then('Verify if no transaction for the selected dates are displayed', () => {

})
And('Verify if a no record found message is been displayed', () => {
    capitalaccount.getnorecordfound().contains('No records found').should('be.visible')
    const transactioncount = capitalaccount.gettransactioncount().invoke("text")
    cy.log(transactioncount)
})




// transaction are filtered based on capital call
let capitalcall;
And('Choose the transaction type as capital call', () => {
    cy.get('.transaction-select').eq(0).click()
    capitalaccount.getcapitalcall().click()


})
Then('Verify if only the capital call are filtered and displayed', () => {
    capitalcall = resbody.body.data.filter(item => item.type === "capitalCall");
    cy.get('tbody>tr').should('have.length', capitalcall.length)

})
And('Verify the no.of transaction for capital call', () => {
    cy.get('.transaction-count>div').contains(capitalcall.length + ' Transactions')

})


// transaction are filtered based on capital distribution
let cashdistribution;
And('Choose the transaction type as capital distribution', () => {
    capitalaccount.gettransactiontype().click()
    capitalaccount.getcapitaldistribution().click()

})
Then('Verify if only the capital distribution are filtered and displayed', () => {
    cashdistribution = resbody.body.data.filter(item => item.type === "cashDistribution");
    cy.get('tbody>tr').should('have.length', cashdistribution.length)

})
And('Verify the no.of transaction for capital distribution', () => {
    cy.get('.transaction-count>div').contains(cashdistribution.length + ' Transactions')

})


// transaction are filtered based on Paid status
let paidstatus;
And('Choose the transaction status as Paid', () => {
    capitalaccount.gettransactionstatus().click()
    capitalaccount.getpaidstatus().click()


})
Then('Verify if only the Paid status transations are filtered and displayed', () => {
    paidstatus = resbody.body.data.filter(item => item.status === "paid");
    cy.get('tbody>tr').should('have.length', paidstatus.length)

})
And('Verify the no.of transaction for Paid status', () => {
    cy.get('.transaction-count>div').contains(paidstatus.length + ' Transactions')

})



// transaction are filtered based on Open status
let openstatus;
And('Choose the transaction status as Open', () => {
    capitalaccount.gettransactionstatus().click()
    capitalaccount.getopenstatus().click()

})
Then('Verify if only the Open status transations are filtered and displayed', () => {
    openstatus = resbody.body.data.filter(item => item.status === "open");
    cy.get('tbody>tr').should('have.length', openstatus.length)


})
And('Verify the no.of transaction for Paid transaction', () => {
    cy.get('.transaction-count>div').contains(openstatus.length + ' Transactions')

})

