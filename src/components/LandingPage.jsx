// LandingPage.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';

const LandingPage = ({ onShowApp, onShowWeddingPage }) => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Button variant="primary" onClick={onShowApp}>Go to App</Button>
      <Button variant="secondary" onClick={onShowWeddingPage}>Go to Wedding Page</Button>
    </div>
  );
};

export default LandingPage;
