import { useQuery } from "react-query"
import { getAll } from "../stations"

export const useFetchStation = () =>{
    const { isError, data, isLoading } = useQuery(
        ['stations'],
        getAll,
        { staleTime: 60000 }
    )

    return { isError, data, isLoading }
}

