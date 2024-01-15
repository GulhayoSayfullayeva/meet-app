import React, { useEffect, useState } from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import { InfoAlert, Alert, ErrorAlert } from './components/Alert';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';

function App() {

  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');

  

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
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      </div>
      <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
      <NumberOfEvents setNumberOfEvents={setNoe} setErrorAlert={setErrorAlert} />
      <EventList events={events}/>
    </div>
  );
}

export default App;
