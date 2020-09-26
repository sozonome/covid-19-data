import { Flex, Image, Text } from "@chakra-ui/core";

const HeroSection = () => {
  return (
    <Flex>
      <Image src="/medical-mask-pana.svg" width="60%" />
      <Text
        marginLeft="auto"
        flexBasis="40%"
        maxWidth="30%"
        textAlign="right"
        alignSelf="center"
        fontSize="1.125rem"
      >
        Stay Safe, Keep Social Distancing
      </Text>
    </Flex>
  );
};

export default HeroSection;
