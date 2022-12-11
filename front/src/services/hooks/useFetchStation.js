import { useQuery } from "react-query"
import { GetAll } from "../stations"

export const useFetchStation = () =>{
    const { isError, data, isLoading } = useQuery(
        ['stations'],
        GetAll,
        { staleTime: 60000 }
    )

    return { isError, data, isLoading }
}

