import React from 'react'
import "./addressBlock.scss"

function AddressBlock({data}) {

  return (
    <div className='addressBlockBody'>

        <div className="div1"></div>
        <div className="div2">{data.name}</div>
        <div className="div3">Id: {data.station_id}</div>
        <div className="div4">
            <div>{data.address}</div>
            <div>{data.city}</div>
        </div>
        <div className="div5">
            <div id='capacityValue'>{data.capacity}</div>
            <div id='capacityTitle'>Capacity</div>
        </div>

    </div>
  )
}

export default AddressBlock
