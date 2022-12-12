import {useMutation, useQueryClient } from "react-query"
// import queryClient from "../../App"
import { AddJourney } from "../journeys"

export const useAddJourney = (params) =>{

    const queryClient = useQueryClient();


    const {mutate, isLoading ,isError, error, isSuccess} = useMutation(AddJourney, {
        onSuccess: data =>{
            
        },
        onError: (err) => {
            return err
          },
          onSettled: () => {
            queryClient.invalidateQueries('create');
          }
    })

    return {mutate, isLoading, isError, error, isSuccess}
}
