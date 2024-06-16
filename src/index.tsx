import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/index';
import './assets/styles/fonts.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';
import { SnackbarProvider } from 'notistack';
import App from './App';

const rootElement = document?.getElementById?.('root');

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <SnackbarProvider anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          >
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
}
