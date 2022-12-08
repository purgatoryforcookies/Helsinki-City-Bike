const stationTableTheme = {

    Table: `
    --data-table-library_grid-template-columns: 50px minmax(80px, 150px);
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
            border-bottom: 1px solid #a0a8ae;
            text-align: center;
            padding-bottom: 5px;
            padding-top: 3px;
            font-size: 15px;
            font-weight: 700;
        `,
         


}



export {stationTableTheme}