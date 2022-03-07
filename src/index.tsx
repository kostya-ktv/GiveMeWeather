import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './Context/ThemeContext/ThemeContextProvider';

import './Styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <ThemeProvider>
     <App />
     </ThemeProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
