import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/LandingPage.jsx'
import App from './App.jsx'
import './index.css'


function Main() {
  const [showApp, setShowApp] = useState(false);

  return (
    <React.StrictMode>
      {showApp ? (
        <App />
      ) : (
        <LandingPage onShowApp={() => setShowApp(true)} />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);