import { useQuery} from "react-query"
import { getAll } from "../journeys"
import { useSelector } from 'react-redux';


export const useFetchJourney = () =>{

    const params = useSelector((state)=> state.search.journeyParams)
    // console.log(params);


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
