import { Box, CircularProgress } from '@mui/material';
import logo from 'assets/images/logo.svg';

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function LoaderPage() {
  return (
    <Box sx={styles.root}>
      <Box
        mb={6}
        component="img"
        src={logo}
        alt="Slep"
      />

      <CircularProgress size={32} />

      <Box fontSize="body2.fontSize" mt={1}>
        Загрузка...
      </Box>
    </Box>
  );
}

export default LoaderPage;
