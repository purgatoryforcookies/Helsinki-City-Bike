import React from 'react'
import "./searchBox.scss"


function SearchBox(props) {


  return (
    <div className='searchBoxBody'>
      <input placeholder='Search' onChange={props.handleSearch}/>
    </div>
  )
}

export default SearchBox
