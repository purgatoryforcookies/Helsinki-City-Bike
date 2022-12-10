import React,{ useState } from 'react'
import "./journeyTable.scss"
import { journeyTableTheme } from './tableConfig'
import { useFetchJourney } from '../../services/hooks/useFetchJourney';
import { SortToggleType, HeaderCellSort } from '@table-library/react-table-library/sort';
import { useSort } from '@table-library/react-table-library/sort';
import {Table, Header,  
  HeaderRow, Body,  
  Row, Cell,} from '@table-library/react-table-library/table';

import { useTheme } from '@table-library/react-table-library/theme';
// import SearchBox from '../searchBox/searchBox'

import Loading from '../loading/loading'




function JourneyTable() {

  const theme = useTheme(journeyTableTheme);
  const [sortkey, setSortkey] = useState()

  const { isError, data, isLoading } = useFetchJourney(sortkey)

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },

    {
      sortToggleType: SortToggleType.AlternateWithReset,
      sortFns: {}
    },
  );

  function onSortChange(action, state) {
    setSortkey(state)

  }

  // if (!data && isLoading){
  //   return (
  //     <div className='journeyTable_comp'>
  //       <Loading/>
  //     </div>
  //   )
  // }

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
                  <Cell>
                      <Loading/>
                  </Cell>

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
                )
                )
              }
            </Body>
          </>
        )}
      </Table>

    </div>
  )

}

export default JourneyTable
