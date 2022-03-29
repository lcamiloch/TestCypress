Feature: Rent car

    The customer wants to rent a car through the site

    Background: Initial steps
        Given the Customer is on the car rental site
        When he to enters the data country "Poland" city "Wroclaw" model "Suzuki"

    Scenario: Check correct dates to rent a car
        And he to enters the dates "2022-03-28" "2022-04-08"
        Then he should see available cars

    Scenario: Check incorrect correct dates to rent a car
        And he to enters the dates "2022-03-01" "2022-02-28"
        Then he should see an error message

    Scenario: Car selection successful
        And he to enters the dates "2022-04-15" "2022-04-30"
        And he selects a car
        Then he should see his car's selection summary

    Scenario: Enter user data
        And he to enters the dates "2022-04-11" "2022-04-27"
        And he selects a car
        And he enter his data
        Then he should see the data entered