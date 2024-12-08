import { VscLoading } from "react-icons/vsc";
import "./App.css";
import Home from "./pages/Home";
import RQProviders from "./services/useQueryhook";
import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <RQProviders>
      {!loading ? (
        <Home />
      ) : (
        <div className="text-4xl text-white font-bold p-2 text-center flex gap-2 justify-center items-center h-screen">
          <VscLoading className="animate-spin rounded-full border-gray-100 lg:text-6xl text-xl" />
        </div>
      )}
    </RQProviders>
  );
}

export default App;
