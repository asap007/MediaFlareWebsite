import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClientLogos = () => {
  const [loading, setLoading] = useState(true);
  const logos = [
    "/images/logo.png",
    "/images/logo_2.png",
    "/images/logo_3.png",
    "/images/logo_4.png",
    "/images/logo_5.png",
    "/images/logo_6.jpg"
  ];

  useEffect(() => {
    const imagePromises = logos.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, [logos]);

  return (
    <>
      <motion.div
        className='text-2xl text-black px-10 py-3'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Our Clients</h3>
      </motion.div>
      
      {loading ? (
        <div className="flex items-center justify-center h-[28rem]">
          <motion.div
            className="loader"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            style={{
              width: '3rem',
              height: '3rem',
              border: '0.5rem solid #fff',
              borderTop: '0.5rem solid #3498db',
              borderRadius: '50%',
            }}
          />
        </div>
      ) : (
        <div className="scroll-container overflow-hidden w-full h-[28rem] mb-0 relative bg-white">
          <motion.div
            className="scroll-content flex"
            initial={{ x: '100%' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            {[...logos, ...logos].map((src, index) => (
              <motion.div
                key={index}
                className='w-[30rem] h-[28rem] py-8 flex-shrink-0'
                whileHover={{ scale: 1.1 }}
              >
                <img src={src} className='w-full h-full object-fit px-4' alt={`Logo ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ClientLogos;
