import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Navigation from "../../../../support/Pageobject/Naviagtion";
const dashboard = new Dashboard()
const navigation = new Navigation()


Given('User lands on the Dashboard', () => {
    cy.viewport(1400, 1093)
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
And('Partners logo verified', () => {
    navigation.getpatnerlogo().should('be.visible')

})

And('Details on Timeline widget are verified', () => {
    cy.get('div[class="progressDate start"]').should('have.text', '20. Jan2022')
    cy.get('div[class="progressDate end"]').should('have.text', '20. Jan2032')

})
And('Details on Capital widget are verified', () => {
    cy.get('div[class="capital"]> div > p').should('have.text','1,000mn Committed 1,000mn Called in 1,000mn Distributed 1,000mn Contributed 1,000mn Deployed 1,000mn Due Payments ')

})

Then('Page redirects on menu click', () => {
    navigation.getdashboard().click()
    dashboard.getmenuheading().should('contain', '/ Dashboard ')
    navigation.getinsight().click()
    dashboard.getmenuheading().should('contain', '/ Insights ')
    navigation.getcapitalaccount().click()
    dashboard.getmenuheading().should('contain', '/ Capital Account ')
    navigation.getreports().click()
    dashboard.getmenuheading().should('contain', '/ Reports ')
    navigation.getdocuments().click()
    dashboard.getmenuheading().should('contain', '/ Documents ')
    navigation.getsettings().click()
    dashboard.getmenuheading().should('contain', '/ Settings ')

})
And('Widgets are verified', () => {
    dashboard.gettimeline().should('be.visible')
    dashboard.getperformance().should('be.visible')
    dashboard.getcapitalinusd().should('be.visible')
    dashboard.getupcommingevents().should('be.visible')
    dashboard.getupdates().should('be.visible')
    dashboard.getbanner().should('have.attr', 'href')
    dashboard.getinvestments().should('be.visible')
})

Then('The joinfund & investor dropdown must be selected successfully', () => {
    cy.get('#mat-select-value-1').click()
    cy.get('#mat-option-0').click()

    cy.get('#mat-select-value-3').click()
    cy.get('#mat-option-3').click()

})
When('User clicks on see details in Performance widget', () => {
    cy.get('a[href="/insights"]').click()
})

Then('Should navigate to Insight page successfully', () => {
    cy.url().should('include', '.cloudfront.net/insights')
    dashboard.getmenuheading().should('contain', '/ Insights ')
})

When('User clicks on see details in Capital widget', () => {
    cy.get('a[href="/capital-account"]').click()
})

Then('Should navigate to Capitalaccount successfully', () => {
    cy.url().should('include', '.cloudfront.net/capital-account')
    dashboard.getmenuheading().should('contain', '/ Capital Account ')
})


When('User clicks the profile icon on the header', () => {
    dashboard.getprofile().click()
})

Then('Should be navigated to account page', () => {
    cy.url().should('include', '.cloudfront.net/account')

})

Then('Page redirects to a youtube link on banner click', () => {
    cy.get('mat-card > a').invoke('removeAttr', 'target').click()
    cy.origin('www.youtube.com', () => {
        cy.url().should('include', '.youtube.com')
    })
})

Then('Details on Investment widget are verified', () => {
    cy.get('.postScriptum').contains(' 6 Realized 9 Unrealized ').should('be.visible')
})

Then('Details on Performance widget are verified', () => {
    cy.get('div[class="performance"]> div>p').should('have.text','100.00TVPI5.00DPI10.00RVPI10.00xMOIC1,000%IRR')

})

When('User scroll the Upcoming events', () => {
    if (cy.get('.cardBody.eventsContainer > .eventTile').length > 3) {
        cy.get('.cardBody.eventsContainer').scrollTo("bottom")
        cy.get('.cardBody.eventsContainer').scrollTo("top")
    }
})

Then('Should contain list of events', () => {
    cy.get('.cardBody.eventsContainer > .eventTile').should('have.length', 4)
})

When('User scroll the News widget', () => {
    if (cy.get('.cardBody.newsContainer > .newsTile').length > 3) {
        cy.get('.cardBody.newsContainer').scrollTo("bottom")
        cy.get('.cardBody.newsContainer').scrollTo("top")
    }
})

Then('Should contain list of news', () => {
    cy.get('.cardBody.newsContainer > .newsTile').should('have.length', 3)
})

When('User scroll the Updates widget', () => {
    if (cy.get('.cardBody.updatesContainer > .eventTile').length > 3) {
        cy.get('.cardBody.updatesContainer').scrollTo("bottom")
        cy.get('.cardBody.updatesContainer').scrollTo("top")
    }
})

Then('Should contain list of updates', () => {
    cy.get('.cardBody.updatesContainer > .eventTile').should('have.length', 7)
})
When('User clicks on the toggle button', () => {
    cy.get('.last-month').click()
    cy.get('.last-login').click()
})
Then('Should able to generate updates accordingly', () => {

})

