****Meet-app****

Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

 Project Features & **Scenario**s<br>
Feature 1: Filter Events By City<br>
As a user, I should be able to filter events by city, so that I can see the list of events in this specific city.<br>

**Scenario** 1: When user hasn’t searched for a city, show upcoming events from all cities.<br>
**Given**: user opened the app with search function in top, **when:** there is no search for the specific city, **then**: user can see all the events list related for all cities.<br>


**Scenario** 2: User should see a list of suggestions when they search for a city.<br>
**Given**: user opened the app with search option available, **when:** user typed the name of the city in searchbar, **then**: user can see the suggested list of the city list.<br>

**Scenario** 3: User can select a city from the suggested list.<br>
**Given**: user wrote the specific city name and got suggested city, **when:** user select this city, **then**: user can see the list of events in the searched city.<br>

Feature 2: Show/Hide Event Details<br>
As a user, I should be able to show/hide event details, so that I can see more/less information regarding this event.<br>

**Scenario** 1: An event element is collapsed by default.<br>
**Given**: user selected specific event and details collapsed by default, **when:** user select this event, **then**: user can see the details of an event.<br>

**Scenario** 2: User can expand an event to see details.<br>
**Given**: user selected specific event, **when:** user press the details button, **then**: user can see more details info of the event.<br>

**Scenario** 3: User can collapse an event to hide details.<br>
**Given**: user pressed the details button and details is shown, **when:** user press hide button, **then**: the dsteails section will be hidden.<br>

Feature 3: Specify Number of Events<br>
As a user, i should be able to specify the number of events, so that I can see only the specified number of events.<br>

**Scenario** 1: When user hasn’t specified a number, 32 events are shown by default.<br>
**Given**: user opened the app or selected the specific city, **when:** there is no specified number of events, **then**: maximum number of events displayed is 32.

**Scenario** 2: User can change the number of events displayed.<br>
****Given****: user opened the app or selected the specific cuty name, **when**: user entered the number of events, ****then****: user can see in this amount of events in the screen.

**Feature 4**: Use the App When Offline<br>
As a user, I should be able use the app when offline, so that I can see the events list when i was online.

****Scenario** 1**: Show cached data when there’s no internet connection.<br>
****Given****: user has no internet, **when**: user opens the app, ****then****: user can see list of events when he was online.<br>

****Scenario** 2**: Show error when user changes search settings (city, number of events).<br>
****Given****: user has no internet connection, **when**: user want to change search settings, ****then****: user will get error message.<br>

**Feature 5**: Add an App Shortcut to the Home Screen<br>
As a user, i should be able to add the app shortcut to the home screen, so that i can work quicker.<br>

****Scenario** 1**: User can install the meet app as a shortcut on their device home screen.<br>
**Given**: user wanted to install the app, **when**: user press install and create shortcut, ****then****: the shortcut will be created in the home screen.<br>

**Feature 6**: Display Charts Visualizing Event Details<br>
**As a user**, **I should be able** to display charts visualizing event details, **so that** I can have more info about this event.<br>

****Scenario** 1**: Show a chart with the number of upcoming events in each city.<br>
**Given**: user opened the app and had the list of events **when** the user clicks the button to see a chart of those events in all the cities as a comparison, ****then**** a chart with the number of upcoming events for every city, will be shown to the user.

**Use of Serverless Functions in Meet App**
The Meet App  uses serverless functions for event notifications, real-time data processing, user authentication, event recommendations. By using serverless technology, the app can efficiently handle backend processes, provide personalized experiences, and scale according to user demand. Serverless Functions allow customers to execute code in response to events, without managing the complex infrastructure typically associated with building and launching applications.