
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Ticker from './components/Ticker.tsx';
import CombinedStory from './components/CombinedStory.tsx';
import StrategicPivot from './components/StrategicPivot.tsx';
import Pillars from './components/Pillars.tsx';
import CommerceEngine from './components/CommerceEngine.tsx';
import Ecosystem from './components/Ecosystem.tsx';
import PortfolioShowcase from './components/PortfolioShowcase.tsx';
import Footer from './components/Footer.tsx';
import ContactModal from './components/ContactModal.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContact = () => {
    setIsContactModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeContact = () => {
    setIsContactModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white overflow-x-hidden selection:bg-orange-500">
      <Navbar scrolled={scrolled} onContactClick={openContact} />
      
      <main className="w-full">
        <section id="hero">
          <Hero />
        </section>

        <Ticker />

        <section id="about" className="py-20 md:py-32 bg-[#05070a] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <StrategicPivot />
          </div>
        </section>

        <section id="pillars" className="py-16 md:py-24 bg-[#0a0c10] relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Pillars />
          </div>
        </section>

        <section id="commerce" className="bg-[#05070a] relative">
           <CommerceEngine onContactClick={openContact} />
        </section>

        <section id="ecosystem" className="py-16 md:py-24 bg-[#05070a] relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Ecosystem />
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24 bg-[#05070a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <PortfolioShowcase />
          </div>
        </section>

        <section id="history" className="relative">
          <div className="h-24 md:h-32 bg-gradient-to-b from-[#05070a] to-[#fdfcfb]"></div>
          <CombinedStory />
        </section>
      </main>

      <Footer />
      
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
};

export default App;
