import React from 'react';

interface CommerceEngineProps {
  onContactClick: () => void;
}

const CommerceEngine: React.FC<CommerceEngineProps> = ({ onContactClick }) => {
  const partnerTypes = [
    { label: 'Smart Apps', desc: 'Software to help you scale' },
    { label: 'Better Data', desc: 'Understanding your customers' },
    { label: 'Online Shops', desc: 'Selling your products anywhere' },
    { label: 'Deliveries', desc: 'Getting products to your fans' }
  ];

  const salesMarketingStrengths = [
    'Strategic Branding',
    'Market Entry',
    'Retail Growth'
  ];

  return (
    <div className="relative pt-24 md:pt-32 pb-0 overflow-hidden bg-[#fdfcfb]">
      {/* Background Technical Elements - Reduced opacity for cleanliness */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1a1a1a08_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#40E0D0]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#40E0D0]"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#40E0D0]">The Way We Grow</span>
            </div>
            <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-[#1a1a1a]">
              DRIVING <br />
              <span className="text-outline">COMMERCE</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#1a1a1a]/70 font-normal leading-relaxed">
              We don’t just talk; we help you <span className="text-[#1a1a1a] font-bold italic">reach your customers.</span> From physical shops to online stores, we make sure you have everything you need to succeed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Brand Acceleration Side */}
          <div className="group bg-gradient-to-b from-[#1a1a1a]/[0.03] to-transparent p-10 md:p-16 rounded-[3rem] border border-[#1a1a1a]/5 hover:border-[#40E0D0]/20 transition-all duration-700">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a]">Better <br />Business</h3>
              <div className="w-12 h-12 bg-[#1a1a1a]/5 rounded-xl flex items-center justify-center group-hover:bg-[#40E0D0] transition-colors">
                 <svg className="w-6 h-6 text-[#1a1a1a] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
            </div>
            <p className="text-[#1a1a1a]/70 text-lg md:text-xl font-normal mb-12 leading-relaxed">
              We help premium food and lifestyle brands get into the best stores and online shops. We handle the hard work of <span className="text-[#1a1a1a] font-bold italic">sales and marketing</span> so you can focus on creating.
            </p>
            <div className="space-y-4">
              {salesMarketingStrengths.map((item) => (
                <div key={item} className="flex items-center gap-4 py-4 border-b border-[#1a1a1a]/5">
                  <div className="w-2 h-2 rounded-full bg-[#40E0D0] shadow-[0_0_10px_rgba(64,224,208,0.5)]"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Tech Side */}
          <div className="group bg-[#1a1a1a]/[0.02] p-10 md:p-16 rounded-[3rem] border border-[#1a1a1a]/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div>
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a]">Smart <br />Tools</h3>
              </div>
              <p className="text-[#1a1a1a]/70 text-lg md:text-xl font-normal mb-12 leading-relaxed">
                We partner with smart technology companies to bring their tools to new markets. We help you find the best ways to use software to grow your brand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {partnerTypes.map((partner) => (
                <div key={partner.label} className="p-6 bg-white rounded-2xl border border-[#1a1a1a]/5 hover:shadow-lg hover:shadow-[#1a1a1a]/5 transition-all cursor-default">
                  <span className="block text-[10px] font-black text-[#40E0D0] uppercase tracking-widest mb-2">{partner.label}</span>
                  <span className="text-[11px] text-[#1a1a1a]/70 uppercase font-bold">{partner.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impactful Bottom Bar */}
        <div className="mt-16 md:mt-24 p-8 md:p-12 glass-card rounded-[2.5rem] border border-[#1a1a1a]/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black uppercase tracking-tight mb-2 text-[#1a1a1a]">Ready to Grow your Business?</h4>
            <p className="text-[#1a1a1a]/60 uppercase text-[10px] tracking-[0.4em] font-bold">Ask us about how we can work together</p>
          </div>
          <button 
            onClick={onContactClick}
            className="w-full md:w-auto bg-[#1a1a1a] text-white px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#40E0D0] hover:text-[#1a1a1a] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#1a1a1a]/10"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommerceEngine;