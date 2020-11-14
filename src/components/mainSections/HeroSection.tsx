import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Flex flexBasis={["100%", "100%", "50%"]}>
      <Box width="60%">
        <Image src="/medical-mask-pana.svg" unsized />
      </Box>
      <Text
        marginLeft="auto"
        flexBasis="40%"
        maxWidth="30%"
        textAlign="right"
        alignSelf="center"
        fontSize="1.125rem"
        fontWeight="500"
      >
        Stay Safe, Keep Social Distancing
      </Text>
    </Flex>
  );
};

export default HeroSection;
