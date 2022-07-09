import { Flex } from "@chakra-ui/react";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import MotionBox from "lib/components/motion/MotionBox";
import { useCountryStat } from "lib/services/covid-19-mathdroid/country-stat";

import { StatWrap } from "./components";

type CountryStatProps = {
  country: string;
};

const CountryStat = ({ country }: CountryStatProps) => {
  const { data, isError, isLoading } = useCountryStat(country);

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <MotionBox
      variants={{
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
      }}
      initial="before"
      animate="after"
    >
      <Flex>
        <StatWrap
          value={data.confirmed.value}
          title="confirmed"
          valueColor="orange.500"
          titleColor="orange.600"
          textAlign="left"
          flexBasis="33%"
        />
        <StatWrap
          value={data.recovered.value}
          title="recovered"
          valueColor="teal.400"
          titleColor="green.400"
          textAlign="center"
          flexBasis="33%"
        />
        <StatWrap
          value={data.deaths.value}
          title="deaths"
          valueColor="red.300"
          titleColor="red.400"
          textAlign="right"
          flexBasis="33%"
        />
      </Flex>
    </MotionBox>
  );
};

export default CountryStat;
