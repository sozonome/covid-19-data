import { Box } from "@chakra-ui/core";

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
        <HeroSection />
        <GlobalData />
        <IndonesiaData />
        <CountryData />
      </Box>
    </Layout>
  );
};

export default Home;
