import { Box, Flex, Text } from "@chakra-ui/core";
import AnimatedNumber from "animated-number-react";

import { formatNumber } from "../../../helpers";
import MotionFlex from "../../motion/MotionFlex";

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
    <MotionFlex
      backgroundColor={!asText && color}
      borderRadius={15}
      height={!asText && 120}
      boxShadow={!asText && "0px 4px 14px 1px rgba(0, 0, 0, 0.15);"}
      alignItems="center"
      marginY={4}
      flexBasis={flex && "50%"}
      variants={{
        before: {
          opacity: 0,
          y: 20,
          scale: 0.8,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
      }}
    >
      <Box flexBasis="100%" textAlign="center">
        <Text
          color={valueColor}
          fontWeight="500"
          fontSize={flex ? "1.75rem" : "2.25rem"}
        >
          <AnimatedNumber value={value} formatValue={formatNumber} />
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
    </MotionFlex>
  );
};

export default StatCard;
