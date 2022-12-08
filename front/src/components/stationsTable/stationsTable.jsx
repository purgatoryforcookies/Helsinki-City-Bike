import React from 'react'
import { getAll } from '../../services/stations'
import {useQuery} from "react-query"
// import "./journeyTable.scss"
import {stationTableTheme} from './tableConfig'
import {Virtualized} from '@table-library/react-table-library/virtualized'
import "./stationsTable.scss"


import {
    Table,
    HeaderRow,
    Row,
    HeaderCell,
    Cell,
  } from '@table-library/react-table-library/table';

import { useTheme } from '@table-library/react-table-library/theme';
import Loading from '../loading/loading'


function StationsTable() {

    const theme = useTheme(stationTableTheme);

    const {isError, data, error, isLoading} = useQuery(
        ['stations'],
        getAll,
        {staleTime: 60000}
    )

    if (isLoading){
      return <div className='stationTable_comp'>
              <Loading/>
            </div>
    }
    if (isError){
        return <p>{error}</p>
    }



  return (
    <div className='stationTable_comp'>
      
      <Table data={{nodes:data}} theme={theme} layout={{custom: true, isDiv:true, fixedHeader:true}}>

        {(tableList) => (
          <>
             <Virtualized
              tableList={tableList}
              rowHeight={30}
              header={() => (

              <HeaderRow>
                <HeaderCell>Id</HeaderCell>
                <HeaderCell>Name</HeaderCell>
              </HeaderRow>
            )}
            

            body={(item) => (
                <Row key={item.id} item={item}>
              
                  <Cell>{item.station_id}</Cell>
                  <Cell>{item.name}</Cell>
                 
                </Row>
        )}
            />
            </>
        )}
      </Table>
    
    </div>
    
  )
  
}

export default StationsTable
