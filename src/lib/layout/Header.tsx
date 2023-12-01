import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

import AppMenu from "./AppMenu";
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
      <Flex
        align="center"
        height="100%"
        maxWidth={800}
        margin="0 auto"
        padding={4}
      >
        <Box>
          <Link href="/">
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
          </Link>
        </Box>

        <Box marginLeft="auto">
          <ThemeToggle />
          <AppMenu />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
