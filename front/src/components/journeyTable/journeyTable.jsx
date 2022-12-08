import React from 'react'
import { getAll } from '../../services/journeys'
import {useQuery} from "react-query"
import "./journeyTable.scss"
import {journeyTableTheme} from './tableConfig'
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import SearchBox from '../searchBox/searchBox'

import Loading from '../loading/loading'

function JourneyTable() {

    const theme = useTheme(journeyTableTheme);

    const {isError, data, error, isLoading} = useQuery(
        ['journeys'],
        getAll,
        {staleTime: 60000}
    )

    if (isLoading){
      return <div className='journeyTable_comp'>
              <Loading/>
            </div>
    }
    if (isError){
        return <p>{error}</p>
    }



  return (
    <div className='journeyTable_comp'>
      <Table data={{nodes:data}} theme={theme} layout={{custom: true}}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Id</HeaderCell>
                <HeaderCell>Departure</HeaderCell>
                <HeaderCell>Return</HeaderCell>
                <HeaderCell>Departure station</HeaderCell>
                <HeaderCell>Return station</HeaderCell>
                <HeaderCell>Distance (km)</HeaderCell>
                <HeaderCell>Duration (min)</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.ride_id} item={item}>
                  <Cell>{item.ride_id}</Cell>
                  <Cell>{new Date(item.departure).toLocaleString('Fi')}</Cell>
                  <Cell>{new Date(item.arrival).toLocaleString('Fi')}</Cell>
                  <Cell>{item.departure_station.name }</Cell>
                  <Cell>{item.return_station.name }</Cell>
                  <Cell>{(item.distance/1000).toString()}</Cell>
                  <Cell>{(Math.round(item.duration/60)).toString()}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    
    </div>
  )
  
}

export default JourneyTable
