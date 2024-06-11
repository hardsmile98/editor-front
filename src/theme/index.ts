import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: '"SFProText", "Roboto", "Helvetica", "Arial", sans-serif;',

    h1: {
      fontWeight: 'bold',
    },

    h2: {
      fontWeight: 'bold',
    },

    h3: {
      fontWeight: 'bold',
    },

    h4: {
      fontWeight: 'bold',
    },

    h5: {
      fontWeight: 'bold',
    },

    h6: {
      fontWeight: 'bold',
    },
  },

  shape: {
    borderRadius: 8,
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

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paperAnchorBottom: {
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },

    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  palette: {
    mode: 'dark',

    background: {
      paper: '#121213',
      default: '#000000',
      secondary: '#5C5C5C',
    },

    primary: {
      main: '#2990FF',
    },
  },
});

export default responsiveFontSizes(theme);
