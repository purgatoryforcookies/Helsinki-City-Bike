import Journeys from "./components/journeyTable/journeys";
// import StationsTable from "./components/stationsTable/stationsTable";
import AddJourney from "./components/addJourney/addJourney";
import { QueryClientProvider, QueryClient } from "react-query"



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
          <Journeys />

          <AddJourney />


        </QueryClientProvider>

    </div>
  );
}

export default App;
