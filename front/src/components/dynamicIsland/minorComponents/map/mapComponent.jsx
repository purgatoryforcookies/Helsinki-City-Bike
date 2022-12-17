import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "./mapComponent.scss"

function MapComponent({data}) {


  const lon = data.station.x ? data.station.x : 24.945831
  const lat = data.station.y ? data.station.y : 60.192059
  
  return (
    <div className='islandMapBody'>

      <MapContainer center={[lat, lon]} zoom={14} scrollWheelZoom={true} style={{ height: 300 }}>
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
