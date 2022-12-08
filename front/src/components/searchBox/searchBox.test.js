import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import SearchBox from "./searchBox";



test("renders content", () =>{

    const mockhandler = jest.fn()

    render(<SearchBox handleSearch={mockhandler}/>)

    const element = screen.getByPlaceholderText('Search')

    expect(element).toBeDefined()
    



})





