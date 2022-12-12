import React, { useState } from 'react'
import "./journeys.scss"
import DPicker from '../datepicker/datePicker'
import moment from 'moment-timezone';
import JourneyTable from './table/journeyTable';

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

  const { isError, data, error, isLoading } = useFetchJourney(params)


  const handleChange = (param) => {
    console.log(param);
    
    const { name, value } = param.target
    setParams({ ...params, [name]: value })

  }


  return (
    <div className="journieTableBody">
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



    <JourneyTable data={data} name='sortkey' 
    onchange={handleChange} 
    isloading={isLoading} 
    iserror={isError}/>


    </div>
  )
}

export default Journeys
