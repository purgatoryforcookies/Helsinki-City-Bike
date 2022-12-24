import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import "./mapComponent.scss"


const ReCenter = ({latlong}) =>{
  const map = useMap()
  useEffect(()=>{
    map.setView(latlong)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[latlong])
  return null
}


function MapComponent({data}) {


  const lon = data.station.x ? data.station.x : 24.945831
  const lat = data.station.y ? data.station.y : 60.192059
  
  return (
    <div className='islandMapBody'>

      <MapContainer center={[lat, lon]} zoom={14} scrollWheelZoom={true} style={{ height: 330, width: 430 }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
         <Marker position={[lat, lon]}></Marker>
         <ReCenter latlong={[lat,lon]}/>
      </MapContainer>


    </div>


  )
}

export default MapComponent
