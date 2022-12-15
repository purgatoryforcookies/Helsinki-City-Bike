import React from 'react'
import StatsRow from './minorComponents/statsRow/statsRow'
import LeaderBoard from './minorComponents/leaderBoard/leaderBoard'
import AddressBlock from './minorComponents/addressBlock/addressBlock'
import MapComponent from './minorComponents/map/mapComponent'
import TimelineSelector from './minorComponents/timelineSelector/timelineSelector'

import "./dynamicIsland.scss"

function DynamicIsland() {
  return (
    <div className='dynamicIslandBody'>
      <div className="islandHeader">
        <TimelineSelector/>
      </div>


      <div className="islandMetrics">
        <StatsRow />
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
