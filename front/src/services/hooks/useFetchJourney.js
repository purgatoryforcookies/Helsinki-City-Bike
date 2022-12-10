import { useQuery} from "react-query"
import { getAll } from "../journeys"

export const useFetchJourney = (params) =>{


    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['journeys', params],
        queryFn: getAll
        },
        {
            keepPreviousData: true
          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
