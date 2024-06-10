import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: '"SFProText", "Roboto", "Helvetica", "Arial", sans-serif;'
  },

  palette: {
    mode: 'dark',

    background: {
      paper: '#121213',
      default: '#000000'
    },

    primary: {
      main: '#2990FF'
    }
  }
})

export default theme
