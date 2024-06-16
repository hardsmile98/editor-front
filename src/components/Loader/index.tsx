/* eslint-disable react/jsx-props-no-spreading */
import { Box, CircularProgress, CircularProgressProps } from '@mui/material';

function Loader(props: CircularProgressProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={36} {...props} />
    </Box>
  );
}

export default Loader;
