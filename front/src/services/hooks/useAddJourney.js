import { useQuery} from "react-query"
import { AddJourney } from "../journeys"

export const useAddJourney = (params) =>{


    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['addJourneys', params],
        queryFn: AddJourney,
        enabled: false,
        retry: false
        },
        {
            keepPreviousData: false,
            
          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
