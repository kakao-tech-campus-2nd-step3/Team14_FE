import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle } from '@styles/globalStyle';
import App from './App';
import { LocationProvider } from '@provider/PresentLocation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@api/instance';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <LocationProvider>
        <App />
      </LocationProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
