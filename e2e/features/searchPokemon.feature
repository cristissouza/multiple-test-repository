#language: en

Feature: Feature name

   As a user I would like to search for 

Background: 
    Given I am on the pokedex page

@Test
Scenario: Search for a a specific pokemon
    When I search for a pokemon using a number "<003>"
    Then I see the pokemon searched

Scenario: View the information about a specific pokemon
    When I search for a pokemon using a number "<003>"
    And I decide to see the pokemon information details
    Then I should see the pokemon page

Scenario: See randomly pokemon options
    When I choose to view my pokemon list randomly
    Then a set of 12 pokemon should be show up to me

Scenario: Sort the pokemon list by alphabetical order
    When I choose to view my pokemon list by alphabetical order
    Then the pokemon list should be present increasing from A to Z