Feature: Validating the Dashboard page of investor portal
     Dashboardpage Assertions

     Scenario: Dashboard header
          Given User lands on the Dashboard
          And Partners logo verified
          Then The joinfund & investor dropdown must be selected successfully
          When User clicks the profile icon on the header
         
     Scenario: Dashboard leftpanel (side bar)
          Given User lands on the Dashboard
          And Partners logo verified
          Then Page redirects on menu click

     Scenario: Timeline widget
          Given User lands on the Dashboard
          And Partners logo verified
          And Details on Timeline widget are verified

     Scenario: Banner widget
          Given User lands on the Dashboard
          And Widgets are verified
          Then Page redirects to a youtube link on banner click

     Scenario: Investment widget
          Given User lands on the Dashboard
          And Widgets are verified
          And Details on Investment widget are verified

     Scenario: Performance widget
          Given User lands on the Dashboard
          And Widgets are verified
          And Details on Performance widget are verified
          When User clicks on see details in Performance widget
          Then Should navigate to Insight page successfully

     Scenario: Capital widget
          Given User lands on the Dashboard
          And Widgets are verified
          And Details on Capital widget are verified
          When User clicks on see details in Capital widget
          Then Should navigate to Capitalaccount successfully

     Scenario: Upcomming events
          Given User lands on the Dashboard
          And Widgets are verified
          When User scroll the Upcoming events
          Then Should contain list of events

     Scenario: News
          Given User lands on the Dashboard
          And Widgets are verified
          When User scroll the News widget
          Then Should contain list of news

     Scenario: Updates
          Given User lands on the Dashboard
          And Widgets are verified
          When User scroll the Updates widget
          Then Should contain list of updates
          When User clicks on the toggle button
          Then Should able to generate updates accordingly


