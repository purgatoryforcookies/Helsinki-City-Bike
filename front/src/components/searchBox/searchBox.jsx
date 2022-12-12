import React from 'react'
import "./searchBox.scss"


function SearchBox({name, value, onchange}) {


  return (
    <div className='searchBoxBody'>
      <input placeholder='Search' autoComplete='off' name={name} value={value} onChange={onchange}/>
    </div>
  )
}

export default SearchBox
