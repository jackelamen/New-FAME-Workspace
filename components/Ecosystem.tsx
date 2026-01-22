
import React from 'react';

const Ecosystem: React.FC = () => {
  const steps = [
    { title: 'Find', desc: 'Looking for great products and artists.' },
    { title: 'Build', desc: 'Making brands look their best.' },
    { title: 'Share', desc: 'Showing the world what you do.' },
    { title: 'Meet', desc: 'Bringing everyone together at events.' }
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">How We <br />Work Together</h2>
          <p className="text-white/40 text-xl font-light leading-relaxed mb-10">
            We follow a simple plan where creative work helps business grow, and that growth allows us to support even more amazing artists.
          </p>
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-2xl font-black text-white/10 group-hover:text-orange-500 transition-colors">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm max-w-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <div className="aspect-square glass-card rounded-full border border-white/5 flex items-center justify-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-teal-500/5 opacity-50"></div>
            <div className="text-center relative z-10 p-12">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Partners for Growth</h3>
              <p className="text-white/30 text-sm uppercase tracking-[0.3em] font-bold">Our 2026 Vision</p>
            </div>
            {/* Animated Ring */}
            <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
