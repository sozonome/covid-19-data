import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import { GlobalStat } from "lib/components/stats";
import { useGlobalStat } from "lib/services/covid-19-mathdroid/global-stat";
import type { GlobalDataResponse } from "lib/services/covid-19-mathdroid/global-stat/types";

const LastUpdatedText = dynamic(() => import("./components/LastUpdatedText"), {
  ssr: false,
});

type GlobalDataProps = {
  globalDataFallback?: GlobalDataResponse;
};

const GlobalData = ({ globalDataFallback }: GlobalDataProps) => {
  const { data, isLoading, isError } = useGlobalStat(globalDataFallback);

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <Box
      flexBasis={["100%", "100%", "50%"]}
      paddingLeft={["none", "none", "5%"]}
    >
      {/* Head */}
      <Box marginY={8}>
        <Heading fontSize="2.25rem" fontWeight="500" alignSelf="center">
          Global Data
        </Heading>
        <LastUpdatedText time={data.lastUpdate} />
      </Box>

      {/* Stats */}
      <GlobalStat
        confirmedValue={data.confirmed.value}
        recoveredValue={data.recovered.value}
        deathsValue={data.deaths.value}
      />
    </Box>
  );
};

export default GlobalData;
