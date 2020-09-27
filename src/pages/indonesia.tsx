import { Box, Button, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

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
        boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
      >
        <Text textAlign="center" fontSize="0.75rem">
          data source: dekontaminasi.com
        </Text>
        <Region />
        <Hospital />
      </Box>
      <Cumulative />
      <Box>
        <Link href="/" passHref>
          <Button as="a" variantColor="orange" isFullWidth>
            back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default Indonesia;
