import { useQuery } from "react-query"
import { getAll } from "../journeys"

export const useFetchJourney = () =>{
    const {isError, data, error, isLoading} = useQuery(
        ['journeys'],
        getAll,
        {staleTime: 60000}
    )

    return {isError, data, error, isLoading}
}
