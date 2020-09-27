import { Box, Flex } from "@chakra-ui/core";

import Error from "../Error";
import Loading from "../Loading";
import { StatWrap } from "./components";

import { useINAdata } from "../../helpers";

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
      <Box>
        {console.log(regionData)}
        <StatWrap
          value={regionData.numbers.infected}
          title="confirmed"
          valueColor="yellow.400"
          titleColor="yellow.500"
        />
        <Flex marginTop={-6}>
          <StatWrap
            value={regionData.numbers.recovered}
            title="recovered"
            valueColor="teal.400"
            titleColor="green.400"
          />
          <Box marginLeft="auto">
            <StatWrap
              value={regionData.numbers.fatal}
              title="deaths"
              valueColor="red.300"
              titleColor="red.400"
              textAlign="right"
            />
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default INARegionStat;
