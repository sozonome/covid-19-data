import {
  Box,
  Button,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/layout";

const About = () => {
  return (
    <Layout title="About">
      <Box>
        <Heading>About</Heading>

        <Box>
          <Text marginY={2}>
            Developed by{" "}
            <ChakraLink
              href="https://sznm.dev"
              fontWeight="bold"
              textDecoration="underline"
              isExternal
            >
              @sozonome
            </ChakraLink>
          </Text>

          <Text>
            Made using{" "}
            <ChakraLink href="https://nextjs.org/" fontWeight="bold">
              Next.js
            </ChakraLink>{" "}
            and{" "}
            <ChakraLink href="https://chakra-ui.com/" fontWeight="bold">
              Chakra UI
            </ChakraLink>
            .
          </Text>
        </Box>

        <Box marginY={8}>
          <Heading size="md">Powered by:</Heading>
          <Text>
            -{" "}
            <ChakraLink
              href="https://github.com/mathdroid/covid-19-api"
              fontWeight="bold"
              textDecoration="underline"
              isExternal
            >
              @mathdroid's COVID-19 API
            </ChakraLink>
          </Text>
          <Text>
            -{" "}
            <ChakraLink
              href="https://github.com/ariya/dekontaminasi"
              fontWeight="bold"
              textDecoration="underline"
              isExternal
            >
              @ariya's dekontaminasi
            </ChakraLink>
          </Text>
          <Text>
            -{" "}
            <ChakraLink
              href="https://github.com/Reynadi531/api-covid19-indonesia-v2"
              fontWeight="bold"
              textDecoration="underline"
              isExternal
            >
              @Reynaldi531's api-covid19-indonesia-v2
            </ChakraLink>
          </Text>
        </Box>

        <Flex alignItems="center">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/private_files/lf30_oGbdoA.json"
            style={{ height: "100px", width: "100px", margin: "0" }}
          />
          <Text>
            animation was illustrated by{" "}
            <ChakraLink
              href="https://vijayverma.co/"
              isExternal
              fontWeight={500}
            >
              Vijay Verma
            </ChakraLink>{" "}
          </Text>
        </Flex>

        <Flex marginBottom={8}>
          <Box marginX={6}>
            <Image src={"/v-19.png"} width={50} height={50} />
          </Box>
          <Text marginY={2}>
            Icons made by{" "}
            <ChakraLink
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              fontWeight="500"
              isExternal
            >
              Vitaly Gorbachev
            </ChakraLink>{" "}
            from <Link href="https://www.flaticon.com/">www.flaticon.com</Link>
          </Text>
        </Flex>

        <Link href="/" passHref>
          <Button as="a" colorScheme="orange" isFullWidth>
            back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default About;
