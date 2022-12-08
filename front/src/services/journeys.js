import axios from 'axios'

const url = '/api/journey/'


const getAll = () =>{

    const request = axios.get(url)
    return request.then(res => res.data).catch(err => err)

}


export {getAll}



















