import React from 'react';

const StrategicPivot: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="relative">
          <div className="inline-flex items-center gap-4 text-[#40E0D0] text-[11px] font-black uppercase tracking-[0.5em] mb-12">
            <div className="w-12 h-[1px] bg-[#40E0D0]"></div>
            INTRODUCTION
          </div>
          
          <h2 className="text-6xl sm:text-8xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] mb-16 text-[#05070a]">
            CREATIVE <br />
            <span className="text-outline italic">COMMERCE</span>
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-8">
            <p className="text-[#05070a]/90 text-2xl md:text-3xl font-light leading-snug">
              Headquartered in <span className="text-[#05070a] font-black underline decoration-[#40E0D0] decoration-2 underline-offset-8">Seoul, South Korea,</span> FAME Entertainment Group operates as a specialized lifestyle trading house and creative agency.
            </p>
            <p className="text-[#05070a]/50 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              We focus on the intersection of culture and commerce. By bridging these two worlds, we provide a foundation for brands and artists to grow beyond their borders and build lasting influence in new markets.
            </p>
          </div>

          <div className="space-y-8 border-l border-[#05070a]/10 pl-0 lg:pl-12">
            <p className="text-[#05070a]/90 text-2xl md:text-3xl font-light leading-snug">
              With a dedicated team spanning across <span className="text-[#05070a] font-black">Asia and the United States</span>, we provide a truly global perspective for every project we touch.
            </p>
            <p className="text-[#05070a]/50 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Our diverse background allows us to <span className="text-[#05070a] font-bold">bridge cultural gaps</span> through authentic storytelling. We combine creative vision with practical expertise to turn high-potential ideas into celebrated cultural icons through shared experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['Seoul', 'Tokyo', 'Los Angeles', 'New York'].map((location) => (
                <div key={location} className="px-5 py-2.5 bg-[#05070a]/5 rounded-full border border-[#05070a]/5 hover:border-[#40E0D0]/50 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#05070a]/60">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPivot;