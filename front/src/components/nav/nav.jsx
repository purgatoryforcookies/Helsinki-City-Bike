import React, { useState } from 'react'
import "./nav.scss"
import DPicker from '../datepicker/datePicker'
import {useDispatch } from 'react-redux';
import {setJourneyParams} from "../../services/store/journeySlice"
import moment from 'moment-timezone';

function Nav() {

    const [dates, setDates] = useState({start: "", end:""})

    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

      function handleDates(value){
        if(value.start){
        setDates({...dates, start: value.start})
        }
        else{
            setDates({...dates, end: value.end})
        }
      }

      function sendValues(){
        dispatch(setJourneyParams({searchkey:search, 
            timeframe_start:moment(dates.start).local().format(), 
            timeframe_end:moment(dates.end).local().format()}))
      }


  return (
    <div className='navBody'>
        <input type={'text'} onChange={(e) => setSearch(e.target.value)}/>
      <DPicker handler={handleDates} selected={dates}/>
      <button onClick={sendValues}>Search</button>
    </div>
  )
}

export default Nav
