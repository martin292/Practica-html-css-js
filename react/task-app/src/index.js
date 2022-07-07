import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Overview from './components/Overview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Overview/>
  </React.StrictMode>
);