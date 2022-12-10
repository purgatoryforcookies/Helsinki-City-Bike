import axios from 'axios'
const url = '/api/journey/'


const getAll = (data) =>{
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



















