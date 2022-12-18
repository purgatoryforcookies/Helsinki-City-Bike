import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LeaderBoard from './leaderBoard'
import { useFetchStation } from '../../../../services/hooks/useFetchStation'

jest.mock("../../../../services/hooks/useFetchStation", ()=>({
    useFetchStation: jest.fn()
}))

describe("Leaderboard", ()=>{

    beforeEach(() => {
 
		useFetchStation.mockImplementation(() => ({}));
	});

    afterEach(() => {
     
		jest.clearAllMocks();
	});

    test("Renders leaderboard", async() =>{

        const mockStationData = [
            {station_id: 1, name: "TestStationName1"},
            {station_id: 2, name: "TestStationName2"},
            {station_id: 3, name: "TestStationName3"},
            {station_id: 4, name: "TestStationName4"},
            {station_id: 5, name: "TestStationName5"},
            {station_id: 6, name: "TestStationName6"}
        ]
        const mockLeaderboardData = [
            {
                "id": 1,
                "count": 529
            },
            {
                "id": 2,
                "count": 504
            },
            {
                "id": 3,
                "count": 489
            },
            {
                "id": 4,
                "count": 485
            },
            {
                "id": 5,
                "count": 473
            }
        ]



        await useFetchStation.mockImplementation(() => ({ isLoading: false, data: mockStationData, isError:false }));

        const { container } = render(<LeaderBoard title='TestTitle' subtitle='testSubtitle' leaderboardData={mockLeaderboardData}/>)

            screen.getByText('504')
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            expect(container.getElementsByClassName('leaderboardResult').length).toBe(5)
            screen.getByText('TestStationName1')
            screen.getByText('TestStationName5')
            screen.getByText('TestTitle')
            screen.getByText('testSubtitle')
            
    })

    test("Renders leaderboard when stationdata is error", async() =>{

       
        const mockLeaderboardData = [
            {
                "id": 1,
                "count": 529
            },
            {
                "id": 2,
                "count": 504
            },
            {
                "id": 3,
                "count": 489
            },
            {
                "id": 4,
                "count": 485
            },
            {
                "id": 5,
                "count": 473
            }
        ]



        await useFetchStation.mockImplementation(() => ({ isLoading: false, data: [], isError:true }));

        const { container } = render(<LeaderBoard title='TestTitle' subtitle='testSubtitle' leaderboardData={mockLeaderboardData}/>)

            screen.getByText('504')
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            expect(container.getElementsByClassName('leaderboardResult').length).toBe(5)
            expect(screen.getAllByText('Error').length).toBe(5)
            screen.getByText('TestTitle')
            screen.getByText('testSubtitle')
            
    })

})