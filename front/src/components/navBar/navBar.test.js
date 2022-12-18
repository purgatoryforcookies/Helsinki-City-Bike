import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import NavBar from './navBar'



test("renders content", () =>{


    render(<NavBar/>)

    const element = screen.getAllByRole('button')

    expect(element.length).toBe(1)
    



})





