import React, { useState, useEffect, useRef } from 'react'
import { useSearchStation } from '../../services/hooks/useSearchStations'
import ResultCard from './resultCard/resultCard'
import "./searchboxStations.scss"

function SearchboxStations() {

    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebounceSearch] = useState("")
    const [close, setClose] = useState("")

    const {isError, data, isLoading, refetch} = useSearchStation(debouncedSearch)
    const result_list_ref = useRef()

    useEffect(()=>{
        if (close) return

        const valueChange = setTimeout(()=>{
            setDebounceSearch(search)
        }, 500)
    
        return ()=> clearTimeout(valueChange)
    },[search])


    useEffect(()=>{
        document.addEventListener('mousedown', handleListClose)
        return () => document.removeEventListener('mousedown', handleListClose)
    })
    const handleListClose = (e) =>{
        if (!result_list_ref.current.contains(e.target)){
            setClose(true)
        }
    }
    function handleClick(value){
        console.log(value);
        setSearch(value)
        setClose(true)
    }



    const dataToShow = !close ? data : []
      

  return (
    <div className='searchboxStationsBody'>
      <input type="text" onChange={(e)=>setSearch(e.target.value) } value={search} onClick={()=>setClose(false)}/>
      <ul className="results_list" ref={result_list_ref}>
      { dataToShow.map(item =>
        <li className='search_result' key={item.station_id} onClick={()=>handleClick(item.name)}>
            <div className="result_card">
                <ResultCard data={item}/>
            </div>
            
            </li>
        )}

      </ul>
    </div>
  )
}


export default SearchboxStations
