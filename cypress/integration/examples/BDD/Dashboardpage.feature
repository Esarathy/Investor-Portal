Feature: Validating the Dashboard page of investor portal

     Dashboard verifications

     Scenario: Check the Dashboard header
          Given The user landed on the Dashboard page
          Then Verify partner logo is displayed on the left panel
          And Verify JointFund drop-down is displayed
          And Verify Investor drop-down is displayed
          And Profile Icon is displayed

     Scenario: Verify if the timeline widget is displayed on the dashboard page
          Given  The user landed on the Dashboard page
          Then Verify the timeline widgets and their respective graphs

     Scenario: Verify if the Banner widget is displayed on the dashboard page
          Given The user landed on the Dashboard page
          And Banner Widget is displayed
          When User click on the banner widget it redirected to the YouTube channel
          

     Scenario: Verify if the investment widget is displayed on the dashboard page
          Given The user landed on the Dashboard page
          And Investment Widget is displayed
          Then Verify the investment widgets and their respective graphs

     Scenario: Verify if the performance widget is displayed on the dashboard page
          Given The user landed on the Dashboard page
          And Performance Widget is displayed
          Then Details on the Performance widget are verified

     Scenario: Verify user navigates to the insights page upon clicking on the see details links from the performance widget
          Given The user landed on the Dashboard page
          And Performance Widget is displayed
          When Clicking on the see details link from the performance widget
          Then User should navigate to the Insights page successfully

     Scenario: Verify if the capital account widget is displayed on the dashboard page
          Given The user landed on the Dashboard page
          And Capital account Widget is displayed
          Then Details on the capital account widget are verified

     Scenario: Verify user navigates to the capital account page upon clicking on the see details links from the capital account widget
          Given The user landed on the Dashboard page
          And Capital account Widget is displayed
          When Clicking on the see details link from the capital account widgets
          Then User should navigate to the capital account page successfully

     Scenario: Verify the upcoming events widgets
          Given The user landed on the Dashboard page
          And Upcoming event widget is displayed
          When The User scrolls the Upcoming events
          Then Should contain the list of events

     Scenario: Verify the news widgets
          Given The user landed on the Dashboard page
          And News widget is displayed
          When The User scrolls the news widgets
          Then Should contain the list of news

     Scenario: Verify the last login verification in the updates widget
          Given The user landed on the Dashboard page
          And Updates Widget is verified
          When The user scrolls the last login Updates
          Then Should contain the list of the last login updates

     Scenario: Verify the last months verification in the updates widget
          Given The user landed on the Dashboard page
          And Updates Widget is verified
          When User click on the last month tab
          And The user scrolls the last months Updates
          Then Should contain the list of the last months updates




