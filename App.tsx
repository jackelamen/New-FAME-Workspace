import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Grid from './components/Grid.tsx';
import Hero from './components/Hero.tsx';
import Tension from './components/Tension.tsx';
import Idea from './components/Idea.tsx';
import Members from './components/Members.tsx';
import Offer from './components/Offer.tsx';
import Fit from './components/Fit.tsx';
import Joining from './components/Joining.tsx';
import Invitation from './components/Invitation.tsx';
import Footer from './components/Footer.tsx';
import ContactModal from './components/ContactModal.tsx';
import { useSmoothScroll } from './lib/motion.ts';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = applyOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [applyOpen]);

  const openApply = () => setApplyOpen(true);

  return (
    <div id="top" className="relative min-h-screen bg-void text-cream">
      <Grid />

      <div className="relative z-10">
        <Navbar scrolled={scrolled} onApply={openApply} />

        <main>
          <Hero onApply={openApply} />

          <section id="why" className="py-36 md:py-56"><Tension /></section>
          <section id="idea"><Idea /></section>
          <section id="members" className="py-36 md:py-56"><Members /></section>
          <section id="offer"><Offer /></section>
          <section id="fit" className="py-36 md:py-56"><Fit /></section>
          <section id="joining" className="py-36 md:py-56"><Joining /></section>
          <section id="apply"><Invitation onApply={openApply} /></section>
        </main>

        <Footer />
      </div>

      <ContactModal isOpen={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  );
};

export default App;
