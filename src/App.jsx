// App.jsx
import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ClientLogos from './Components/ClientLogos';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import ContactPage from './Components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactRef.current,
      start: 'top bottom',
      end: 'bottom top',
    });
  }, []);

  return (
    <div>
      <Header 
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className='w-full relative bg-white'>
        <Hero />
        <ClientLogos />
      </div>
      <div className='w-full min-h-screen bg-black'>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </div>
  )
}

export default App;