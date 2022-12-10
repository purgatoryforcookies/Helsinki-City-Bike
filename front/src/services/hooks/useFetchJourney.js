import { useQuery} from "react-query"
import { getAll } from "../journeys"

export const useFetchJourney = (sortkey) =>{


    const {isError, data, error, isLoading} = useQuery(
        ['journeys', sortkey],
        getAll,
        {staleTime: 60000}
    )

    return {isError, data, error, isLoading}
}
