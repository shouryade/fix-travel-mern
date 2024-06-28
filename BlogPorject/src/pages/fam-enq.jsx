import React from "react";
import logo from '/src/assets/logo.png';

const DateInput = ({ label }) => (
  <div className="flex flex-col group">
    <label className="text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">{label}</label>
    <div className="relative">
      <input type="date" className="bg-transparent border border-white p-2 text-white w-full appearance-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300" />
      <svg className="w-6 h-6 text-white absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none transition-colors duration-300 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>
  </div>
);

const GuestInput = ({ label }) => (
  <div className="flex flex-col group">
    <label className="text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">{label}</label>
    <input type="number" className="bg-transparent border border-white p-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300" />
  </div>
);

function MyComponent() {
  return (
    <main className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/src/assets/images_lux/img6.jpg')"}}>
      <div className="bg-black bg-opacity-50 min-h-screen backdrop-blur-sm">
        <header className="flex flex-col items-center p-8 text-white">
          <a href="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-32 mb-4 transition-transform duration-300 hover:scale-110" 
          />
          </a>
          
          <h1 className="text-4xl text-center font-light tracking-wide hover:scale-105 ">
            <span className="inline-block transition-transform duration-300 ">Family</span> <br /> 
            <span className="inline-block transition-transform duration-300 ">Suite</span>
          </h1>
        </header>
        
        <section className="flex-grow flex items-center justify-center">
          <form className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-3xl shadow-lg transition-all duration-300 hover:shadow-cyan-300/50">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <DateInput label="Select Check-in date" />
              <DateInput label="Select Check-out date" />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <GuestInput label="Number of Guests" />
              <div className="flex flex-col group">
                <label className="text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">Mobile Number</label>
                <input type="tel" className="bg-transparent border border-white p-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 group-hover:border-cyan-300" />
              </div>
            </div>
            <button className="w-full bg-cyan-500 text-white py-3 rounded-lg text-xl transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Send Enquiry
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default MyComponent;