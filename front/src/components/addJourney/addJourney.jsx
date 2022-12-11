import React, { useState } from 'react'
import DPicker from '../datepicker/datePicker'
import SearchboxStations from '../searchboxStations/searchboxStations'

import "./addJourney.scss"

function AddJourney() {

    const [data, setData] = useState()
    const [dates, setDates] = useState({start: "", end:""})



    return (
        <div className='addJourney_comp'>
            <div className='header'></div>

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
                    <SearchboxStations/>
                    </div>
                </div>
                <div className="div3">
                <div className="option_header">Arrived to</div>
                    <div className="option_function">
                    <SearchboxStations />
                    </div>
                </div>
                <div className="div4">
                <div className="option_header">Distance</div>
                    <div className="option_function"></div>
                </div>
                <div className="div5">
                <div className="option_header">Duration</div>
                    <div className="option_function"></div>
                </div>

            </div>


        </div>
    )
}

export default AddJourney
