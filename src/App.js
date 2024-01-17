import React, { useEffect, useState } from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import { InfoAlert, Alert, ErrorAlert, WarningAlert } from './components/Alert';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';

function App() {

  const [events, setEvents] = useState([]);
  const [noe, setNoe] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const [warningAlert, setWarningError] = useState('');
  

  useEffect(() => {
    if (navigator.onLine) {
      setWarningError('');
    } else {
      setWarningError('You are gone offline, events are loaded from cache!');
    }
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
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      </div>
      <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <div className="alerts-container">
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
      <NumberOfEvents setNumberOfEvents={setNoe} setErrorAlert={setErrorAlert} />
      <div className="charts-container">
         <EventGenresChart events={events} />
         <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      
      <EventList events={events}/>
    </div>
  );
}

export default App;
