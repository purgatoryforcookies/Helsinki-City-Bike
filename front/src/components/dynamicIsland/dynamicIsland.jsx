import React from 'react'
import StatsRow from './minorComponents/statsRow/statsRow'
import LeaderBoard from './minorComponents/leaderBoard/leaderBoard'
import "./dynamicIsland.scss"

function DynamicIsland() {
  return (
    <div className='dynamicIslandBody'>

      <div className="islandHeader">

      </div>


      <div className="islandMetrics">
        <StatsRow/>

      </div>
      <div className="islandAddress">


      </div>
      <div className="islandMap">


      </div>
      <div className="islandTraffic">
      <LeaderBoard title='Top 5' subtitle='Outgoing'/>
      <LeaderBoard title='Top 5' subtitle='Outgoing'/>
      </div>


    </div>
  )
}

export default DynamicIsland
