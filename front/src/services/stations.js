import axios from 'axios'
const url = '/api/station/'


const GetAll = () =>{

    const request = axios.get(url)
    return request.then(res => res.data).catch(err => err)

}

const searchStation = ({queryKey}) =>{
    

    const request = axios.get(url+`/search/?search=${queryKey[1]}`)
    return request.then(res => res.data)

}

const metricPerStation = ({queryKey}) =>{

    const request = axios.get(url+`/dynamic/?station_id=${queryKey[1].station_id}`)
    return request.then(res => res.data)

}


export {GetAll,searchStation, metricPerStation}


