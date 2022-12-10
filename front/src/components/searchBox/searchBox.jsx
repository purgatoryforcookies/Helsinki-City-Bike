import React, {useState, useEffect} from 'react'
import "./searchBox.scss"


function SearchBox(props) {

  const [value, setValue] = useState("")

  useEffect(()=>{

    const valueChange = setTimeout(()=>{
        props.handleSearch(value)
    }, 500)

    return ()=> clearTimeout(valueChange)

  },[value])



  return (
    <div className='searchBoxBody'>
      <input placeholder='Search' onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default SearchBox
