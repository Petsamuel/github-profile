import "./App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // optional: how long data remains fresh
      retry: 1, // optional: number of retries on failure
    },
    mutations: {
      retry: 1, // optional: retry mutations
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
