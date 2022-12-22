Feature: Validating the Documents page of investor portal
    Documents page Assertions

    Scenario: Documents
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Documents menu click
        When User click on Sub-folder or Documents 
        Then User should successfully navigate to the subfolder page
        When User selects any documents 
        Then User should view the pdf 
       
       