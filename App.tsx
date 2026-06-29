
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reels from './components/Reels';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#040406] text-white selection:bg-[#B61409] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Reels /> 
        <Education />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
};

export default App;
