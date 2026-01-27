import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-[#fdfcfb]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] right-[15%] w-[45%] h-[45%] bg-[#40E0D0]/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-teal-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(64,224,208,0.01)_0%,transparent_80%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-0 text-[#1a1a1a]">
          <h1 className="text-[10vw] sm:text-[7rem] md:text-[11rem] font-black tracking-tight leading-[0.8] uppercase select-none">
            CULTURE
          </h1>
          <div className="text-[8vw] sm:text-[6rem] md:text-[9rem] font-black leading-none uppercase -mt-4 mb-2 select-none">
            &
          </div>
          <h2 className="text-[10vw] sm:text-[7rem] md:text-[11rem] font-black tracking-tight leading-[0.8] uppercase text-outline select-none">
            COMMERCE
          </h2>
        </div>

        <div className="mt-12 md:mt-20 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-[#1a1a1a]/80 font-normal tracking-tight leading-relaxed">
            We help artists and businesses find their place in the world.
            <br />
            Let’s build something great together.
          </p>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <a href="#about" className="w-full sm:w-auto px-16 py-6 bg-[#1a1a1a] text-white font-black uppercase text-[12px] tracking-[0.2em] rounded-full hover:bg-[#40E0D0] hover:text-[#1a1a1a] transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl shadow-[#1a1a1a]/10">
            Who We Are
          </a>
          <a href="#pillars" className="w-full sm:w-auto px-16 py-6 border border-[#1a1a1a]/20 text-[#1a1a1a] font-black uppercase text-[12px] tracking-[0.2em] rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
            What We Do
          </a>
        </div>
      </div>
      
      {/* Visual Border Guide */}
      <div className="absolute inset-x-10 top-[25%] bottom-[20%] border border-dashed border-[#1a1a1a]/5 rounded-xl pointer-events-none hidden lg:block"></div>
    </div>
  );
};

export default Hero;