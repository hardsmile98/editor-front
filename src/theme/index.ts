import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"SFProText", "Roboto", "Helvetica", "Arial", sans-serif;',
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        fullWidth: true,
      },

      styleOverrides: {
        root: {
          height: 48,
          textTransform: 'none',
        },
      },
    },
  },

  palette: {
    mode: 'dark',

    background: {
      paper: '#121213',
      default: '#000000',
    },

    primary: {
      main: '#2990FF',
    },
  },
});

export default theme;
