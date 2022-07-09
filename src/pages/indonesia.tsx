import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import type { GetStaticProps } from "next";
import Link from "next/link";

import { Additions, Cumulative } from "lib/components/indonesiaSections";
import Layout from "lib/layout";
import { fetchINAData } from "lib/services/apicovid19indonesia-v2/indonesia-stat";
import type { INADataResponse } from "lib/services/apicovid19indonesia-v2/indonesia-stat/types";

type IndonesiaPageProps = {
  inaDataFallback?: INADataResponse;
};

const Indonesia = ({ inaDataFallback }: IndonesiaPageProps) => {
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
        <Additions inaDataFallback={inaDataFallback} />
        <Cumulative inaDataFallback={inaDataFallback} />
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

export const getStaticProps: GetStaticProps<IndonesiaPageProps> = async () => {
  const inaDataFallback = await fetchINAData();

  return {
    props: { inaDataFallback },
    revalidate: 60,
  };
};

export default Indonesia;
