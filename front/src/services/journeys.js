import axios from 'axios'
import moment from 'moment-timezone';
const url = '/api/journey/'

const getAll = ({queryKey}) =>{

    const body = {
        limit:20,
        sortkey: queryKey[1].sortkey,
        searchkey: queryKey[1].searchkey,
        timeframe: 
            {start: moment(queryKey[1].departure).local().format(), 
                end:moment(queryKey[1].arrival).local().format()}
    }
    console.log(body);

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
    // .catch(err=> err)

}



export {getAll, AddJourney}



















