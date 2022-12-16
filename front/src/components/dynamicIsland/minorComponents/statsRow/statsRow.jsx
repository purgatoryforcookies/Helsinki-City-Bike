import React from 'react'
import StatsBox from '../statsbox/statsBox'
import "./statsRow.scss"

function StatsRow() {

    const style={
        position: 'relative',
        left: 50
    }


  return (
    <div className='islandStatsRow'>
      <StatsBox value={50} title='Incoming'/>
      <StatsBox value={60} title='Outoging'/>
      <StatsBox value={-60} title='Balance' style={style}/>
    </div>
  )
}

export default StatsRow
