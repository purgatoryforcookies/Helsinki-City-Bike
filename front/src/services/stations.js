import axios from 'axios'
const url = '/api/station/'


const GetAll = () =>{

    const request = axios.get(url)
    return request.then(res => res.data).catch(err => err)

}


export {GetAll}


