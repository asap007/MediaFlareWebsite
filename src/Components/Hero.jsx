import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';

const Hero = () => {
  const spinnerRef = useRef(null);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
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
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
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
    setCurrentTextIndex(Math.floor((targetRotation % 360) / 120));
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center bg-space">
      <div className="star-animation"></div>
      <div className="relative w-80 h-80 md:w-full md:max-w-2xl md:h-128">
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
                className="absolute w-24 h-24 md:w-32 md:h-32 bg-red-500 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${index * 120}deg) translate(5rem) rotate(-${index * 120}deg)`,
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-red-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute w-full text-center mt-8 md:mt-16 bottom-8 md:bottom-16">
        <motion.div
          className="text-white text-2xl md:text-4xl font-bold typing-animation"
        >
          {displayText}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

