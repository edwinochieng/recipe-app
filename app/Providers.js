import React, { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavouritesProvider from "./context";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesProvider>{children}</FavouritesProvider>
    </QueryClientProvider>
  );
}
