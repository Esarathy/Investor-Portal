Feature: Validating the Accountpage of investor portal
     Accountpage Assertions
     Scenario Outline: Profile update
          Given User lands on the Dashboard
          When User clicks the profile icon on the header
          Then User should be navigated to account page
          And 
          And Enter the "<Name>" and Interface language in the profile grid
          When User clicks on save button
          Then Profile should be successfully updated
          Examples:
               | Name     |
               | Value 1  |
               | Value 11 |



     Scenario Outline: Password update
          Given User lands on the Dashboard
          When User clicks the profile icon on the header
          Then User should be navigated to account page
          And Enter the "<Current password>","<New password>","<Confirm password>" following details in the password grids
          When User clicks on change password button
          Then Password should be successfully updated
          Examples:
               | Current password | New password | Confirm password |
               | Value 1          | Value 2      | Value 3          |
               | Value 11         | Value 12     | Value 13         |

     Scenario: Delete account
          Given User lands on the Dashboard
          When User clicks the profile icon on the header
          Then User should be navigated to account page
          When User clicks on the Delete button
          Then Account should be successfully deleted
