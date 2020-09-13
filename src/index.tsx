import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import dotenv from 'dotenv';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/javascript/global-styles';
import theme from 'assets/javascript/theme';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
