import React from 'react'
import "./datePicker.scss"
import moment from 'moment-timezone';
import DatePicker from "react-datepicker";
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css'

function DPicker({handler, new_ride}) {

  const departureTarget = !new_ride ? 'departure' : 'newDeparture',
        arrivalTarget = !new_ride ? 'arrival' : 'newArrival'

    const params = useSelector((state)=> state.journeySettings.journeyParams)
    console.log(params);
    
  
  return (
    <div className='datepicker_body'>
        <div className='startPicker'>
        <DatePicker 
             selected={params[departureTarget] ? new Date(params[departureTarget]): ""}
             onChange={(date) => handler({[departureTarget]:date ? moment(date).local().format():""})}
             showWeekNumbers
            showTimeSelect
            timeIntervals={10}
            timeFormat="HH:mm"
            dateFormat="d.MM.yyyy - HH:mm"
            placeholderText="Departure date"
        />
        </div>
        <div>
            -
        </div>
        <div className='endPicker'>

        <DatePicker 
             selected={params[arrivalTarget] ? new Date(params[arrivalTarget]): ""}
             onChange={(date) => handler({[arrivalTarget]:date ? moment(date).local().format():""})}
             showWeekNumbers
            showTimeSelect
            timeIntervals={10}
            timeFormat="HH:mm"
            dateFormat="d.MM.yyyy - HH:mm"
            placeholderText="Return date"
        />
        </div>
    </div>
  )
}

export default DPicker
