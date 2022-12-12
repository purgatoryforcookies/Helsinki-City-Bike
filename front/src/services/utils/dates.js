


const timeToSecMin = (departure, arrival) =>{

    const time = ((new Date(arrival).getTime() - new Date(departure).getTime())/1000)
    const minutes = Math.floor(time / 60)
    const seconds = time-minutes*60

    return {min: minutes, sec: seconds}

}


const dateToSec = (departure, arrival) =>{

    const time = ((new Date(arrival).getTime() - new Date(departure).getTime())/1000)

    return time

}



export {timeToSecMin, dateToSec}