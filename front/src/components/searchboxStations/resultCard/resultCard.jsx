import React from 'react'
import "./resultCard.scss"


function ResultCard({data}) {
  return (
    <div className='resultCardBody'>
      <div className="header">
        {data.name}
      </div>
      <div className="body">

      </div>
      <div className="footer">
        <div>{data.station_id}</div>
        <div>{new Date(data.date_added).toLocaleDateString('fi')}</div>
      </div>
    </div>
  )
}

export default ResultCard
