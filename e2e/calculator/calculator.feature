Feature: Calculator
	As a user
	I want to be able to use the calculator

	Scenario: Addition
		Given I am in calculator page
		When I add "3" and "4"
		Then I should get a result of "7"
