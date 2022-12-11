import axios from 'axios'
const url = '/api/journey/'


const getAll = (data) =>{

    const body = {
        limit:20,
        sortkey: data.queryKey[1].sortColumn,
        searchkey: data.queryKey[1].searchkey
    }

    if (data.queryKey[1].timeframe !== undefined){
        body.timeframe = data.queryKey[1].timeframe
    }

    const request = axios.post(url+"fetch", body, {headers: {
        'content-type': 'application/json',
    }} )
    return request.then(res => res.data).catch(err => err)

}


const add = (data) =>{

    const body = {
        departure: "2022-12-11T08:43:19.278Z",
        arrival: "2022-12-11T08:43:19.278Z",
        departure_station_id: 0,
        return_station_id: 0,
        distance: 0,
        duration: 0
    }

    const request = axios.post(url, body, {headers: {
        'content-type': 'application/json',
    }} )
    return request.then(res => res.data).catch(err => err)

}



export {getAll, add}



















