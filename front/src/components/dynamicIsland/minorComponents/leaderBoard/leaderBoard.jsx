import React from 'react'
import "./leaderBoard.scss"
import { useFetchStation } from '../../../../services/hooks/useFetchStation'


const LeaderBoard = ({title, subtitle, leaderboardData}) => {

  const {data} = useFetchStation()


  return (
    <div className='islandLeaderboard'>
        <div className="leaderboardHeader">
            {title}
        </div>
        <div className="leaderboardContent">  
          
          {leaderboardData.map((d, i)=>
            
            <div key={d.id} className="leaderboardResult">
              <div>{i+1}</div>
              <div className='leaderboardResultName'>{data.find(obj => obj.station_id === d.id).name}</div>
              <div>{d.count}</div>
            </div>
            
            )}

        </div>
        <div className="leaderboardFooter">
            {subtitle}
        </div>
    </div>
  )
}

export default LeaderBoard
