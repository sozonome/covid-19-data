import { Flex } from "@chakra-ui/react";

import Error from "../Error";
import Loading from "../Loading";
import { StatWrap } from "./components";

import { useINAdata } from "../../helpers";
import MotionBox from "../motion/MotionBox";

type INARegionStatProps = {
  selectedRegion: string;
};

const INARegionStat = ({ selectedRegion }: INARegionStatProps) => {
  const { data, isError, isLoading } = useINAdata();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (data) {
    const regionData = data.regions.filter(
      (region) => region.name === selectedRegion && region.numbers
    )[0];
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
            value={regionData.numbers.infected}
            textAlign="left"
            flexBasis="33%"
            title="confirmed"
          />
          <StatWrap
            value={regionData.numbers.recovered}
            textAlign="center"
            flexBasis="33%"
            title="recovered"
          />
          <StatWrap
            value={regionData.numbers.fatal}
            textAlign="right"
            flexBasis="33%"
            title="deaths"
          />
        </Flex>
      </MotionBox>
    );
  }
};

export default INARegionStat;
