import React, { useState } from 'react'
import "./journeys.scss"
import DPicker from '../datepicker/datePicker'
import JourneyTable from './table/journeyTable';
import SearchBox from '../searchBox/searchBox';

import { useFetchJourney } from '../../services/hooks/useFetchJourney';

function Journeys() {

  
  const [params, setParams] = useState({
    limit: 20,
    sortkey: "",
    // searchkey: "",
    // departure: "",
    // arrival: ""
  })
  



  const { isError, data, error, isLoading, refetch } = useFetchJourney(params)
  console.log(data);
  
  useState(()=>{
    refetch()
  },[])

  const handleChange = (param) => {
    const { name, value } = param.target
    setParams({ ...params, [name]: value })

    if (name ==='sortkey'){
      console.log('refetch');
      
      refetch()
    }

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    refetch()

  }


  return (
    <div className="journieTableBody">
      <form onSubmit={handleSubmit} >

        <div className='navBody'>
          <SearchBox name="searchkey" value={params.searchkey} onchange={handleChange} />

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
          <button onClick={handleSubmit}>Search</button>
          {/* <button onClick={clearValues}>Clear</button> */}
        </div>
      </form>



      <JourneyTable data={data} name='sortkey'
        onchange={handleChange}
        isloading={isLoading}
        iserror={isError} />


    </div>
  )
}

export default Journeys
