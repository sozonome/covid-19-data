import {
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/core";
import Link from "next/link";

import Layout from "../components/layout";

const About = () => {
  return (
    <Layout title="About">
      <Box>
        <Heading>About</Heading>

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

        <Link href="/" passHref>
          <Button as="a" backgroundColor="orange.700" isFullWidth>
            back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default About;
