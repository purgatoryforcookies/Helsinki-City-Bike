import React, { useState } from 'react'
import "./tableJourneys.scss"
import DPicker from '../datepicker/datePicker'
import moment from 'moment-timezone';

import { useFetchJourney } from '../../services/hooks/useFetchJourney';

function Journeys() {

  const [search, setSearch] = useState("")

  const [params, setParams] = useState({
    limit: 20,
    searchkey: "",
    sortkey: "",
    departure: "",
    arrival: ""
  })

  const { isError, data, error, isFetching, isLoading, refetch } = useFetchJourney(params)


  const handleChange = (param) => {
    const { name, value } = param.target
    setParams({ ...params, [name]: value })

  }

  
  return (
    <div className='navBody'>
      <input type='text' name="searchkey" value={params.searchkey} onChange={handleChange} />
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

export default Journeys
