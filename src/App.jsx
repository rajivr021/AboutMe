import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyEducation from './components/MyEducation';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <MyEducation />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
