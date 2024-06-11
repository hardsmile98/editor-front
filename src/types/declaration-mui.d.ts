import type {
  TypeBackground as MuiTypeBackground,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground extends MuiTypeBackground {
    secondary: string
  }
}
