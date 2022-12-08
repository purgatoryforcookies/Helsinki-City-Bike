import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'
import JourneyTable from './journeyTable'
import { useFetchJourney } from '../../services/hooks/useFetchJourney'

jest.mock("../../services/hooks/useFetchJourney", ()=>({
    useFetchJourney: jest.fn()
}))


describe("JourneysTable", ()=>{

    beforeEach(() => {
		useFetchJourney.mockImplementation(() => ({}));
	});

    afterEach(() => {

		jest.clearAllMocks();
	});



    it("Renders loading", async ()=>{

		useFetchJourney.mockImplementation(() => ({ isLoading: true }));

        const {container} = render(<JourneyTable/>)

        await waitFor(()=>{
            // screen.debug(undefined, 100000)
              // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            expect(container.getElementsByClassName('loading_body').length).toBe(1)
  
          })

    })



    it("Renders content", async ()=>{

        const mockedJourney = 
			{
                "distance": 150,
                "ride_id": 73,
                "arrival": "2022-12-08T18:19:38.957000",
                "return_station_id": 3,
                "duration": 55555,
                "departure": "2022-12-07T18:19:38.957000",
                "departure_station_id": 1,
                "departure_station": {
                    "active": true,
                    "station_id": 1,
                    "date_added": "2022-12-07T20:04:38.140000",
                    "name": "Testiasema1",
                    "modified": null
                },
                "return_station": {
                    "active": true,
                    "station_id": 3,
                    "date_added": "2022-12-07T20:04:38.140000",
                    "name": "Vuosaari",
                    "modified": null
                }
            };

		useFetchJourney.mockImplementation(() => ({ isLoading: false, data: [mockedJourney], isError:false }));

        render(<JourneyTable/>)

        await waitFor(()=>{
          
            // screen.debug(undefined, 100000)
            screen.getByText('Testiasema1')
            screen.getByText('Vuosaari')
            
  
          })

    })

    it("Renders error", async ()=>{

		useFetchJourney.mockImplementation(() => ({ isLoading: false, isError:true }));

        render(<JourneyTable/>)

        await waitFor(()=>{
            // screen.debug(undefined, 100000)
            screen.getByText('Error!')
          })

    })

})

