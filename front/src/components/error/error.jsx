import React from 'react'
import "./error.scss"
function ErrorComp({ serverError, clientError }) {
    // TODO: when backend errors have been standardized, handle them accordingly. 


    // if (!serverError && !clientError) {
        return <div className='ErrorBody'>
                    <div className='formErrorChild'>
                        <div className="errorheader">Fatal Error</div>
                        <div className="errorfooter">Please try again later</div>
                    </div>
                </div>
    // }


    return (
        <div className='ErrorBody'>
            {serverError && serverError.response.data.errors.map((err, i) =>
                <div key={i} className='formErrorChild'>
                    <div className="errorheader">{Object.values(err)}</div>
                    <div className="errorfooter">Location: {Object.keys(err)}</div>

                </div>
            )}
            {clientError && clientError.map((err, i) =>
                <div key={i} className='formErrorChild'>
                    <div className="errorheader">Client Error</div>
                    <div className="errorfooter">{err}</div>

                </div>
            )}
        </div>
    )
}

export default ErrorComp
