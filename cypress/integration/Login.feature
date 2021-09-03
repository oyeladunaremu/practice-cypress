# Created by Oyeladun Aremu on 29.08.2021
Feature: Login Test

    Testing two login scenarios and a search function

    Background: 
    
      Given I am on the Webappsecurity site
  Scenario: A user should be able to make a search using the word "pay"

    When I click into the “search” textbox
    Then I should be able to “type” the word pay
    Then I should see the page returned with the search request
        
  Scenario: A user should be able to login to the site as expected
    
    When I click on the “signin” button
    Then I should be redirected to the “login” page
    And I should be able to enter the “username”
    And I should be able to enter the “password”
    Then I press the “signin” button
    And I should be “logged” in

Scenario: A user should be unable to login to the site with invalid credentials
    
    When I click on the “signin” button
    Then I should be redirected to the “login” page
    And I should be able to enter the “username”
    And I should be able to enter the “password”
    Then I press the “signin” button
    And I should be unable to “log” in


