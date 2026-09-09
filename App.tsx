import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Ticker from './components/Ticker.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Capabilities from './components/Capabilities.tsx';
import Story from './components/Story.tsx';
import ClosingCTA from './components/ClosingCTA.tsx';
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
    <div id="top" className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Navbar scrolled={scrolled} onContactClick={openContact} />

      <main>
        <Hero onContactClick={openContact} />

        <Ticker />

        <section id="services" className="py-24 md:py-32">
          <div className="max-w-[76rem] mx-auto px-6 lg:px-10">
            <Services onContactClick={openContact} />
          </div>
        </section>

        {/* The one dark block on the page. The brand turquoise only reads
            properly against it, so the process lives here. */}
        <section id="process" className="py-24 md:py-32 bg-ink">
          <div className="max-w-[76rem] mx-auto px-6 lg:px-10">
            <Process />
          </div>
        </section>

        <section id="capabilities" className="py-24 md:py-32">
          <div className="max-w-[76rem] mx-auto px-6 lg:px-10">
            <Capabilities />
          </div>
        </section>

        <section id="story" className="py-24 md:py-32 bg-haze">
          <div className="max-w-[76rem] mx-auto px-6 lg:px-10">
            <Story />
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32">
          <ClosingCTA onContactClick={openContact} />
        </section>
      </main>

      <Footer />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default App;
