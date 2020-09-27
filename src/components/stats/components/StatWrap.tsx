import { CSSProperties } from "react";
import { Box, Text } from "@chakra-ui/core";

import { formatNumber } from "../../../helpers";
import MotionBox from "../../motion/MotionBox";

type StatWrapProps = {
  value: number;
  title: string;
  valueColor?: string;
  titleColor?: string;
  textAlign?: CSSProperties["textAlign"];
  flexBasis?: CSSProperties["flexBasis"];
};

const StatWrap = ({
  value,
  title,
  valueColor,
  titleColor,
  textAlign,
  flexBasis,
}: StatWrapProps) => {
  return (
    <MotionBox
      borderRadius={15}
      alignItems="center"
      marginY={4}
      flexBasis={flexBasis}
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
      <Box flexBasis="100%" textAlign={textAlign}>
        <Text
          color={titleColor}
          fontSize="0.625rem"
          textTransform="uppercase"
          fontWeight="light"
          letterSpacing="4px"
        >
          {title}
        </Text>
        <Text color={valueColor} fontWeight="500" fontSize="1.5rem">
          {formatNumber(value)}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default StatWrap;
