import { Box, Flex, Heading, Text } from "@chakra-ui/core";

import Error from "./Error";
import Loading from "./Loading";

import { dateFormatLong } from "../helpers/dateFormat";
import { useGlobalStat, useINAdata } from "../helpers/fetchHooks";
import LocalStat from "./stats/LocalStat";

const IndonesiaData = () => {
  const { data, isLoading, isError } = useINAdata();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box>
      {/* Head */}
      <Box color="white" textAlign="center" marginY={8}>
        <Heading fontSize="1.5rem" fontWeight="500" alignSelf="center">
          Indonesia
        </Heading>
        <Text fontSize="0.75rem" fontWeight="400" color="orange.300">
          Last Updated :{dateFormatLong(data.timestamp)}
        </Text>
      </Box>

      {/* Stats */}
      <LocalStat
        confirmedValue={data.numbers.infected}
        recoveredValue={data.numbers.recovered}
        deathsValue={data.numbers.fatal}
      />
    </Box>
  );
};

export default IndonesiaData;
