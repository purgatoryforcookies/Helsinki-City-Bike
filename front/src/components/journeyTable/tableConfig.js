


const COLUMNS = [
    { label: 'Id', renderCell: (item) => item.ride_id },
    { label: 'Departure', renderCell: (item) => item.departure },
    { label: 'Return', renderCell: (item) => item.arrival },

    { label: 'Departure station', renderCell: (item) => item.departure_station.name },
    { label: 'Return station', renderCell: (item) => item.return_station.name },
    { label: 'Distance (m)', renderCell: (item) => item.distance },
    { label: 'Duration (s)', renderCell: (item) => item.duration },
];




export {COLUMNS}