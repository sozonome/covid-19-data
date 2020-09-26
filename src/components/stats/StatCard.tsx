import { Box, Flex, Text } from "@chakra-ui/core";
import formatNumber from "../../helpers/formatNumber";

type StatCardProps = {
  value: number;
  title: string;
  color?: string;
  valueColor?: string;
  titleColor?: string;
};

const StatCard = ({
  value,
  title,
  color,
  valueColor,
  titleColor,
}: StatCardProps) => {
  return (
    <Flex
      backgroundColor={color}
      borderRadius={15}
      height={120}
      boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
      alignItems="center"
      marginY={4}
    >
      <Box flexBasis="100%" textAlign="center">
        <Text color={valueColor} fontWeight="500" fontSize="2.25rem">
          {formatNumber(value)}
        </Text>
        <Text
          color={titleColor}
          fontSize="0.75rem"
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
