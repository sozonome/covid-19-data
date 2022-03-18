import MotionBox from "../motion/MotionBox";

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
    <MotionBox
      variants={{
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
      }}
      initial="before"
      animate="after"
      marginBottom={8}
      display={flex ? "flex" : undefined}
      flexWrap={flex ? "wrap" : "inherit"}
    >
      <StatCard
        asText
        value={confirmedValue}
        title="confirmed"
        valueColor={flex ? "yellow.400" : undefined}
        titleColor={flex ? "yellow.500" : undefined}
        flex={flex}
      />
      {treatedValue && (
        <StatCard
          asText
          value={treatedValue}
          title="treated"
          valueColor={flex ? "orange.400" : undefined}
          titleColor={flex ? "orange.400" : undefined}
          flex={flex}
        />
      )}
      <StatCard
        asText
        value={recoveredValue}
        title="recovered"
        valueColor={flex ? "teal.400" : undefined}
        titleColor={flex ? "green.400" : undefined}
        flex={flex}
      />
      <StatCard
        asText
        value={deathsValue}
        title="deaths"
        valueColor={flex ? "red.300" : undefined}
        titleColor={flex ? "red.400" : undefined}
        flex={flex}
      />
    </MotionBox>
  );
};

export default LocalStat;
