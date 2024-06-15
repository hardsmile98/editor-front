import { Box, Typography, Link } from '@mui/material';
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

function ErrorPage() {
  const reload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <Box sx={styles.root}>
      <Box
        mb={3}
        component="img"
        src={logo}
        alt="Slep"
      />

      <Typography gutterBottom>
        Произошла ошибка
      </Typography>

      <Link
        fontSize="body2.fontSize"
        href="#reload"
        onClick={reload}
      >
        Перезагрузить страницу
      </Link>
    </Box>
  );
}

export default ErrorPage;
