import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'
import Project from './components/Project'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
