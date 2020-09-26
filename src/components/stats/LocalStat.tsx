import { Box } from "@chakra-ui/core";

import StatCard from "./components/StatCard";

type LocalStatProps = {
  confirmedValue: number;
  recoveredValue: number;
  deathsValue: number;
};

const LocalStat = ({
  confirmedValue,
  recoveredValue,
  deathsValue,
}: LocalStatProps) => {
  return (
    <Box>
      <StatCard
        asText
        value={confirmedValue}
        title="confirmed"
        valueColor="yellow.400"
        titleColor="yellow.500"
      />
      <StatCard
        asText
        value={recoveredValue}
        title="recovered"
        valueColor="teal.400"
        titleColor="green.400"
      />
      <StatCard
        asText
        value={deathsValue}
        title="deaths"
        valueColor="red.300"
        titleColor="red.400"
      />
    </Box>
  );
};

export default LocalStat;
