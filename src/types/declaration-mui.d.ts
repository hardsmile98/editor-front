import type {
  TypeBackground as MuiTypeBackground,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground extends MuiTypeBackground {
    secondary: string
    grey: string
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    delete: {
      main: string
      secondary: string
      dark: string
    };
  }
  interface PaletteOptions {
    delete: {
      main: string
      secondary: string
      dark: string
    };
  }
}
