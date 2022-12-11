import React from 'react'
import "./resultCard.scss"


function ResultCard({data}) {
  return (
    <div className='resultCardBody'>
      <div className="header">
        {data.name} - Id: {data.station_id}
      </div>
      <div className="body">

      </div>
      <div className="footer">
        <div></div>
        <div>Added: {new Date(data.date_added).toLocaleDateString('fi')}</div>
      </div>
    </div>
  )
}

export default ResultCard
