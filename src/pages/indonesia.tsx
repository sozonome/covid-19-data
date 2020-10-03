import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

import Layout from "../components/layout";
import {
  Additions,
  Cumulative,
  RegionHospitalWrapper,
} from "../components/indonesiaSections";

const Indonesia = () => {
  return (
    <Layout>
      <Heading textAlign="center" marginY={8}>
        Indonesia
      </Heading>
      <Flex wrap="wrap">
        <Additions />
        <RegionHospitalWrapper />
      </Flex>
      <Flex>
        <Cumulative />
      </Flex>
      <Box>
        <Link href="/" passHref>
          <Button as="a" variantColor="purple" isFullWidth>
            back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default Indonesia;
