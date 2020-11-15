import { Box, useColorMode } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: any;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.900"}
      minHeight="100vh"
      paddingBottom={100}
    >
      <Box>
        <Meta title={title} />
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
