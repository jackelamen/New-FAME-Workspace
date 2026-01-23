import React from 'react';

const NarrativeJourney: React.FC = () => {
  return (
    <section className="bg-[#fdfcfb] text-[#05070a] py-32 border-t border-[#05070a]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col gap-24">
          
          {/* Header */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 text-[#40E0D0] text-[10px] font-black uppercase tracking-[0.5em] mb-8">
              <div className="w-12 h-[1px] bg-[#40E0D0]"></div>
              Our Narrative
            </div>
            <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              THE SOUL <br />
              <span className="text-transparent italic" style={{ WebkitTextStroke: '2px #05070a' }}>OF FAME</span>
            </h2>
          </div>

          {/* Story Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: The Why & Growth */}
            <div className="space-y-16">
              <div className="space-y-6">
                <span className="text-[10px] font-black text-[#05070a]/20 uppercase tracking-[0.3em]">01 / The Why</span>
                <p className="text-2xl md:text-4xl font-light leading-tight">
                  It started with a simple belief: that <span className="text-[#40E0D0] font-black italic">creativity needs a home</span>. We didn't just want to throw parties; we wanted to build a stage where culture could breathe and artists could thrive without boundaries.
                </p>
              </div>

              <div className="space-y-6">
                <span className="text-[10px] font-black text-[#05070a]/20 uppercase tracking-[0.3em]">02 / How We Grew</span>
                <p className="text-xl text-[#05070a]/50 leading-relaxed font-light">
                  From underground rap battles in Seoul to massive cultural festivals, we grew by listening. We realized that our community wasn't just looking for entertainment—they were looking for <span className="text-[#05070a] font-bold">connection</span>. We expanded into food, media, and artistry, creating an ecosystem where every pillar supported the other.
                </p>
              </div>
            </div>

            {/* Right Column: The Shutdown & The Pivot */}
            <div className="space-y-16 lg:mt-32">
              <div className="relative p-10 bg-[#05070a]/5 border border-[#05070a]/5 rounded-[3rem] overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="text-[8rem] font-black leading-none select-none tracking-tighter text-[#05070a]/10">2020</span>
                </div>
                
                <div className="relative z-10 space-y-6">
                  <span className="text-[10px] font-black text-[#40E0D0] uppercase tracking-[0.3em]">03 / The Shutdown</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight">When the <br />music stopped.</h3>
                  <p className="text-[#05070a]/40 text-lg leading-relaxed font-light">
                    The global pandemic was an existential threat. In a matter of weeks, the entertainment industry went dark. Our stages were empty, our events were cancelled, and the world we built seemed to pause. But culture never stops—it just changes its medium.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <span className="text-[10px] font-black text-[#05070a]/20 uppercase tracking-[0.3em]">04 / The Transformation</span>
                <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight italic">
                  WE PIVOTED TO <span className="text-[#40E0D0]">COMMERCE</span>.
                </p>
                <p className="text-xl text-[#05070a]/50 leading-relaxed font-light">
                  We realized the skills that made us great at events—storytelling, branding, and community building—were exactly what businesses needed to survive in a digital-first world. We evolved into a <span className="text-[#05070a] font-bold italic">Lifestyle Trading House</span>, bridging the gap between high-potential Korean brands and global commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-12 flex flex-col items-center text-center">
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#40E0D0] to-transparent mb-12"></div>
            <p className="text-[#05070a]/30 text-xs font-black uppercase tracking-[0.5em] max-w-xl">
              Today, FAME stands as a testament to resilience, proving that when culture and commerce collide with purpose, the possibilities are infinite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeJourney;