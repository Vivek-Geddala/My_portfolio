import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#030014' }}>
        {/* Background glows */}
        <div className="radial-glow-1 fixed -top-48 -left-48 -z-10 h-[600px] w-[600px] rounded-full pointer-events-none" />
        <div className="radial-glow-2 fixed -bottom-48 -right-48 -z-10 h-[600px] w-[600px] rounded-full pointer-events-none" />

        <ParticleBackground />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Resume />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
