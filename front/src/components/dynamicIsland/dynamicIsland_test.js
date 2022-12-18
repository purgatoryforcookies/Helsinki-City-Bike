import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'

import DynamicIsland from './dynamicIsland'
import { useFetchMetrics } from '../../services/hooks/useFetchMetrics'


jest.mock("../../services/hooks/useFetchMetrics", ()=>({
    useFetchMetrics: jest.fn()
}))


describe("DynamicIsland", ()=>{

    beforeEach(() => {

		useFetchMetrics.mockImplementation(() => ({}));
	});

    afterEach(() => {

		jest.clearAllMocks();
	});

    it("Renders loading", async ()=>{

		useFetchMetrics.mockImplementation(() => ({ isLoading: true }));
        const {container} = render(<DynamicIsland selected={1}/>)

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.getElementsByClassName('loading_body').length).toBe(1)
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.getElementsByClassName('islandHeader').length).toBe(1)
  
    })


    it("Renders content", async ()=>{

        const mockedData = {
            "station": {
                "name_swe": "Kaptensskvären",
                "station_id": 3,
                "address": "Tehtaankatu 13",
                "city": " ",
                "operator": " ",
                "x": 24.9450181631667,
                "y": 60.1581769029949,
                "modified": null,
                "name_eng": "Kapteeninpuistikko",
                "fid": 113,
                "name": "Kapteeninpuistikko",
                "address_swe": "Fabriksgatan 13",
                "city_swe": " ",
                "capacity": 16,
                "active": true,
                "date_added": "2022-12-17T10:34:58.810000"
            },
            "metrics": {
                "incoming": 5944,
                "outgoing": 6043,
                "leaderboard": {
                    "incoming": [
                        {
                            "id": 65,
                            "count": 218
                        },
                        {
                            "id": 26,
                            "count": 206
                        },
                        {
                            "id": 30,
                            "count": 193
                        },
                        {
                            "id": 12,
                            "count": 182
                        },
                        {
                            "id": 6,
                            "count": 179
                        }
                    ],
                    "outgoing": [
                        {
                            "id": 30,
                            "count": 220
                        },
                        {
                            "id": 65,
                            "count": 214
                        },
                        {
                            "id": 6,
                            "count": 200
                        },
                        {
                            "id": 26,
                            "count": 199
                        },
                        {
                            "id": 12,
                            "count": 178
                        }
                    ]
                }
            }
        }
		useFetchMetrics.mockImplementation(() => ({ isLoading: false, data: [mockedData], isError:false }));

        render(<DynamicIsland selected={1}/>)

        await waitFor(()=>{
          
            // screen.debug(undefined, 100000)
            // screen.getByText('Testiasema')
            // screen.getByText('Name')
  
          })

    })










})

