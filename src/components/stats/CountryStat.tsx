import { Box, Flex } from "@chakra-ui/core";

import Error from "../Error";
import Loading from "../Loading";

import { useCountryStat } from "../../helpers/fetchHooks";
import StatWrap from "./components/StatWrap";

type CountryStatProps = {
  country: string;
};

const CountryStat = ({ country }: CountryStatProps) => {
  const { data, isError, isLoading } = useCountryStat(country);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box>
      <StatWrap
        value={data.confirmed.value}
        title="confirmed"
        valueColor="yellow.400"
        titleColor="yellow.500"
      />
      <Flex marginTop={-6}>
        <StatWrap
          value={data.recovered.value}
          title="recovered"
          valueColor="teal.400"
          titleColor="green.400"
        />
        <Box marginLeft="auto">
          <StatWrap
            value={data.deaths.value}
            title="deaths"
            valueColor="red.300"
            titleColor="red.400"
            textAlign="right"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CountryStat;
