import Table from "./components/journeyTable/journeyTable";
import {QueryClientProvider, QueryClient} from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">

      <Table/>
     
    </div>
    </QueryClientProvider>
  );
}

export default App;
