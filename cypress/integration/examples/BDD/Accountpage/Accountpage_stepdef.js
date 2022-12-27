import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Accountpage from "../../../../support/Pageobject/Accountpage";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
const account = new Accountpage()
const dashboard = new Dashboard()


Given('User lands on the Dashboard', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', '.cloudfront.net/dashboard')
    cy.clearCookies()
    cy.clearLocalStorage()
})

When('User clicks the profile icon on the header', () => {
   dashboard.getprofile().click()  
})

Then('User should be navigated to account page', () => {
    cy.url().should('include', '.cloudfront.net/account')  

})
When('User verifies following details in profile widget', () => {
   cy.get('div > label').contains('Name').should('be.visible')
   cy.get('div > label').contains('Interface Language').should('be.visible')
    
 })

And('User enter the {string} and Interface language in the profile grid', (Name) => {
    cy.get('[type="text"]').clear().type(Name);
        cy.get('#interface-language').click()
        cy.get('mat-option > span').eq(1).click()
    })
And('User clicks on save button', () => {
    account.getbutton().contains(' Save ').should('not.be.disabled').click()
})
Then('Profile should be successfully updated', () => {
   
})
When('User verifies following details in password widget', () => {
    cy.get('div > label').contains('Current password').should('be.visible')
    cy.get('div > label').contains('New password').should('be.visible')
    cy.get('div > label').contains('Confirm password').should('be.visible')
    
})

And('User enter the {string},{string},{string} following details in the password grids', (Currentpassword,Newpassword,Confirmpassword) =>{
   cy.get('input[name="current-password"]').type(Currentpassword)
   cy.get('input[name="new-password"]').type(Newpassword)
   cy.get('input[name="confirm-password"]').type(Confirmpassword)
    
})
And('User clicks on change password button', () => {
   account.getbutton().contains(' Change password ').click()
})
Then('Password should be successfully updated', () => {
   
})
When('User verifies following details in delete widget', () => {
   cy.get('.account-delete-card-container > div').should('include.text',' After deleting, you will no longer have access to the portal. ')
 
 })
When('User clicks on the Delete button', () => {
   account.getbutton().contains(' Delete Account ').click()

})
Then('Account should be successfully deleted', () => {
   
})






