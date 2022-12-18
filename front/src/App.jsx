import Journeys from "./components/journeyTable/journeys";
import StationsTable from "./components/stationsTable/stationsTable";
import NavBar from "./components/navBar/navBar";
import DynamicIsland from "./components/dynamicIsland/dynamicIsland";
import { QueryClientProvider, QueryClient } from "react-query"
import ModalBody from "./components/modal/modal";

import "./App.css"
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000
    }
  }
})


function App() {

  const [stationSelection, setStationSelection] = useState(1)
  const [modalState, setModalState] = useState(false)

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div className="appHeader">
          <NavBar modal={setModalState}/>
        </div>
        <div className="lmargin">

        </div>
        <div className="rmargin">

        </div>
        <div className="journies">
          <Journeys />

        </div>
        <div className="stations">
          <StationsTable handleSelection={(id) => setStationSelection(id)} />
        </div>
        <div className="dynamicIsland">
          {stationSelection ? <DynamicIsland selected={stationSelection} /> : null}
        </div>

        <ModalBody modalState={modalState} handleState={setModalState}/>

      </QueryClientProvider>

    </div>
  );
}

export default App;
