import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
const dashboard = new Dashboard()

Then('User must be navigated to the account page when clicking on user profile icon', () => {
    cy.get('.profile').click()
    cy.url().should('include', '.cloudfront.net/account')
})
When('Clicking the menus on the side bar, it should be navigated to the following pages', () => {
    cy.get('.navList').contains('Dashboard').click()
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.reload()
    cy.get('.navList').contains('Insights').click()
    cy.url().should('include', '.cloudfront.net/insights')
    cy.reload()
    cy.get('.navList').contains('Capital Account').click()
    cy.url().should('include', '.cloudfront.net/capital-account')
    cy.reload()
    cy.get('.navList').contains('Reports').click()
    cy.url().should('include', '.cloudfront.net/reports')
    cy.reload()
    cy.get('.navList').contains('Documents').click()
    cy.url().should('include', '.cloudfront.net/documents')
    cy.reload()
    cy.get('.navList').contains('Documents').click()
    cy.url().should('include', '.cloudfront.net/documents')
})

When('User clicks on Join fond icon a drop down must be enabled', () => {
    dashboard.getjoinfond().click()

})

Then('User should able to switch between the join fund', () => {
    dashboard.getoptiontext().contains(' Join Fund 1 - XYZ ').should('be.visible').click()
    dashboard.getjoinfond().click()
    dashboard.getoptiontext().contains(' Join Fund 2 - XYZ ').should('be.visible').click()
    dashboard.getjoinfond().click()
    dashboard.getoptiontext().contains(' Join Fund 3 - XYZ ').should('be.visible').click()

})
And('Verify the grids avilable on the dashboard page', () => {
    cy.get('div').contains(' Timeline ')
    cy.get('div').contains(' Performance ')
    cy.get('div').contains(' Capital in USD ')
    cy.get('div').contains(' Upcoming events ')
    cy.get('div').contains(' Updates ')
})
When('User clicks on investor icon a drop down must be enabled', () => {
    dashboard.getinvestor().click()
})
Then('User should able to switch between the investor', () => {
    dashboard.getoptiontext().contains(' Investor 1 ').should('be.visible').click()
    dashboard.getinvestor().click()
    dashboard.getoptiontext().contains(' Investor 2 ').should('be.visible').click()
    dashboard.getinvestor().click()
    dashboard.getoptiontext().contains(' Investor 3 ').should('be.visible').click()

})
Then('User must be navigated to the account page when clicked on user profile icon ', () => {
    cy.get('.profile').click()
    cy.url().should('include', '.cloudfront.net/account')
})

When('The banner is dispalyed on the right top corner', () => {
    cy.get('a > img').should('be.visible')
})
Then('On clicking the banner widget should navigate to external url', () => {
    cy.get('a > img').click()
    cy.get('a').then(function($e1) {
    const url = $e1.prop('href')
    cy.visit(url)


    })
})
And('User should able to scroll the  Upcomming events, News, Updates widgets', () => {
    cy.get('.cardBody.eventsContainer').scrollTo("bottom")
    cy.wait(3000)
    cy.get('.cardBody.eventsContainer').scrollTo("top")

    cy.get('.cardBody.newsContainer').scrollTo("bottom")
    cy.wait(3000)
    cy.get('.cardBody.newsContainer').scrollTo("top")

    cy.get('.cardBody.updatesContainer').scrollTo("bottom")
    cy.wait(3000)
    cy.get('.cardBody.updatesContainer').scrollTo("top")
})

Then('User should able to toggle between login and logout button in the updates widgets', () => {
    cy.get('.last-month').click()
    cy.get('.last-login').click()

})

Then('Click on the see details button on the performance widget user must be navigated to insights page', () => {
    cy.get('a[href="/insights"]').click()
    cy.url().should('include', 'cloudfront.net/insights')
})

And('Verify the details avilable on the widget', () => {
    dashboard.getpostcount().should('contain', "TVPI")
    dashboard.getpostcount().should('contain', "DPI")
    dashboard.getpostcount().should('contain', "RVPI")
    dashboard.getpostcount().should('contain', "MOIC")
    dashboard.getpostcount().should('contain', "IRR")
})
Then('Click on the see details button on the performance widget user must be navigated to capital account page', () => {
    cy.get('a[href="/capital-account"]').click()
    cy.url().should('include', 'cloudfront.net/capital-account')
})
And('Verify the details avilable on the widget', () => {
    dashboard.getpostcount().should('contain', " Committed ")
    dashboard.getpostcount().should('contain', " Called in ")
    dashboard.getpostcount().should('contain', " Distributed ")
    dashboard.getpostcount().should('contain', " Contributed ")
    dashboard.getpostcount().should('contain', " Deployed ")
    dashboard.getpostcount().should('contain', " Due Payments ")
})