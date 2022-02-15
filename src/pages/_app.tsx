import { AppProps } from "next/app";

//@libraries
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//@styles
import { theme } from "@/styles/theme";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

//@utils
import { makeServer } from "@/services/mirageJs";
import { dashGo } from "@/utils/constants";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
      {dashGo.development && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
