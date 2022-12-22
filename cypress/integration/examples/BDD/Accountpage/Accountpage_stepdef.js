import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Accountpage from "../../../../support/Pageobject/Accountpage";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
const account = new Accountpage()
const dashboard = new Dashboard()


Given('User lands on the Dashboard', () => {
    cy.viewport(1400,1093)
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

And('Enter the {string} and Interface language in the profile grid', (Name) => {
    cy.get('[type="text"]').clear().type(Name);
        cy.get('#interface-language').click()
        cy.get('mat-option > span').eq(1).click()
    })
When('User clicks on save button', () => {
    account.getbutton().contains(' Save ').click()
})
Then('Profile should be successfully updated', () => {
   
})

And('Enter the {string},{string},{string} following details in the password grids', (Currentpassword,Newpassword,Confirmpassword) =>{
   cy.get('input[name="current-password"]').type(Currentpassword)
   cy.get('input[name="new-password"]').type(Newpassword)
   cy.get('input[name="confirm-password"]').type(Confirmpassword)
    
})
When('User clicks on change password button', () => {
   account.getbutton().contains(' Change password ').click()
})
Then('Password should be successfully updated', () => {
   
})
When('User clicks on the Delete button', () => {
   account.getbutton().contains(' Delete Account ').click()

})
Then('Account should be successfully deleted', () => {
   
})






