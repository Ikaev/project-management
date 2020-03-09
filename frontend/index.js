import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';
import { Provider } from 'react-redux';
import history from './app/history';

render(
  <Router history={history}>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Router>,
  document.getElementById( 'root' ),
);