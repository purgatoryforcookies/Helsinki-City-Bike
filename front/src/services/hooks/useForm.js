import { useEffect, useState } from "react";

import { useAddJourney } from '../../services/hooks/useAddJourney';


const useForm = (formState) =>{

    const [formdata, setFormdata] = useState(formState)
    const [freshError, setFreshError] = useState(true)
    const { mutate, isLoading, isError, error, isSuccess} = useAddJourney(formdata)

    const onChangeInput = (param) => {
      const { name, value } = param.target
      setFormdata({ ...formdata, [name]: value })
      setFreshError(false)
    }
  
    const onSubmitForm = (e) => {
        e.preventDefault()
        mutate(formdata)
    }

    useEffect(()=>{
        setFormdata(formState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSuccess])

    useEffect(()=>{
        setFreshError(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isError])


  
    return {
        formdata,
        onChangeInput,
        onSubmitForm,
        isError,
        isLoading,
        error,
        isSuccess,
        freshError
        // data
    }
  }
  
  export default useForm

















