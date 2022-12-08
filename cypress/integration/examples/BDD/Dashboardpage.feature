
Feature: Validating the home page of investor portal
     Dashboardpage Assertions
     Scenario: Verify the header
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed in the left panel
          And Verify the Partner logo is displayed in the left top of the page
          Then User must be navigated to the account page when clicked on user profile icon

     Scenario: Verify the multiple join fund
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed in the left panel
          And Verify the Partner logo is displayed in the left top of the page
          When User clicks on Join fond icon a drop down must be enabled
          And Should be able to switch between the join fund
          And Assert the grids avilable on the dashboard page

     Scenario: Verify the multiple investors
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed in the left panel
          And Verify the Partner logo is displayed in the left top of the page
          When User clicks on investor icon a drop down must be enabled
          And Should be able to switch between the investor
          And Assert the grids avilable on the dashboard page


     Scenario: Verify the Banner widget
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed in the left panel
          And Verify the Partner logo is displayed in the left top of the page
          Then Verify the banner is dispalyed on the right top corner
          And On clicking the banner widget should navigate to external url

     Scenario: Verify the scrolling function
          Given Verify the user is landed on the Dashboard
          And User should able to scroll the  Upcomming events, News, Updates widgets
          Then User should able to toggle between login and logout button in the updates widgets