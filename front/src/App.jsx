import Journeys from "./components/journeyTable/journeys";
import StationsTable from "./components/stationsTable/stationsTable";
import AddJourney from "./components/addJourney/addJourney";
import { QueryClientProvider, QueryClient } from "react-query"

import "./App.css"

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000
      }
    }
  })


function App() {
  

  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
      <div className="appHeader">
        
      </div>
      <div className="lmargin">

      </div>
      <div className="rmargin">

      </div>
      <div className="journies">
          <Journeys />

      </div>
      <div className="stations">
        <StationsTable/>
      </div>
      <div className="dynamicIsland">

      </div>



          {/* <AddJourney /> */}


        </QueryClientProvider>

    </div>
  );
}

export default App;
