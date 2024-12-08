import "./App.css";
import Home from "./pages/Home";
import RQProviders from "./services/useQueryhook";

function App() {
  return (
    <RQProviders>
      <Home />
    </RQProviders>
  );
}

export default App;
