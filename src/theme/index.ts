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
            borderRadius: 12,
            backgroundColor: colors.bgPaper,

            ':hover': {
              backgroundColor: colors.bgPaper,
            },
          },
        },
      ],
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgPaper,
          borderRadius: 12,
        },
      },
    },

    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          backgroundColor: colors.bgPaper,
          borderRadius: 12,

          '&.Mui-disabled': {
            opacity: 1,
          },

          ':hover': {
            backgroundColor: colors.bgPaper,
          },
        },
      },
    },

    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          backgroundColor: colors.bgPaper,
          borderRadius: 12,
          ':hover': {
            backgroundColor: colors.bgPaper,
          },
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

    delete: {
      main: '#FF4444',
      secondary: '#482626',
      dark: '#f32a2a',
    },
  },
});

export default responsiveFontSizes(theme);
