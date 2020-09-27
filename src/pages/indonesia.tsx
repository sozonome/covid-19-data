import { Box, Heading, Text } from "@chakra-ui/core";

import {
  Additions,
  Cumulative,
  Hospital,
  Region,
} from "../components/indonesiaSections";
import Layout from "../components/layout";

const Indonesia = () => {
  return (
    <Layout>
      <Heading textAlign="center" marginY={8}>
        Indonesia
      </Heading>
      <Additions />
      <Box
        backgroundColor="orange.700"
        padding={4}
        marginY={4}
        borderRadius={15}
      >
        <Text textAlign="center" fontSize="0.75rem">
          data source: dekontaminasi.com
        </Text>
        <Region />
        <Hospital />
      </Box>
      <Cumulative />
    </Layout>
  );
};

export default Indonesia;
