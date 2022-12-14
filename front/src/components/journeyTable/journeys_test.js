// import React from 'react'
// import '@testing-library/jest-dom/extend-expect'
// import { render, screen, waitFor } from '@testing-library/react'

// import Journeys from './journeys'
// import { useFetchJourney } from '../../services/hooks/useFetchJourney'

// jest.mock("../../services/hooks/useFetchJourney", ()=>({
//     useFetchJourney: jest.fn()
// }))


// describe("JourneysTable", ()=>{

//     beforeEach(() => {
// 		useFetchJourney.mockImplementation(() => ({}));
// 	});

//     afterEach(() => {

// 		jest.clearAllMocks();
// 	});



//     it("Renders loading", async ()=>{

// 		useFetchJourney.mockImplementation(() => ({ isLoading: true }));

//         render(<Journeys/>)

//         await waitFor(()=>{
//             // screen.debug(undefined, 100000)
//               // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
//             // expect(container.getElementsByClassName('loading_body').length).toBe(1)
//             expect(screen.getByRole('button').length).toBe(2)
//           })

//     })



//     it("Renders content", async ()=>{



// 		useFetchJourney.mockImplementation(() => ({ isLoading: false,  isError:false }));

//         render(<Journeys/>)

//         await waitFor(()=>{
          
//             // screen.debug(undefined, 100000)
//             screen.getByText('Testiasema1')
//             screen.getByText('Vuosaari')
//             screen.getByText('Departure station')
            
  
//           })

//     })

//     it("Renders error", async ()=>{

// 		useFetchJourney.mockImplementation(() => ({ isLoading: false, isError:true }));

//         render(<Journeys/>)

//         await waitFor(()=>{
//             // screen.debug(undefined, 100000)
//             screen.getByText('Error!')
//           })

//     })

// })

