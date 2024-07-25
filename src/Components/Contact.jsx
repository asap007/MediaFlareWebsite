import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen text-white flex flex-col justify-between p-8 mt-20" style={{backgroundColor:"#FA8D6B"}}>
      <div className="flex justify-between items-start">
        {/* Add content here if needed */}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-xl mb-2">(LET'S CONNECT)</h2>
            <a href="mailto:hello@agentic.com" className="text-4xl md:text-6xl font-bold">mediflare.com</a>
          </div>
          <div>
            <a href="tel:+1999888777" className="text-3xl md:text-4xl font-bold">+1 999 888 777</a>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-xl mb-4">(FOLLOW US)</h2>
          <p>TWITTER</p>
          <p>LINKEDIN</p>
          <p>MEDIUM</p>
          <p>INSTAGRAM</p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-sm">© 2024 by Mediflare</p>
        <img className='object-cover w-1/5 md:w-1/10' src="/images/mediaflarelogo.png" alt="" />
      </div>
    </div>
  );
};

export default ContactPage;