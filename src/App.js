import React, { useEffect, useState } from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import { Alert } from './components/Alert';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';

function App() {

  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');

  

  useEffect(() => {
    fetchData();
  }, [currentCity, noe]);
  
  const fetchData = async() => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === 'See all cities' ? allEvents
                                                            : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, noe));
    setAllLocations(extractLocations(allEvents));
  }
  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <Alert text={infoAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
      <NumberOfEvents setNumberOfEvents={setNoe} />
      <EventList events={events}/>
    </div>
  );
}

export default App;
