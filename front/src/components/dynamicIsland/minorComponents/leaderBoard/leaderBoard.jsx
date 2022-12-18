import React from 'react'
import "./leaderBoard.scss"
import { useFetchStation } from '../../../../services/hooks/useFetchStation'


const LeaderBoard = ({ title, subtitle, leaderboardData }) => {

  const { data } = useFetchStation()


  // console.log(data);
  

  return (
    <div className='islandLeaderboard'>
      <div className="leaderboardHeader">
        {title}
      </div>
      <div className="leaderboardContent">

        {(data && leaderboardData) ? leaderboardData.map((d, i) =>

          <div key={d.id} className="leaderboardResult">
            <div>{i + 1}</div>
            <div className='leaderboardResultName'>{
               data.find(obj => obj.station_id === d.id) ? data.find(obj => obj.station_id === d.id).name : "Error"
            }
             </div>
            <div>{d.count}</div>
          </div>

        ) : null}

      </div>
      <div className="leaderboardFooter">
        {subtitle}
      </div>
    </div>
  )
}

export default LeaderBoard
