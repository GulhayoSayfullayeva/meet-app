Feature: Show/Hide Event Details
 Scenario: An event element is collapsed by default.
   Given user opens the app
   When user receive EventList
   Then user cannot see the details by default
 Scenario: User can expand an event to see details.
   Given user receive EventList
   When user press the details button
   Then user can see more details info of the event.

 Scenario: User can collapse an event to hide details.
   Given user pressed the details button and details is shown
   When user press hide button
   Then the dsteails section will be hidden.