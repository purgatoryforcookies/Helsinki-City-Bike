import { useQuery } from "react-query"
import { searchStation } from "../stations"

export const useSearchStation = (params) =>{
    const { isError, data, isLoading , refetch} = useQuery(
        ['Searchstations', params],
        searchStation,
        {
            keepPreviousData: true,
            cacheTime: 0,
            staleTime: 10000
        }
    )

    return { isError, data, isLoading , refetch}
}
