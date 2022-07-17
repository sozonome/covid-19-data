import { Box, Flex } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import {
  HeroSection,
  GlobalData,
  IndonesiaData,
  CountryData,
} from "lib/components/mainSections";
import { fetchCountryList } from "lib/services/covid-19-mathdroid/country-list";
import type { CountryListResponse } from "lib/services/covid-19-mathdroid/country-list/types";
import { fetchGlobalStat } from "lib/services/covid-19-mathdroid/global-stat";
import type { GlobalDataResponse } from "lib/services/covid-19-mathdroid/global-stat/types";

type HomePageProps = {
  globalDataFallback?: GlobalDataResponse;
  countryListFallback?: CountryListResponse;
};

const Home = ({ globalDataFallback, countryListFallback }: HomePageProps) => {
  return (
    <Box mb={8} w="full">
      <Flex wrap="wrap">
        <HeroSection />
        <GlobalData globalDataFallback={globalDataFallback} />
      </Flex>
      <Flex wrap="wrap" marginY={8} alignItems="top">
        <CountryData countryListFallback={countryListFallback} />
        <IndonesiaData />
      </Flex>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const globalDataFallback = await fetchGlobalStat();
  const countryListFallback = await fetchCountryList();

  return {
    props: {
      globalDataFallback,
      countryListFallback,
    },
    revalidate: 60,
  };
};

export default Home;
