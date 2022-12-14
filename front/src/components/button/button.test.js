import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CustomButton from './button'


describe("CustomButton", ()=>{

    test("renders content", () =>{

        const mockhandler = jest.fn()

        render(<CustomButton onClick={mockhandler}/>)

        const element = screen.getByRole('button')

        expect(element).toBeDefined()
    
    })

    test("Renders loading", () =>{

        const mockhandler = jest.fn()

        render(<CustomButton onClick={mockhandler} loading={true}/>)

        const element = screen.getByRole('progressbar')
        expect(element).toBeDefined()
    
    })
})