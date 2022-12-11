import React from 'react'
import "./datePicker.scss"
// import moment from 'moment-timezone';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

function DPicker({handler, selected}) {
  
  return (
    <div className='datepicker_body'>
        <div className='startPicker'>
        <DatePicker 
             selected={selected.start}
             onChange={(date) => handler({start:date})}
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
             selected={selected.end}
             onChange={(date) => handler({end:date})}
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
