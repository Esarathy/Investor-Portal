Feature: Validating the Documents page of investor portal

    Scenario: Verify the document is verified from the document folder
        Given The user landed on the Dashboard page
        And Partner logo is displayed
        When The user clicks on the Documents Page
        And Click on the Sub-folder
        Then The user should successfully navigate to the subfolder page
        When The User selects any documents
        Then The user should view the pdf
