import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ aboutRef, servicesRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div 
    className={`w-screen h-18 flex justify-between items-center gap-4 px-4 py-1 ${
      isScrolled ? 'text-black' : 'text-black'
    } fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-0 ${
      isScrolled ? 'bg-white bg-opacity-0' : 'bg-white bg-opacity-100'
    }`}
    >
      <div className='object-cover w-24'><img src="/images/mediaflarelogo.png" alt="Logo" /></div>

      <button className='md:hidden z-50' onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Dropdown Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              ref={menuRef}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full justify-center items-center space-y-8">
                <a onClick={() => scrollToSection(aboutRef)} className='text-xl font-semibold text-gray-800 hover:text-[#0D9668] transition-colors cursor-pointer'>About us</a>
                <a onClick={() => scrollToSection(servicesRef)} className='text-xl font-semibold text-gray-800 hover:text-[#0D9668] transition-colors cursor-pointer'>Services</a>
                <a onClick={() => scrollToSection(projectsRef)} className='text-xl font-semibold text-gray-800 hover:text-[#0D9668] transition-colors cursor-pointer'>Projects</a>
                <a onClick={() => scrollToSection(contactRef)} className='text-xl font-semibold bg-[#0D9668] text-white px-6 py-2 rounded-full hover:bg-[#0A7656] transition-colors cursor-pointer'>Contact us</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div className='hidden md:flex justify-center uppercase font-normal items-center gap-14 text-lg'>
        <a onClick={() => scrollToSection(aboutRef)} className='relative group hover:text-[#ff3c00] transition-colors cursor-pointer'>
          About us
          <span className="block h-0.5 bg-transparent group-hover:bg-[#ff3c00] transition-all duration-300 absolute bottom-0 left-0 right-0"></span>
        </a>
        <a onClick={() => scrollToSection(servicesRef)} className='relative group hover:text-[#ff3c00] transition-colors cursor-pointer'>
          Services
          <span className="block h-0.5 bg-transparent group-hover:bg-[#ff3c00] transition-all duration-300 absolute bottom-0 left-0 right-0"></span>
        </a>
        <a onClick={() => scrollToSection(projectsRef)} className='relative group hover:text-[#ff3c00] transition-colors cursor-pointer'>
          Projects
          <span className="block h-0.5 bg-transparent group-hover:bg-[#ff3c00] transition-all duration-300 absolute bottom-0 left-0 right-0"></span>
        </a>
      </div>

      {/* Contact us button for Desktop */}
      <div onClick={() => scrollToSection(contactRef)} className='hidden md:block text-sm uppercase font-normal bg-black px-4 py-3 text-white rounded-md mr-4 hover:bg-[#ff3c00] transition-colors cursor-pointer'>
        Contact us
      </div>
    </div>
  );
};

export default Header;