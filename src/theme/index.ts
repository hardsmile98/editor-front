import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const colors = {
  bgPaper: '#262626',
  bgDefault: '#000000',
  bgSecondary: '#121213',
  primaryMain: '#2990FF',
};

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
          scrollbarColor: `${colors.bgSecondary} ${colors.bgDefault}`,

          '&::-webkit-scrollbar': {
            width: '6px',
          },

          '&::-webkit-scrollbar-track': {
            background: colors.bgDefault,
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'blue',
            borderRadius: '20px',
            border: `4px solid ${colors.bgSecondary}`,
          },
        },

        html: {
          height: '100%',
          overflow: 'hidden',
        },

        body: {
          height: '100%',
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

      variants: [
        {
          props: {
            color: 'default',
          },
          style: {
            backgroundColor: colors.bgSecondary,
          },
        },
      ],
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgSecondary,
          borderRadius: 12,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.bgPaper,
        },
      },
    },
  },

  palette: {
    mode: 'dark',

    background: {
      paper: colors.bgPaper,
      default: colors.bgDefault,
      secondary: colors.bgSecondary,
    },

    primary: {
      main: colors.primaryMain,
    },
  },
});

export default responsiveFontSizes(theme);
