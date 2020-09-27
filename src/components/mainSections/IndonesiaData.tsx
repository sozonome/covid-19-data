import { Box, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

import Error from "../Error";
import Loading from "../Loading";
import { LocalStat } from "../stats";

import { dateFormatLong } from "../../helpers/dateFormat";
import { useINAdata } from "../../helpers/fetchHooks";

const IndonesiaData = () => {
  const { data, isLoading, isError } = useINAdata();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box
      textAlign="center"
      backgroundColor="gray.800"
      borderRadius={15}
      paddingBottom={8}
      paddingTop={1}
    >
      {/* Head */}
      <Box color="white" marginY={8}>
        <Heading fontSize="1.5rem" fontWeight="500" alignSelf="center">
          Indonesia
        </Heading>
        <Text fontSize="0.75rem" fontWeight="400" color="orange.300">
          Last Updated: {dateFormatLong(data.timestamp, false)}
        </Text>
      </Box>

      {/* Stats */}
      <LocalStat
        confirmedValue={data.numbers.infected}
        recoveredValue={data.numbers.recovered}
        deathsValue={data.numbers.fatal}
      />

      {/* More Details Button */}
      <Link href="/indonesia" passHref>
        <Text
          as="a"
          color="gray.400"
          fontWeight="500"
          textDecoration="underline"
          textAlign="center"
        >
          More Details
        </Text>
      </Link>
    </Box>
  );
};

export default IndonesiaData;
