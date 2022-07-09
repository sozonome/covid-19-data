import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

import Layout from "lib/layout";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Box width={["100%", "70%", "60%", "60%"]} margin="0 auto">
        <Image src="/404 Error-pana.svg" />
      </Box>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Text>It&apos;s Okay!</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Page404;
