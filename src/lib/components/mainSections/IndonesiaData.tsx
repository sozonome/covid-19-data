import { Box, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import { LocalStat } from "lib/components/stats";
import { useCountryStat } from "lib/services/covid-19-mathdroid/country-stat";

const LastUpdatedText = dynamic(() => import("./components/LastUpdatedText"), {
  ssr: false,
});

const IndonesiaData = () => {
  const { data, isLoading, isError } = useCountryStat("IDN");

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <Box
      textAlign="center"
      background="linear-gradient(29.55deg, #822727 0%, #ED64A6 100%);"
      borderRadius={15}
      paddingBottom={8}
      paddingTop={1}
      boxShadow="0px 20px 20px -16px rgba(0, 0, 0, 0.25);"
      color="white"
      flexBasis={["100%", "100%", "45%"]}
      marginLeft={["none", "none", "5%"]}
    >
      {/* Head */}
      <Box marginY={8}>
        <Heading fontSize="1.5rem" fontWeight="500" alignSelf="center">
          Indonesia
        </Heading>
        <LastUpdatedText time={data.lastUpdate} withTime={false} />
      </Box>

      {/* Stats */}
      <LocalStat
        confirmedValue={data.confirmed.value}
        recoveredValue={data.recovered.value}
        deathsValue={data.deaths.value}
      />

      {/* More Details Button */}
      <Text
        as={Link}
        href="/indonesia"
        fontWeight="500"
        textDecoration="underline"
        textAlign="center"
      >
        More Details
      </Text>
    </Box>
  );
};

export default IndonesiaData;
