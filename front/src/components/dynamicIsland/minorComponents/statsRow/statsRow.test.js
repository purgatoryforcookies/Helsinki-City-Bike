import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import StatsRow from './statsRow'



describe("StatsRow component", ()=>{



    test("Renders content", async() =>{
        const mockData = {
            "incoming": 13165,
            "outgoing": 13156,
        }

        render(<StatsRow data={mockData}/>)
        await new Promise((r) => setTimeout(r, 2000));


        screen.getByText('13 165')
        screen.getByText('13 156')
        screen.getByText(String(13165-13156))

        
    })

    test("Renders content with erronomous data", async() =>{
        const mockData = {
            "incoming": "teset",
            "outgoing": "testst",
        }

        render(<StatsRow data={mockData}/>)
        await new Promise((r) => setTimeout(r, 2000));

        expect( screen.getAllByText('0').length).toBe(3)

    })



})

