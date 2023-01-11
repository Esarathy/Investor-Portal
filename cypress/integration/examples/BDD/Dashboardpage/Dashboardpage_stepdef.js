import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";

const dashboard = new Dashboard()
const leftpanel = new Leftpanel()

//  dashboard header
Given('The user landed on the Dashboard page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})
Then('Verify partner logo is displayed on the left panel', () => {
    leftpanel.getpatnerlogo().should('be.visible')
})
And('Verify JointFund drop-down is displayed', () => {
    cy.get('#mat-select-value-1').contains('Join Fund 1 - XYZ').should('be.visible')
})
And('Verify Investor drop-down is displayed', () => {
    cy.get('#mat-select-value-3').contains('Investor 1').should('be.visible')
})
And('Profile Icon is displayed', () => {
    dashboard.getprofile().should('be.visible')
})


// Timeline Widget
Then('Verify the timeline widgets and their respective graphs', () => {
    cy.get('div[class="progressDate start"]').should('have.text', '20. Jan2022')
    cy.get('div[class="progressDate end"]').should('have.text', '20. Jan2032')

})

// Banner Widget
And('Banner Widget is displayed', () => {
    dashboard.getbanner().should('be.visible')
})
When('User click on the banner widget it redirected to the YouTube channel', () => {
    cy.get('mat-card > a').invoke('removeAttr', 'target').click() 
    cy.origin('www.youtube.com', () => {
        cy.url().should('include', 'youtube.com')
    })
     
})



// Investment Widget
And('Investment Widget is displayed', () => {
    dashboard.getinvestments().should('be.visible')
})
Then('Verify the investment widgets and their respective graphs', () => {
    cy.get('.postScriptum').contains(' 6 Realized 9 Unrealized ').should('be.visible')
})


// Performance Widget
And('Performance Widget is displayed', () => {
    dashboard.getperformance().should('be.visible')
})
Then('Details on the Performance widget are verified', () => {
    cy.get('div[class="performance"]> div>p').should('have.text', '100.00TVPI5.00DPI10.00RVPI10.00xMOIC1,000%IRR')
})

// navigate to insight on clicking see details
When('Clicking on the see details link from the performance widget', () => {
    cy.get('a[href="/insights"]').click()
})
Then('User should navigate to the Insights page successfully', () => {
    cy.url().should('include', '/insights')
    leftpanel.getmenuheading().should('contain', '/ Insights ')
})


// Capital account
And('Capital account Widget is displayed', () => {
    dashboard.getcapitalinusd().should('be.visible')
})
Then('Details on the capital account widget are verified', () => {
    cy.get('div[class="capital"]> div > p').should('have.text', '1,000mn Committed 1,000mn Called in 1,000mn Distributed 1,000mn Contributed 1,000mn Deployed 1,000mn Due Payments ')
})



// navigate capital account on clicking see details
When('Clicking on the see details link from the capital account widgets', () => {
    cy.get('a[href="/capital-account"]').click()
})
Then('User should navigate to the capital account page successfully', () => {
    cy.url().should('include', '/capital-account')
    dashboard.getmenuheading().should('contain', '/ Capital Account ')
})



// Upcomming events Widgets
And('Upcoming event widget is displayed', () => {
    dashboard.getupcommingevents().should('be.visible')
})
When('The User scrolls the Upcoming events', () => {
    cy.get('.cardBody.eventsContainer').scrollTo("bottom")
    cy.get('.cardBody.eventsContainer').scrollTo("top")
})
Then('Should contain the list of events', () => {
    cy.get('.cardBody.eventsContainer > .eventTile').should('have.length', 4)
})



// News Widgets
And('News widget is displayed', () => {
    dashboard.getnews().should('be.visible')
})
When('The User scrolls the news widgets', () => {
    if (cy.get('.cardBody.newsContainer > .newsTile').length > 3) {
        cy.get('.cardBody.newsContainer').scrollTo("bottom")
        cy.get('.cardBody.newsContainer').scrollTo("top")
    }
})
Then('Should contain the list of news', () => {
    cy.get('.cardBody.newsContainer > .newsTile').should('have.length', 3)
})



// Updates Widgets in last login
And('Updates Widget is verified', () => {
    dashboard.getupdates().should('be.visible')
})
When('The user scrolls the last login Updates', () => {
    cy.get('.last-login').click()
    if (cy.get('.updatesContainer > .eventTile').length > 3) {
        cy.get('.updatesContainer > .eventTile').scrollTo("bottom")
        cy.get('.updatesContainer > .eventTile').scrollTo("top")
    }
})
Then('Should contain the list of the last login updates', () => {
    cy.get('.cardBody.updatesContainer > .eventTile').should('have.length', 7)
})


// Updates Widget in last month tab
When('User click on the last month tab', () => {
    cy.get('.last-month').click()

})
And('The user scrolls the last months Updates', () => {
    if (cy.get('.updatesContainer > .eventTile').length >= 3) {
        cy.get('.eventTile').scrollTo("bottom")
        cy.get('.eventTile').scrollTo("top")
    }
})
Then('Should contain the list of the last months updates', () => {
    cy.get('.cardBody.updatesContainer > .eventTile').should('have.length', 7)
})
