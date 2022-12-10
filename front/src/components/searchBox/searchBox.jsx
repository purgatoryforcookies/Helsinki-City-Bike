import React, {useState, useEffect} from 'react'
import "./searchBox.scss"


function SearchBox(props) {

  const [value, setValue] = useState("")

  useEffect(()=>{

    const valueChange = setTimeout(()=>{
        props.handleSearch(value)
    }, 500)

    return ()=> clearTimeout(valueChange)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])


  return (
    <div className='searchBoxBody'>
      <form>
      <input placeholder='Search' onChange={(e)=>setValue(e.target.value)}/>
      </form>
    </div>
  )
}

export default SearchBox
