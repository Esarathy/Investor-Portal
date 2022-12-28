Feature: Validating the Reports page of investor portal


    Scenario: Verify the quarterly report pdf is verified
        Given The user landed on the Dashboard page
        And Partner logo is displayed
        When The user clicks on the Reports Page
        And user selects the year and quarter dropdown
        Then The user should get the following documents
        And user able to see the pdf
        When clicking on the table of contents
        Then respective pdf page is navigated

    Scenario: Verify the annually report pdf is verified
        Given The user landed on the Dashboard page

        And Partner logo is displayed

        When The user clicks on the Reports Page

        And The user clicks on the Annually tab

        And select the year folder

        And choose the pdf

        Then The user should get the following documents

        And user able to see the pdf






















    Reports page Assertions

    Scenario: Ouarterly reports
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Reports menu click
        When User clicks the Quarterly toggle button
        And User selects the year and quarter drop down
        Then User should get the following documents
        And User able to see the pdf

    Scenario: Annual reports
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Reports menu click
        When User clicks the Annually in the toggle button
        And Selects the year
        Then User should preview the pdf

