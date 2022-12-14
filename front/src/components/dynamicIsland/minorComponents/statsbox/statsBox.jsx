import React from 'react'
import CountUp from 'react-countup'
import "./statsBox.scss"

const StatsBox = ({ value, title, subtitle, style }) => {



    return (
        <div className='islandStatsBox' style={style}>
            <div className="statsboxHero">
                {Number(value) || value === 0 ? <CountUp
                    end={value}
                    separator=" "
                    decimal=","
                    delay={0.1}
                    duration={1.2}

                    className="heroValue"
                /> : <span className='heroValue'>NaN</span>}
            </div>
            <div className="statsboxTitle">
                {title}
            </div>
            <div className="statsboxSubtitle">
                {subtitle}
            </div>

        </div>
    )
}

export default StatsBox
