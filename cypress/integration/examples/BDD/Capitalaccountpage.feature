Feature: Validating the Capitalaccount page of investor portal
    Capitalaccount page Assertions

    Scenario: Overview IFRS vertical
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Capitalaccount click
        When User clicks the Overview toggle button
        Then User navigates to the overview page successfully
        When User selects the quater drop down
        And User selects IFRS in the dropdown
        Then User should successfully able to download the details

    Scenario: Overview KFW capital account
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Capitalaccount click
        When User clicks the Overview toggle button
        Then User navigates to the overview page successfully
        When User selects the quater drop down
        And User selects KFW in the dropdown
        Then User should successfully able to download the details

    Scenario: Transaction
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Capitalaccount click
        When User clicks the Transaction toggle button
        Then User navigates to the transaction page successfully
        When User enters the transaction dates
        And Select the drop down
        Then User should get the following datas
        When User clicks on paid button
        Then A pdf must be previewed at the bottom
