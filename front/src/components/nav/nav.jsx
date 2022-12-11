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
            timeframe_start:dates.start ? moment(dates.start).local().format():"", 
            timeframe_end:dates.end ? moment(dates.end).local().format():""}))
      }

      function clearValues(){
        dispatch(setJourneyParams({searchkey:search, 
            timeframe_start:"", 
            timeframe_end:""}))
        setDates({start: "", end:""})
      }


  return (
    <div className='navBody'>
        <input type={'text'} onChange={(e) => setSearch(e.target.value)}/>
      <DPicker handler={handleDates} selected={dates}/>
      <button onClick={sendValues}>Search</button>
      <button onClick={clearValues}>Clear</button>
    </div>
  )
}

export default Nav
