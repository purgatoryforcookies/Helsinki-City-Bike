import React, {useState} from 'react'
import "./datePicker.scss"
import moment from 'moment-timezone';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


function DPicker(props) {

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    const handlesubmit = () =>{

        props.handlePick({start:moment(start).local().format(),
             end:moment(end).local().format()})

    }


  return (
    <div className='datepicker_body'>
        <div className='startPicker'>
        <DatePicker 
             selected={start}
             onChange={date => setStart(date)}
             showWeekNumbers
            showTimeSelect
            timeIntervals={10}
            timeFormat="HH:mm"
            dateFormat="d.MM.yyyy - HH:mm"
            placeholderText="Filter by departure date"
        />
        </div>
        <div>
            -
        </div>
        <div className='endPicker'>

        <DatePicker 
             selected={end}
             onChange={date => setEnd(date)}
             showWeekNumbers
            showTimeSelect
            timeIntervals={10}
            timeFormat="HH:mm"
            dateFormat="d.MM.yyyy - HH:mm"
            placeholderText="Filter by return date"
        />
        </div>

        <button type='button' onClick={handlesubmit} >Search</button>

    </div>
  )
}

export default DPicker
