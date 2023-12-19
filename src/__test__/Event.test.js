import { render } from '@testing-library/react';
import mockData from '../mock-data';
import Event from '../components/Event';
import { getEvents } from '../api';


describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;
    beforeEach(() => {
        
        allEvents = getEvents();
        EventComponent = render(<Event event={allEvents[0]}/>);
    });
  test('has event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('has event created time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('has event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  
});