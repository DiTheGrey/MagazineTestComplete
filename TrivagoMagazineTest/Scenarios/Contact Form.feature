Feature: Contact Form

  Scenario: Test contact form
    Given Trivago magazine website is online
    And Contact form is open
    When I enter details in contact form and submit it
    Then I should see that form is successfully submitted