import React from 'react'
// import { getAll } from '../../services/stations'
// import { useQuery } from "react-query"
// import "./journeyTable.scss"
import { useFetchStation } from '../../services/hooks/useFetchStation'
import { stationTableTheme } from './tableConfig'
import { Virtualized } from '@table-library/react-table-library/virtualized'
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
import SearchBox from '../searchBox/searchBox'
import { useState } from 'react'


function StationsTable() {

    const theme = useTheme(stationTableTheme);
    const [search, setSearch] = useState("")


    const { isError, data, isLoading } = useFetchStation()

    if (isLoading) {
        return <div className='stationTable_comp'>
            <Loading />
        </div>
    }
    if (isError) {
        return <p>Error!</p>
    }

    function set_filter(e) {
        setSearch(e.target.value)
    }

    const stationsToShow = !search
        ? data
        : data.filter(station => (station.name.toLowerCase().includes(search.toLowerCase()) ||
            station.station_id.toString().toLowerCase().includes(search.toLowerCase())))



    return (
        <div className='stationTable_comp'>
            <SearchBox handleSearch={set_filter} />

            <Table data={{ nodes: stationsToShow }} theme={theme} layout={{ custom: true, isDiv: true, fixedHeader: true }}>
                {(tableList) => (
                    <>
                        <Virtualized
                            tableList={tableList}
                            rowHeight={28}
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
