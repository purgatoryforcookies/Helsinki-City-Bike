import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ErrorComp from './error'



describe("ErrorComponent", ()=>{



    test("Renders when no props are given", () =>{

        render(<ErrorComp/>)

        screen.getByText('Fatal Error')
        
    })

    test("Renders when clientError prop given", () =>{
        const clientError = ['This is an error']

        render(<ErrorComp clientError={clientError}/>)

        screen.getByText('This is an error')
        
    })



})


