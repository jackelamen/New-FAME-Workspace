
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 bg-[#05070a]">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-orange-600/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.02)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center pt-20">
        <h1 className="text-[3.8rem] sm:text-7xl md:text-[14rem] font-black tracking-tighter mb-10 leading-[0.85] sm:leading-[0.75] uppercase">
          CULTURE & <br />
          <span className="text-outline">COMMERCE</span>
        </h1>

        <p className="text-base md:text-2xl text-white/40 font-medium max-w-2xl mx-auto mb-16 tracking-tight leading-relaxed">
          We help artists and businesses find their place in the world. <br className="hidden md:block" /> 
          Let’s build something great together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <a href="#about" className="w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 bg-white text-black font-black uppercase text-[11px] tracking-[0.2em] rounded-full hover:bg-[#ff4d00] hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/5">
            Who We Are
          </a>
          <a href="#pillars" className="w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 border border-white/20 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-full hover:bg-white/5 transition-all">
            What We Do
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
