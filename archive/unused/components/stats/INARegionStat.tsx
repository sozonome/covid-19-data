import { Flex } from "@chakra-ui/react";

import { useINAdata } from "../../helpers/fetchHooks";
import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import MotionBox from "lib/components/motion/MotionBox";
import { StatWrap } from "lib/components/stats/components";

type INARegionStatProps = {
  selectedRegion: string;
};

const INARegionStat = ({ selectedRegion }: INARegionStatProps) => {
  const { data, isError, isLoading } = useINAdata();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (data) {
    const regionData = data.regions.filter(
      (region: any) => region.name === selectedRegion && region.numbers
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
  return null;
};

export default INARegionStat;
