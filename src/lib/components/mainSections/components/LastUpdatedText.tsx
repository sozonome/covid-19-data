import { Text } from "@chakra-ui/react";

import { dateFormatLong } from "lib/utils/dateFormat";

type LastUpdatedTextProps = {
  time: Date | string;
  withTime?: boolean;
};

const LastUpdatedText = ({ time, withTime }: LastUpdatedTextProps) => {
  return (
    <Text fontSize="0.75rem" fontWeight="400">
      Last Updated: {dateFormatLong(time, withTime)}
    </Text>
  );
};

export default LastUpdatedText;
