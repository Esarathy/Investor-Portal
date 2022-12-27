Feature: Validating the Leftpanel of investor portal

    Left panel and Breadcrumbs verifications:

    Scenario: Verify the user is redirected to the dashboard page and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        Then Verify Breadcrumbs - / Dashboard

    Scenario: Verify the user is redirected to the Insights page and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the insights Page
        Then Verify Breadcrumbs - / Insights

    Scenario: Verify the user is redirected to the Capital Account page- Overview and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Capital Account Page
        Then Verify Breadcrumbs - / Capital Account / Overview

    Scenario: Verify the user is redirected to the Capital Account - Transactions page and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        Then Verify Breadcrumbs - / Capital Account / Transactions

    Scenario: Verify the user is redirected to the Reports page- Quarterly and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Reports Page
        Then Verify Breadcrumbs - / Reports/ Quarterly / 2022 / Q4

    Scenario: Verify the user is redirected to the Reports page - Annually page and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Reports Page
        And The user clicks on the Annually tab
        Then Verify Breadcrumbs - / Reports / Annually /

    Scenario: Verify the user is redirected to the Documents page and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Documents Page
        Then Verify Breadcrumbs - / Documents

    Scenario: Verify the user is redirected to the Settings page - User and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Settings Page
        Then Verify Breadcrumbs - / Settings / User

    Scenario: Verify the user is redirected to the Settings page - Investor page and verify the breadcrumbs
        Given The user landed on the Dashboard page
        And Partner logo is verified
        When The user clicks on the Settings Page
        And The user clicks on the Investor tab
        Then Verify Breadcrumbs - / Settings / Investor /

