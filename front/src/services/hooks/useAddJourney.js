import { useQuery} from "react-query"
import { AddJourney } from "../journeys"

export const useAddJourney = (params) =>{


    const {isError, data, error, isFetching, isLoading, refetch, isSuccess} = useQuery({
        queryKey:['addJourneys', params],
        queryFn: AddJourney,
        enabled: false,
        retry: 1
        },
        {
            keepPreviousData: true,
            
          }
    )

    return {isError, data, error, isFetching, isLoading, refetch , isSuccess}
}
