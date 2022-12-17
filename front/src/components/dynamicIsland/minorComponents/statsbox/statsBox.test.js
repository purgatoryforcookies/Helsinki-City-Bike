import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import StatsBox from './statsBox'



describe("StatsBox component", ()=>{



    test("Renders correct content", async() =>{


        render(<StatsBox value={1} title='Incoming' subtitle='Subtitle'/>)
        await new Promise((r) => setTimeout(r, 1200));


        screen.getByText('Incoming')
        screen.getByText('1')
        screen.getByText('Subtitle')




        
    })

    test("Renders content with erronomous data", async() =>{


        render(<StatsBox value={'not a number'} title='Incoming' subtitle='Subtitle'/>)
        await new Promise((r) => setTimeout(r, 1200));

        screen.getByText('Incoming')
        screen.getByText('NaN')
        screen.getByText('Subtitle')

    })



})

