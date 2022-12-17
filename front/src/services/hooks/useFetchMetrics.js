import { useQuery } from "react-query"
import { metricPerStation } from "../stations"

export const useFetchMetrics = (params) =>{
    // console.log(params);
    const { isError, data, isLoading } = useQuery(
        ['metrics', params],
        metricPerStation,
        { staleTime: 60000 }
    )


    return { isError, data, isLoading }
}

