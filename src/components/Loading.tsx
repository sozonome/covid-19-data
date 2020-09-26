import { Box, CircularProgress } from "@chakra-ui/core";

const Loading = () => {
  return (
    <Box width="100%" textAlign="center" marginY={4}>
      <CircularProgress isIndeterminate color="orange" />
    </Box>
  );
};

export default Loading;
