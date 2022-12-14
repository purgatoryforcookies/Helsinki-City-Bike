import React from 'react'
import StatsRow from './minorComponents/statsRow/statsRow'
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


      </div>


    </div>
  )
}

export default DynamicIsland
