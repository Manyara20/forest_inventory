import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 15, // 15 minutes
        refetchOnWindowFocus: false, 
        staleTime: 60 * 1000*10,
      },
    },
  });