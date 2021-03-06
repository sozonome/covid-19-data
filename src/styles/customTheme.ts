import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: "Jost, serif",
    body: "Jost, sans-serif",
  },
});

export default customTheme;
