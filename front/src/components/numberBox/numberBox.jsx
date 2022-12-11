import React from 'react'
import "./numberBox.scss"


function NumberBox({handler, target}) {


    function handleChange(value){
        handler({[target]:Number(value)})
    }


  return (
    <div className='numberBoxBody'>
        {/* <form> */}

      <input type='number' onChange={(e)=>handleChange(e.target.value)} />
        {/* </form> */}
    </div>
  )
}

export default NumberBox
