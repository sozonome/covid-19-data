import { CSSProperties } from "react";
import { Box, Text } from "@chakra-ui/core";

import { formatNumber } from "../../../helpers";

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
    <Box
      borderRadius={15}
      alignItems="center"
      marginY={4}
      flexBasis={flexBasis}
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
    </Box>
  );
};

export default StatWrap;
