import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className='py-10 px-8 md:py-44 md:px-20'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1 variants={itemVariants} className='text-white text-4xl md:text-6xl tracking-wider font-semibold'>Who Are</motion.h1>
      <motion.h1 variants={itemVariants} className='text-emerald-400 tracking-wider py-2 font-semibold text-4xl md:text-6xl'>We?</motion.h1>
      <motion.div variants={itemVariants} className='text-white text-lg md:text-lg tracking-wider py-10 leading-loose'>
        <p className='text-center md:text-left'>
          Our mission is to make your brand smarter, bolder, and more effective than your competition. Embark on a journey with our strategists, designers, developers, and digital marketers to discover the next step that will elevate your brand's position and performance. We blend our tech-savvy approach with razor-sharp strategy and striking design to transform your product's potential into a compelling digital narrative. From web development to brand identity, UI/UX design to digital marketing, we craft holistic solutions that dominate the digital landscape. Welcome to the world of MediaFlare.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;