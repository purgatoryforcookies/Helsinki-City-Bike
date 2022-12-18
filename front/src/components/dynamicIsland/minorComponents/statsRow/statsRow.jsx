import React from 'react'
import StatsBox from '../statsbox/statsBox'
import "./statsRow.scss"

function StatsRow({data}) {

    const style={
        position: 'relative',
        left: 50
    }

    const incoming = data ? data.incoming : 0
    const outgoing = data ? data.outgoing : 0
    const balance =  incoming-outgoing
    

  return (
    <div className='islandStatsRow'>
      <StatsBox value={incoming} title='Incoming'/>
      <StatsBox value={outgoing} title='Outoging'/>
      <StatsBox value={balance} title='Balance' style={style}/>
    </div>
  )
}

export default StatsRow
