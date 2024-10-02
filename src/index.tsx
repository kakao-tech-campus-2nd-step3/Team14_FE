import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle } from '@styles/globalStyle';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
