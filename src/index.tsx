import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./context/auth-context";
import { SettingsProvider } from "./context/settings-context";


ReactDOM.render(
  <SettingsProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
  </SettingsProvider>,
  document.getElementById('root')
);
