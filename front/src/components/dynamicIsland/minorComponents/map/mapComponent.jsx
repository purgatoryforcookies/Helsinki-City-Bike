import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "./mapComponent.scss"

function MapComponent({x,y}) {

  const lat = x ? x : 60.192059
  const lon = y ? y : 24.945831



  return (
    <div className='islandMapBody'>

      <MapContainer center={[lat, lon]} zoom={12} scrollWheelZoom={true} style={{ height: 300 }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
         <Marker position={[lat, lon]}></Marker>
      </MapContainer>


    </div>


  )
}

export default MapComponent
