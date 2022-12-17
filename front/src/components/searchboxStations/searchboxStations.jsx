import React, { useState, useEffect, useRef } from 'react'
import { useSearchStation } from '../../services/hooks/useSearchStations'
import ResultCard from './resultCard/resultCard'
import "./searchboxStations.scss"
import { Scrollbars } from 'react-custom-scrollbars-2';

function SearchboxStations({ name, value, onchange, success }) {

    const [debouncedSearch, setDebounceSearch] = useState("")
    const [close, setClose] = useState(true)
    const [search, setSearch] = useState("")

    const { isError, data, isLoading } = useSearchStation(debouncedSearch)
    const result_list_ref = useRef()

    useEffect(() => {
        if (close || isLoading) return

        const valueChange = setTimeout(() => {
            setDebounceSearch(search)
        }, 500)
        return () => clearTimeout(valueChange)
    }, [search])

    useEffect(() => {
        if (!value) {
            setSearch("")
        }
    }, [value])

    useEffect(() => {
        document.addEventListener('mousedown', handleListClose)
        return () => document.removeEventListener('mousedown', handleListClose)
    })
    const handleListClose = (e) => {
        if (!result_list_ref.current.contains(e.target)) {
            setClose(true)
        }
    }
    function handleClick(value) {
        onchange({ target: { name: name, value: value.station_id } })
        setClose(true)
        setSearch(`${value.name} - ID: ${value.station_id}`)

    }


    const dataToShow = !close ? data : []


    return (
        <div className='searchboxStationsBody' ref={result_list_ref}>
            <input type="text"
                name={name}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onClick={() => setClose(false)}
                autoComplete='off' />
            {!close && <div className="results_list" >
                <Scrollbars style={{ width: '100%', height: 300 }}>
                    {dataToShow && dataToShow.map(item =>
                        <div key={item.station_id} onClick={() => handleClick(item)} className="result_card">
                            <ResultCard data={item} />
                        </div>
                    )}
                </Scrollbars>
                {isError && <div>Error!</div>}

            </div>}
        </div>
    )
}


export default SearchboxStations
