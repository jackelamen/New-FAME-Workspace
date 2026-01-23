import React, { useState } from 'react';
import { TIMELINE } from '../constants.tsx';

const CombinedStory: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Safe access with fallback
  const activeEvent = TIMELINE[activeIndex] || TIMELINE[0];

  return (
    <div className="bg-[#fdfcfb] text-[#05070a] overflow-hidden">
      <section className="pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="relative mb-12 md:mb-16">
            <div className="flex flex-col mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[1.5px] bg-[#40E0D0]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#40E0D0]">Evolution Track</span>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col">
                  <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] flex flex-col">
                    <span className="text-[#05070a]">OUR</span>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #05070a' }}>HISTORY</span>
                  </h2>
                </div>

                <div className="flex bg-[#05070a]/5 p-1 rounded-full backdrop-blur-sm self-start lg:mb-12 overflow-x-auto max-w-full no-scrollbar">
                  {TIMELINE.map((event, index) => (
                    <button
                      key={`${event.year}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`px-5 md:px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap outline-none focus:ring-2 focus:ring-[#40E0D0]/20 ${
                        activeIndex === index 
                          ? 'bg-[#40E0D0] text-[#05070a] shadow-lg shadow-[#40E0D0]/30' 
                          : 'text-[#05070a]/30 hover:text-[#05070a]/60'
                      }`}
                    >
                      {event.year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-[-1rem] md:mt-[-3rem]">
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start min-h-[200px] md:min-h-[350px]">
                <div className="absolute inset-0 flex items-center justify-center lg:justify-start pointer-events-none select-none">
                  <span className="text-[14rem] sm:text-[20rem] md:text-[28rem] font-black leading-none tracking-tighter text-[#05070a]/5 transition-all duration-700">
                    {activeEvent.year}
                  </span>
                </div>
                
                <div className="relative z-10 rotate-[-5deg] bg-[#40E0D0] px-8 py-4 md:px-12 md:py-6 shadow-2xl shadow-[#40E0D0]/20 transform transition-transform duration-700 hover:rotate-0 translate-y-4">
                  <span className="text-[#05070a] font-black uppercase tracking-[0.2em] text-xs md:text-lg whitespace-nowrap">
                    {activeEvent.label}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative z-10 space-y-6 lg:pl-10">
                <div className="space-y-3">
                  <h4 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-[#05070a] animate-in fade-in duration-500">
                    {activeEvent.title}
                  </h4>
                  <p className="text-[#05070a]/50 text-lg md:text-xl font-light leading-relaxed max-w-lg animate-in fade-in slide-in-from-left-4 duration-500">
                    {activeEvent.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                  {activeEvent.milestones.map((milestone, idx) => (
                    <div key={`${activeEvent.year}-milestone-${idx}`} className="flex items-center gap-3 group animate-in fade-in zoom-in-95 duration-500" style={{ animationDelay: `${idx * 50}ms` }}>
                      <div className="w-2 h-2 rounded-full bg-[#40E0D0] shadow-[0_0_8px_rgba(64,224,208,0.3)] shrink-0"></div>
                      <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#05070a]/70 group-hover:text-[#40E0D0] transition-colors">
                        {milestone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-start border-t border-[#05070a]/5 pt-12 md:pt-16">
            <div className="space-y-16">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-[#05070a]/20 uppercase tracking-[0.3em]">01 / THE WHY</span>
                <p className="text-3xl md:text-5xl font-light leading-tight">
                  It started with a belief that creativity needs a home. FAME (originally standing for <span className="text-[#40E0D0] font-black">Fashion, Art, Music, and Entertainment</span>) was founded to celebrate culture and its creators, helping them find ways to use their creativity to <span className="text-[#05070a] font-bold">make a living</span>.
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-[#05070a]/20 uppercase tracking-[0.3em]">02 / HOW WE GREW</span>
                <p className="text-xl text-[#05070a]/50 leading-relaxed font-light">
                  From underground rap battles in Seoul to massive festivals, we grew by listening. We realized that our community wasn't just looking for entertainment: they were looking for <span className="text-[#05070a] font-bold">connection</span>.
                </p>
              </div>
            </div>

            <div className="space-y-12 lg:mt-6">
              <div className="relative p-12 bg-[#05070a]/5 rounded-[3rem] group overflow-hidden border border-[#05070a]/5">
                <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.03] pointer-events-none">
                  <span className="text-[12rem] font-black leading-none text-[#05070a] italic">2020</span>
                </div>
                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] font-black text-[#40E0D0] uppercase tracking-[0.3em]">03 / THE SHUTDOWN</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight">WHEN THE MUSIC STOPPED.</h3>
                  <p className="text-[#05070a]/40 text-lg font-light leading-relaxed">
                    The pandemic was an existential threat. In weeks, the industry went dark. Our stages were empty, but culture never stops - it just changes its medium.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pl-6 border-l-2 border-[#40E0D0]/20">
                <span className="text-[10px] font-black text-[#05070a]/20 uppercase tracking-[0.3em]">04 / THE TRANSFORMATION</span>
                <p className="text-3xl font-black uppercase tracking-tighter leading-tight italic">
                  WE PIVOTED TO <span className="text-[#40E0D0]">COMMERCE</span>.
                </p>
                <p className="text-lg text-[#05070a]/50 leading-relaxed font-light">
                  We evolved into a <span className="text-[#05070a] font-bold italic">Lifestyle Trading House</span>, bridging high-potential Korean brands and global commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedStory;