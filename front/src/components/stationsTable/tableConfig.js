const stationTableTheme = {

    Table: `
    --data-table-library_grid-template-columns: 70px minmax(80px, 250px);
    color:white;
    *{
      background-color: #191919;
    }
    `,

    Row: `
    background-color: #F7ECDE;
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

     background-color: #191919;
            border-bottom: 1px solid #a0a8ae;
            text-align: center;
            padding-bottom: 5px;
            padding-top: 3px;
            font-size: 15px;
            font-weight: 700;
        `,
         


}



export {stationTableTheme}