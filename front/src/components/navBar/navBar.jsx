import React from 'react'
import CustomButton from '../button/button'
import "./navBar.scss"

function NavBar() {


    
  return (
    <div className='navBarBody'>
      <div className="logo">

      </div>
        <div className="midSection">

        </div>
        <div className="navFunctions">
            <CustomButton title='Add New' />
        </div>
    </div>
  )
}

export default NavBar
