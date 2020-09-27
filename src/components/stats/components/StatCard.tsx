import { Box, Flex, Text } from "@chakra-ui/core";

import { formatNumber } from "../../../helpers";

type StatCardProps = {
  value: number;
  title: string;
  color?: string;
  valueColor?: string;
  titleColor?: string;
  asText?: boolean;
  numberSize?: string;
  titleSize?: string;
  flex?: boolean;
};

const StatCard = ({
  value,
  title,
  color,
  valueColor,
  titleColor,
  asText = false,
  flex,
}: StatCardProps) => {
  return (
    <Flex
      backgroundColor={!asText && color}
      borderRadius={15}
      height={!asText && 120}
      boxShadow={!asText && "0px 4px 14px 1px rgba(0, 0, 0, 0.15);"}
      alignItems="center"
      marginY={4}
      flexBasis={flex && "50%"}
    >
      <Box flexBasis="100%" textAlign="center">
        <Text
          color={valueColor}
          fontWeight="500"
          fontSize={flex ? "1.75rem" : "2.25rem"}
        >
          {formatNumber(value)}
        </Text>
        <Text
          color={titleColor}
          fontSize={flex ? "0.6rem" : "0.75rem"}
          textTransform="uppercase"
          fontWeight="light"
          letterSpacing="4px"
        >
          {title}
        </Text>
      </Box>
    </Flex>
  );
};

export default StatCard;
