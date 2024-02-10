import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AppContextProvider } from './context/appcontext';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  ,
  document.getElementById('root')
);
