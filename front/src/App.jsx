import Journeys from "./components/journeyTable/tableJourneys";
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
    <div className="App">

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Journeys />

          <AddJourney />


        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
