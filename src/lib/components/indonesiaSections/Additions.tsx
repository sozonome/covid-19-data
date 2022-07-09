import { Box, Heading, Text } from "@chakra-ui/react";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import { LocalStat } from "lib/components/stats";
import { useINAData } from "lib/services/apicovid19indonesia-v2/indonesia-stat";
import type { INADataResponse } from "lib/services/apicovid19indonesia-v2/indonesia-stat/types";
import { dateFormatLong } from "lib/utils/dateFormat";

type AdditionsProps = {
  inaDataFallback?: INADataResponse;
};

const Additions = ({ inaDataFallback }: AdditionsProps) => {
  const { data, isLoading, isError } = useINAData(inaDataFallback);
  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <Box flexBasis={["100%", "100%", "50%"]}>
      <Box textAlign="center">
        <Heading fontSize="1.5rem" fontWeight="500">
          Additions
        </Heading>
        <Text fontSize="0.75rem" fontWeight="400">
          Date: {dateFormatLong(data.penambahan.tanggal, false)}
        </Text>
        <Text fontSize="0.6rem">
          data source : Reynadi531/api-covid19-indonesia-v2
        </Text>
      </Box>
      <LocalStat
        confirmedValue={data.penambahan.positif}
        treatedValue={data.penambahan.dirawat}
        recoveredValue={data.penambahan.sembuh}
        deathsValue={data.penambahan.meninggal}
        flex
      />
    </Box>
  );
};

export default Additions;
