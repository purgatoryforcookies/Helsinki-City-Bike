import React, {useEffect, useState} from 'react'
import "./timelineSelector.scss"


function TimelineSelector({value, onselection}) {

    const [selected, setSelected] = useState('3mo')

    function handleChange(value) {
        onselection(value.target.dataset.value)
    }

  return (
    <div className='timelineSelectorBody'>
      <div className="timelineOption" data-value={7} onClick={handleChange}>1 vko</div>
      <div className="timelineOption" data-value={30} onClick={handleChange}>1 mo</div>
      <div className="timelineOption" data-value={90} onClick={handleChange}>3 mo</div>
      <div className="timelineOption" data-value={0} onClick={handleChange}>all</div>
    </div>
  )
}

export default TimelineSelector
