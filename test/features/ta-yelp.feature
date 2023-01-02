Feature: Performing search

    As a user on the yelp page
    I want to search
    Because I want to investigate about pizzas restaurants

    Background:

        Given I am on the yelp page

    Scenario: Performing search operation
        When I click on the text box
        And I Select Restaurants in the drop­down box in Find
        And I append " Pizza" to Restaurants to make the search text as Restaurants Pizza
        And I click on search icon
        And I click All filter button
        And I click 2 filters
        And I should see a list of search pizza results
        And I should see the first result rating
        And I click the first result to expand it
        And I move to title
        And I read the website info
        And I read the telephone number
        And I read the address link
        And I move to location sub
        And I move to consider Sub
        And I move to amenities Sub
        And I go to about Sub
        And I read the first review
        And I read the second review
        And I read the third review
        # And I see the number of total search results
        # And I read the number of total search results
        # And I click on search icon again
        # And I see the number of total search results again
        # And I read the number of total search results again
        # And I click and expand the first result from the search results
        # And I see the phone info
        # And I read the phone info
        # And I see the web info
        # And I read the web info
        # And I see the first review
        # And I read the first review
        # And I see the second review
        # And I read the second review
        # And I see the third review
        # And I read the third review
        # And I move to consider Sub
        # And I move to amenities Sub
        # And I move to Ask sub