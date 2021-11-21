import { AppProps } from "next/app";

//@libraries
import { ChakraProvider } from "@chakra-ui/react";

//@styles
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
