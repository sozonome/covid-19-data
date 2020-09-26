import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "fontsource-jost/latin.css";

import Layout from "../components/layout";

import customTheme from "../styles/customTheme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
