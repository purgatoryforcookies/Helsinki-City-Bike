import axios from 'axios'
const url = '/api/journey/'


const getAll = (data) =>{

    console.log(data);
    

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


export {getAll}



















