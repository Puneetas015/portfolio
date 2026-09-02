import React from 'react';
import CustomCursor from './components/ui/CustomCursor';
import InitialLoader from './components/ui/InitialLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import GitaQuotes from './components/GitaQuotes'; // <-- Imported
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#090A0F] min-h-screen text-slate-100 selection:bg-red-500/20 selection:text-red-400">
      <CustomCursor />
      <InitialLoader />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <GitaQuotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;