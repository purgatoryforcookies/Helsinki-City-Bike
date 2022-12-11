import React, { useEffect } from 'react'
import "./journeyTable.scss"
import { journeyTableTheme } from './tableConfig'
import { useFetchJourney } from '../../services/hooks/useFetchJourney';
import { SortToggleType, HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import {
  Table, Header,
  HeaderRow, Body,
  Row, Cell,
} from '@table-library/react-table-library/table';

import { useTheme } from '@table-library/react-table-library/theme';
import Loading from '../loading/loading'
import { useDispatch } from 'react-redux';
import {setJourneyParams} from "../../services/store/journeySlice"

function JourneyTable() {

  const theme = useTheme(journeyTableTheme);
  const dispatch = useDispatch()
  const { isError, data, isLoading, refetch } = useFetchJourney()
  


  const sort = useSort(
    data,
    {onChange: (a,state)=> {
      refetch()
      return dispatch(setJourneyParams({sortkey:state}))}
    },
    {sortToggleType: SortToggleType.AlternateWithReset,
      sortFns: {
        ride_id: (array) => array.sort((a, b) => a.ride_id - b.ride_id),
        distance: (array) => array.sort((a, b) => a.distance - b.distance),
        duration: (array) => array.sort((a, b) => a.duration - b.duration),
        departure_station: (array) => array.sort((a, b) => a.departure_station.name.localeCompare(b.departure_station.name)),
        return_station: (array) => array.sort((a, b) => a.return_station.name.localeCompare(b.return_station.name)),
        departure: (array) => array.sort((a, b) => new Date(a.departure) - new Date(b.departure)),
        arrival: (array) => array.sort((a, b) => new Date(a.arrival) - new Date(b.arrival)),
      }
    },
  );

  if (isError) {
    return <p>Error!</p>
  }

  const dataToShow = !data ? [] : data

  return (
    <div className='journeyTable_comp'>
      <Table data={{ nodes: dataToShow }} theme={theme} layout={{ custom: true }} sort={sort}>
        {(tableList) => (

          <>
            <Header>
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

            <Body>
              {isLoading ?
                <Row >
                  <Cell></Cell>
                  <Cell></Cell>
                  <Cell></Cell>
                  <Cell><Loading /></Cell>
                </Row>
                : tableList.map((item) => (
                  <Row key={item.ride_id} item={item}>
                    <Cell>{item.ride_id}</Cell>
                    <Cell>{new Date(item.departure).toLocaleString('Fi')}</Cell>
                    <Cell>{new Date(item.arrival).toLocaleString('Fi')}</Cell>
                    <Cell>{item.departure_station.name}</Cell>
                    <Cell>{item.return_station.name}</Cell>
                    <Cell>{(item.distance / 1000).toString()}</Cell>
                    <Cell>{(Math.round(item.duration / 60)).toString()}</Cell>
                  </Row>
                ))
              }
            </Body>
          </>
        )}
      </Table>

    </div>
  )

}

export default JourneyTable
