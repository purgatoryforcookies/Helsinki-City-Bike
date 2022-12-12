import {useMutation } from "react-query"
import { AddJourney } from "../journeys"

export const useAddJourney = () =>{

    const {mutate, isLoading ,isError, error, isSuccess} = useMutation(AddJourney, {

    })

    return {mutate, isLoading, isError, error, isSuccess}
}
