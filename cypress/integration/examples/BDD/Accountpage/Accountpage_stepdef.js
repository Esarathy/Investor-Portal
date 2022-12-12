import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Account from "../../../../support/Pageobject/Accountpage";
const account = new Account()

Then('User must be navigated to the account page when clicking on user profile icon', () => {
    cy.get('.profile').click()
    cy.url().should('include', '.cloudfront.net/account')
})

And('Verify the profile widgets contains Name,Interface Language,Save button', () => {
   cy.get('.cardHeadLeft').contains('Profile')
})
Then('User should able to enter name, select language and click on save', () => {
    cy.get('[type="text"]').type('willams')
})

