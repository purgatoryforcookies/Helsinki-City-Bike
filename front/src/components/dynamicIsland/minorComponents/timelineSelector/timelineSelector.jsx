import React, {useEffect, useState} from 'react'
import "./timelineSelector.scss"


function TimelineSelector({value, onselection}) {

    const [selected, setSelected] = useState('3mo')

    function handleChange(value) {
        onselection(value.target.value)
    }

  return (
    <div className='timelineSelectorBody'>
      <div className="timelineOption" onClick={handleChange}>1 vko</div>
      <div className="timelineOption" onClick={handleChange}>1 mo</div>
      <div className="timelineOption" onClick={handleChange}>3 mo</div>
      <div className="timelineOption" onClick={handleChange}>all</div>
    </div>
  )
}

export default TimelineSelector
