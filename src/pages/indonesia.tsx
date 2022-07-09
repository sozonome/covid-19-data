import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

import { Additions, Cumulative } from "lib/components/indonesiaSections";
import Layout from "lib/layout";

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
      <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} gap={2}>
        <Additions />
        <Cumulative />
      </Grid>

      <Box>
        <Link href="/" passHref>
          <Button as="a" colorScheme="purple" isFullWidth>
            back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default Indonesia;
