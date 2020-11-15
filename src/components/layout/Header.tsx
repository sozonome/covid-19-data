import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="100%"
      height={100}
      backgroundColor={colorMode === "light" ? "white" : "gray.700"}
      boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
      position="fixed"
      zIndex={5}
    >
      <Flex align="center" maxWidth={800} margin="0 auto" padding={4}>
        <Link href="/" passHref>
          <ChakraLink>
            <Image src="/v-19.png" width={60} height={60} />
          </ChakraLink>
        </Link>

        <Box marginLeft="auto" textAlign="right">
          <Link href="/" passHref>
            <ChakraLink>
              <Heading as="h1" fontSize="1.5rem" fontWeight="600">
                COVID-19 Data
              </Heading>
              <Text fontSize="0.75rem" fontWeight="400">
                Be aware, stay safe
              </Text>
            </ChakraLink>
          </Link>
        </Box>

        <Box marginLeft={4}>
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
