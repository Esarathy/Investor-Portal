Feature: Validating the Reports page of investor portal

    Scenario: Verify the quarterly report pdf is verified
        Given The user landed on the Dashboard page
        And Partner logo is displayed
        When The user clicks on the Reports Page
        And User selects the year and quarter dropdown
        Then The user should get the following documents in quarterly tab
        And User able to see the pdf
        When Clicking on the table of contents
        Then Respective pdf page is navigated

    Scenario: Verify the annually report pdf is verified
        Given The user landed on the Dashboard page
        And Partner logo is displayed
        When The user clicks on the Reports Page
        And The user clicks on the Annually tab
        And Select the year folder
        And Choose the pdf
        Then The user should get the following documents in annually tab
        And User able to see the pdf