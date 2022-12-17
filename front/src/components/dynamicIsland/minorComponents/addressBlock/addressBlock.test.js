import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import AddressBlock from './addressBlock'



test("renders content", () =>{
    // TODO: this could be better...

    const mockdata = {
        "name_swe": "Skeppsbrogatan",
        "station_id": 2,
        "address": "Laivasillankatu 14",
        "city": " ",
        "operator": " ",
        "x": 24.9565097715858,
        "y": 60.1609890692806,
        "modified": null,
        "name_eng": "Laivasillankatu",
        "fid": 112,
        "name": "Laivasillankatu",
        "address_swe": "Skeppsbrogatan 14",
        "city_swe": " ",
        "capacity": 12,
        "active": true,
        "date_added": "2022-12-17T10:34:58.810000"
    }

    render(<AddressBlock data={mockdata}/>)

    screen.getByText('Laivasillankatu 14')
    screen.getByText('12')
    



})
