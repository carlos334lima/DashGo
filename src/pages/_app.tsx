import { AppProps } from "next/app";

//@libraries
import { ChakraProvider } from "@chakra-ui/react";

//@styles
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

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
