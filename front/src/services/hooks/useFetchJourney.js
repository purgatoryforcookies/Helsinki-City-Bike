import { useQuery} from "react-query"
import { getAll } from "../journeys"
import { useSelector } from 'react-redux';


export const useFetchJourney = () =>{

    const params = useSelector((state)=> state.journeySettings.journeyParams)

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
