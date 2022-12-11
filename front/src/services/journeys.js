import axios from 'axios'
import moment from 'moment-timezone';
const url = '/api/journey/'

const getAll = ({queryKey}) =>{
    const body = {
        limit:20,
        sortkey: queryKey[1].sortkey,
        searchkey: queryKey[1].searchkey,
        timeframe: 
            {start: moment(queryKey[1].timeframe_start).local().format(), 
                end:moment(queryKey[1].timeframe_end).local().format()}
    }
    console.log(body);

    const request = axios.post(url+"fetch", body, {headers: {
        'content-type': 'application/json',
    }} )
    return request.then(res => res.data).catch(err => err)

}


const AddJourney = ({queryKey}) =>{



    const request = axios.post(url, queryKey[1], {headers: {
        'content-type': 'application/json',
    }} )
    return request.then(res => res.data)
    // .catch(err => err)

}



export {getAll, AddJourney}



















