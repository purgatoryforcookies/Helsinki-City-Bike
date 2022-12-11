import React, { useEffect, useState } from 'react'
import DPicker from '../datepicker/datePicker'
import SearchboxStations from '../searchboxStations/searchboxStations'
import NumberBox from '../numberBox/numberBox';
import { useDispatch, useSelector } from 'react-redux';
import { setJourneyParams } from "../../services/store/journeySlice"
import { useAddJourney } from "../../services/hooks/useAddJourney"
import ErrorComp from '../error/error';

import "./addJourney.scss"

function AddJourney() {

    const [formError, setFormError] = useState("")

    const dispatch = useDispatch()
    
    function handleselections(object){
        dispatch(setJourneyParams(object))
    }
    const par = useSelector((state)=> state.journeySettings.journeyParams)
    const {isError, data, isLoading, refetch, error, isSuccess} = useAddJourney(par)

    
    useEffect(()=>{
        setFormError("")
    },[par])

    function handleSubmit(){
        refetch()
    }

    if (isSuccess){
        dispatch(setJourneyParams({
        newDeparture: "",
        newArrival:"",
        newDepartureStationId: "",
        newReturnStationId: "",
        newDistance:"",
        newDuration:""  }))

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
                        <DPicker handler={handleselections} new_ride={true} />
                        </div>
                </div>
                <div className="div2">
                    <div className="option_header">Left from</div>
                    <div className="option_function">
                    <SearchboxStations handler={handleselections} target='newDepartureStationId'/>
                    </div>
                </div>
                <div className="div3">
                <div className="option_header">Arrived to</div>
                    <div className="option_function">
                    <SearchboxStations handler={handleselections} target='newReturnStationId'/>
                    </div>
                </div>
                <div className="div4">
                <div className="option_header">Distance</div>
                    <div className="option_function">
                        <NumberBox handler={handleselections} target='newDistance'/>
                    </div>
                </div>
                <div className="div5">
                <div className="option_header">Duration</div>
                    <div className="option_function">
                    <NumberBox handler={handleselections} target='newDuration'/>
                    </div>
                </div>

            </div>

            <div className="footer">
                <button className='submitNewJourney' onClick={handleSubmit}>Submit</button>
                {(isError || formError) && <ErrorComp serverError={error} clientError={formError}/> }
            </div>


        </div>
    )
}

export default AddJourney
