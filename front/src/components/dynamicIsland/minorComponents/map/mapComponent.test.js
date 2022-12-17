import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import MapComponent from './mapComponent'



test("renders map with 1 marker", () =>{

    const mockdata = {
        "station": {
            "name_swe": "Brunnsparken",
            "station_id": 1,
            "address": "Meritori 1",
            "city": " ",
            "operator": " ",
            "x": 24.9502114714031,
            "y": 60.155369615074,
            "modified": null,
            "name_eng": "Kaivopuisto",
            "fid": 111,
            "name": "Kaivopuisto",
            "address_swe": "Havstorget 1",
            "city_swe": " ",
            "capacity": 30,
            "active": true,
            "date_added": "2022-12-17T10:34:58.810000"
        }
    }

    render(<MapComponent data={mockdata}/>)

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(3)
    


})



