Feature: Specify number of Events
 Scenario: When user hasn’t specified a number, 32 events are shown by default.
   Given  user opened the app or selected the specific city
   When there is eventList displayed
   Then maximum number of events displayed is 32.
 Scenario: User can change the number of events displayed.
   Given user opened the app or selected the specific city name  
   When user entered the number of events
   Then user can see in this amount of events in the screen.
