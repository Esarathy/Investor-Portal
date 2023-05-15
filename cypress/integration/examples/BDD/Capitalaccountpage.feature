@Test
Feature: Validating the Capitalaccount page of investor portal

 Background:
          Given The user lands on the authentication page
          When User enter the user name or mailid and password
          And Clicks on the sign in button
          Then Verify user should be successfully navigated to home page
          When User selects the Investor from LPS drop-down
          And User selects the fund from vehicle drop-down

    Scenario: Verify the Overview of IFRS vertical
        When The user clicks on the Capital Account Page
        And Choose the from quarter
        And Choose the To quarter
        Then Verify the IFRS option is chosen from the drop-down

    Scenario: Verify the Overview KFW capital account
        When The user clicks on the Capital Account Page
        And Choose the from quarter
        And Choose the To quarter
        Then Verify the KFW capital account option is chosen from the drop-down

    Scenario: Verify the display format options from the drop-down
        When The user clicks on the Capital Account Page
        And Choose the from quarter
        And Choose the To quarter
        And Click on the Download link
        Then Verify the display format and file format text
        When Clicking on the Display format
        Then Verify the display format option from the display format drop-down
        When Clicking on the file format
        Then Verify the file format  option from the file format drop-down

    Scenario: Verify the transaction details for the different dates, capital cell types and all statuses
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the From Date
        And Choose the To Date
        And Choose the capital cell type
        And Choose the All statuses
        Then Check the transaction text

    Scenario: Verify the transaction details for the different dates, capital cell types and paid status
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the From Date
        And Choose the To Date
        And Choose the capital cell type
        And Choose the Paid status
        Then Check the transaction text

    Scenario: Verify the transaction details for the different dates, capital cell types and open status
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the From Date
        And Choose the To Date
        And Choose the capital cell type
        And Choose the open status
        Then Check the transaction text

    Scenario: Verify the transaction details for the different dates, Distribution types and all statuses
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the From Date
        And Choose the To Date
        And Choose the Distribution type
        And Choose the All statuses
        Then Check the transaction text

    Scenario: Verify the transaction details for the different dates, Distribution types and paid status
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the From Date
        And Choose the To Date
        And Choose the Distribution type
        And Choose the Paid status
        Then Check the transaction text

    Scenario: Verify the transaction details for the different dates, Distribution types and open status
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the From Date
        And Choose the To Date
        And Choose the Distribution type
        And Choose the open status
        Then Check the transaction text

