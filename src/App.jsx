import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyEducation from './components/MyEducation';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <MyEducation/>
      <Contact />
    </>
  );
};

export default App;
