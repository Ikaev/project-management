import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';
import { Provider } from 'react-redux';
import history from './app/history';
import store from './app/store';

render(
  <Router history={history}>
    <Provider store={store}>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById( 'root' ),
);