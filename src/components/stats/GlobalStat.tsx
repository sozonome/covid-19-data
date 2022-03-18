import { Flex } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

import { StatCard } from "./components";

type GlobalStatProps = {
  confirmedValue: number;
  recoveredValue: number;
  deathsValue: number;
};

const GlobalStat = ({
  confirmedValue,
  recoveredValue,
  deathsValue,
}: GlobalStatProps) => {
  return (
    <MotionBox
      variants={{
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
      }}
      initial="before"
      animate="after"
    >
      <StatCard
        value={confirmedValue}
        title="confirmed"
        color="linear-gradient(85.21deg, #DD6B20 0%, #F6AD55 100%);"
        valueColor="white"
        titleColor="white"
      />
      <Flex>
        <StatCard
          value={recoveredValue}
          title="recovered"
          color="linear-gradient(71.78deg, #319795 0%, #81E6D9 99.11%);"
          valueColor="white"
          titleColor="white"
          flex
        />
        <StatCard
          value={deathsValue}
          title="deaths"
          color="linear-gradient(69.82deg, #822727 0%, #F56565 100%);"
          valueColor="white"
          titleColor="white"
          flex
        />
      </Flex>
    </MotionBox>
  );
};

export default GlobalStat;
