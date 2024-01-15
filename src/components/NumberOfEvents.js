import { useState } from "react";


const NumberOfEvents = ({setNumberOfEvents, setErrorAlert}) => {
    const [eventNumber, setEventNumber] = useState('32');
    const handleInputChange = (event) => {
        const value = event.target.value;
        let errorAlert;
        if( isNaN(value) || value <= 0 ){
            errorAlert = 'Invalid number of events, please enter valid number';
            setErrorAlert(errorAlert);
        }
        else{
            setErrorAlert('');
            setEventNumber(value);
            setNumberOfEvents(value);
        }
        
    }
       return (
        <div id="numberOfEvents">
            <input
              type="text"
              defaultValue='32'
              onChange={handleInputChange}
            />
        </div>
       )
}

export default NumberOfEvents;