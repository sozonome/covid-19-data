import type { BoxProps } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import AnimatedNumber from "animated-number-react";

import MotionBox from "lib/components/motion/MotionBox";
import { formatNumber } from "lib/utils/formatNumber";

type StatCardProps = {
  value: number;
  title: string;
  color?: BoxProps["backgroundColor"];
  valueColor?: string;
  titleColor?: string;
  asText?: boolean;
  flex?: boolean;
};

const StatCard = ({
  value,
  title,
  color,
  valueColor = "white",
  titleColor = "white",
  asText = false,
  flex,
}: StatCardProps) => {
  return (
    <MotionBox
      display="flex"
      background={!asText ? color : undefined}
      borderRadius={15}
      height={!asText ? 100 : undefined}
      boxShadow={
        !asText ? "0px 20px 20px -16px rgba(0, 0, 0, 0.25);" : undefined
      }
      alignItems="center"
      marginY={3}
      flexBasis={flex ? "47%" : undefined}
      _odd={{
        marginRight: flex ? "3%" : undefined,
      }}
      _even={{
        marginLeft: flex ? "3%" : undefined,
      }}
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
          color={titleColor}
          fontWeight="500"
          fontSize={flex ? "1.25rem" : "1.5rem"}
        >
          <AnimatedNumber value={value} formatValue={formatNumber} />
        </Text>
        <Text
          color={valueColor}
          fontSize={flex ? "0.5rem" : "0.625rem"}
          textTransform="uppercase"
          fontWeight="light"
          letterSpacing="4px"
        >
          {title}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default StatCard;
