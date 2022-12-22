Feature: Validating the Reports page of investor portal
    Reports page Assertions

    Scenario: Ouarterly reports
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Reports menu click
        When User clicks the Quarterly toggle button
        And User selects the year and quarter drop down
        Then User should get the following documents
        And User should preview the pdf

    Scenario: Annual reports
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Reports menu click
        When User clicks the Annually in the toggle button
        And Selects the year
        Then User should preview the pdf

