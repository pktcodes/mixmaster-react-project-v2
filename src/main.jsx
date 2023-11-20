import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" autoClose="2000" />
  </React.StrictMode>
);
