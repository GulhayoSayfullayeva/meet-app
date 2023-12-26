import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        let eventLists;
        given('user opened the app or selected the specific city', () => {
            AppComponent = render(<App />);
        });

        when('there is eventList displayed', async() => {
            const AppDom = AppComponent.container.firstChild;
            const eventListDom = AppDom.querySelector('#event-list');
            await waitFor(() => {
              eventLists = within(eventListDom).queryAllByRole('listitem');
              expect(eventLists[0]).toBeTruthy();
            }); 
            
        });

        then('maximum number of events displayed is 32.', () => {
           expect(eventLists.length).toEqual(32);     
        });
    });


    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        given('user opened the app or selected the specific city name', () => {
            AppComponent = render(<App />);
        });

        when('user entered the number of events', async() => {
            const AppDom = AppComponent.container.firstChild;
            const NumberOfEventsComponent = AppDom.querySelector('#numberOfEvents');
            const textbox = within(NumberOfEventsComponent).queryByRole('textbox');
            const user = userEvent.setup();
            await user.type(textbox, '{backspace}{backspace}10');
            expect(textbox).toHaveValue('10');
        });

        then('user can see in this amount of events in the screen.', async() => {
           const AppDom = AppComponent.container.firstChild; 
           const eventList = AppDom.querySelector('#event-list');
           let events;
           await waitFor(() => {
             events = within(eventList).queryAllByRole('listitem');
           });
           expect(events.length).toEqual(10);

        });
    });

});