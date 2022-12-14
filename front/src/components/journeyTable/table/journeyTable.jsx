import React from 'react'
import "./journeyTable.scss"
import { journeyTableTheme, sortingFunc } from './tableConfig'
import { SortToggleType, HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import {
  Table, Header,
  HeaderRow, Body,
  Row, Cell,
} from '@table-library/react-table-library/table';

import { useTheme } from '@table-library/react-table-library/theme';
import Loading from '../../loading/loading'


function JourneyTable({ data, onchange, isloading, iserror, name }) {

  const theme = useTheme(journeyTableTheme);  

  const sort = useSort(data,
    { onChange: (_, state) => onchange({ target: { name: name, value: state } }) },
    {
      sortToggleType: SortToggleType.AlternateWithReset,
      sortFns: sortingFunc
    });

  if (iserror) {
    return
  }
  

  const dataToShow = !data ? [] : data

  return (
    <div className='journeyTable_comp'>
        <Table data={{ nodes: dataToShow }} theme={theme} layout={{ custom: true, isDiv: false, fixedHeader: true }} sort={sort}>
        
          {(tableList) => (

            <>

              <Header >
                <HeaderRow>
                  <HeaderCellSort sortKey='ride_id'>Id</HeaderCellSort>
                  <HeaderCellSort sortKey='departure'>Departure</HeaderCellSort>
                  <HeaderCellSort sortKey='arrival'>Return</HeaderCellSort>
                  <HeaderCellSort sortKey='departure_station'>Departure station</HeaderCellSort>
                  <HeaderCellSort sortKey='return_station'>Return station</HeaderCellSort>
                  <HeaderCellSort sortKey='distance'>Distance (km)</HeaderCellSort>
                  <HeaderCellSort sortKey='duration'>Duration (min)</HeaderCellSort>
                </HeaderRow>
              </Header>




              <Body className='journey_custom_body'>
                {isloading ?
                  <Row >
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell><Loading /></Cell>
                  </Row>
                  : tableList.map((item) => (
                    <Row key={item.ride_id} item={item}>
                      <Cell>{item.ride_id}</Cell>
                      <Cell>{new Date(item.departure+'Z').toLocaleString('Fi')}</Cell>
                      <Cell>{new Date(item.arrival+'Z').toLocaleString('Fi')}</Cell>
                      <Cell>{item.departure_station.name}</Cell>
                      <Cell>{item.return_station.name}</Cell>
                      <Cell>{(item.distance / 1000).toString()}</Cell>
                      <Cell>{(Math.round(item.duration / 60)).toString()}</Cell>
                    </Row>
                  ))
                }
              </Body>
            </>

)
}
        </Table>
    </div>
  )
}

export default JourneyTable
