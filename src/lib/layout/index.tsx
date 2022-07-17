import { Box, useColorMode } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.900"}
      minHeight="100vh"
      paddingBottom={100}
      transition="0.5s ease-out"
    >
      <Box>
        <Meta />
        <Header />
        <Box
          maxWidth={800}
          margin="0 auto"
          position="relative"
          top={100}
          color={colorMode === "light" ? "gray.600" : "white"}
          padding={4}
        >
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
