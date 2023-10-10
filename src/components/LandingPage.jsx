import React from "react";

function LandingPage({ onShowApp }) {
    return (
      <div className="landing-page">
        <h1>Welcome to My Website</h1>
        <p>This is the landing page content.</p>
        <button onClick={onShowApp}>Show App</button>
      </div>
    );
  }

export default LandingPage;