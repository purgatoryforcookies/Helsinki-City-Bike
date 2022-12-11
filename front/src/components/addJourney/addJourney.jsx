import React, { useState } from 'react'
import DPicker from '../datepicker/datePicker'
import SearchboxStations from '../searchboxStations/searchboxStations'
import NumberBox from '../numberBox/numberBox';
import { useDispatch, useSelector } from 'react-redux';
import { setNewjourney } from "../../services/store/journeySlice"
import moment from 'moment-timezone';
import { useAddJourney } from "../../services/hooks/useAddJourney"

import "./addJourney.scss"

function AddJourney() {

    const [params, setParams] = useState()
    const [dates, setDates] = useState({start: "", end:""})
    const [formError, setFormError] = useState("")

    const dispatch = useDispatch()
    
    function handleselections(object){
        dispatch(setNewjourney(object))
    }


    const par = useSelector((state)=> state.search.newJourney)
    
    const {isError, data, isLoading, refetch, error} = useAddJourney(params)
    console.log(isError, error);
    

    function handleSubmit(){
        setFormError("")
        if (Object.values(par).every(x=>x===null || x==="")){
            setFormError("Please fill in all fields")
            return
        }

        dispatch(setNewjourney({
            departure: dates.start ? moment(dates.start).local().format() : "",
            arrival: dates.end ? moment(dates.end).local().format() : ""
          }))
          refetch()



        // const {}
    }
    

    return (
        <div className='addJourney_comp'>
            <div className='header'>
                Add a new journey
            </div>

            <div className="options">
                <div className="div1">
                    <div className="option_header">Departure and return</div>
                    <div className="option_function">
                        <DPicker handler={setDates} selected={dates} />
                        </div>
                </div>
                <div className="div2">
                    <div className="option_header">Left from</div>
                    <div className="option_function">
                    <SearchboxStations handler={handleselections} target='departure_station_id'/>
                    </div>
                </div>
                <div className="div3">
                <div className="option_header">Arrived to</div>
                    <div className="option_function">
                    <SearchboxStations handler={handleselections} target='return_station_id'/>
                    </div>
                </div>
                <div className="div4">
                <div className="option_header">Distance</div>
                    <div className="option_function">
                        <NumberBox handler={handleselections} target='distance'/>
                    </div>
                </div>
                <div className="div5">
                <div className="option_header">Duration</div>
                    <div className="option_function">
                    <NumberBox handler={handleselections} target='duration'/>
                    </div>
                </div>

            </div>

            <div className="footer">
                <button className='submitNewJourney' onClick={handleSubmit}>Submit</button>
                {isError && <div>Error</div>}
                {formError && <div>{formError}</div>}
            </div>


        </div>
    )
}

export default AddJourney
