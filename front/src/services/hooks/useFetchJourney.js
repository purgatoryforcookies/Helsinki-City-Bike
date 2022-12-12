import { useQuery} from "react-query"
import { getAll } from "../journeys"


export const useFetchJourney = (params) =>{



    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['journeys', params],
        queryFn: getAll,
        enabled: true
        },
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false

          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
