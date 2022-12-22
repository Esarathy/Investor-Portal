Feature: Validating the Insight page of investor portal
    Insightpage Assertions
    Scenario: Dashboard header
        Given User lands on the Dashboard
        And Partners logo verified
        When User click on the insight menu
        Then User should be successfully redirected to the page
        Then All the joinfund & investor should able to be selected successfully