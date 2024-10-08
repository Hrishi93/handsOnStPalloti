import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
  <React.StrictMode>
    <h1>Hello</h1>
    <App />
  </React.StrictMode>
);
reportWebVitals();
