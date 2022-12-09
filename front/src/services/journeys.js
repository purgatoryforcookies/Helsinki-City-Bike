import axios from 'axios'

const url = '/api/journey/'


const getAll = (sortkey) =>{

    const request = axios.get(url, {params:{sortkey:"sortkey"}})
    return request.then(res => res.data).catch(err => err)

}


export {getAll}



















