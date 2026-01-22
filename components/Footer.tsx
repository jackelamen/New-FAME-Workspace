
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] border-t border-white/5 py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-10">
              {/* Logo Text Only - Removed 'F' Icon Box per instructions */}
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase leading-none">
                  FAME <span className="text-orange-500">ENTERTAINMENT</span>
                </span>
                <span className="text-xs font-bold text-white/40 tracking-[0.3em] uppercase mt-1">GROUP</span>
              </div>
            </div>
            <p className="text-white/30 text-xl leading-relaxed mb-10 font-light">
              FAME Entertainment Group is a team of creators and business partners helping artists and brands reach their full potential.
            </p>
            <div className="flex gap-10">
              {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-black tracking-widest text-white/40 hover:text-[#ff4d00] transition-colors uppercase">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/50">
                <li><a href="#about" className="hover:text-[#ff4d00] transition-colors">Introduction</a></li>
                <li><a href="#pillars" className="hover:text-[#ff4d00] transition-colors">4 Pillars</a></li>
                <li><a href="#commerce" className="hover:text-[#ff4d00] transition-colors">Commerce</a></li>
                <li><a href="#history" className="hover:text-[#ff4d00] transition-colors">Our History</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">Say Hello</h4>
              <ul className="space-y-4 text-sm font-bold tracking-widest uppercase text-white/50">
                <li>Gyeonggi, KR</li>
                <li>Seoul, KR</li>
                <li>jack.lyons@fameentgroup.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">
          <p>© 2026 FAME ENTERTAINMENT GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
