import { Box, Button, Flex, Heading } from "@chakra-ui/core";
import Link from "next/link";

import Layout from "../components/layout";
import {
  Additions,
  Cumulative,
  RegionHospitalWrapper,
} from "../components/indonesiaSections";
import { Player } from "@lottiefiles/react-lottie-player";

const Indonesia = () => {
  return (
    <Layout>
      <Heading textAlign="center" marginY={8}>
        Indonesia
      </Heading>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/private_files/lf30_oGbdoA.json"
        style={{ height: "150px", width: "150px" }}
      />
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
