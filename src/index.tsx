import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle } from '@styles/globalStyle';
import App from './App';
import { LocationProvider } from '@provider/Location';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
);
