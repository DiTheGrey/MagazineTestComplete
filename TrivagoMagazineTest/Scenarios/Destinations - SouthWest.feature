Feature: Destinations - SouthWest

  Scenario: Test for Destinations menu - "SouthWest"
    Given Trivago magazine website is online
    And dropdown menu is open
    When I open Destinations and click "SouthWest"
    Then page with "SouthWest" destinations are open