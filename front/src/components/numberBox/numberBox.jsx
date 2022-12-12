import React from 'react'
import "./numberBox.scss"

function NumberBox({onchange, name, value}) {

  return (
    <div className='numberBoxBody'>
      <input min="1" type='number' name={name} onChange={onchange} value={value} />
    </div>
  )
}

export default NumberBox
