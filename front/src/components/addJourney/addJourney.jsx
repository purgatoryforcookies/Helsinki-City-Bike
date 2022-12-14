import React from 'react'
import DPicker from '../datepicker/datePicker'
import SearchboxStations from '../searchboxStations/searchboxStations'
import NumberBox from '../numberBox/numberBox';
import ErrorComp from '../error/error';
import { timeToSecMin } from '../../services/utils/dates';
// import LoadingButton from '@mui/lab/LoadingButton';
// import CircularProgress from '@mui/material/CircularProgress';
import CustomButton from '../button/button';
import "./addJourney.scss"

import useForm from '../../services/hooks/useForm';


function AddJourney() {

    const { formdata, onChangeInput, onSubmitForm, isSuccess, isError, error, freshError, isLoading } = useForm({
        departure: "",
        arrival: "",
        departure_station_id: "",
        return_station_id: "",
        distance: 0,
        duration: 0
    })
    const { min, sec } = timeToSecMin(formdata.departure, formdata.arrival)

    return (
        <div className='addJourney_comp'>
            <form onSubmit={onSubmitForm} >
                <div className='header'>
                    Add a new journey
                </div>

                <div className="options">
                    <div className="div1">
                        <div className="option_header">Departure and arrival</div>
                        <div className="option_function">
                            <DPicker onchange={onChangeInput}
                                placeholder="Departure"
                                value={formdata.departure}
                                name='departure'
                            />
                            <DPicker onchange={onChangeInput}
                                placeholder="Arrival"
                                value={formdata.arrival}
                                name='arrival'
                            />
                        </div>
                    </div>
                    <div className="div2">
                        <div className="option_header">Left from</div>
                        <div className="option_function">
                            <SearchboxStations name="departure_station_id"
                                value={formdata.departure_station_id}
                                onchange={onChangeInput}
                                success={isSuccess} />
                        </div>
                    </div>
                    <div className="div3">
                        <div className="option_header">Arrived to</div>
                        <div className="option_function">
                            <SearchboxStations name="return_station_id"
                                value={formdata.return_station_id}
                                onchange={onChangeInput}
                                success={isSuccess} />
                        </div>
                    </div>
                    <div className="div4">
                        <div className="option_header">Distance</div>
                        <div className="option_function">
                            <NumberBox onchange={onChangeInput}
                                name='distance'
                                value={formdata.distance} />
                        </div>
                    </div>
                    <div className="div5">
                        <div className="option_header">Duration</div>
                        <div className="option_function">
                            {(formdata.departure && formdata.arrival) ? `${min}min ${sec}sec` : ""}
                        </div>
                    </div>

                </div>

                <div className="footer">
                    <CustomButton title='Submit' loading={isLoading} theme='light'/>
                    
                    {(isError && freshError) && <ErrorComp serverError={error} />}
                </div>
            </form>
            {isSuccess && <div>Success!</div>}

        </div>
    )
}

export default AddJourney
