import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
