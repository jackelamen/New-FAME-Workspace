import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Disciplines from './components/Disciplines.tsx';
import Overlap from './components/Overlap.tsx';
import Work from './components/Work.tsx';
import Studio from './components/Studio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ContactModal from './components/ContactModal.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = contactOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [contactOpen]);

  const openContact = () => setContactOpen(true);

  return (
    <div id="top" className="min-h-screen bg-void text-cream overflow-x-hidden">
      <Navbar scrolled={scrolled} onContactClick={openContact} />

      <main>
        <Hero onContactClick={openContact} />

        <section id="disciplines" className="py-24 md:py-36">
          <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
            <Disciplines />
          </div>
        </section>

        {/* Recessed ground so the strategic statement sits apart from the
            list above it without needing a border or a card. */}
        <section className="py-28 md:py-44 bg-pitch">
          <Overlap />
        </section>

        <section id="work" className="py-24 md:py-36">
          <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
            <Work />
          </div>
        </section>

        <section id="studio" className="py-24 md:py-36 bg-pitch">
          <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
            <Studio />
          </div>
        </section>

        <section id="contact" className="py-28 md:py-44">
          <Contact onContactClick={openContact} />
        </section>
      </main>

      <Footer />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default App;
