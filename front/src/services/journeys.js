import axios from 'axios'
import qs from 'qs'
const url = '/api/journey/'


const getAll = (data) =>{
    console.log(data);

    const body = {
        limit:10,
        sortkey: data.queryKey[1]
    }

    const request = axios.post(url+"fetch", body, {headers: {
        'content-type': 'application/json',
    }} )
    return request.then(res => res.data).catch(err => err)

}


export {getAll}



















