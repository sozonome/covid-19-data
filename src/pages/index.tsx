import { Box, Flex } from "@chakra-ui/core";

import Layout from "../components/layout";
import {
  HeroSection,
  GlobalData,
  IndonesiaData,
  CountryData,
} from "../components/mainSections";

const Home = () => {
  return (
    <Layout title="Home">
      <Box mb={8} w="full">
        <Flex wrap="wrap">
          <HeroSection />
          <GlobalData />
        </Flex>
        <Flex wrap="wrap" marginY={8} alignItems="top">
          <CountryData />
          <IndonesiaData />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Home;
