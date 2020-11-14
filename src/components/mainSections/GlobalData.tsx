import { Box, Heading, Text } from "@chakra-ui/react";

import Error from "../Error";
import Loading from "../Loading";
import { GlobalStat } from "../stats";

import { dateFormatLong } from "../../helpers/dateFormat";
import { useGlobalStat } from "../../helpers/fetchHooks";

const GlobalData = () => {
  const { data, isLoading, isError } = useGlobalStat();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box
      flexBasis={["100%", "100%", "50%"]}
      paddingLeft={["none", "none", "5%"]}
    >
      {/* Head */}
      <Box color="gray.500" marginY={8}>
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
