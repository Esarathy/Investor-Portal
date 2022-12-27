Feature: Validating the Dashboard page of investor portal
     Dashboardpage Assertions

    Scenario: Check the Dashboard header
          Given The user landed on the Dashboard page
          Then Verify partner logo is displayed on the left panel
          And Verify JointFund drop-down is displayed
          And Verify Investor drop-down is displayed
          And Profile Icon is displayed
