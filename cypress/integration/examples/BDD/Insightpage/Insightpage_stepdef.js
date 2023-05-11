/// <reference types  = "Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Insightpage from "../../../../support/Pageobject/Insightpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Apiurl from "../../../../fixtures/Apiurl.json"
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";

const loginpage = new Loginpage()
const dashboard = new Dashboard()
const leftpanel = new Leftpanel()
const insightpage = new Insightpage()
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
    cy.contains(Investorandfund.lps).dblclick({ force: true })

})

And('User selects the fund from vehicle drop-down', () => {
    dashboard.getfunddropdown().click().click({ force: true })
    cy.contains(Investorandfund.vehicle).click({ force: true })

})
And('The user hits the api request for insights', () => {
    const token = localStorage.getItem('access_token')
    const authorization = `Bearer ${token}`
    cy.request({
        method: 'GET',
        url: Cypress.env('baseurl') + (Apiurl.insights["fund-metrics"]),
        headers: {
            authorization
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        resbody = response;
    })

})

// Fund Metrics - Net performance
When('The user clicks on the Insights Page', () => {
    leftpanel.getinsight().click()
    cy.url().should('include', '/insights')
})

Then('Details on the TVPI widget are verified', () => {
    // const str = resbody.body.data[0].labelKey;
    // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    // const str3 = str2.split(str2.charAt(2)).join(' ');
    // cy.log((str2))
    // cy.log((str3))


    insightpage.getwidgetheading().should('contain', 'Net Performance')
    insightpage.getchartheading().contains('tvpi')

    insightpage.getkpis().should('contain', 'TVPIGross')
    insightpage.getkpis().should('contain', 'TVPINet')
    insightpage.getkpis().should('contain', 'RVPI')
    insightpage.getkpis().should('contain', 'DPI')

})

And('Details on the Capital deployed widget are verified', () => {
    insightpage.getwidgetheading().contains('capitalDeployed').should('be.visible')
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
When('User clicks on the right side arrow of the Net perfromance sub heading', () => {
    insightpage.getwidgetheading().should('contain', 'Net Performance').find('span.mat-expansion-indicator').click()

})
Then('Verify if all the charts are collapsed under Net performance', () => {
    

})


// Fund Metrics - Gross performance
And('Scrolls to Gross performance section', () => {
    insightpage.getwidgetheading().contains('Gross Performance').scrollIntoView().should('be.visible')


})

Then('Details on the MOIC widget are verified', () => {
    insightpage.getchartheading().contains(' MOIC ').should('be.visible')
    insightpage.getkpis().should('contain', 'Combined')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')

})
And('Details on the Capital deployed widget in Gross performance section are verified', () => {
    insightpage.getchartheading().contains('Capital deployed').should('be.visible')
    insightpage.getkpis().should('contain', 'Total Deployed')
    insightpage.getkpis().should('contain', 'Exit proceeds')
    insightpage.getkpis().should('contain', 'Remaining')
})
And('Details on the Portfolio Value widget in Gross performance section are verified', () => {
    insightpage.getchartheading().contains(' Portfolio value ').should('be.visible')
    insightpage.getkpis().should('contain', 'Total')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')
})
And('Details on the Gross IRR widget are verified', () => {
    insightpage.getchartheading().contains('Gross IRR').should('be.visible')
    insightpage.getkpis().should('contain', 'Combined')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')

})
When('User clicks on the right side arrow of the Gross perfromance sub heading', () => {
    insightpage.getwidgetheading().should('contain', 'Net Performance').find('span.mat-expansion-indicator').click()

})
Then('Verify if all the charts are collapsed under Gross performance', () => {
    

})



// Fund Metrics - LP details
And('Scrolls to LP details section', () => {
    insightpage.getwidgetheading().contains('LP Details').scrollIntoView().should('be.visible')


})

Then('Details on the Net LP proceeds widget are verified', () => {
    insightpage.getchartheading().contains('Net LP proceeds').should('be.visible')


})
And('Details on the Net LP proceeds over time widget are verified', () => {
    insightpage.getchartheading().contains(' Net LP proceeds over time').should('be.visible')
    insightpage.getkpis().should('contain', 'Actual')
})
And('Details on the LP called capital widget are verified', () => {
    insightpage.getchartheading().contains('LP called capital').should('be.visible')
    insightpage.getkpis().should('contain', 'Actual')
})
And('Details on the LP return of contributed capital widget are verified', () => {
    insightpage.getchartheading().contains('LP return of contributed capital').scrollIntoView().should('be.visible')
    insightpage.getkpis().should('contain', 'Actual')

})
And('Details on the Proceeds to LPs - Hurdle rate widget are verified', () => {
    insightpage.getchartheading().contains('Proceeds to LPs - Hurdle rate').should('be.visible')
    insightpage.getkpis().should('contain', 'Actual')

})
And('Details on the Proceeds to LPs - after catch-up and carried interest are verified', () => {
    insightpage.getchartheading().contains('Proceeds to LPs - after catch-up and carried interest').should('be.visible')
    insightpage.getkpis().should('contain', 'Actual')

})
When('User clicks on the right side arrow of the LP details sub heading', () => {
    insightpage.getwidgetheading().should('contain', 'Net Performance').find('span.mat-expansion-indicator').click()

})
Then('Verify if all the charts are collapsed under LP details', () => {
    

})









