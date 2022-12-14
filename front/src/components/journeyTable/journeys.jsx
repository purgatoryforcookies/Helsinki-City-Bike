import React, { useState } from 'react'
import "./journeys.scss"
import DPicker from '../datepicker/datePicker'
import JourneyTable from './table/journeyTable';
import SearchBox from '../searchBox/searchBox';
import CustomButton from '../button/button';

import { useFetchJourney } from '../../services/hooks/useFetchJourney';


function Journeys() {

  const initialData = {
    limit: 20,
    sortkey: "",
    searchkey: "",
    departure: "",
    arrival: ""
  }

  const [params, setParams] = useState(initialData)
  const [immediate, setImmediate] = useState(true)
  const { isError, data, error, isLoading } = useFetchJourney(params, immediate)

  const handleChange = (param) => {
    const { name, value } = param.target
    if (name === 'sortkey') {
      setImmediate(true)
    }
    else {
      setImmediate(false)
    }
    setParams({ ...params, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setImmediate(true)
  }

  const clearValues = () => {
    setImmediate(true)
    setParams(initialData)
  }

  return (
    <div className="journieTableBody">
      <div className="navBody">

      <form onSubmit={handleSubmit} >
        <div className='toolbar'>

          <SearchBox name="searchkey" value={params.searchkey} onchange={handleChange} style={{ marginLeft: 40 }} />

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
          <div className="buttonrow">
            <CustomButton clickd={handleSubmit} title='Search' loading ={isLoading} />
            <CustomButton clickd={clearValues} title='Clear' />
          </div>

        </div>
      </form>
              </div>



      <JourneyTable data={data} name='sortkey'
        onchange={handleChange}
        isloading={isLoading}
        iserror={isError} />


    </div>
  )
}

export default Journeys
