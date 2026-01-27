import React from 'react';
import { PILLARS } from '../constants.tsx';

const Pillars: React.FC = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="relative mb-20 md:mb-32">
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#1a1a1a] mb-2 md:mb-[-1.5rem] ml-1">OUR CORE</h2>
        <h3 className="text-6xl sm:text-8xl md:text-[12rem] font-black uppercase tracking-tighter text-[#40E0D0] leading-none">4 PILLARS</h3>
        
        <div className="mt-8 md:mt-12 max-w-2xl">
          <p className="text-[#1a1a1a] font-bold text-xl md:text-2xl uppercase tracking-tight mb-4">
            FOOD • ARTISTRY • MEDIA • EVENTS
          </p>
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl font-normal leading-relaxed">
            FAME Entertainment Group is built on four simple ideas. Each part of our team works together to help creative people and good brands reach everyone who needs to see them.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {PILLARS.map((pillar) => (
          <div 
            key={pillar.id} 
            className="group relative flex flex-col bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-[#1a1a1a]/5 transition-all duration-700 hover:shadow-xl hover:shadow-[#1a1a1a]/5 overflow-hidden min-h-[500px] md:min-h-[650px]"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={pillar.backgroundImage} 
                alt={pillar.title} 
                className="w-full h-full object-cover grayscale opacity-10 group-hover:opacity-20 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full p-8 md:p-16">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#1a1a1a] border border-[#1a1a1a]/10 flex items-center justify-center mb-8 md:mb-12 shadow-lg group-hover:bg-[#40E0D0] transition-all duration-500`}>
                <span className={`font-black text-3xl md:text-4xl text-white group-hover:text-[#1a1a1a]`}>
                  {pillar.icon}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a] leading-none">
                  {pillar.title}
                </h3>
                <div className="inline-block border-y border-[#1a1a1a]/10 py-3 group-hover:border-[#40E0D0]/30 transition-colors">
                  <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-[#1a1a1a]/60 group-hover:text-[#1a1a1a] transition-colors">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-[#1a1a1a]/70 leading-relaxed font-normal max-w-lg group-hover:text-[#1a1a1a] transition-colors">
                {pillar.description}
              </p>
            </div>
            
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-[0.1] blur-[120px] transition-opacity duration-1000`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;