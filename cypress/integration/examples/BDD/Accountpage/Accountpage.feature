
Feature: Validating the Account page of investor portal
     Accountpage Assertions
     Scenario: Verify the user navigates to Account page
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed on the side bar
          And Verify the Partner logo is displayed in the left top of the page
          Then User must be navigated to the account page when clicking on user profile icon

     Scenario: Verify the Profile widget
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed on the side bar
          Then User must be navigated to the account page when clicking on user profile icon
          And Verify the profile widgets contains Name,Interface Language,Save button
          Then User should able to enter name, select language and click on save
               