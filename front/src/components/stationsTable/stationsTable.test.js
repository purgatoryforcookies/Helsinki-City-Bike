import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'
import StationsTable from './stationsTable'
// import { QueryClientProvider, QueryClient} from "react-query"

// import { getAll } from '../../services/stations'
import { useFetchStation } from '../../services/hooks/useFetchStation'




jest.mock("../../services/hooks/useFetchStation", ()=>({
    useFetchStation: jest.fn()
}))



describe("StationsTable", ()=>{

    // because stations list is virtualized, dom height and widht needs to be mocked
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

    beforeEach(() => {
        Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 50 });
        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 50 });
		useFetchStation.mockImplementation(() => ({}));
	});

    afterEach(() => {
        Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
		jest.clearAllMocks();
	});



    it("Renders loading", async ()=>{
        // const queryClient = new QueryClient()

		useFetchStation.mockImplementation(() => ({ isLoading: true }));

        const {container} = render(<StationsTable/>)

        await waitFor(()=>{
          
            // screen.debug(undefined, 100000)
              // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
              expect(container.getElementsByClassName('loading_body').length).toBe(1)
  
          })

    })



    it("Renders content", async ()=>{
        // const queryClient = new QueryClient()

        const mockedProductData = {
			name:"Testiasema",
            station_id:1,
            active:true,
            date_added: '2022-12-07T20:04:38.140000',
            modified: null
		};
		useFetchStation.mockImplementation(() => ({ isLoading: false, data: [mockedProductData], isError:false }));

        render(<StationsTable/>)

        await waitFor(()=>{
          
            // screen.debug(undefined, 100000)
              screen.getByText('Testiasema')
  
          })

    })

    it("Renders error", async ()=>{
        // const queryClient = new QueryClient()

		useFetchStation.mockImplementation(() => ({ isLoading: false, isError:true }));

        render(<StationsTable/>)

        await waitFor(()=>{
          
            // screen.debug(undefined, 100000)
            screen.getByText('Error!')
  
          })

    })

})




// test("renders content", async () =>{


//     const mockedProductData = {
//         name:"Testiasema",
//         station_id:1,
//     };
//     useFetchStation.mockImplementation(() => ({isLoading: false, data: [mockedProductData], isError:false}));


//       render(
//       <StationsTable />
//       );

//       await waitFor(()=>{
          
//           screen.debug()
//             screen.getByText('Id')

//         })





// })