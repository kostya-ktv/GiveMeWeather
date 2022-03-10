import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './Context/ThemeContext/ThemeContextProvider';
import { store } from './store/store';

import './Styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

      <ThemeProvider>
      <App />
      </ThemeProvider>
      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
