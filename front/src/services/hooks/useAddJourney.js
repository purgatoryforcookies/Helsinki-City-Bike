import { useQuery} from "react-query"
import { addJourney } from "../journeys"

export const useAddJourney = (params) =>{


    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['addJourneys', params],
        queryFn: addJourney
        },
        {
            keepPreviousData: true
          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
