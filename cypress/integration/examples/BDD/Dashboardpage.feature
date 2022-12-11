
Feature: Validating the home page of investor portal
     Dashboardpage Assertions
     Scenario: Verify the header
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed on the side bar
          And Verify the Partner logo is displayed in the left top of the page
          When Clicking the menus on the side bar, it should be navigated to the following pages
          Then User must be navigated to the account page when clicking on user profile icon

     Scenario: Verify the multiple join fund
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed on the side bar
          And Verify the Partner logo is displayed in the left top of the page
          And Verify the grids avilable on the dashboard page
          When User clicks on Join fond icon a drop down must be enabled
          Then User should able to switch between the join fund


     Scenario: Verify the multiple investors
          Given Verify the user is landed on the Dashboard
          When User is on the dashborad Verify the following menu is displayed on the side bar
          And Verify the Partner logo is displayed in the left top of the page
          And Verify the grids avilable on the dashboard page
          When User clicks on investor icon a drop down must be enabled
          Then User should able to switch between the investor


     Scenario: Verify the Banner widget
          Given Verify the user is landed on the Dashboard
          And Verify the grids avilable on the dashboard page
          And Verify the Partner logo is displayed in the left top of the page
          When The banner is dispalyed on the right top corner
          Then On clicking the banner widget should navigate to external url

     Scenario: Verify the scrolling function
          Given Verify the user is landed on the Dashboard
          And Verify the grids avilable on the dashboard page
          And User should able to scroll the  Upcomming events, News, Updates widgets
          Then User should able to toggle between login and logout button in the updates widgets

     Scenario: Verify the Performance Widget
          Given Verify the user is landed on the Dashboard
          And Verify the grids avilable on the dashboard page
          And Verify the details avilable on the widget
          Then Click on the see details button on the performance widget user must be navigated to insights page


     Scenario: Verify the Capital Widget
          Given Verify the user is landed on the Dashboard
          And Verify the grids avilable on the dashboard page
          And Verify the details avilable on the widget
          Then Click on the see details button on the performance widget user must be navigated to capital account page


