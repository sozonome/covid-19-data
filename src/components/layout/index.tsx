import { Box } from "@chakra-ui/core";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: any;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Box backgroundColor="gray.100" minHeight="100vh" paddingBottom={100}>
      <Box>
        <Meta title={title} />
        <Header />
        <Box
          maxWidth={800}
          margin="0 auto"
          position="relative"
          top={100}
          color="gray.600"
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
