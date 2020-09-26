import { Box, CircularProgress, Flex, Heading, Text } from "@chakra-ui/core";
import { dateFormatLong } from "../helpers/dateFormat";
import { useGlobalStat } from "../helpers/fetchHooks";
import formatNumber from "../helpers/formatNumber";
import GlobalStat from "./stats/GlobalStat";
import StatCard from "./stats/StatCard";

const GlobalData = () => {
  const { data, isLoading, isError } = useGlobalStat();

  if (isLoading)
    return (
      <Box width="100%" textAlign="center">
        <CircularProgress isIndeterminate color="orange" />
      </Box>
    );
  if (isError)
    return (
      <Box>
        <Text>Fail to Fetch Data</Text>
      </Box>
    );

  return (
    <Box>
      {/* Head */}
      <Flex color="orange.300">
        <Heading fontSize="" fontWeight="500" alignSelf="center">
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
