
const journeyTableTheme = {

    Table: `
    --data-table-library_grid-template-columns: 90px minmax(80px, 150px) minmax(80px, 150px) minmax(80px, 250px) minmax(80px, 250px) 130px 130px ;
    align-content: start;
    padding-right: 3px
  `,
    Row: `
      cursor: pointer;
      font-size: 14px;
      padding-right: 10px;

      .td {
        padding-top: 3px;
        padding-bottom: 3px;
        margin: 0;
        text-align: center;
      }
      &:hover .td {
        font-weight: 700;
        font-size: 14px;
      }
    `,
    HeaderCell: `
      div > *{
        justify-content: center;
        padding-left: 2px;
      }
     `,

    HeaderRow: `
          .th {
            border-bottom: 1px solid #a0a8ae;
            text-align: center;
            padding-bottom: 5px;
            padding-top: 3px;
            font-size: 15px;
          }
        `,
}

const sortingFunc = {
  ride_id: (array) => array.sort((a, b) => a.ride_id - b.ride_id),
  distance: (array) => array.sort((a, b) => a.distance - b.distance),
  duration: (array) => array.sort((a, b) => a.duration - b.duration),
  departure_station: (array) => array.sort((a, b) => a.departure_station.name.localeCompare(b.departure_station.name)),
  return_station: (array) => array.sort((a, b) => a.return_station.name.localeCompare(b.return_station.name)),
  departure: (array) => array.sort((a, b) => new Date(a.departure) - new Date(b.departure)),
  arrival: (array) => array.sort((a, b) => new Date(a.arrival) - new Date(b.arrival)),
}



export {journeyTableTheme, sortingFunc}