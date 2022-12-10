import React, {useState} from 'react'
import "./datePicker.scss"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

function DPicker() {

    const [start, setStart] = useState()
    const [end, setEnd] = useState()

    

  return (
    <div className='datepicker_body'>
        <div className='startPicker'>
        <DatePicker 
             selected={start}
             onChange={(date)=>setStart(date)}
            //  selectsRange
             showWeekNumbers
            //  inline
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
             onChange={(date)=>setEnd(date)}
            //  selectsRange
             showWeekNumbers
            //  inline
            showTimeSelect
            timeIntervals={10}
            timeFormat="HH:mm"
            dateFormat="d.MM.yyyy - HH:mm"
            placeholderText="Filter by return date"
        />
        </div>

    </div>
  )
}

export default DPicker
