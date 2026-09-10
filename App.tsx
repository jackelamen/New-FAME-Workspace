import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
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

/* The page is an argument, read top to bottom: their problem, the idea, who it
   is for, what they get, what we ask, who it is not for, how to join. Sections
   are ordered to answer objections in the order they occur to a reader. */
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

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
    <div id="top" className="min-h-screen bg-void text-cream overflow-x-hidden">
      <Navbar scrolled={scrolled} onApply={openApply} />

      <main>
        <Hero onApply={openApply} />

        <section id="why" className="py-28 md:py-40">
          <Tension />
        </section>

        <section id="idea">
          <Idea />
        </section>

        <section id="members" className="py-28 md:py-40">
          <Members />
        </section>

        <section id="offer" className="py-28 md:py-40 bg-pitch">
          <Offer />
        </section>

        <section id="fit" className="py-28 md:py-40">
          <Fit />
        </section>

        <section id="joining" className="py-28 md:py-40 bg-pitch">
          <Joining />
        </section>

        <section id="apply">
          <Invitation onApply={openApply} />
        </section>
      </main>

      <Footer />

      <ContactModal isOpen={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  );
};

export default App;
