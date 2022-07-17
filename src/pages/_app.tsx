import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/jost/latin.css";

import Layout from "lib/layout";
import customTheme from "lib/styles/customTheme";
import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
