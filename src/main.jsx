import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { SearchContextProvider } from "./context/SearchConext.jsx"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthProvider>
  </StrictMode>
);