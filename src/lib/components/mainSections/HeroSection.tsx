import { Flex, Text, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex flexBasis={["100%", "100%", "50%"]}>
      <Image src="/medical-mask-pana.svg" width="60%" />
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
