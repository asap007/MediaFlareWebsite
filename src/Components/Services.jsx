import React, { useRef, useEffect, useState } from 'react';

const ServiceCard = ({ image, title, description }) => (
  <div className="flex-shrink-0 w-full sm:w-80 md:w-96 snap-start px-4 sm:px-2">
    <div className="w-full">
      <img className="object-cover w-1/2 h-32 sm:h-40" src={image} alt="" />
      <h2 className="text-white text-xl font-semibold mt-4">{title}</h2>
      <div className="w-10 mt-3 h-0.5 bg-emerald-400"></div>
      <p className="text-white text-sm sm:text-base tracking-normal py-4 leading-relaxed break-words">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const scrollRef = useRef(null);
  const [services, setServices] = useState([
    {
      image: "/images/design.png",
      title: "Web Design and Development",
      description: "Agencia specializes in crafting visually stunning and functionally robust websites. Our web design and development services ensure that your online presence not only captures attention but also provides a seamless and engaging user experience. From responsive design to custom development, we bring your digital vision to life."
    },
    {
      image: "/images/strategy.png",
      title: "Consultation and Strategy",
      description: "Success in the digital realm begins with a solid strategy. Agentic provides consultation services to help you navigate the complexities of the online landscape. Whether you're starting a new project, rebranding, or seeking to optimize your existing digital presence, our experts offer strategic insights and guidance to align your goals with effective solutions."
    },
    {
      image: "/images/cro.svg",
      title: "Digital Marketing",
      description: "Agencia goes beyond design and development to boost your online presence through digital marketing strategies. From SEO and social media marketing to content creation and online advertising, we tailor digital marketing solutions to enhance your visibility, drive traffic, and convert visitors into loyal customers."
    },
    {
      image: "/images/design.png",
      title: "UI/UX Design",
      description: "Our UI/UX design services focus on creating intuitive, user-friendly interfaces that enhance user engagement and satisfaction. We combine aesthetics with functionality to deliver designs that not only look great but also provide an optimal user experience across all devices and platforms."
    },
    {
      image: "/images/design.png",
      title: "UI/UX Design",
      description: "Our UI/UX design services focus on creating intuitive, user-friendly interfaces that enhance user engagement and satisfaction. We combine aesthetics with functionality to deliver designs that not only look great but also provide an optimal user experience across all devices and platforms."
    }
  ]);

  useEffect(() => {
    const duplicatedServices = [...services, ...services];
    setServices(duplicatedServices);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      if (direction === 'right' && currentScroll >= maxScroll - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
      } else if (direction === 'left' && currentScroll <= 10) {
        scrollRef.current.scrollTo({ left: maxScroll, behavior: 'auto' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      scroll('right');
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className='px-10 py-10 relative'>
      <div className='text-6xl text-white font-semibold tracking-wide'>
        <h1>Our</h1> 
        <h1 className='text-emerald-500 mb-20'>Services</h1>
      </div>
      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-10 snap-x snap-mandatory no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-1 top-1/4 transform -translate-y-1/2 bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-1 top-1/4 transform -translate-y-1/2 bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Services;


