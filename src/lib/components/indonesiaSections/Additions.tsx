import { Box, Heading, Text } from "@chakra-ui/react";

import Error from "../Error";
import Loading from "../Loading";
import { LocalStat } from "../stats";
import { dateFormatLong, useINAdata2 } from "lib/helpers";

const Additions = () => {
  const { data, isLoading, isError } = useINAdata2();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

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
