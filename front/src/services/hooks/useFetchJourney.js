import { useQuery} from "react-query"
import { getAll } from "../journeys"

export const useFetchJourney = (sortkey, state) =>{


    const {isError, data, error, isFetching, isLoading} = useQuery({
        queryKey:['journeys', sortkey],
        queryFn: getAll
        },
        {
            keepPreviousData: true
          }
    )

    return {isError, data, error, isFetching, isLoading}
}
