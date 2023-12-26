import { loadFeature, defineFeature } from "jest-cucumber";
import mockData from "../mock-data";
import { render, waitFor, within } from "@testing-library/react";
import Event from "../components/Event";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');
defineFeature(feature, test => {
 
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('user opens the app', () => {
          AppComponent = render(<App />);
        });

        when('user receive EventList', async() => {
           const AppDom = AppComponent.container.firstChild;
           const eventListDom = AppDom.querySelector('#event-list');
           await waitFor(() => {
            expect((within(eventListDom).queryAllByRole('listitem')).length).toBe(32);
           });
        });

        then('user cannot see the details by default', () => {
            const EventComponent = render(<Event event={mockData[0]} />);
            const details = EventComponent.container.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let EventComponent = render(<Event event={mockData[0]} />);
        let AppComponent;
        given('user receive EventList', async() => {
            AppComponent = render(<App />);
            const AppDom = AppComponent.container.firstChild;
            const eventListDom = AppDom.querySelector('#event-list'); 
            await waitFor(() => {
            expect((within(eventListDom).queryAllByRole('listitem')).length).toBe(32);
           });
        }); 

        when('user press the details button', async() => {
            const user = userEvent.setup();
            const button = EventComponent.queryAllByText('Show Details')[0];
            await user.click(button);
     
        }); 
   
        then('user can see more details info of the event.', () => {
            const details = AppComponent.container.firstChild.querySelector('.details');
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let EventComponent;
        given('user pressed the details button and details is shown', async() => {
            EventComponent = render(<Event event={mockData[0]} />);
            const user = userEvent.setup();
            const button = EventComponent.queryByText('Show Details');
            await user.click(button);
            const details = EventComponent.container.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('user press hide button', async() => {
            const user = userEvent.setup();
            const hideButton = EventComponent.queryByText('Hide Details');
            await user.click(hideButton);
                  
        });

        then('the dsteails section will be hidden.', () => {
            const hideButton = EventComponent.queryByText('Hide Details');
            expect(hideButton).not.toBeInTheDocument();
        });
    });

});