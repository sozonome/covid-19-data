import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import AppMenu from "./AppMenu";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="header"
      width="100%"
      height={100}
      backgroundColor={colorMode === "light" ? "white" : "gray.700"}
      boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
      position="fixed"
      zIndex={5}
      align="center"
      maxWidth={800}
      padding={4}
    >
      <Box>
        <Link href="/" passHref>
          <ChakraLink>
            <Flex alignItems="center">
              <Image
                width={[12, 16]}
                src="https://sznm.dev/app_icons/covid-19-data.svg"
              />

              <Box marginLeft={4}>
                <Heading as="h1" fontSize={["1rem", "1.5rem"]} fontWeight="600">
                  COVID-19 Data
                </Heading>
                <Text fontSize="0.75rem" fontWeight="400">
                  Be aware, stay safe
                </Text>
              </Box>
            </Flex>
          </ChakraLink>
        </Link>
      </Box>

      <Box marginLeft="auto">
        <ThemeToggle />
        <AppMenu />
      </Box>
    </Flex>
  );
};

export default Header;
