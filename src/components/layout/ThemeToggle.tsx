import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { GiNightSky, GiStripedSun } from "react-icons/gi";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      variant="outline"
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
      icon={colorMode === "light" ? <GiNightSky /> : <GiStripedSun />}
      onClick={toggleColorMode}
      _hover={{
        backgroundColor: colorMode === "light" ? "gray.500" : "gray.600",
      }}
    />
  );
};

export default ThemeToggle;
