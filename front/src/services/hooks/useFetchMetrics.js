import { useQuery } from "react-query"
import { metricPerStation } from "../stations"

export const useFetchMetrics = () =>{
    const { isError, data, isLoading } = useQuery(
        ['stations'],
        metricPerStation,
        { staleTime: 60000 }
    )

    return { isError, data, isLoading }
}

