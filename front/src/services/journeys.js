import axios from 'axios'
import moment from 'moment-timezone';
const url = '/api/journey/'

const getAll = ({queryKey}) =>{
    console.log(queryKey);
    
    const body = {
        limit:20,
        sortkey: queryKey[1].sortkey,
        searchkey: queryKey[1].searchkey,
        departure: queryKey[1].departure,
        arrival: queryKey[1].arrival
    }
    const request = axios.post(url+"fetch", body, {headers: {
        'content-type': 'application/json',
    }} )
    return request.then(res => res.data)

}


const AddJourney = (data) =>{

    const request = axios.post(url, data, {headers: {
        'content-type': 'application/json',

    }} )
    return request.then(res => res)
}



export {getAll, AddJourney}



















