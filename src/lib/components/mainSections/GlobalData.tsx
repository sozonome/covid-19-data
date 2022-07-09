import { Box, Heading, Text } from "@chakra-ui/react";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import { GlobalStat } from "lib/components/stats";
import { useGlobalStat } from "lib/services/covid-19-mathdroid/global-stat";
import { dateFormatLong } from "lib/utils/dateFormat";

const GlobalData = () => {
  const { data, isLoading, isError } = useGlobalStat();

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <Box
      flexBasis={["100%", "100%", "50%"]}
      paddingLeft={["none", "none", "5%"]}
    >
      {/* Head */}
      <Box marginY={8}>
        <Heading fontSize="2.25rem" fontWeight="500" alignSelf="center">
          Global Data
        </Heading>
        <Text fontSize="0.75rem" fontWeight="400">
          Last Updated :{dateFormatLong(data.lastUpdate)}
        </Text>
      </Box>

      {/* Stats */}
      <GlobalStat
        confirmedValue={data.confirmed.value}
        recoveredValue={data.recovered.value}
        deathsValue={data.deaths.value}
      />
    </Box>
  );
};

export default GlobalData;
