import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';

const Hero = () => {
  const spinnerRef = useRef(null);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);

  const texts = ['We Create', 'We Innovate', 'We Deliver'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      controls.start({
        rotate: rotation.get() + 120,
        transition: { type: 'spring', stiffness: 20, damping: 10 }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [controls, rotation]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting]);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    setDelta(isDeleting ? 100 : 200);
  };

  const handleRotate = (event, info) => {
    const center = {
      x: spinnerRef.current.offsetWidth / 2,
      y: spinnerRef.current.offsetHeight / 2
    };
    const angle = Math.atan2(info.point.y - center.y, info.point.x - center.x);
    rotation.set(angle * (180 / Math.PI));
  };

  const handleRotateEnd = () => {
    const currentRotation = rotation.get();
    const targetRotation = Math.round(currentRotation / 120) * 120;
    controls.start({
      rotate: targetRotation,
      transition: { type: 'spring', stiffness: 50, damping: 10 }
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-purple-800 px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="star-animation"></div>
      </div>

      <div className="relative z-10 text-center mt-14">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Take Your Business to New Heights
        </h1>
        <p className="text-indigo-200 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Feeling overwhelmed?
        </p>
      </div>

      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-112 lg:h-112">
        <motion.div
          ref={spinnerRef}
          className="w-full h-full"
          style={{ rotate: rotation }}
          animate={controls}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleRotate}
          onDragEnd={handleRotateEnd}
          whileTap={{ cursor: 'grabbing' }}
        >
          <div className="absolute w-full h-full">
            {[0, 1, 2].map((_, index) => (
              <div
                key={index}
                className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-indigo-500 rounded-full shadow-lg"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${index * 120}deg) translate(70%) rotate(-${index * 120}deg)`,
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center shadow-inner">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-indigo-300 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-indigo-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-purple-700 rounded-full flex items-center justify-center shadow-inner">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-indigo-300 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center mb-4 sm:mb-6">
        <p className="text-indigo-200 text-lg sm:text-xl md:text-2xl">Relax and let us handle it</p>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          className="text-indigo-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold typing-animation"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          {displayText}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;