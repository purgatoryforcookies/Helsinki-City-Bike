import React from 'react'
import "./leaderBoard.scss"


const LeaderBoard = ({title, subtitle, data}) => {
  return (
    <div className='islandLeaderboard'>
        <div className="leaderboardHeader">
            {title}
        </div>
        <div className="leaderboardContent">
a
        </div>
        <div className="leaderboardFooter">
            {subtitle}
        </div>
    </div>
  )
}

export default LeaderBoard
