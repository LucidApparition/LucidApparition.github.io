import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/LandingPage.jsx'
import App from './App.jsx'
import WeddingPage from './WeddingPage.jsx';
import './index.css'


function Main() {
  const [showApp, setShowApp] = useState(false);
  const [showWeddingPage, setShowWeddingPage] = useState(false);

  return (
    <React.StrictMode>
      {showApp ? (
        <App />
      ) : showWeddingPage ? (
        <WeddingPage />
      ) : (
        <LandingPage 
          onShowApp={() => setShowApp(true)} 
          onShowWeddingPage={() => setShowWeddingPage(true)} 
        />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);