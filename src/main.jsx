import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { ThemeProvider } from '@emotion/react';
import { App } from './components/App';
import './index.css';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
