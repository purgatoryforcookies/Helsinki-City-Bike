import JourneyTable from "./components/journeyTable/journeyTable";
import Nav from "./components/nav/nav";
// import StationsTable from "./components/stationsTable/stationsTable";
import AddJourney from "./components/addJourney/addJourney";
import { QueryClientProvider, QueryClient } from "react-query"
import store from "./services/store/store"
import { Provider } from 'react-redux'

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
      <Provider store={store}>
    <QueryClientProvider client={queryClient}>

      <div className="App">
        <Nav/>
        <JourneyTable />
        {/* <StationsTable /> */}
        <AddJourney/>

      </div>
    </QueryClientProvider>
      </Provider>
  );
}

export default App;
