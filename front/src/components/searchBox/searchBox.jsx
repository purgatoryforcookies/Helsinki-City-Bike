import React from 'react'
import "./searchBox.scss"


function SearchBox({name, value, onchange, style}) {


  return (
      <input className='searchBoxBody' 
      placeholder='Search' autoComplete='off' 
      name={name} value={value} onChange={onchange}
      style={style}
      />

  )
}

export default SearchBox
