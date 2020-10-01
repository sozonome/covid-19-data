import { Flex } from "@chakra-ui/core";

import Error from "../Error";
import Loading from "../Loading";
import { StatWrap } from "./components";

import { useCountryStat } from "../../helpers";
import MotionBox from "../motion/MotionBox";

type CountryStatProps = {
  country: string;
};

const CountryStat = ({ country }: CountryStatProps) => {
  const { data, isError, isLoading } = useCountryStat(country);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

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
