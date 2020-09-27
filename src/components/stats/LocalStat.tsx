import { Box } from "@chakra-ui/core";

import { StatCard } from "./components";

type LocalStatProps = {
  confirmedValue: number;
  treatedValue?: number;
  recoveredValue: number;
  deathsValue: number;
  flex?: boolean;
};

const LocalStat = ({
  confirmedValue,
  treatedValue,
  recoveredValue,
  deathsValue,
  flex = false,
}: LocalStatProps) => {
  return (
    <Box
      marginBottom={8}
      display={flex && "flex"}
      flexWrap={flex ? "wrap" : "inherit"}
    >
      <StatCard
        asText
        value={confirmedValue}
        title="confirmed"
        valueColor="yellow.400"
        titleColor="yellow.500"
        flex={flex}
      />
      {treatedValue && (
        <StatCard
          asText
          value={treatedValue}
          title="treated"
          valueColor="orange.400"
          titleColor="orange.400"
          flex={flex}
        />
      )}
      <StatCard
        asText
        value={recoveredValue}
        title="recovered"
        valueColor="teal.400"
        titleColor="green.400"
        flex={flex}
      />
      <StatCard
        asText
        value={deathsValue}
        title="deaths"
        valueColor="red.300"
        titleColor="red.400"
        flex={flex}
      />
    </Box>
  );
};

export default LocalStat;
