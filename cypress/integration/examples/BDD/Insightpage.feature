Feature: Validating the Insight page of investor portal


    Scenario: Verify the Fund Metrics - Net performance
        Given The user landed on the Dashboard page
        And Partner logo is displayed
        When The user clicks on the Insights Page
        Then Details on the TVPI widget are verified
        And Details on the Capital deployed widget are verified
        And Details on the Portfolio Value widget are verified
        And Details on the Net IRR widget are verified
        And Details on the Cumulative net cash flow widget are verified


    Scenario: Verify the Fund Metrics - Gross performance
        Given The user landed on the Dashboard page
        And Partner logo is displayed
        When The user clicks on the Insights Page
        And Scrolls to Gross performance section
        Then Details on the MOIC widget are verified
        And Details on the Capital deployed widget in Gross performance section are verified
        And Details on the Portfolio Value widget in Gross performance section are verified
        And Details on the Gross IRR widget are verified


    # Scenario: Verify the Fund Metrics - LP details
    #     Given The user landed on the Dashboard page
    #     And Partner logo is displayed
    #     When The user clicks on the Insights Page
    #     And Scrolls to LP details section
    #     Then Details on the Net LP proceeds widget are verified
    #     And Details on the Net LP proceeds over time widget are verified
    #     And Details on the LP called capital widget are verified
    #     And Details on the LP return of contributed capital widget are verified
    #     And Details on the Proceeds to LPs - Hurdle rate widget are verified
    #     And Details on the Proceeds to LPs - after catch-up and carried interest are verified


    # Scenario: Verify the Fund Metrics - GP details
    #     Given The user landed on the Dashboard page
    #     And Partner logo is displayed
    #     When The user clicks on the Insights Page
    #     And Scrolls to GP details section
    #     Then Details on the GP proceeds widget are verified
    #     And Details on the GP contributed capital widget in Gross performance section are verified
    #     And Details on the Proceeds to GP widget in Gross performance section are verified
    #     And Details on the GP Catch-up widget are verified
    #     And Details on the Carried interest widget are verified
    #     And Details on the Net GP proceeds widget are verified
    #     And Details on the Management fees widget are verified


    # Scenario: Verify the Portfolio Investment - Capital deployment
    #     Given The user landed on the Dashboard page
    #     And Partner logo is displayed
    #     When The user clicks on the Insights Page
    #     Then Details on the Initial investments vs. follow-on investments widget are verified
    #     And Details on the No. of initial investments by entry round widget are verified
    #     And Details on the Capital deployment pacing widget are verified
    #     And Details on the Initial investment pacing widget are verified
    #     And Details on the Follow-on investment pacing widget are verified


    # Scenario: Verify the Portfolio Investment - Exits
    #     Given The user landed on the Dashboard page
    #     And Partner logo is displayed
    #     When The user clicks on the Insights Page
    #     And Scrolls to Exits section
    #     Then Details on the Distribution of exit multiples widget are verified
    #     And Details on the Deals by sector widget are verified
    #     And Details on the Average MOIC at exit by sector widget are verified
    #     And Details on the Average holding period per month widget are verified







