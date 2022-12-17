import React, { useState } from 'react'
import StatsRow from './minorComponents/statsRow/statsRow'
import LeaderBoard from './minorComponents/leaderBoard/leaderBoard'
import AddressBlock from './minorComponents/addressBlock/addressBlock'
import MapComponent from './minorComponents/map/mapComponent'
import TimelineSelector from './minorComponents/timelineSelector/timelineSelector'
// import { useFetchStation } from '../../services/hooks/useFetchStation'
import {useFetchMetrics} from '../../services/hooks/useFetchMetrics'
import Loading from "../loading/loading"

import "./dynamicIsland.scss"

function DynamicIsland({selected}) {

  // const { isError, data, isLoading } = useFetchStation()
  const [days, setDays] = useState(0)
  
  // const params = {station_id: selected, days:0}

  const { isError, data, isLoading } = useFetchMetrics({station_id: selected, days:days})
  console.log(data);
  

  if (isLoading){
    return <Loading/>
  }
  

  return (
    <div className='dynamicIslandBody'>
      <div className="islandHeader">
        <TimelineSelector onselection={setDays}/>
      </div>


      <div className="islandMetrics" >
        <StatsRow data={data.metrics} />
      </div>

      <div className="islandAddress">
        <AddressBlock data={data.station}/>
      </div>

      <div className="islandMap">

        <MapComponent />
      
      </div>

      <div className="islandTraffic">
        <LeaderBoard title='Top 5' subtitle='Incoming' />
        <LeaderBoard title='Top 5' subtitle='Outgoing' />
      </div>


    </div>
  )
}

export default DynamicIsland
