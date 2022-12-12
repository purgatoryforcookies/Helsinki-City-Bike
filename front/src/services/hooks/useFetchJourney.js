import { useQuery} from "react-query"
import { getAll } from "../journeys"
import { useSelector } from 'react-redux';


export const useFetchJourney = (params) =>{


    const {isError, data, error, isFetching, isLoading, refetch} = useQuery({
        queryKey:['journeys', params],
        queryFn: getAll,
        enabled: true
        },
        {
            keepPreviousData: true
          }
    )

    return {isError, data, error, isFetching, isLoading, refetch}
}
