import React from 'react'
import DPicker from '../datepicker/datePicker'

import "./addJourney.scss"

function AddJourney() {
    return (
        <div className='addJourney_comp'>
            <div className='header'></div>

            <div className="options">
                <div className="div1">
                    <div className="option_header">Departure</div>
                    <div className="option_function"><DPicker/></div>
                </div>
                <div className="div2">
                    <div className="option_header">Return</div>
                    <div className="option_function"></div>
                </div>
                <div className="div3">
                    <div className="option_header">Left from</div>
                    <div className="option_function"></div>
                </div>
                <div className="div4">
                    <div className="option_header">Arrived to</div>
                    <div className="option_function"></div>
                </div>
                <div className="div5">
                    <div className="option_header">Distance</div>
                    <div className="option_function"></div>
                </div>
                <div className="div6">
                    <div className="option_header">Duration</div>
                    <div className="option_function"></div>
                </div>
            </div>


        </div>
    )
}

export default AddJourney
