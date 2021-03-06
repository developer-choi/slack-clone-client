import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './pages/Routes';
import {GlobalStyle} from './utils/style/global';
import {ThemeProvider} from 'styled-components';
import {theme} from './utils/style/theme';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Routes/>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
