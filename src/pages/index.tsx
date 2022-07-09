import { Box, Flex } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import {
  HeroSection,
  GlobalData,
  IndonesiaData,
  CountryData,
} from "lib/components/mainSections";
import Layout from "lib/layout";

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

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
