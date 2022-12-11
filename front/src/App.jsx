import JourneyTable from "./components/journeyTable/journeyTable";
import StationsTable from "./components/stationsTable/stationsTable";
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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <JourneyTable />
        {/* <StationsTable /> */}
        <AddJourney/>

      </div>
    </QueryClientProvider>
  );
}

export default App;
