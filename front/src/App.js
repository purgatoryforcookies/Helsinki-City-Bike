import JourneyTable from "./components/journeyTable/journeyTable";
import StationsTable from "./components/stationsTable/stationsTable";
import {QueryClientProvider, QueryClient} from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">

      <JourneyTable/>
      <StationsTable/>
     
    </div>
    </QueryClientProvider>
  );
}

export default App;
