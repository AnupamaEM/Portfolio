import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-200 overflow-x-hidden selection:bg-cyber-cyan selection:text-cyber-black">
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-slate/20 via-cyber-black to-cyber-black" />
      
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;