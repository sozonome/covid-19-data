import { Box } from "@chakra-ui/core";

import StatCard from "./components/StatCard";

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
    <Box>
      <StatCard
        value={confirmedValue}
        title="confirmed"
        color="orange.800"
        valueColor="yellow.400"
        titleColor="yellow.500"
      />
      <StatCard
        value={recoveredValue}
        title="recovered"
        color="teal.700"
        valueColor="teal.400"
        titleColor="green.400"
      />
      <StatCard
        value={deathsValue}
        title="deaths"
        color="red.800"
        valueColor="red.300"
        titleColor="red.400"
      />
    </Box>
  );
};

export default GlobalStat;
