import React from 'react'
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
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-light-bg dark:bg-dark-bg">
        <div className="bg-cover bg-nmo-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;