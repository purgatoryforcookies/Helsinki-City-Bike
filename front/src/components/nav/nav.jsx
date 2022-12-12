import React, { useState } from 'react'
import "./nav.scss"
import DPicker from '../datepicker/datePicker'
// import { useDispatch } from 'react-redux';
// import { setJourneyParams } from "../../services/store/journeySlice"
import moment from 'moment-timezone';

import { useFetchJourney } from '../../services/hooks/useFetchJourney';

function Nav() {

  // const [dates, setDates] = useState({ start: "", end: "" })

  const [search, setSearch] = useState("")

  const [params, setParams] = useState({
    limit:20,
    searchkey:"",
    sortkey: "",
    departure:"",
    arrival:""
  })

  const {isError, data, error, isFetching, isLoading, refetch} = useFetchJourney(params)


  const handleChange = (param) => {
    const { name, value } = param.target
    setParams({ ...params, [name]: value })

  }
  console.log(params);
  


  return (
    <div className='navBody'>
      <input type={'text'} onChange={(e) => setSearch(e.target.value)} />
      <div className="navDatesChoosing">
      <DPicker onchange={handleChange}
                                placeholder="Departure"
                                value={params.departure}
                                name='departure'
                            />
                            <DPicker onchange={handleChange}
                                placeholder="Arrival"
                                value={params.arrival}
                                name='arrival'
                            />
      </div>
      {/* <button onClick={sendValues}>Search</button> */}
      {/* <button onClick={clearValues}>Clear</button> */}
    </div>
  )
}

export default Nav
