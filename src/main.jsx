import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import KeycloakProvider from './KeycloakProvider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <KeycloakProvider>
    <App />
   </KeycloakProvider>,
)
