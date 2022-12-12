import React from 'react'
import "./datePicker.scss"
import moment from 'moment-timezone';
import DatePicker from "react-datepicker";
// import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css'

function DPicker({name, value, onchange, placeholder}) {


  function handleChange(date){

    onchange({
      target:{
        name:name, value: date ? moment(date).local().format():""
      }
    })
  }
  
  return (
    <div className='datepicker_body'>
        <DatePicker 
            selected={value ? new Date(value): ""}
            onChange={(date) => handleChange(date)}
            showWeekNumbers
            showTimeSelect
            timeIntervals={10}
            timeFormat="HH:mm:ss"
            dateFormat="d.MM.yyyy - HH:mm:ss"
            placeholderText={placeholder}
        />
    </div>
  )
}

export default DPicker
