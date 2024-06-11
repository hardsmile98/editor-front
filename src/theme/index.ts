import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 14,
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
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        fullWidth: true,
      },

      styleOverrides: {
        root: {
          height: 64,
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
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',

          scrollbarWidth: 'thin',
          scrollbarColor: '#5C5C5C #000',

          '&::-webkit-scrollbar': {
            width: '6px',
          },

          '&::-webkit-scrollbar-track': {
            background: '#000',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'blue',
            borderRadius: '20px',
            border: '4px solid #5C5C5C',
          },
        },

        html: {
          height: '100vh',
          overflow: 'hidden',
        },

        body: {
          height: '100vh',
          overflowX: 'hidden',
          overflowY: 'auto',
        },

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
      paper: '#1c1c1d',
      default: '#000000',
      secondary: '#5C5C5C',
    },

    primary: {
      main: '#2990FF',
    },
  },
});

export default responsiveFontSizes(theme);
