import { Box, CircularProgress } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box width="100%" textAlign="center" marginY={4}>
      <CircularProgress isIndeterminate color="orange.400" />
    </Box>
  );
};

export default Loading;
