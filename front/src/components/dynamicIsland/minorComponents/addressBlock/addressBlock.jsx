import React from 'react'
import "./addressBlock.scss"

function AddressBlock({address}) {

    const fakeaddress = {
        name: 'Hanasaari',
        id: 15,
        address: 'Hanasaarenranta 1',
        city: 'Espoo',
        capacity: 10,
        x: 24.1515,
        y: 60.16115

    }


  return (
    <div className='addressBlockBody'>

        <div className="div1"></div>
        <div className="div2">{fakeaddress.name}</div>
        <div className="div3">Id: {fakeaddress.id}</div>
        <div className="div4">
            <div>{fakeaddress.address}</div>
            <div>{fakeaddress.city}</div>
        </div>
        <div className="div5">
            <div id='capacityValue'>{fakeaddress.capacity}</div>
            <div id='capacityTitle'>Capacity</div>
        </div>

    </div>
  )
}

export default AddressBlock
