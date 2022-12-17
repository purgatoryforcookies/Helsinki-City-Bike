import React from 'react'
import StatsRow from './minorComponents/statsRow/statsRow'
import LeaderBoard from './minorComponents/leaderBoard/leaderBoard'
import AddressBlock from './minorComponents/addressBlock/addressBlock'
import MapComponent from './minorComponents/map/mapComponent'
import TimelineSelector from './minorComponents/timelineSelector/timelineSelector'
import { useFetchStation } from '../../services/hooks/useFetchStation'
import {useFetchMetrics} from '../../services/hooks/useFetchMetrics'
import Loading from "../loading/loading"

import "./dynamicIsland.scss"

function DynamicIsland() {

  // const { isError, data, isLoading } = useFetchStation()

  const params = {station_id: 1, days:0}

  const { isError, data, isLoading } = useFetchMetrics(params)


  if (isLoading){
    return <Loading/>
  }
  

  return (
    <div className='dynamicIslandBody'>
      <div className="islandHeader">
        <TimelineSelector/>
      </div>


      <div className="islandMetrics" >
        <StatsRow data={data.metrics} />
      </div>

      <div className="islandAddress">
        <AddressBlock />
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
