import React from 'react'
import "./addressBlock.scss"
import { BsFillCheckCircleFill, BsFillExclamationCircleFill, BsPinMap } from 'react-icons/bs';


function AddressBlock({ data }) {

  return (
    <div className='addressBlockBody'>

      <div className="addressHeader">
        <div>Id: {data.station_id}</div>
        <div id='addressTitle'>{data.name}</div>
        <div id='addressStatusIcon'>{data.active ? <BsFillCheckCircleFill size={22} color='green'/> 
      : <BsFillExclamationCircleFill size={22} color='#b38710'/>}</div>
      </div>

      <div className="addressBodyLeft">
        <div className="columns">
          <div>Street:</div>
          <div>City:</div>
        </div>
        <div className="columns_values">
          <div>{data.address}</div>
          <div>{!data.city ? data.city : "-"}</div>
        </div>
      </div>

      <div className="addressBodyMiddle">
        <div id='capacityValue'>{data.capacity}</div>
        <div id='capacityTitle'>Capacity</div>

      </div>

      <div className="addressBodyRigth">
        <div id='mapIcon'>
          <BsPinMap size={20}/>
        </div>
        <div id='mapCoordinates'>
          [{data.x} <br/> {data.y}]
        </div>
      </div>

      {/* </div> */}
    </div>
  )
}

export default AddressBlock
