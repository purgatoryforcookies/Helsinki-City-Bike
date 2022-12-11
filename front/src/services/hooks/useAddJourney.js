import { useQuery} from "react-query"
import { add } from "../journeys"

export const useAddJourney = (params) =>{


    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['journeys', params],
        queryFn: add
        },
        {
            keepPreviousData: true
          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
