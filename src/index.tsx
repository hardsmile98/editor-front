import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'store/index'
import App from './App'
import './assets/styles/fonts.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from 'theme'

const rootElement = document?.getElementById?.('root')

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}
