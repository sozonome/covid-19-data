import { Box, Text } from "@chakra-ui/react";

import Hospital from "./Hospital";
import Region from "./Region";

const RegionHospitalWrapper = () => {
  return (
    <Box
      background="linear-gradient(29.55deg, #822727 0%, #ED64A6 100%);"
      padding={4}
      marginY={[4, 4, 0]}
      borderRadius={15}
      boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
      color="white"
      flexBasis={["100%", "100%", "50%"]}
    >
      <Text textAlign="center" fontSize="0.75rem">
        data source: dekontaminasi.com
      </Text>
      <Region />
      <Hospital />
    </Box>
  );
};

export default RegionHospitalWrapper;
