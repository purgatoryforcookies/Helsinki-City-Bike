import React from 'react'
import "./resultCard.scss"
import { BsFillCheckCircleFill, BsFillExclamationCircleFill } from 'react-icons/bs';

function ResultCard({ data }) {
  return (
    <div className='resultCardBody'>
      <div className="resulcard_notice">
      {data.active ? <BsFillCheckCircleFill size={22} color='green'/> 
      : <BsFillExclamationCircleFill size={22} color='#b38710'/>}
      </div>
      <div className="resultCardheader">
        {data.name}
      </div>
      <div className="resultCardbody">
        <span>Station ID: {data.station_id}</span>
      </div>

    </div>
  )
}

export default ResultCard
