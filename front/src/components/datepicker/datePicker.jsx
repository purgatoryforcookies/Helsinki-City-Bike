import React from 'react'
import "./datePicker.scss"
// import moment from 'moment-timezone';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

import { useSelector, useDispatch } from 'react-redux';
import {setJourneyParams} from "../../services/store/journeySlice"

function DPicker() {

    const params = useSelector((state)=> state.search.journeyParams)
    const dispatch = useDispatch()


  return (
    <div className='datepicker_body'>
        <div className='startPicker'>
        <DatePicker 
             selected={params.timeframe_start ? new Date(params.timeframe_start):""}
             onChange={date => {dispatch(setJourneyParams({timeframe_start: new Date(date).toISOString()}))}}
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
             selected={params.timeframe_end ? new Date(params.timeframe_end):""}
             onChange={date => {dispatch(setJourneyParams({timeframe_end:new Date(date).toISOString()}))}}
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
