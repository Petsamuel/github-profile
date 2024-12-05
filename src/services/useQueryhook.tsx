import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

interface RQProvider {
  children: JSX.Element;
}

function RQProviders({ children }: RQProvider) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5000,
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default RQProviders;
