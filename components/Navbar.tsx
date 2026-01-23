import React, { useState } from 'react';

interface NavbarProps { 
  scrolled: boolean; 
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Introduction', href: '#about' },
    { name: '4 Pillars', href: '#pillars' },
    { name: 'Commerce', href: '#commerce' },
    { name: 'Our History', href: '#history' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-[#05070a]/95 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
               <span className="font-black text-lg sm:text-xl tracking-tighter uppercase leading-none">
                 FAME <span className="text-[#40E0D0]">ENTERTAINMENT</span>
               </span>
               <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mt-1 leading-none">GROUP</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black tracking-[0.2em] uppercase text-white/60">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-center">
              <button 
                onClick={onContactClick}
                className="bg-[#40E0D0] hover:bg-[#6df0e3] text-[#05070a] px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#40E0D0]/20 flex items-center gap-3"
              >
                Get In Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#05070a] transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter hover:text-[#40E0D0] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsOpen(false); onContactClick(); }}
            className="mt-8 bg-[#40E0D0] text-[#05070a] px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;