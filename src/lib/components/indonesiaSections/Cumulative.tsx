import { Box, Heading, Text } from "@chakra-ui/react";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import { LocalStat } from "lib/components/stats";
import { useINAData } from "lib/services/apicovid19indonesia-v2/indonesia-stat";
import { dateFormatLong } from "lib/utils/dateFormat";

const Cumulative = () => {
  const { data, isLoading, isError } = useINAData();

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <Box flexBasis={["100%", "100%", "50%"]}>
      <Box textAlign="center">
        <Heading fontSize="1.5rem" fontWeight="500" alignSelf="center">
          Cumulative Stats
        </Heading>
        <Text fontSize="0.75rem" fontWeight="400">
          Last Updated: {dateFormatLong(data.total.lastUpdate)}
        </Text>
        <Text fontSize="0.6rem">
          data source : Reynadi531/api-covid19-indonesia-v2
        </Text>
      </Box>
      <LocalStat
        confirmedValue={data.total.positif}
        treatedValue={data.total.dirawat}
        recoveredValue={data.total.sembuh}
        deathsValue={data.total.meninggal}
        flex
      />
    </Box>
  );
};

export default Cumulative;
