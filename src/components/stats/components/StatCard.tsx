import { Box, Text } from "@chakra-ui/core";
import AnimatedNumber from "animated-number-react";

import { formatNumber } from "../../../helpers";
import MotionPseudoBox from "../../motion/MotionPseudoBox";

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
  valueColor = "white",
  titleColor = "white",
  asText = false,
  flex,
}: StatCardProps) => {
  return (
    <MotionPseudoBox
      display="flex"
      background={!asText && color}
      borderRadius={15}
      height={!asText && 100}
      boxShadow={!asText && "0px 20px 20px -16px rgba(0, 0, 0, 0.25);"}
      alignItems="center"
      marginY={3}
      flexBasis={flex && "47%"}
      _odd={{
        marginRight: flex && "3%",
      }}
      _even={{
        marginLeft: flex && "3%",
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
    </MotionPseudoBox>
  );
};

export default StatCard;
