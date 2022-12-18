import React from 'react'
import CustomButton from '../button/button'
import "./navBar.scss"

function NavBar({modal}) {

  function handleClick(){
    modal(true)
  }


    
  return (
    <div className='navBarBody'>
      <div className="logo">

      </div>
        <div className="midSection">

        </div>
        <div className="navFunctions">
            <CustomButton title='Add New' clickd={handleClick}/>
        </div>
    </div>
  )
}

export default NavBar
