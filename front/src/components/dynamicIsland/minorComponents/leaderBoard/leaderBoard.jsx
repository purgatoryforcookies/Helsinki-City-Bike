import React from 'react'
import "./leaderBoard.scss"


const LeaderBoard = ({title, subtitle, data}) => {

  const fakedate =[{
    name: "Haapasalo",
    in: 15,
    out: 22,
  },
  {
    name: "Linna",
    in: 14,
    out: 30,
  },
  {
    name: "Kaakkola",
    in: 13,
    out: 7,
  },
  {
    name: "Helsingin ammattikorkeakoussssssssssssslu",
    in: 11,
    out: 8,
  },
  {
    name: "Karelia työväenopisto",
    in: 8,
    out: 3,
  },



]
  return (
    <div className='islandLeaderboard'>
        <div className="leaderboardHeader">
            {title}
        </div>
        <div className="leaderboardContent">  
          
          {fakedate.map((data, i)=>
            
            <div className="leaderboardResult">
              <div>{i+1}</div>
              <div className='leaderboardResultName'>{data.name}</div>
              <div>{data.out}</div>
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
