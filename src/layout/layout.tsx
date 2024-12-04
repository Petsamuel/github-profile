import Footer from "../components/Footer";
import { Header } from "../components/Header";
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
interface layoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-800 ">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
