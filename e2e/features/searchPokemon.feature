
Feature: seach for the pokemon

   As a user I would like to search for any pokemon and get its information

Background: 
    Given I am on the pokedex page

Scenario: Search for a a specific pokemon
    When I search for a pokemon using a number "003"
    Then I see the pokemon searched as first element listed


Scenario: View the information about a specific pokemon
    When I search for a pokemon using a number "003"
    And I decide to see the pokemon information details
    Then I should see the pokemon page


Scenario: See randomly pokemon options
    When I choose to view the pokemon list randomly
    Then a set of 12 pokemon cards should show up to me

@Test
Scenario: Sort the pokemon list by highest number
    When I choose to view the pokemon list by highest number
    Then the pokemon list should be present from highest to lowest number