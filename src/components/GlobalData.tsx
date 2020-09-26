import { Box, Flex, Heading, Text } from "@chakra-ui/core";

import Error from "./Error";
import Loading from "./Loading";
import GlobalStat from "./stats/GlobalStat";

import { dateFormatLong } from "../helpers/dateFormat";
import { useGlobalStat } from "../helpers/fetchHooks";

const GlobalData = () => {
  const { data, isLoading, isError } = useGlobalStat();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box>
      {/* Head */}
      <Flex color="orange.300">
        <Heading fontSize="1.125rem" fontWeight="500" alignSelf="center">
          Global Data
        </Heading>
        <Text
          marginLeft="auto"
          fontSize="0.75rem"
          fontWeight="400"
          textAlign="right"
        >
          Last Updated :<br />
          {dateFormatLong(data.lastUpdate)}
        </Text>
      </Flex>

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
