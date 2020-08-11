Feature: Search Form - Chicago

  Scenario: Test search form for "Chicago"
    Given Trivago magazine website is online
    And search form is open
    When I input "Chicago" into search form and submit it
    Then I should see search results based on "Chicago"