import { useQuery} from "react-query"
import { getAll } from "../journeys"


export const useFetchJourney = (params, immediate) =>{



    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['journeys', params, immediate],
        queryFn: getAll,
        enabled: !!immediate
        },
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false

          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
