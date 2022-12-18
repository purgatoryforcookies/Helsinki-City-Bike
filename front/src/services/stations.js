import axios from 'axios'
const url = '/api/station/'


const GetAll = () =>{

    const request = axios.get(url)
    return request.then(res => res.data)

}

const searchStation = ({queryKey}) =>{
    

    const request = axios.get(url+`/search/?search=${queryKey[1]}`)
    return request.then(res => res.data)

}

const metricPerStation = ({queryKey}) =>{

    const request = axios.get(url+`/dynamic/?station_id=${queryKey[1].station_id}&days=${queryKey[1].days}`)
    return request.then(res => res.data)

}


export {GetAll,searchStation, metricPerStation}


