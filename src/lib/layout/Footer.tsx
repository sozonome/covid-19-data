import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      marginY={8}
    >
      <Text>
        2020 - <Link href="/about">About</Link>
      </Text>
    </Box>
  );
};

export default Footer;
