import { AppProps } from "next/app";

//@libraries
import { ChakraProvider } from "@chakra-ui/react";

//@styles
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

//@utils
import { makeServer } from "../services/mirageJs";

if (process.env.NODE_ENV !== "development") {
  makeServer() 
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>
  );
}

export default MyApp;
