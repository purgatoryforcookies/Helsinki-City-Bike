
const journeyTableTheme = {

    Table: `
    --data-table-library_grid-template-columns: 50px minmax(80px, 130px) minmax(80px, 130px) minmax(80px, 150px) minmax(80px, 140px) 150px 150px ;
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



export {journeyTableTheme}