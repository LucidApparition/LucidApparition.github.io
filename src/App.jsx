import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

function App() {
  const aboutRef = useRef(null); // Reference for About section
  const heroRef = useRef(null); // Reference for Hero section

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-light-bg dark:bg-dark-bg">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero ref={heroRef} scrollToAbout={scrollToAbout} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Tech />
        </div>
        <div>
          <Works />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
