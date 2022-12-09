import { useQuery } from "react-query"
import { getAll } from "../journeys"

export const useFetchJourney = (sortkey) =>{

    const sortkey_ = "a"

    const {isError, data, error, isLoading} = useQuery(
        ['journeys', sortkey_],
        getAll,
        {staleTime: 60000}
    )

    return {isError, data, error, isLoading}
}
